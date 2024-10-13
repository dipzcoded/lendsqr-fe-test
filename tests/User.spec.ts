import { test, expect, Page } from "@playwright/test";
import { parseISO, format } from "date-fns";
const mockUsers = [
  {
    id: "6708e8832a8f2129866e0d3e",
    organization: "Kegular",
    userName: "ChristianSims",
    email: "christiansims@kegular.com",
    phoneNumber: "+234 (970) 538-2384",
    date: "2022-04-13T01:46:49-01:00",
    status: "Inactive",
    personalInformation: {
      fullName: "Cherry Kane",
      phoneNumber: "+234 (902) 543-3600",
      emailAddress: "cherrykane@kegular.com",
      bvn: 99999999999,
      gender: "Female",
      maritalStatus: "Married",
      children: 5,
      typeOfResidence: "Apartment",
    },
    educationEmployment: {
      levelOfEducation: "Associate",
      employmentStatus: "Student",
      sectorOfEmployment: "Retail",
      durationOfEmployment: "1 years",
      officeEmail: "cherrykane@kegular.com",
      monthlyIncomeRange: "₦600,001 - ₦800,000",
      loanRepayment: "₦150,000",
    },
    bankDetails: {
      bankName: "Eternis Bank",
      accountBalance: "₦1000000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/GoodwinHughes",
      twitter: "https://twitter.com/VangOneill",
      linkedin: "https://linkedin.com/in/CombsLove",
    },
    guarantor: {
      fullName: "Cash Kennedy",
      relationship: "Friend",
      phoneNumber: "+234 (955) 422-2916",
      email: "cashkennedy@eternis.com",
    },
  },
  {
    id: "6708e883b0dc0219119af347",
    organization: "Crustatia",
    userName: "LeonaCantrell",
    email: "leonacantrell@crustatia.com",
    phoneNumber: "+234 (875) 566-3826",
    date: "2020-05-14T06:50:14-01:00",
    status: "Active",
    personalInformation: {
      fullName: "Harper Bryant",
      phoneNumber: "+234 (903) 418-3609",
      emailAddress: "harperbryant@crustatia.com",
      bvn: 10000000000,
      gender: "Non-binary",
      maritalStatus: "Divorced",
      children: 0,
      typeOfResidence: "Condo",
    },
    educationEmployment: {
      levelOfEducation: "High School",
      employmentStatus: "Student",
      sectorOfEmployment: "Retail",
      durationOfEmployment: "30 years",
      officeEmail: "harperbryant@crustatia.com",
      monthlyIncomeRange: "₦400,001 - ₦600,000",
      loanRepayment: "₦100,000",
    },
    bankDetails: {
      bankName: "Magnina Bank",
      accountBalance: "₦1000000",
      accountNumber: 9999999999,
    },
    socials: {
      facebook: "https://facebook.com/AbbyGilbert",
      twitter: "https://twitter.com/FranklinWolfe",
      linkedin: "https://linkedin.com/in/SpenceWagner",
    },
    guarantor: {
      fullName: "Dunlap Parrish",
      relationship: "Friend",
      phoneNumber: "+234 (971) 487-2830",
      email: "dunlapparrish@magnina.com",
    },
  },
];

test.describe("User Component", () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();

    // Mock the API call
    await page.route(
      "https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93",
      (route) => {
        route.fulfill({
          status: 200,
          body: JSON.stringify(mockUsers),
        });
      }
    );

    // Navigate to the page
    await page.goto("/users");
  });

  test("renders user summary data", async () => {
    await expect(page.locator("data-testid=user-summary")).toBeVisible();
  });

  test("renders data table with user information", async () => {
    const table = page.locator("data-testid=user-table");
    await expect(table).toBeVisible();

    // Check if the table contains the correct number of rows
    const rows = await table.locator("tbody tr").count();
    expect(rows).toBe(mockUsers.length);

    // Check if the first user's data is correctly displayed
    const firstRow = table.locator("tbody tr").first();
    await expect(firstRow.locator("td:nth-child(1)")).toHaveText(
      mockUsers[0].organization
    );
    await expect(firstRow.locator("td:nth-child(2)")).toHaveText(
      mockUsers[0].userName
    );
    await expect(firstRow.locator("td:nth-child(3)")).toHaveText(
      mockUsers[0].email
    );
    await expect(firstRow.locator("td:nth-child(4)")).toHaveText(
      mockUsers[0].phoneNumber
    );
    await expect(firstRow.locator("td:nth-child(5)")).toHaveText(
      format(parseISO(mockUsers[0].date), "MMMM dd, yyyy hh:mm a")
    );
    await expect(firstRow.locator("td:nth-child(6)")).toHaveText(
      mockUsers[0].status
    );
  });

  test("displays loader while fetching data", async () => {
    // Intercept the API call and delay the response
    await page.route(
      "https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93",
      async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await route.fulfill({ status: 200, body: JSON.stringify(mockUsers) });
      }
    );

    // Reload the page to trigger the delayed API call
    await page.reload();

    // Check if the loader is visible
    await expect(page.locator("data-testid=loader")).toBeVisible();

    // Wait for the loader to disappear
    await expect(page.locator("data-testid=loader")).toBeHidden();
  });

  test("displays error message on API failure", async () => {
    // Mock an API error
    await page.route(
      "https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93",
      (route) => {
        route.fulfill({
          status: 500,
          body: JSON.stringify({ message: "Internal Server Error" }),
        });
      }
    );

    // Reload the page to trigger the error
    await page.reload();

    // Check if the loader is visible
    await expect(page.locator("data-testid=loader")).toBeVisible();

    // Wait for the loader to disappear
    //  await expect(page.locator('data-testid=loader')).toBeHidden();

    // Check if the error message is displayed
    // const errorMessage = page.locator('text="Having issues fetching users"');
    // await expect(errorMessage).toBeVisible();
    const errorMessage = page.locator("data-testid=error-message");
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage.locator("span")).toHaveText(
      "Having issues fetching users"
    );

    // Check if the refetch button is present
    const refetchButton = page.locator('text="refetch"');
    await expect(refetchButton).toBeVisible();

    // Click the refetch button and verify that the API is called again
    let apiCalled = false;
    await page.route(
      "https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93",
      (route) => {
        apiCalled = true;
        route.fulfill({ status: 200, body: JSON.stringify(mockUsers) });
      }
    );

    await refetchButton.click();
    expect(apiCalled).toBe(true);
  });
});

test.describe("UserSummaryData Component", () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("/users"); // Adjust this URL to match your app's structure
  });

  test("renders UserSummaryData component", async () => {
    const userSummary = page.locator("data-testid=user-summary");
    await expect(userSummary).toBeVisible();
  });

  test("displays correct title", async () => {
    const title = page.locator("data-testid=summary-title");
    await expect(title).toHaveText("Users");
  });

  test("displays correct information in summary cards", async () => {
    const cardData = [
      { title: "USERS", value: "2,453" },
      { title: "Active Users", value: "2,453" },
      { title: "Users with Loans", value: "12,453" },
      { title: "Users with Savings", value: "102,453" },
    ];

    for (let i = 0; i < cardData.length; i++) {
      const card = page.locator(`data-testid=summary-card-${i}`);
      await expect(card.locator(`data-testid=card-title-${i}`)).toHaveText(
        cardData[i].title
      );
      await expect(card.locator(`data-testid=card-value-${i}`)).toHaveText(
        cardData[i].value
      );
    }
  });

  test("cards contain icons", async () => {
    const cards = page.locator(
      'data-testid=summary-grid > [data-testid^="summary-card-"]'
    );
    const count = await cards.count();

    for (let i = 0; i < count; i++) {
      const icon = page.locator(`data-testid=card-icon-${i}`);
      await expect(icon).toBeVisible();
    }
  });
});
