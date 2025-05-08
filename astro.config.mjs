import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://xpcassio.github.io',
    i18n: {
        locales: ["pt-br", "en"],
        defaultLocale: "pt-br",
    }
});
