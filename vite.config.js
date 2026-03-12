import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: true
  },
  preview: {
    allowedHosts: [
      'localhost',
      'a9d24332604574c5489d8edd7d6a1bed-709405611.ap-south-1.elb.amazonaws.com'
    ]
  }
})
