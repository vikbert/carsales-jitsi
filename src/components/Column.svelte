<script>
  export let index = 1;
  export let size = 2;
  export let color = 'white';
  export let classes = '';
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 5px;
    color: white;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
  }
  .empty {
    color: white;
    height: 10px !important;
    padding: 0 !important;
  }
</style>

<div
  class={classes}
  style={'background: ' + color + '; grid-column: ' + index + ' / ' + (index + size)}>
  <slot />
</div>
