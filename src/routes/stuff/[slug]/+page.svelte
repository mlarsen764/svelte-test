<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let imageUrl = '';
  let loading = true;
  let error = null;

  $: slug = $page.params.slug;

  onMount(async () => {
    try {
      imageUrl = `https://picsum.photos/seed/${slug}/200/300`;
      loading = false;
    } catch (e) {
      error = 'Failed to load image';
      loading = false;
    }
  });
</script>

<div class="container">
  <h1>random image {slug}</h1>
  
  {#if loading}
    <p>Loading...</p>
  {:else if error}
    <p class="error">{error}</p>
  {:else}
    <img src={imageUrl} alt="Random {slug} image" />
  {/if}
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 2rem 0;
  }

  .error {
    color: red;
  }
</style>