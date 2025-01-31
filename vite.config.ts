import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import vitePluginSvgr from 'vite-plugin-svgr';

export default defineConfig({
	base: '/',
	plugins: [react(), vitePluginSvgr()],
	preview: {
		port: 3000,
		strictPort: true,
	},
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),
		},
	},
	server: {
		port: 3000,
		strictPort: true,
		host: true,
		origin: 'http://127.0.0.1:3000',
	},
});
