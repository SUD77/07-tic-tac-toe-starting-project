import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/07-tic-tac-toe-starting-project/",
  build:{
    outDir: "./docs"
  },
})
