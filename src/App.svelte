<script>
  import { fade } from 'svelte/transition';
  import Backend from './components/Backend.svelte';
  import Container from './components/Container.svelte';
  import Frontend from './components/Frontend.svelte';
  import Login from './components/Login.svelte';
  import { isLoginValid, slideIndex } from './services/store';

  let index = slideIndex;
  let isAuth = false;
  let key;
  let keyCode;

  const color_intern = 'darkMagenta';

  const unsubscribeIsLoginValid = isLoginValid.subscribe((value) => {
    isAuth = value;
  });

  const unsubscribeSlideIndex = slideIndex.subscribe((value) => {
    index = value;
  });

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
