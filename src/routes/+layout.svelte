<script>
  let { children } = $props();
</script>

<nav>
  <a href="/">home</a>
  <a href="/stuff">stuff</a>
  <a href="/videos">videos</a>
  <a href="/calendar">calendar</a>
  <a href="/posts">posts</a>
  <a href="/about">about</a>
</nav>

{@render children()}