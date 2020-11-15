<script>
  export let color = 'orange';
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
    margin: 1px;
  }
  .empty {
    color: white;
    height: 10px !important;
    padding: 0 !important;
  }
</style>

<div class={'container ' + classes} style={'background: ' + color}>
  <slot />
</div>
