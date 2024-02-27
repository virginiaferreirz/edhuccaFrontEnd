import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // eslint-disable-next-line no-dupe-keys
  plugins: [Checker({ typescript: true })],
})
