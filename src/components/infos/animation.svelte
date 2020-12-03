<script>
  import {fly} from 'svelte/transition';
</script>

<div transition:fly={{x: 200, duration: 500}}>
  <slot></slot>
</div>
