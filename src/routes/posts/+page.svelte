<script>
  /** @type {import('./$types').PageData} */
  export let data;
  
  $: ({ posts } = data);
</script>

<div class="posts-container">
  <h1>Blog Posts</h1>
  <div class="posts-grid">
    {#each posts as post}
      <a href="/posts/{post.slug}" class="post-link">
        <div class="post-card">
          <h2>{post.title}</h2>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .posts-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .post-card {
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  .post-link {
    text-decoration: none;
    color: inherit;
  }

  .post-card:hover {
    transform: translateY(-4px);
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
  }
</style>