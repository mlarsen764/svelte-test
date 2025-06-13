import { error } from '@sveltejs/kit';

// This would typically come from a database
const posts = {
  'welcome': {
    title: 'Welcome to our blog',
    content: 'This is our first blog post. We\'re excited to share our journey with you!'
  },
  'getting-started': {
    title: 'Getting Started Guide',
    content: 'Here\'s everything you need to know to get started with our platform.'
  },
  'advanced-tips': {
    title: 'Advanced Tips and Tricks',
    content: 'Ready to take your skills to the next level? Check out these advanced tips!'
  }
};

export function load({ params }) {
  const post = posts[params.slug];

  if (!post) {
    throw error(404, {
      message: 'Post not found'
    });
  }

  return {
    post
  };
}