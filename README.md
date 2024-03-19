# Relief Goods Management Platform

Welcome to the Relief Goods Management Platform! This platform serves as a vital tool for coordinating and managing the distribution of relief goods in post-disaster scenarios, ensuring timely and effective delivery to affected communities.

## Live URL

Visit the live version of the application [here](https://65f37e612fdf7807337a1c1c--spiffy-griffin-1df341.netlify.app/).

<!-- https://github.com/mdalaminfaraji/Relief_Goods_Management -->

## Features

- **Home Page**: Displays essential information about the platform's mission, key features, and testimonials.
- **All Relief Goods Page**: Provides a comprehensive list of relief goods posts available for distribution.
- **Relief Goods Detail Page**: Offers detailed information about each relief goods post, allowing users to explore more details and donate.
- **Authentication**: Allows users to register and log in to manage their relief supplies through a personalized dashboard.
- **Dashboard**: Provides users with statistical insights, including a dynamic pie chart on supplies calculations and a list of all supply posts.
- **Supply Management**: Users can add, edit, and delete supply posts, contributing to the distribution efforts.
- **Responsive Design**: Ensures the platform is accessible and usable across various devices and screen sizes.

## Technology Used

- **Frontend**:
  - React.js
  - Redux for state management
  - RTK Query for efficient data fetching
  - React Router DOM for navigation
  - Framer Motion for animations
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB for data storage

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Porgramming-Hero-web-course/l2-b2-assignment-6-fronten-mdalaminfaraji.git
   ```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# l2-b2-assignment-6-fronten-mdalaminfaraji
