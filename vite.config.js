import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,     // dev port, optional in Docker
    open: false     // DO NOT open browser in container
  },
  preview: {
    port: 4173,     // matches container targetPort
    host: true,     // allow external access (K8s pod)
    allowedHosts: ['a9d24332604574c5489d8edd7d6a1bed-709405611.ap-south-1.elb.amazonaws.com']
  }
})
