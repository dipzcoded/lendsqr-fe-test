# Project lendsqr-fe-test

A brief description of your project.

## Table of Contents

1. [Overview](#overview)
2. [Technologies](#technologies)
3. [Setup and Installation](#setup-and-installation)
4. [Development Process](#development-process)
5. [API Information](#api-information)
6. [Testing](#testing)
7. [Contributing](#contributing)
8. [License](#license)

---

## Overview

This project is a React application built using Vite for development, bundled with TypeScript for type safety and SCSS for custom styling. The app leverages Shadcn UI components, which are styled with Tailwind CSS. Data fetching is handled by Tanstack Query, using `https://jsonsilo.com/` as the API endpoint for JSON data. The project includes comprehensive unit tests with Playwright, ensuring both positive and negative scenarios are covered.

## Technologies

- **Vite**: Fast build tool for frontend development
- **React**: Frontend library for building user interfaces
- **TypeScript**: Strongly typed programming language that builds on JavaScript
- **Shadcn**: Pre-built UI component library using Tailwind CSS for styling
- **SCSS**: CSS preprocessor for more readable and maintainable styles
- **Tailwind CSS**: Utility-first CSS framework used by Shadcn for styling
- **Tanstack Query**: Data-fetching and state management solution
- **Playwright**: End-to-end testing framework for ensuring application quality
- **JSONSilo**: External service used to store the JSON data for the API
- **json-generator.com**: Used to generate mock data

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dipzcoded/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Run tests**:
   ```bash
   npx playwright test --ui
   ```

## Development Process

### Visual Fidelity

The app ensures a **100% representation of the Figma design**, with pixel-perfect UI. All elements and components have been crafted to maintain high visual fidelity across different screen sizes. i prioritized consistency between design and implementation.

### Code Quality

The codebase is structured and written following best practices for **scalability**, **readability**, and **maintainability**. TypeScript ensures type safety, preventing many common runtime errors during development.

- **Variable and Function Naming**: Adheres to a clear, consistent, and descriptive naming convention.
- **Semantic Path and Resource Naming**: Resource names and file paths are logical and easy to understand.
- **Design and Architecture**: Components are modular and reusable, maintaining separation of concerns.

### Design Responsiveness

The design has been optimized for various media types, ensuring full **responsiveness**. SCSS and Tailwind CSS are used to apply responsive layouts and breakpoints to provide a seamless experience across devices.

## API Information

This application fetches data from `https://jsonsilo.com/`. The JSON data is generated via `json-generator.com` and uploaded to JSONSilo to simulate API responses.

### Example API Call

```typescript
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/services/users.service";

export async function getAllUsers() {
  const response = (
    await axios.get<User[]>(
      "https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93"
    )
  ).data;
  return response;
}

export function useGetAllUsers() {
  const {
    isPending: isLoadingUsers,
    error: errorUsers,
    data: users,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return {
    isLoadingUsers,
    errorUsers,
    users,
    refetch,
  };
}
```

## Testing

Unit testing is performed using **Playwright**. All important components and functionalities are tested for both positive and negative scenarios to ensure robust and reliable code.

To run tests:

```bash
npm run test
```

Tests are structured to validate:

- Component rendering
- UI interactions
- API calls (mocked)
- Edge cases and error handling

## GitHub Documentation

- **Commit History**: All commits follow a clear and descriptive format, explaining the purpose of changes. Commits are atomic and logically grouped for easy tracking.
- **README Documentation**: This document serves as a guide for developers to understand project structure, setup, and usage.
- **Branching Strategy**: The project follows a simple branching strategy with feature branches merging into `main` via pull requests.

## Contributing

Contributions are welcome! Please follow the standard GitHub flow:

1. Fork the repository
2. Create a feature branch
3. Open a pull request with a clear description of changes

---

## License

This project is licensed under the MIT License.
