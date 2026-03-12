import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Keep the same port as CRA
    allowedHosts: [
    'a9d24332604574c5489d8edd7d6a1bed-709405611.ap-south-1.elb.amazonaws.com'
      // or use '*' to allow all hosts (not recommended for production)
    ]
    open: true // Optional: Automatically open the app in the browser
  }
})
