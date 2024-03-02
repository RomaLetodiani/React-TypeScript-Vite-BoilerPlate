# [TypeScript React Vite (SWC) Boilerplate](https://github.com/RomaLetodiani/React-TypeScript-Vite-BoilerPlate)

This boilerplate offers a solid foundation for crafting modern web applications with TypeScript, React, and Vite. 
It streamlines the initial setup process, allowing developers to dive straight into coding without the hassle of extensive project configuration.

## Introduction

Welcome to the TypeScript React Vite (SWC) Boilerplate! 
Below, you'll find a curated list of libraries and tools commonly used in contemporary web development. 
These resources cover a range of functionalities, including routing, state management, form management, 
design approaches, UI components, animations, data validation, testing, and utilities. 
Feel free to explore and integrate them into your projects as needed.

## Features

- **TypeScript**: Utilize the power of TypeScript for static typing and improved developer experience.
- **React**: Build user interfaces with React, a popular JavaScript library for building UI components.
- **Vite**: Enjoy fast development server and optimized production builds with Vite, a modern build tool.
- **Minimal Configuration**: Get started quickly with minimal configuration required.

## File Structure

```
project-root/
├── public/                   # Public directory
│   └── vite.svg              # SVG favicon 
├── src/                      # Source code directory
│   ├── assets/               # Assets directory
│   │   ├── fonts/            # Fonts directory
│   │   └── images/           # Images directory
│   ├── components/           # Components directory
│   │   └── UI/               # UI components directory
│   │       ├── Button/       # Button component
│   │       └── Input/        # Input component
│   ├── Layout/               # Layout directory
│   │   ├── Header/           # Header component
│   │   └── Footer/           # Footer component
│   ├── hooks/                # Custom hooks directory
│   │   └── useStorage.ts     # useStorage hook
│   ├── pages/                # Pages directory
│   │   └── Home/             # Home page
│   ├── services/             # Services directory
│   │   └── auth/             # Auth service
│   ├── utils/                # Utilities directory
│   │   ├── helpers/          # Helpers
│   │   └── validation/       # Validation
│   ├── App.tsx               # Main application component
│   ├── index.css             # Global CSS styles
│   ├── main.tsx              # Entry point of the application
│   └── vite-env.d.ts         # Vite environment typescript file
├── .env                      # Environment variables file
├── .eslintrc.cjs             # ESLint configuration file
├── .gitignore                # Git ignore file
├── .prettierrc               # Prettier configuration file
├── .prettierignore           # Prettier ignore file
├── index.html                # HTML file
├── package-lock.json         # Package lock file
├── package.json              # Package JSON file
├── readme.md                 # Readme file
├── tsconfig.json             # TypeScript configuration file
├── tsconfig.node.json        # TypeScript Node configuration file
└── vite.config.ts            # Vite configuration file
```

- This structure separates different types of files/modules to keep the codebase organized and maintainable.
- Feel free to adjust it based on your project's specific requirements and preferences!

## Getting Started

To get started with this boilerplate, follow these steps:

1. **Clone the Repository**:
   - This command clones the repository from the specified URL (`https://github.com/RomaLetodiani/React-TypeScript-Vite-BoilerPlate.git`) to your local machine.

   ```bash
   git clone https://github.com/RomaLetodiani/React-TypeScript-Vite-BoilerPlate.git
   ```

2. **Navigate to the Project Directory**:
   - Change the current directory in your terminal to the newly cloned project directory.

   ```bash
   cd React-TypeScript-Vite-BoilerPlate
   ```

3. **Remove the Existing Git Repository**:
   - This command removes the existing Git repository (`.git` directory) from the project directory. It allows you to start with a clean Git history for your own project.

   ```bash
   rm .git
   ```

4. **Install Dependencies**:
   - Use npm to install the project dependencies specified in the `package.json` file.

   ```bash
   npm install
   ```

5. **Start the Development Server**:
   - This command starts the development server, allowing you to view and work on your project locally.

   ```bash
   npm run dev
   ```

## Production

To build the project for production, run the following command:

```bash
npm run build
```

This will create an optimized build of your application in the `dist` directory.

## Configuration

The project configuration files are located in the root directory:

- `vite.config.ts`: Vite configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `.eslintrc.cjs`: ESLint configuration file.
- `.prettierrc`: Prettier configuration file.

Feel free to modify these files to suit your project requirements.

# Libraries and Tools

<details>
<summary><h2>Routing and Navigation</h2></summary>
<ul>
  <li>
    <details>
      <summary><h3>React Router</h3></summary>
      
**Description:** React Router is a popular library for managing client-side routing in React applications. It allows you to define your application's navigation structure declaratively using components, making it easy to reason about and maintain. Key features include:
- Declarative Routing: Define routes using JSX, improving code readability and maintainability.
- Nested Routes: Organize complex applications with hierarchical navigation structures.
- Dynamic Routes: Create routes that respond to different URL patterns using parameters.
- Navigation Components: Utilize components like `Link` and `Navigate` for seamless navigation management.
- Server-Side Rendering Support: Enhance performance and SEO by rendering routes on the server.

<br/>

**Useful for:**

- Customization: React Router offers extensive customization options for tailoring navigation to your specific needs.
- Flexibility: Supports various routing scenarios, including nested routes, dynamic routes, and protected routes.
- Developer Experience: Provides clear and declarative syntax, making it easier to understand and write routing logic.
- Rapid Prototyping: Helps quickly build and iterate on different navigation flows.

<br/>

**Installation:**

```bash
npm install react-router-dom
```

**Tutorial:** [reactrouter.com/tutorial](https://reactrouter.com/en/main/start/tutorial)

**Official Documentation:** [reactrouter.com](https://reactrouter.com/en/main)

</details>
</li>
</ul>
</details>

<details>
<summary><h2>State Management</h2></summary>
<ul>
  <li>
    <details>
      <summary><h3>Redux</h3></summary>

**Description:** Redux is a predictable state container for JavaScript apps. It helps manage application state in a predictable way, making it easier to develop complex applications.

**Useful for:**

- Managing global state across your application.
- Separating state logic from UI components.
- Implementing middleware for advanced use cases.

<br/>

**Installation:**

```bash
npm install redux react-redux @types/react-redux
```

**Documentation:** [redux.js.org](https://redux.js.org/)

</details>
</li>

<li>
<details>
<summary><h3>Redux Toolkit</h3></summary>

**Description:** Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It includes utilities to simplify common Redux use cases and enables writing Redux logic with less boilerplate.

**Useful for:**

- Streamlining Redux setup and configuration.
- Encouraging best practices for Redux development.
- Enhancing developer productivity with built-in utilities.

<br/>

**Installation:**

```bash
npm install @reduxjs/toolkit
```

**Documentation:** [redux-toolkit.js.org](https://redux-toolkit.js.org/)

</details>
</li>

<li>
<details>
<summary><h3>React Query</h3></summary>

**Description:** React Query is a data-fetching library for React that helps you fetch, cache, and update data in your React applications. It provides tools for managing asynchronous data fetching with built-in caching, automatic refetching, and more.

**Useful for:**

- Simplifying data fetching and state management in React applications.
- Handling complex data-fetching scenarios with ease.
- Optimizing performance by caching data and minimizing unnecessary requests.

<br/>

**Installation:**

```bash
npm install react-query
```

**Documentation:** [react-query.tanstack.com](https://react-query.tanstack.com/)

</details>
</li>

<li>
<details>
<summary><h3>Zustand</h3></summary>

**Description:** Zustand is a small, fast, and scalable state management library for React. It provides a simple API for managing local component state with minimal boilerplate, making it ideal for small to medium-sized applications.

**Useful for:**

- Managing local component state with ease.
- Avoiding the complexities of Redux for smaller projects.
- Achieving predictable and efficient state management in React applications.

<br/>

**Installation:**

```bash
npm install zustand
```

**Documentation:** [zustand.surge.sh](https://zustand.surge.sh/)

</details>
</li>
</ul>
</details>

<details>
<summary><h2>Form Management</h2></summary>
<ul>
  <li>
    <details>
      <summary><h3>Formik</h3></summary>

**Description:** Formik is a popular form management library for React applications. It simplifies the process of building forms by handling form state, validation, and submission. With Formik, you can easily create robust and flexible forms with minimal boilerplate.

**Useful for:**

- Managing form state, including field values, touched state, and errors.
- Validation: Defining validation rules and displaying error messages.
- Handling form submission and asynchronous form submission with ease.

<br/>

**Installation:**

```bash
npm install formik
```

**Documentation:** [formik.org/docs](https://formik.org/docs)

</details>
</li>

<li>
<details>
<summary><h3>React Hook Form</h3></summary>

**Description:** React Hook Form is a lightweight and performant form library for React applications. It focuses on providing a simple API and optimal performance by minimizing re-renders. With React Hook Form, you can build fast and efficient forms with minimal overhead.

**Useful for:**

- Minimal re-renders: Achieving optimal performance by minimizing component re-renders.
- Built-in validation: Easily define validation rules using native HTML validation attributes.
- Reactivity: Leverage React's reactivity model for managing form state and re-renders.

<br/>

**Installation:**

```bash
npm install react-hook-form
```

**Documentation:** [react-hook-form.com](https://react-hook-form.com/get-started)

</details>
</li>
</ul>
</details>

<details>
<summary><h2>Design Approaches</h2></summary>
<ul>
  <li>
    <details>
      <summary><h3>Tailwind CSS</h3></summary>

**Description:** A utility-first CSS framework providing low-level CSS classes for styling your components directly in your HTML. Offers fine-grained control and rapid prototyping.
<br/>

**Useful for:**

- Projects requiring maximum customization and flexibility.
- Developers comfortable with HTML and CSS.
- Rapid prototyping and building custom designs.

<br/>

**Installation:**

```bash
npm install tailwindcss postcss autoprefixer
```

Follow instructions on: [tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

**Documentation:** [tailwindcss.com](https://tailwindcss.com/)

</details>
</li>

<li>
<details>
<summary><h3>Styled Components</h3></summary>

**Description:** A CSS-in-JS library allowing you to style components directly within your React components using JavaScript functions or objects. Enables component-specific styling and promotes code organization.

**Useful for:**

- Building reusable and maintainable components with -encapsulated styles.
- Leveraging dynamic styling based on props or state.
- Enforcing design consistency across components.

<br/>

**Installation:**

```bash
npm install styled-components
```

**Documentation:** [styled-components.com](https://styled-components.com/)

</details>
</li>
</ul>
</details>

<details>
<summary><h2>UI Components</h2></summary>
<ul>
<li>
<details>
<summary><h3>Headless UI</h3></summary>

**Description:** Unstyled, accessible UI components built for flexibility and control over styling (often used with Tailwind CSS).

**Useful for:**

- Projects requiring complete control over styling
- Developers comfortable with Tailwind CSS or custom styling approaches

<br/>

**Installation:**

```bash
npm install @headlessui/react
```

**Documentation:** [headlessui.com](https://headlessui.com/)

</details>
</li>

<li>
<details>
<summary><h3>Chakra UI</h3></summary>

**Description:** Accessible and modular component library with customizable themes and dark mode support.

**Useful for:**

- Rapid prototyping
- Building consistent UI experiences
- Leveraging pre-built components

<br/>

**Installation:**

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

Follow instructions on [chakra-ui.com/getting-started/vite-guide](https://chakra-ui.com/getting-started/vite-guide)

**Documentation:** [chakra-ui.com/docs](https://chakra-ui.com/docs)

</details>
</li>

<li>
<details>
<summary><h3>Material UI</h3></summary>

**Description:** Implementation of Google's Material Design principles for React components.
<br/>

**Useful for:**

- Adhering to Material Design guidelines
- Leveraging pre-built components based on Material Design

<br/>

**Installation:**

```bash
npm install @mui/material
```

**Documentation:** [mui.com](https://mui.com/material-ui/getting-started/)

</details>
</li>

<li>
<details>
<summary><h3>Ant Design</h3></summary>

**Description:** Enterprise-grade UI library with rich features and comprehensive component set.

**Useful for:**

- Complex applications requiring extensive components
- Adherence to a consistent design system

<br/>

**Installation:**

```bash
npm install @ant-design/react
```

**Documentation:** [ant.design](https://ant.design/docs/react/getting-started)

</details>
</li>
</ul>
</details>

<details>
<summary><h2>Animations</h2></summary>
<ul>
  <li>
    <details>
      <summary><h3>Framer Motion</h3></summary>

**Description:** Framer Motion is a production-ready motion library for React that makes it easy to create fluid animations and interactive UI components. It provides a simple API for defining animations using declarative syntax and supports features like keyframes, transitions, and gestures.

**Useful for:**

- Adding smooth animations to your React components and UI elements.
- Creating interactive and engaging user experiences with fluid motion.
- Implementing complex animations with ease, including variants and orchestration.

<br/>

**Installation:**

```bash
npm install framer-motion
```

**Documentation:** [framer.com](https://www.framer.com/api/motion/)

</details>
</li>
</ul>
</details>

<details>
<summary><h2>Data Validation</h2></summary>
<ul>
  <li>
    <details>
      <summary><h3>Yup</h3></summary>
      
**Description:** Yup is a JavaScript schema builder for value parsing and validation. It's schema-based and allows you to define validation rules for your data using a simple and expressive syntax.

**Useful for:**

- Form validation in React applications.
- Data validation in API requests.
- Ensuring data consistency and integrity.

<br/>

**Installation:**

```bash
npm install yup
```

**Documentation:** [github.com/jquense/yup](https://github.com/jquense/yup)

</details>
</li>

<li>
<details>
<summary><h3>Zod</h3></summary>
      
**Description:** Zod is a TypeScript-first schema declaration and validation library. It's designed to be fully compatible with TypeScript and provides a concise syntax for defining data schemas and validating data.

**Useful for:**

- Type-safe validation in TypeScript projects.
- Runtime validation in Node.js and browser environments.
- Working with complex data structures and schemas.

<br/>

**Installation:**

```bash
npm install zod
```

**Documentation:** [zod.dev](https://zod.dev/)

</details>
</li>
</ul>
</details>

<details>
<summary><h2>Testing</h2></summary>
<ul>
  <li>
    <details>
      <summary><h3>Jest</h3></summary>

**Description:** Jest is a delightful JavaScript testing framework with a focus on simplicity. It works with React out of the box and provides features such as snapshot testing, mocking, and code coverage.

**Useful for:**

- Writing unit tests for React components and utility functions.
- Performing snapshot testing to ensure UI consistency.
- Mocking dependencies to isolate tests.

<br/>

**Installation:**

```bash
npm install --save-dev jest @types/jest
```

**Documentation:** [jestjs.io](https://jestjs.io/)

</details>
</li>

<li>
<details>
<summary><h3>React Testing Library</h3></summary>

**Description:** React Testing Library is a simple and complete testing library for React that encourages good testing practices. It provides utilities to render React components into the DOM and interact with them.

**Useful for:**

- Writing tests that resemble how users interact with your application.
- Ensuring accessibility and inclusively by focusing on the DOM.

<br/>

**Installation:**

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

**Documentation:** [testing-library.com](https://testing-library.com/docs/react-testing-library/intro/)

</details>
</li>

<li>
<details>
<summary><h3>Cypress</h3></summary>

**Description:** Cypress is an end-to-end testing framework for web applications. It provides an elegant API for writing tests and running them in real browsers, enabling you to simulate user interactions and behavior.

**Useful for:**

- Writing and running end-to-end tests for your React application.
- Simulating user interactions such as clicking, typing, and navigating.
- Debugging and diagnosing issues with interactive test runs.

<br/>

**Installation:**

```bash
npm install --save-dev cypress @cypress/react
```

**Documentation:** [cypress.io](https://docs.cypress.io/)

</details>
</li>
</ul>
</details>

<details>
<summary><h2>Utilities</h2></summary>

<ul>
  <li>
    <details>
      <summary><h3>UUID</h3></summary>

**Description:** A library for generating unique identifiers (UUIDs).

**Installation:**

```bash
npm install uuid
```

**Documentation:** [npmjs.com/package/uuid](https://www.npmjs.com/package/uuid)

  </details>

  </li>

  <li>
    <details>
      <summary><h3>Lodash</h3></summary>

**Description:** A utility library that provides helper functions for common programming tasks like manipulating arrays, objects, and strings.

**Installation:**

```bash
npm install lodash
```

**Documentation:** [lodash.com/docs](https://lodash.com/docs)

  </details>

  </li>

  <li>
    <details>
      <summary><h3>Moment.js</h3></summary>

**Description:** A library for parsing, validating, manipulating, and formatting dates.

**Installation:**

```bash
npm install moment
```

**Documentation:** [momentjs.com/docs](https://momentjs.com/docs)

  </details>

  </li>

  <li>
    <details>
      <summary><h3>Axios</h3></summary>

**Description:** A promise-based HTTP client for making HTTP requests from the browser or Node.js.

**Installation:**

```bash
npm install axios
```

**Documentation:** [axios-http.com/docs](https://axios-http.com/docs)

</details>

</li>

  <li>
    <details>
      <summary><h3>React JWT</h3></summary>
      
**Description:** React JWT is a library for handling JSON Web Tokens (JWT) in React applications. It provides utilities for decoding, validating, and managing JWT tokens.

**Useful for:**

- Implementing token-based authentication in React applications.
- Managing JWT tokens received from a server.
- Handling authentication state and user sessions.

<br/>

**Installation:**

```bash
npm install react-jwt
```

**Documentation:** [npmjs.com/package/react-jwt](https://www.npmjs.com/package/react-jwt)

</details>
</li>

<li>
<details>
<summary><h3>Drag and Drop</h3></summary>

<ul>
  <li>
    <details>
      <summary><h4>DnD</h4></summary>

**Description:** A flexible and powerful library for implementing drag and drop functionality in React applications.

**Installation:**

```bash
npm install react-dnd
```

**Documentation:** [dnd.github.io/](https://react-dnd.github.io/react-dnd/docs/overview)

</details>

  </li>

  <li>
    <details>
      <summary><h4>Beautiful DnD</h4></summary>

**Description:** A beautiful and accessible drag and drop library for lists with vertical and horizontal sorting.

**Installation:**

```bash
npm install react-beautiful-dnd
```

**Documentation:** [github.com/atlassian/react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)

  </details>

  </li>

  <li>
    <details>
      <summary><h4>Sortable HOC</h4></summary>

**Description:** A higher-order component for implementing sortable lists with drag and drop functionality in React.

**Installation:**

```bash
npm install react-sortable-hoc
```

**Documentation:** [clauderic.github.io/react-sortable-hoc](https://clauderic.github.io/react-sortable-hoc)

  </details>

  </li>
</ul>

</details>

</li>
</ul>

</details>

# Happy Coding!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Acknowledgements

Special thanks to all the developers and contributors of the libraries and tools used in this boilerplate.

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)

## Contact

For inquiries or support, please contact [Roman.Letodiani03@Gmail.Com](mailto:Roman.Letodiani03@Gmail.Com).
