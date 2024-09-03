import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react()
  ],
  build: {
    outDir: 'dist', // Output directory for your built files
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      input: 'index.html', // Entry point for your app
    },
  },
})
