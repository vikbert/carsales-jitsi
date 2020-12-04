<script>
  import Container from './Container.svelte';

  const color_intern = 'darkMagenta';
  const color_extern = 'orange';
  const color_symfony = '#000000c2';
  const color_stackit = 'DarkSlateGray';
  const color_future = 'orangeRed';

  export let index = 0;
  export let infoIndex = null;

  $: console.table({
    'slide index:': index
  });
</script>

{#if index >= 0}
<div class="icon" on:click={() => infoIndex.set('react')}>
   <span class="iconify" data-icon="cib:react" data-inline="false" width="60" style="cursor: pointer"/>
</div>
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
      <span class="iconify" data-icon="cib:symfony" data-inline="false" width="30"></span>
      <span class="iconify" data-icon="cib:docker" data-inline="false" width="30"></span>
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
      OAuth2 + SIAM SSO
    </Container>
    <Container classes="opacity-75" color={color_extern}>A&M REST</Container>

    <!-- content here -->
    <Container classes="opacity-75" color={color_intern}>
      ⚠️ SAP Module
    </Container>
    <Container classes="sf opacity-75" color={color_symfony}>
      Monolog + Kibana + Dynat
    </Container>
    <Container color={color_future}>Mobile.de</Container>
  {/if}

  {#if index >= 5}
    <Container classes="opacity-75" color={color_stackit}>S3 Server</Container>
    <Container classes="opacity-75" color={color_symfony}>
      Import + Export
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

<style>
  .iconify {
    margin: 0 10px;
  }
</style>
