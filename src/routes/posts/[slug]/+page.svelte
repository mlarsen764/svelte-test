<script>
  /** @type {import('./$types').PageData} */
  export let data;
  
  $: ({ post } = data);
</script>

{#if post}
  <article class="post-container">
    <h1>{post.title}</h1>
    <div class="content">
      <p>{post.content}</p>
    </div>
    <a href="/posts" class="back-link">← Back to all posts</a>
  </article>
{:else}
  <div class="error-container">
    <h1>Post not found</h1>
    <p>Sorry, we couldn't find the post you're looking for.</p>
    <a href="/posts" class="back-link">← Back to all posts</a>
  </div>
{/if}

<style>
  .post-container, .error-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .content {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .back-link {
    display: inline-block;
    margin-top: 2rem;
    color: #0066cc;
    text-decoration: none;
  }

  .back-link:hover {
    text-decoration: underline;
  }

  .error-container {
    text-align: center;
  }
</style>