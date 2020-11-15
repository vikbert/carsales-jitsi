<script>
  import { fade } from 'svelte/transition';
  import Backend from './components/Backend.svelte';
  import Container from './components/Container.svelte';
  import Frontend from './components/Frontend.svelte';
  import Login from './components/Login.svelte';
  import { isLoginValid, slideIndex } from './services/store';

  let index = slideIndex;
  let isAuth = false;
  const color_intern = 'darkMagenta';
  const color_extern = 'orange';
  const color_symfony = 'black';
  const color_kibana = 'cadetBlue';
  const color_orange = 'orange';
  const color_dark_orange = 'darkorange';

  const unsubscribeIsLoginValid = isLoginValid.subscribe((value) => {
    isAuth = value;
  });

  const unsubscribeSlideIndex = slideIndex.subscribe((value) => {
    index = value;
  });

  let key;
  let keyCode;

  function next() {
    if (index > 4) {
      return;
    }
    slideIndex.update((value) => value + 1);
  }
  function prev() {
    if (index < 0) {
      return;
    }

    slideIndex.update((value) => value - 1);
  }
  function handleKeydown(event) {
    key = event.key;
    keyCode = event.keyCode;

    if (keyCode > 47) {
      console.log('set numeric index');
      slideIndex.set(Number(key));
    }
    if (key === 'ArrowRight') {
      next();
    } else if (key === 'ArrowLeft') {
      prev();
    } else if (key === 'ArrowUp' || key === 'ArrowDown') {
      index = 0;
    }
  }

  $: console.log(key, keyCode, index, typeof key);
</script>

<svelte:window on:keydown={handleKeydown} />
{#if !isAuth}
  <Login />
{:else}
  <div class="wrapper">
    <div class="wrapper-inner">
      <Container color={color_intern}>
        Vertriebsportal Autohaus Weinberg
      </Container>

      <div class="my-1" />
      {#if index >= 2}
        <Frontend />
      {/if}
      <div class="my-1" />
      <Backend {index} />
    </div>
  </div>
{/if}
