<script>
  import Container from './Container.svelte';
  const color_react = 'deepskyblue';

  export let infoIndex = null;
</script>

<div class="frontend">
  <Container color={color_react}>
    <span on:click={() => infoIndex.set('material')}>Material UI</span>
  </Container>
  <Container color={color_react}>Redux + Middleware</Container>
  <Container color={'grey'}>Axios</Container>
  <Container color={color_react}>React Component</Container>
  <Container color={color_react}>State Store</Container>
  <Container color={color_react}>Service + Hooks</Container>
</div>
