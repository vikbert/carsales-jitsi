<script>
  import Box from './Box.svelte';
  import Container from './Container.svelte';

  const color_intern = 'darkMagenta';
  const color_extern = 'orange';
  const color_symfony = 'black';
  const color_stackit = 'DarkSlateGray';
  const color_future = 'orangeRed';

  export let index = 0;

  $: console.log('backend index', index);
</script>

<style>
  .backend {
    width: 100%;
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 150px 1fr 150px;
  }
</style>

{#if index >= 0}
  <img
    width="80"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png"
    alt="" />
  <div class="backend">
    <div />
    <Container color={color_symfony}>REST API</Container>
    <div />
  </div>
  <Container color={color_symfony}>Ngix + PHP-FPM</Container>
{/if}

{#if index >= 3}
  <div class="backend">
    <Container color={color_intern}>API Internal</Container>
    <Container color={color_symfony}>
      <img
        style="filter: invert(1)"
        width="40"
        src="https://symfony.com/logos/symfony_black_03.png"
        alt="" />
    </Container>
    <Container color={color_extern}>API External</Container>
  </div>
{/if}

<div class="backend">
  {#if index >= 4}
    <Container classes="opacity-75" color={color_intern}>SAFE REST</Container>
    <Container classes="sf opacity-75" color={color_symfony}>
      Messager + RabbitMQ
    </Container>
    <Container classes="opacity-75" color={color_extern}>
      schwacke SOAP
    </Container>

    <Container classes="opacity-75" color={color_intern}>SIAM</Container>
    <Container classes="sf opacity-75" color={color_symfony}>
      <Box>OAuth2</Box>
      <Box>SIAM SSO</Box>
    </Container>
    <Container classes="opacity-75" color={color_extern}>A&M REST</Container>

    <!-- content here -->
    <Container classes="opacity-75" color={color_intern}>
      ⚠️ SAP Module
    </Container>
    <Container classes="sf opacity-75" color={color_symfony}>
      <Box>Monolog</Box>
      <Box>Kibana + Dynat.</Box>
    </Container>
    <Container color={color_future}>Mobile.de</Container>
  {/if}

  {#if index >= 5}
    <Container classes="opacity-75" color={color_stackit}>S3 Server</Container>
    <Container classes="opacity-75" color={color_symfony}>
      <Box>Import</Box>
      <Box>Export</Box>
    </Container>
    <Container classes="opacity-75" color={color_stackit}>
      Docker Cron
    </Container>
  {/if}
</div>
{#if index >= 6}
  <!-- content here -->
  <Container color={color_stackit}>STACKIT + Azure DevOps</Container>
{/if}
