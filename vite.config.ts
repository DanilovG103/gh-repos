import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), svgr({ svgrOptions: { icon: true } })],
  resolve: {
    alias: {
      app: '/src/app',
      entities: '/src/entities',
      features: '/src/features',
      pages: '/src/pages',
      shared: '/src/shared',
      widgets: '/src/widgets',
    },
  },
})
