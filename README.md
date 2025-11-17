# Nanda Eswar Vimal Boppudi - Personal Portfolio

A modern and fully responsive personal portfolio website for Nanda Eswar Vimal Boppudi, a Java Full Stack Developer. Built with React, TypeScript, and styled with Tailwind CSS, it features a sleek, dark-themed UI with smooth, elegant animations powered by Framer Motion. The portfolio effectively showcases skills, professional experience, projects, and includes a functional contact form using EmailJS.

## ✨ Features

- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS for a robust and maintainable codebase.
- **Fully Responsive**: Optimized for a seamless experience on all devices, from desktops to mobile phones.
- **Smooth Animations**: Fluid user experience with animations from Framer Motion.
- **Comprehensive Sections**: Includes detailed sections for Home, About, Experience, Skills, Services, and Portfolio.
- **Functional Contact Form**: Integrated with EmailJS to receive messages directly from visitors.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, HTML5
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Contact Form**: EmailJS

---

## 🚀 Deploying to GitHub Pages

GitHub Pages hosts static files (HTML, CSS, JS). Since this project is written in TypeScript (`.tsx`), it must be "built" or "compiled" into standard JavaScript before it can be deployed. The following steps will guide you through this process using **Vite**, a modern and fast build tool.

### Step 1: Set Up a Local Project Environment

First, you need to initialize a Node.js project. Open your terminal in the project's root directory and run this command:

```bash
npm init -y
```

This creates a `package.json` file, which will manage your project's dependencies and scripts.

### Step 2: Install Required Packages

Next, install Vite and the other tools needed for building and deploying the project.

```bash
# Install development dependencies (Vite, TypeScript, plugins)
npm install --save-dev vite @vitejs/plugin-react typescript gh-pages

# Install project dependencies (React)
# Note: Even though they are loaded by CDN in index.html, Vite needs them to build.
npm install react react-dom
```

### Step 3: Create Configuration Files

Vite and TypeScript need configuration files to know how to build your project.

1.  **Vite Config:** Create a file named `vite.config.ts` in your project root and add this content:

    ```ts
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      base: '/<YOUR-REPO-NAME>/' // IMPORTANT: Replace <YOUR-REPO-NAME>
    })
    ```
    **Important:** Replace `<YOUR-REPO-NAME>` with the name of your GitHub repository (e.g., `/portfolio-website/`).

2.  **TypeScript Config:** Create a file named `tsconfig.json` in your project root:

    ```json
    {
      "compilerOptions": {
        "target": "ESNext",
        "useDefineForClassFields": true,
        "lib": ["DOM", "DOM.Iterable", "ESNext"],
        "allowJs": false,
        "skipLibCheck": true,
        "esModuleInterop": false,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "module": "ESNext",
        "moduleResolution": "Node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
      },
      "include": ["."],
      "references": [{ "path": "./tsconfig.node.json" }]
    }
    ```

3.  Create another file named `tsconfig.node.json` in your project root:
    ```json
    {
      "compilerOptions": {
        "composite": true,
        "skipLibCheck": true,
        "module": "ESNext",
        "moduleResolution": "bundler",
        "allowSyntheticDefaultImports": true
      },
      "include": ["vite.config.ts"]
    }
    ```

### Step 4: Prepare `index.html` for Building

Vite will handle bundling all your dependencies, so the `<script type="importmap">` is no longer needed for the final build.

In `index.html`, **remove the entire `<script type="importmap">...</script>` block.** Vite will automatically inject the necessary scripts during the build process. Your file should look like this (abbreviated):

```html
<!-- ... (head content) ... -->
    <style>
      body {
        font-family: 'Inter', sans-serif;
      }
    </style>
  <!-- REMOVE THE SCRIPT TYPE="IMPORTMAP" BLOCK FROM HERE -->
</head>
<body>
<!-- ... (body content) ... -->
  <div id="root"></div>
  <script type="module" src="/index.tsx"></script>
</body>
</html>
```

### Step 5: Configure Deployment Scripts

Open your `package.json` file and add a `homepage` URL and the necessary `scripts` for deployment.

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "",
  "homepage": "https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>",
  "main": "index.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": { ... },
  "dependencies": { ... }
}
```
**Important:**
1.  Replace `<YOUR-USERNAME>` with your GitHub username.
2.  Replace `<YOUR-REPO-NAME>` with your repository name.

### Step 6: Deploy to GitHub Pages

1.  **Commit and Push:** Save all your new and modified files (`package.json`, `vite.config.ts`, etc.) to your GitHub repository.
    ```bash
    git add .
    git commit -m "Configure project for GitHub Pages deployment"
    git push origin main
    ```

2.  **Run the Deploy Script:** In your terminal, run the following command:
    ```bash
    npm run deploy
    ```
    This command will first run `predeploy` (which builds your project into a `dist` folder) and then run `deploy` (which pushes the `dist` folder to a new `gh-pages` branch on your repository).

### Step 7: Configure GitHub Repository Settings

1.  Go to your repository on GitHub.
2.  Click on the **"Settings"** tab.
3.  In the left sidebar, click on **"Pages"**.
4.  Under "Build and deployment", set the **Source** to **"Deploy from a branch"**.
5.  Under "Branch", select **`gh-pages`** and keep the folder as **`/(root)`**. Click **"Save"**.

After a few minutes, your portfolio website will be live at the `homepage` URL you specified in your `package.json`.
