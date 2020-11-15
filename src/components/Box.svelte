<script>
  export let color = 'darkmagento';
</script>

<style>
  div {
    width: 45%;
    display: grid;
    place-items: center;
    height: 40px;
    padding: 0 4px;
    margin: 0 4px;
    border-radius: 8px;
    opacity: 0.75;
  }
</style>

<div style={'border: 1px solid white; background: ' + color}>
  <slot />
</div>
