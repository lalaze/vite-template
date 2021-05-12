import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 跟rollup引插件差不多
export default defineConfig({
  plugins: [vue(),vueJsx()]
})
