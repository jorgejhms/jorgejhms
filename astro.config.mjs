// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Comment out "renderers: []" to enable Astro's default component support.

	// dist: './docs/',
	integrations: [],
	buildOptions: {
		// Example: Tell Astro the final URL of your deployed website.
		site: 'https://jorgejhms.pages.dev'
	}
});