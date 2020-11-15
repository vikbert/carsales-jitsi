<script>
  import { fade } from 'svelte/transition';
  import Backend from './components/Backend.svelte';
  import Container from './components/Container.svelte';
  import Frontend from './components/Frontend.svelte';
  import Login from './components/Login.svelte';
  import { isLoginValid } from './services/store';

  let index = -1;
  let isAuth = false;
  const color_intern = 'darkMagenta';
  const color_extern = 'orange';
  const color_symfony = 'black';
  const color_kibana = 'cadetBlue';
  const color_orange = 'orange';
  const color_dark_orange = 'darkorange';

  const unsubscribe = isLoginValid.subscribe((value) => {
    isAuth = value;
  });

  // let key;
  // let keyCode;

  // function next() {
  //   if (index > 4) {
  //     return;
  //   }
  //   ++index;
  // }
  // function prev() {
  //   if (index <script 0) {
  //     return;
  //   }

  //   --index;
  // }
  // function handleKeydown(event) {
  //   key = event.key;
  //   keyCode = event.keyCode;
  //   if (key === 'ArrowRight') {
  //     next();
  //   } else if (key === 'ArrowLeft') {
  //     prev();
  //   } else if (key === 'ArrowUp' || key === 'ArrowDown') {
  //     index = -1;
  //   }
  // }
</script>

<!-- <svelte:window on:keydown={handleKeydown} /> -->
{#if !isAuth}
  <Login />
{:else}
  <div class="wrapper">
    <div class="wrapper-inner">
      <Container color="oliveDrab">End User</Container>
      <div class="my-1" />
      <Frontend />
      <div class="my-1" />
      <Backend />
    </div>
  </div>
{/if}
