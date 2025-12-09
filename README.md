# Portfolio Website

This is a portfolio website template built with Next.js, Tailwind CSS, and Framer Motion, designed to look like [Bettina Sosa's portfolio](https://www.bettinasosa.com).

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

You can customize the content by editing the files in the `components` directory:

-   `components/Header.tsx`: Logo and Menu items.
-   `components/Hero.tsx`: Main hero text ("Creativity is my craft...").
-   `components/About.tsx`: About me text and image placeholder.
-   `components/Projects.tsx`: Project list and descriptions.
-   `components/Footer.tsx`: Contact information and social links.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using GitHub Actions.

1.  **Push to GitHub:**
    Push this repository to your GitHub account.

2.  **Configure GitHub Pages:**
    -   Go to your repository settings on GitHub.
    -   Navigate to "Pages" in the sidebar.
    -   Under "Build and deployment", select **GitHub Actions** as the source.

3.  **Deployment:**
    -   The included workflow `.github/workflows/deploy.yml` will automatically build and deploy your site whenever you push to the `main` branch.
    -   You can verify the deployment in the "Actions" tab of your repository.

## Important Note

This project uses `next export` (via `output: 'export'` in `next.config.ts`) to generate a static site suitable for GitHub Pages. Dynamic features that require a Node.js server (like API routes or SSR) will not work without modification.
