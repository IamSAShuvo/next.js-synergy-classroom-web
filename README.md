**Title:** Project Setup: Synergy Classroom

**Description:** Set up the development environment for the Synergy Classroom project, including creating a Next.js application with TypeScript, ESLint, Tailwind CSS, and App Routing. Integrate Redux Toolkit for state management, configure Visual Studio Code, set up Chrome for live testing, ensure Postman is ready for API testing, and include Material UI for component development. Additionally, provide instructions on how to clone the project from GitHub and run the Next.js application locally.

**Tasks:**

1.  **Install Node.js:**

    - Download and install Node.js from the official website: [Node.js](https://nodejs.org/).
    - Verify installation:

      - node -v
      - npm -v

2.  **Initialize Next.js Application with TypeScript, ESLint, Tailwind CSS, and App Routing:**

    - Run the following commands to create a new Next.js project with the specified configurations:

      - npx create-next-app@latest synergy-classroom --typescript --eslint --tailwind
      - cd synergy-classroom
      - npm run dev

    - The development server should be running at [http://localhost:3000](http://localhost:3000).

3.  **Install Redux Toolkit:**

    - Install Redux Toolkit and React-Redux for state management:

      - npm install @reduxjs/toolkit react-redux

4.  **Install Material UI:**

    - Add Material UI and necessary dependencies for component development:

      - npm install @mui/material @emotion/react @emotion/styled
      - npm install @emotion/react @emotion/styled

5.  **Configure Visual Studio Code:**

    - Install Visual Studio Code from the official website: [VS Code](https://code.visualstudio.com/).
    - Install recommended extensions:

      - ESLint
      - Prettier - Code formatter
      - Tailwind CSS IntelliSense
      - Redux DevTools

6.  **Setup Chrome for Live Testing:**

    - Install **React Developer Tools** and **Redux DevTools** from the Chrome Web Store.
    - Use **Chrome DevTools** for inspecting and testing components during development.

7.  **Setup Postman for API Testing:**

    - Download and install Postman from the official website: [Postman](https://www.postman.com/).
    - Create a basic collection and test API endpoints.

8.  **Git Repository Setup:**

    - Initialize a Git repository and make an initial commit:

      - git init
      - git add .
      - git commit -m "Initial commit: Setup project environment"

    - Connect to a remote repository and push the initial commit:

      - git remote add origin
      - git push -u origin main

9.  **Clone Project from GitHub:**

    - To clone the project from GitHub, follow these steps:

      - Open a terminal and navigate to the directory where you want to clone the project.
      - git clone [https://github.com/IamSAShuvo/next.js-synergy-classroom-web](https://github.com/IamSAShuvo/next.js-synergy-classroom-web)
      - cd synergy-classroom

10. **Run the Next.js Project:**

    - npm install

    - npm run dev

    - The application should now be running at [http://localhost:3000](http://localhost:3000).

11. **Verify Setup:**

    - Ensure the following are correctly set up:

      - Next.js with TypeScript, ESLint, Tailwind CSS, and App Routing.

      - Redux Toolkit for state management.

      - Material UI for component development.

      - VS Code, Chrome, and Postman are configured for development and testing.
