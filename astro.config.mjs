import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://xpcassio.github.io',
    trailingSlash: "never",
    i18n: {
        locales: ["pt-br", "en", "es", "pt"],
        defaultLocale: "pt-br",
        fallback: {
            pt: "pt-br",
            es: "en"
        },
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true,
            fallbackType: "redirect",
        }
    }
});
