import { test, expect } from "@playwright/test";

test.describe("AuthenticationForm Component", () => {
  test("should render the login form with all elements", async ({ page }) => {
    await page.goto("/");

    // Check if the heading is displayed
    await expect(page.locator("h1")).toHaveText("Welcome!");

    // Check if the subheading is displayed (target the specific text)
    await expect(page.getByText("Enter details to login.")).toBeVisible();

    // Check if the email and password inputs are rendered
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[placeholder="Password"]')).toBeVisible();

    // Specifically target the "Forgot Password?" paragraph
    await expect(page.getByText("Forgot Password?")).toBeVisible();

    // Check if the Login button is present
    const loginButton = page.locator("button", { hasText: "LOG IN" });
    await expect(loginButton).toBeVisible();
  });

  test("should toggle password visibility when the show/hide password button is clicked", async ({ page }) => {
    await page.goto("/");

    // Initial state: password should be visible (showPassword = true)
    const passwordInput = page.locator('input[type="text"]');
    await expect(passwordInput).toBeVisible();

    // Simulate clicking the toggle button to hide the password
    const toggleButton = page.getByText("Close");
    await toggleButton.click();

    // Now password input should be of type 'password'
    await expect(page.locator('input[type="password"]')).toBeVisible();

    // Click again to show the password
    await page.getByText("Show").click();
    await expect(passwordInput).toBeVisible();
  });

  test("should navigate to /users after clicking the login button", async ({ page }) => {
    await page.goto("/");

    // Simulate clicking the login button
    const loginButton = page.locator("button", { hasText: "LOG IN" });
    await loginButton.click();

    // Verify the navigation
    await expect(page).toHaveURL("/users");
  });

  test("should allow user to enter email and password", async ({ page }) => {
    await page.goto("/");

    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[placeholder="Password"]');

    // Simulate typing into the email and password inputs
    await emailInput.fill("test@example.com");
    await passwordInput.fill("password123");

    // Verify that the inputs have the correct values
    await expect(emailInput).toHaveValue("test@example.com");
    await expect(passwordInput).toHaveValue("password123");
  });
});
