# React Calculator with Testing

A simple calculator application built with React and TypeScript, featuring comprehensive test coverage using Jest and React Testing Library.

## Features

- Basic numeric input functionality
- Clean, responsive UI using Tailwind CSS
- Comprehensive test suite
- TypeScript integration

## Prerequisites

Before you begin, ensure you have the following installed:
- Bun (v1.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yogeshHumancloud/calculator-tdd.git
cd react-calculator
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
calculator/
├── __tests__/
│   └── Calculator.test.tsx
├── components/
│   └── Calculator.tsx
├── app/
│   └── page.tsx
├── jest.config.js
├── jest.setup.js
├── package.json
├── tsconfig.json
└── README.md
```

## Available Scripts

In the project directory, you can run:

### `bun run dev`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `bun jest`

Launches the test runner in the interactive watch mode.

### `bun run build`

Builds the app for production to the `build` folder.

## Running Tests

The project uses Jest and React Testing Library for testing. To run the tests:

```bash
# Run tests once
bun test

```

## Test Coverage

The test suite covers:
- Component rendering
- User interactions
- Display updates
- Error handling

## Development

1. Start the development server:
```bash
bun run dev
```

2. Make your changes
3. Run tests to ensure everything works:
```bash
bun test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Dependencies

- React
- Next.js
- TypeScript
- Tailwind CSS
- Jest
- React Testing Library

## Project Setup Steps

1. Create a new Next.js project:
```bash
npx create-next-app@latest calculator --typescript --tailwind
cd calculator
```

2. Install testing dependencies:
```bash
bun add -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

3. Configure Jest by creating `jest.config.ts`:
```typescript
import nextJest from 'next/jest';
import type {Config} from 'jest';


const createJestConfig = nextJest({
  // Provide the path to your Next.js app
  dir: './',
})

const customJestConfig : Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}

module.exports = createJestConfig(customJestConfig)

```

4. Create `jest.setup.js`:
```typescript
import '@testing-library/jest-dom'
```

5. Update `package.json` scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "jest": "jest --watch"
  }
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)
Project Link: [https://github.com/yourusername/react-calculator](https://github.com/yourusername/react-calculator)