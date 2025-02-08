# Hexnode

This project uses the following technologies:

- **Next.js (with TypeScript)** (v15)
- **React** (v19)
- **Tailwind CSS** for styling
- **Node version** v20.14.0
- **npm version** v10.8.1

## Getting Started

### 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install
```

### 2. Running the Development Server

To start the development server, execute:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### 3. Building the Project for Production

To create an optimized production build, run:

```bash
npm run build
```

### 4. Running the Production Server

After building the project, start the production server with:

```bash
npm start
```

---

## Additional Commands

- **Linting:**

  ```bash
  npm run lint
  ```

- **CodeFormathing(prettier):**

```bash
 npm format
```

## challenges

Tab Component Animations: Implementing smooth animations for tab transitions, particularly for kiosk modes, was challenging. The issue primarily involved maintaining a seamless user experience while ensuring performance optimizations in animation pull-outs

## some features

Partial SSR for Performance – Utilized Next.js server-side rendering selectively to enhance performance while maintaining client-side interactivity.

Type Safety with TypeScript – Ensured robust and maintainable code by leveraging TypeScript’s type safety and inference.

Minimal Third-Party Libraries – Kept external dependencies to a minimum to reduce bundle size and improve maintainability.

Image Optimization – Used Next.js Image Component for automatic image optimization, lazy loading, and responsive image handling.

Code Consistency with Prettier & ESLint – Enforced consistent code formatting and best practices using Prettier and ESLint, improving readability and maintainability.

Etra feature on ui - Hideing the main header when scrolling to the bottom on pc
