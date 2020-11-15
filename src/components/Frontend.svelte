<script>
  import Container from './Container.svelte';
  const color_react = 'deepskyblue';
  const color_react_dark = 'dodgerBlue';
</script>

<div class="frontend">
  <Container color={color_react}>Material UI</Container>
  <Container color={color_react}>Redux + Middleware</Container>
  <Container color={'grey'}>Axios</Container>
  <Container color={color_react}>React Component</Container>
  <Container color={color_react}>State Store</Container>
  <Container color={color_react}>Service + Hooks</Container>
</div>
