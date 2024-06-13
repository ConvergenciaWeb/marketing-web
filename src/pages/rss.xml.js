import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(contex) {
  const posts = await getCollection("posts");

  return rss({
    title: 'ConvergenciaWeb | Blog',
    description: 'Nuestro blog con noticias, tendencias y consejos en paginas web.',
    site: contex.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>es</language>`,
  });
}