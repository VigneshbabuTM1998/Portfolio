// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   base: '/my-portfolio/',
//   plugins: [vue()]
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Portfolio/',   // <-- add this line
  plugins: [vue()]
})
