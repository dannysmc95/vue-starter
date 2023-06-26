import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		vue({
			script: {
				defineModel: true,
				propsDestructure: true,
			},
		}),
		eslintPlugin({
			cache: false,
			fix: true,
		}),
	],
	build: {
		chunkSizeWarningLimit: 6000,
		emptyOutDir: true,
	},
	resolve: {
		alias: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'@': resolve(process.cwd(), './src'),
		},
	},
});
