<script>
  import { fly, slide } from 'svelte/transition';
  import { enhance } from '$app/forms';

  let { data, form } = $props();
  let number = $state();

  async function roll() {
    const response = await fetch('/stuff');
    number = await response.json();
  }
</script>

<h1>Secret Stuff</h1>

<ul>
  <li><a href="/stuff/one">This</a></li>
  <li><a href="/stuff/two">And This</a></li>
  <li><a href="/stuff/three">Also This</a></li>
</ul>

<div class="centered">
	<h1>todos</h1>

  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}

  <form method="POST" action="?/create" use:enhance>
    <label>
      add a todo:
      <input
        name="description"
        value={form?.description ?? ''}
        autocomplete="off"
        required
      />
    </label>
  </form>

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li in:fly={{ y: 20 }} out:slide>
				<form method="POST" action="?/delete" use:enhance>
          <input type="hidden" name="id" value={todo.id} />
          <span>{todo.description}</span>
          <button aria-label="Mark as complete">✓</button>
        </form>
			</li>
		{/each}
	</ul>
</div>

<button onclick={roll}>Roll the dice</button>

{#if number !== undefined}
  <p>You rolled a {number}</p>
{/if}

<style>
  .todos button {
    background-color: #464747;
    border: 1px solid #cbd5e0;
    border-radius: 4px;
    padding: 4px 8px;
    margin-left: 8px;
    cursor: pointer;
  }
  
  .todos button:hover {
    background-color: #cbd5e0;
  }
  
  .todos li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .todos form {
    display: flex;
    align-items: center;
  }
</style>