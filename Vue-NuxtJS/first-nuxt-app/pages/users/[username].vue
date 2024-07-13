<template>
  <h2>This is dynamic user page!</h2>
  This user is: {{ route.params.username }}

  <NuxtLink to="/">Go to Home Page</NuxtLink>
  <NuxtLink to="/example-page">Go to Example Page</NuxtLink>
  <hr />
  <a href="/">Go to Home Page</a>
  <a href="/example-page">Go to Example Page</a>
</template>

<script setup>
const route = useRoute();
console.log(route.params.username);
</script>
