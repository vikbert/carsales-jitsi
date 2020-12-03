<script>
  import { fade } from 'svelte/transition';
  import Backend from './components/Backend.svelte';
  import Container from './components/Container.svelte';
  import Frontend from './components/Frontend.svelte';
  import Login from './components/Login.svelte';
  import { isLoginValid, slideIndex } from './services/store';
  import frontEnd from './components/infos/react.svelte';
  import backEnd from './components/infos/backend.svelte';

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
    console.log(key, keyCode);

    if (keyCode >= 49 && keyCode < 56) {
      slideIndex.set(Number(key));
    }
  }

  const options = {
    0:  'no data',
    2: {component: frontEnd},
  }
  let selected = options[0];

  const showFrontend = () => {
    selected = options[0];
  };

  const removeFrontend = () => {
    selected = 'welcome';
  };

  $: {
    if (options.hasOwnProperty(key)) {
      selected = options[key];
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />
{#if !isAuth}
  <Login />
{:else}
  <div class="wrapper">
    <div class="wrapper-right">
      <Container color={color_intern}>
        <span>CarSales -
          Vertriebsportal
        </span>
      </Container>

      <div class="my-1" />
      {#if index >= 2}
        <Frontend {index} />
      {/if}
      <div class="my-1" />
      <Backend {index} />
      <p class="my-2">Press the key <strong>1 - 7</strong> to open the slides</p>
    </div>
    <div class="wrapper-left">
      <div transition:fade={{ duration: 2000 }}>
        <svelte:component this={selected.component} />
      </div>
    </div>
  </div>
  <div class="logo">
    <svg width="130" class="MuiSvgIcon-root jss38" focusable="false" viewBox="0 0 90.8 22.6" aria-hidden="true"><path d="M35.2 10.5c-.8-.7-2.2-.3-3.1.3-1.2.9-2.2 2-3 3.2.5-.9.9-1.9 1.2-3 .1-.6 0-1-.6-1s-1.3.2-1.7.6c-.3.4-.5.9-.6 1.3-.4.8-.7 1.7-1 2.5-.7 1.5-1.2 3-1.9 4.5-.3.6-.5 1.4-1.3 1.4-1.3.1-.7-2.5-.5-3.3.3-1.6.9-3.3 1.6-4.8.3-.4.2-1-.2-1.2-.1-.1-.2-.1-.4-.1-.7-.3-1.4.1-1.7.7-.7-1.4-2.8-1-4.2-.2-1.2.7-2.2 1.6-3.2 2.7-1.5 1.9-3.4 3.5-5.5 4.7-1.4.7-3.5 1.3-4.9.7-1.6-.7-1.6-3.1-1.2-4.7 1-4.2 3.6-7.8 7.3-10 .8-.5 5.3-2.8 4.3-.3-.5 1.1-1.3 2.1-2.2 2.8-.4.4-.8.7-1.3.9-.2.1-1 .1-.8-.3-.5.2-.5.9-.5 1.1 0 .4.2.7.5.9.6.6 1.5.8 2.3.4 1.8-.9 3.3-2.5 4.2-4.3.5-.8.7-1.7.6-2.6-.2-.8-.8-1.5-1.6-1.9-1.6-.9-3.8-.4-5.6.3-3.9 1.7-7.1 4.7-8.9 8.5-1.6 3.4-2 7.8.4 10.3C4.4 23.4 9.5 22 12.6 19c.1 1.7 1.1 3.6 3.1 3.5s3.7-2.2 4.6-3.8c-.5 1.9 1.1 4.5 3.3 3.7.3-.1.5-.3.8-.5.3-.2.6.2 1 .1s.7-.8.9-1.2c.3-.6.7-1.1 1-1.7 1.4-2.1 2.9-4.1 4.7-5.9.2-.3.5-.5.8-.6.4-.1-.2.6-.3.8-.4 1-.3 2.4.8 2.6 1.1.2 1.7-2 2-2.7.4-1 .7-2.1-.1-2.8zm-15.9 5.6c-.9 1.3-1.9 2.4-3.1 3.4-.2.2-.7.7-1.1.6-.5-.2-.2-1.2-.1-1.6.8-2.7 3.2-6 6.3-6-.6 1.3-1.3 2.5-2 3.6zm69.2-4.9c-.3-1.3-4.4-.6-5.4-.3-2.2.7-3.8 1.9-3.8 4-.2 2.6 5.1 2.5 4.2 3.5s-4.9 2-5.2 1.5.8-1.3.4-1.9-1.9.4-2.4.8c-1 .6-1.8 1.3-2.9 1.1-2.3-.4-.9-3.6 1-4 1.9-.4 4.4-1.8 4.8-4 .2-.8-.3-1.6-1.2-1.8h-.3c-1.1-.1-2.2.3-3.1 1-1.9 1.5-3.4 3.5-4.2 5.8-.2.6-.4 1.2-.5 1.8-.1.3-.1.6-.1.9v.3c0 .3.1.3-.2.4-.9.4-2-.1-2.4-1-.1-.5-.2-1-.1-1.5.2-.6.5-1.1 1-1.5.7-1.1 1.4-2.1 2.1-3.2 1.5-2.3 2.7-4.6 3.8-7.1.7-1.7 2-4.4.3-5.6-3-2.1-6.1 4.3-7.1 6.4-1 2.2-1.7 4.5-2.1 6.9-.2 1.1-.3 2.3-.3 3.4 0 .4-.2.5-.5.9l-1.2 1.5c-.4.3-.9.9-1.4.8s-.5-.6-.6-1c0-1.1.1-2.1.4-3.1.3-1.1.6-2.2 1-3.2.3-.7.8-1.5.2-2-.4-.2-.8-.3-1.3-.2-.5.1-.6.4-.8.8-.8-1.4-3.2-1-4.6-.2-1.8 1-3.1 2.6-4 4.4-.2-1.8-1.7-2.8-3.1-3.5-1.4-.6-2.8-1.1-4.2-1.5-1.5-.4-3.3-.6-4.5-1.5-.7-.5-.6-1 0-1.7.7-.8 1.6-1.5 2.5-2.1 2-1.4 4.4-2.2 6.8-2.4-.2.4-.7 1.1-.2 1.4.2.1 1.1-.1 1.5-.1 1.1.1 2.2-.1 3.2-.6.7-.5.8-1.4.4-2.1 0 0 0-.1-.1-.1-.8-.8-2.5-1-3.6-1-3.4-.1-6.7.8-9.7 2.5-1.4.7-2.6 1.7-3.6 3-.8 1.2-.9 2.7-.2 4 1.3 2.2 4.5 2.7 6.9 3.3 1.2.3 2.5.6 3.7 1.1 1 .4 2 1.1.8 2.2-2.3 2.2-6.2 3-8.9 2.7-.8-.1-2.8-.3-2.8-1.3 0-.2.2-.3-.1-.4s-.7.2-.9.3c-.6.4-.8 1.1-.5 1.8.9 2.8 5 2.6 7.7 2.4 2.8-.3 6.7-1.3 8.5-4-.1 1.9.7 4.1 2.8 4.2 2 .1 3.9-2.2 4.8-3.8-.4 1.6.4 3.2 2 3.7s3.2-.8 4.2-2.2c.4 1.2 1.4 2.2 2.7 2.4.7.1 1.4 0 2-.2.3-.2.7-.3 1.1-.4.2 0 .5.3.7.4 1.2.3 2.6.2 3.7-.4.3-.1.6-.3.8-.2s.3.4.4.5c.5.3 1.1.4 1.7.4 1.3 0 2.7-.2 3.9-.8 1.4-.4 2.7-1.3 3.7-2.4 1.9-2.6-1.5-3.4-3.2-3.9-3.1-.9.9-3.2 2.8-3.2-1.6.6-1 1.6-.6 1.8s1 .1 1.5-.1c.9-.5 2.2-1.5 1.9-2.8zm-14 2.2c.5-.7 1.2-1.2 2-1.5.8-.2.8.7.3 1.2-.6.6-1.2.9-2 1.1-.2.1-.8.3-.8.1-.1-.1.4-.7.5-.9zm-16.4 2.7c-.9 1.3-1.9 2.4-3.1 3.4-.2.2-.7.7-1.1.6-.5-.2-.2-1.2-.1-1.6.8-2.7 3.2-6 6.3-6-.6 1.2-1.3 2.4-2 3.6zm9-1.9c.6-4 2.1-7.7 4.5-11 .2-.2.6-1 1-1s.2.9.1 1.1c-.6 1.8-1.4 3.6-2.4 5.3-1 1.9-2 3.8-3.2 5.6z"></path></svg>
  </div>
{/if}
