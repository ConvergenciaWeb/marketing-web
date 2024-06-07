import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(contex) {
  return rss({
    title: 'ConvergenciaWeb | Blog',
    description: 'Nuestro blog con noticias, tendencias y consejos en paginas web.',
    site: contex.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/**/*.md')),
    customData: `<language>es</language>`,
  });
}