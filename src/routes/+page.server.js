import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
  const slug = params.slug;

  const res = await fetch(`https://23.byulaw-dev.org/api/home-page`);
  const json = await res.json();

  if (!json.data || !json.data.length) {
    throw error(404, 'Page not found');
  }

  return {
    page: json.data[0]
  };
}