**Title:** Project Setup: Synergy Classroom

**Description:** Set up the development environment for the Synergy Classroom project, including creating a Next.js application with TypeScript, ESLint, Tailwind CSS, and App Routing. Integrate Redux Toolkit for state management, configure Visual Studio Code, set up Chrome for live testing, and ensure Postman is ready for API testing.

**Tasks:**

1.  **Install Node.js:**

    - Download and install Node.js from the official website: [Node.js](https://nodejs.org/)
    - bashCopy codenode -vnpm -v

2.  **Initialize Next.js Application with TypeScript, ESLint, Tailwind CSS, and App Routing:**

    - bashCopy codenpx create-next-app@latest synergy-classroom --typescript --eslint --tailwind --experimental-appcd synergy-classroomnpm run dev
    - The development server should be running at [http://localhost:3000](http://localhost:3000).

3.  **Install Redux Toolkit:**

    - bashCopy codenpm install @reduxjs/toolkit react-redux

4.  **Configure Visual Studio Code:**

    - Install Visual Studio Code from the official website: [VS Code](https://code.visualstudio.com/)
    - Install recommended extensions:

      - ESLint
      - Prettier - Code formatter
      - Tailwind CSS IntelliSense
      - Redux DevTools

5.  **Setup Chrome for Live Testing:**

    - Install **React Developer Tools** and **Redux DevTools** from the Chrome Web Store.
    - Use **Chrome DevTools** for inspecting and testing components during development.

6.  **Setup Postman for API Testing:**

    - Download and install Postman from the official website: Postman
    - Create a basic collection and test API endpoints.

7.  **Git Repository Setup:**

    - bashCopy codegit initgit add .git commit -m "Initial commit: Setup project environment"
    - bashCopy codegit remote add origin git push -u origin main

8.  **Verify Setup:**

    - Ensure that:

      - Next.js with TypeScript, ESLint, Tailwind CSS, and App Routing is correctly set up.
      - Redux Toolkit is installed and ready for state management.
      - VS Code, Chrome, and Postman are configured for development and testing.
