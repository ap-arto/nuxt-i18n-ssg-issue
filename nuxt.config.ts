// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@nuxtjs/i18n"],
	i18n: {
		// some of the options are taken from the runtimeConfig
		strategy: "no_prefix",
		differentDomains: true,
		lazy: false,
		locales: [
			{
				code: "en",
				language: "en-US",
				isCatchallLocale: true,
				domain: "localhost:3000",
				name: "English",
				files: ["en.json"],
			},
			{
				code: "es",
				language: "es-ES",
				domain: "localhost:3001",
				name: "Español",
				files: ["es.json"],
			},
		],
		detectBrowserLanguage: false,
	},
	runtimeConfig: {
		public: {
			i18n: {
				baseUrl: "",
				defaultLocale: "en",
			},
		},
	},
});
