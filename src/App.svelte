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

  const options = [
    { key: 'frontend', component: frontEnd },
    { key: 'backend', component: backEnd },
  ];
  let selected = 'welcome';

  const showFrontend = () => {
    selected = options[0];
  };

  const removeFrontend = () => {
    selected = 'welcome';
  };
</script>

<svelte:window on:keydown={handleKeydown} />
{#if !isAuth}
  <Login />
{:else}
  <div class="wrapper">
    <div class="wrapper-right">
      <Container color={color_intern}>
        <span on:click={showFrontend} on:mouseout={removeFrontend}>CarSales -
          Vertriebsportal
        </span>
      </Container>

      <div class="my-1" />
      {#if index >= 2}
        <Frontend {index} />
      {/if}
      <div class="my-1" />
      <Backend {index} />
    </div>
    <div class="wrapper-left">
      <div transition:fade={{ duration: 2000 }}>
        <svelte:component this={selected.component} />
      </div>
    </div>
  </div>
{/if}
