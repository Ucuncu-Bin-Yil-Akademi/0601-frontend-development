<script setup>
defineProps({
  exampleProp: String
})

let exampleVariable = 2024
</script>

<template>
  <div>
    <h1>This is my component</h1>
  </div>
  <div>
    <h2>It is a component</h2>
    {{ exampleProp }} - {{ exampleVariable }}
  </div>
</template>
