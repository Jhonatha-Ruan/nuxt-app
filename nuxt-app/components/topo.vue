<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Teste FrontEnd</span>
      </a>

      <ul class="nav nav-pills">
        <NuxtLink class="nav-link active" to="/">Home</NuxtLink>
        <NuxtLink class="nav-link" to="/produtos">Produtos</NuxtLink>
        <NuxtLink class="nav-link" to="/contato">Contato</NuxtLink>
      </ul>
    </header>
  </div>
</template>