import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,          // optional, keep your container port
    host: true,          // allows external access (all hosts)
  },
  preview: {
    host: '0.0.0.0',     // allow access from all network interfaces
    port: 4173,          // match your deployment targetPort
    allowedHosts: [
      'a9d24332604574c5489d8edd7d6a1bed-709405611.ap-south-1.elb.amazonaws.com'
    ]
  }
})
