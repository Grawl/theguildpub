import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig, loadEnv, type UserConfig } from 'vite'

export default defineConfig(({ mode }) => {
	const { PORT } = loadEnv(mode, '', '')
	const server: UserConfig['server'] = {
		port: Number(PORT),
	}
	return {
		plugins: [sveltekit()],
		server,
		preview: server,
	}
})
