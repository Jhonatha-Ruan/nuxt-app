<template>
    <topo />
    
    <div class="container">
        <h1>Produtos</h1>
        <pre>
            Page visits: {{ products }}
        </pre>
    </div>

    <rodape />
  </template>
  
  <script setup>
  const { data: products } = await useFetch('https://dummyjson.com/products')
  </script>

<style>

</style>