import { defineConfig } from 'vite';

export default defineConfig({
  base: '/alfie-leave-app/', // Add this line with the repository name
  build: {
    outDir: 'dist', // Ensure the output directory matches your GitHub Pages deployment
  },
});
