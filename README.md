<div align="center">
  <h1>Taskmaster</h1>
  <p align="center">
    A modern task management application built with React, TypeScript, and Tailwind CSS
  </p>

[![CI Pipeline](https://github.com/alexsantosquispe/taskmaster/actions/workflows/github_ci.yml/badge.svg?branch=main)](https://github.com/alexsantosquispe/taskmaster/actions/workflows/github_ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
</div>

## 📌 Overview

Taskmaster is a modern task management application designed to help teams and individuals organize their work efficiently. Built with a focus on performance and user experience, it provides a clean and intuitive interface for managing tasks and projects.

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) `v18` or later
- [pnpm](https://pnpm.io/) (recommended) or npm

### Installation

```bash
# Clone the repository
git clone git@github.com:alexsantosquispe/taskmaster.git
cd taskmaster

# Install dependencies
pnpm install  # or npm install

# Start development server
pnpm dev
```

Visit `http://localhost:5173` to view the app.

## 🖼️ Preview

### Light Theme
<div align="center">
  <img src="./screenshots/light.webp" alt="Light Theme" width="80%"/>
</div>

### Dark Theme
<div align="center">
  <img src="./screenshots/dark.webp" alt="Dark Theme" width="80%"/>
</div>

## 🚀 Features

- 📝 Create and manage tasks and projects
- 👥 Multi-user support
- 🌓 Light and dark mode
- 📱 Responsive design
- 🧪 Component testing with Jest and React Testing Library
- 📖 Component documentation with Storybook
- 🚀 Fast development with Vite
- 🎨 Modern UI with Tailwind CSS
- 🔍 Type-safe with TypeScript

## 🏗️ Architecture

The application follows a modern React architecture with a focus on component composition and separation of concerns:

```
src/
├── components/           # Reusable UI components
│   ├── atoms/           # Atomic design atoms (basic building blocks)
│   └── molecules/       # Composed components from atoms
├── config/              # Application configuration
├── contexts/            # React context providers
├── hooks/               # Custom React hooks
├── icons/               # SVG icons and icon components
├── models/              # TypeScript interfaces and types
├── pages/               # Page components (routes)
│   ├── Dashboard/       # Main dashboard view
│   ├── Tasks/           # Tasks management
│   ├── Projects/        # Projects management
│   ├── Reports/         # Analytics and reporting
│   └── Detail/          # Detailed view components
├── services/            # API and service layer
└── utils/               # Utility functions and helpers
    └── mocks/           # Mock data for development
```

### Key Architectural Decisions

1. **Component Architecture**:
   - Atomic Design methodology for component organization
   - Reusable, composable UI components
   - Container/Presentational component pattern

2. **State Management**:
   - React Context API for global state
   - Local component state for UI-specific state

3. **Styling**:
   - Utility-first CSS with Tailwind CSS
   - Component-scoped styles

4. **Type Safety**:
   - Full TypeScript support
   - Strict type checking enabled

## 📦 Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint
- **Formatting**: Prettier
- **Version Control**: Git


## 🚀 Development

### Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `test` - Run tests
- `test:coverage` - Run tests with coverage
- `test:update` - Update test snapshots
- `lint` - Run linter
- `format` - Format code with Prettier
- `storybook` - Start Storybook
- `build-storybook` - Build Storybook

### Running the App

1. Start the development server:
   ```bash
   pnpm dev
   ```
   The app will be available at `http://localhost:5173`

2. (Optional) Run Storybook to view components in isolation:
   ```bash
   pnpm storybook
   ```
   Storybook will be available at `http://localhost:6006`

## 🧪 Testing

We use Jest and React Testing Library for testing our components and utilities. To run the tests, use the following commands:

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Update test snapshots
pnpm test:update

# Run tests in watch mode
pnpm test:watch
```

## 🧹 Linting and Formatting

This project uses ESLint for code linting and Prettier for code formatting. We recommend setting up your editor to automatically format and fix linting issues on save.

## 🛠 Development Practices

### Code Quality

- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Custom configuration following best practices
- **Prettier**: Consistent code formatting
- **Husky**: Git hooks for pre-commit and pre-push
  - Pre-commit: Runs linting and type checking
  - Pre-push: Runs tests to ensure code quality

### Git Workflow

1. **Branch Naming**: `feature/feature-name`, `bugfix/description`, `hotfix/description`
2. **Commit Messages**: Follow [Conventional Commits](https://www.conventionalcommits.org/)
3. **Pull Requests**:
   - Link to related issues
   - Include screenshots for UI changes
   - Request code reviews
   - Ensure all tests pass

### Code Review Guidelines
- Follow SOLID principles
- Keep components small and focused
- Write meaningful commit messages
- Add appropriate test coverage
- Document complex logic

## 🚀 CI/CD Pipeline

### GitHub Actions

The project includes GitHub Actions workflows for continuous integration:

1. **CI Pipeline** ([.github/workflows/github_ci.yml](https://github.com/alexsantosquispe/taskmaster/actions/workflows/github_ci.yml))
   - Runs on every push and pull request
   - Checks code formatting with Prettier
   - Runs ESLint for code quality
   - Executes unit tests with Jest
   - Generates test coverage reports
   - Builds the application

2. **Deployment**
   - Automatic deployment to production on merge to `main`
   - Preview deployments for pull requests

### Local Development

#### Pre-commit Hooks
Husky is configured to run the following on `git commit`:
- Linting with ESLint
- Type checking with TypeScript
- Formatting with Prettier

#### Pre-push Hooks
Before pushing to remote:
- Runs the full test suite
- Ensures all tests pass
- Verifies build process

```bash
# Run linter
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format
```

---
