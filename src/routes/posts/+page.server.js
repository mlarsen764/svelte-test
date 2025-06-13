// This would typically come from a database
const posts = [
  { slug: 'welcome', title: 'Welcome to our blog' },
  { slug: 'getting-started', title: 'Getting Started Guide' },
  { slug: 'advanced-tips', title: 'Advanced Tips and Tricks' }
];

export function load() {
  return {
    posts
  };
}