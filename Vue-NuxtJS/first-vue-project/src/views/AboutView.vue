<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MyComponent exampleProp="This is an example prop" />
  </div>
</template>

<script setup>
import MyComponent from '../components/MyComponent.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
