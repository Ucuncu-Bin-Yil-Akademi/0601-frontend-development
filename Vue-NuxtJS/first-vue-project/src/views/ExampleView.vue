<template>
  <div>
    <h1>Example View</h1>
    <button @click="handleClick">Click me</button>

    <button @click="counter++">Increase Counter</button>
    <button @click="decreaseCounter">Decrease Counter</button>
    <h1>{{ counter }} & {{ userData.name }} ({{ userData.age }})</h1>

    <hr />

    <input
      type="text"
      placeholder="Type your name"
      :value="inputName"
      @input="inputName = $event.target.value"
    />

    <input type="text" placeholder="Type your name" v-model="inputName" />

    <h1>{{ inputName }}</h1>

    <hr />

    <input type="checkbox" v-model="isAgreed" /><label>
      I agree to the terms and conditionss
    </label>

    {{ JSON.stringify(isAgreed) }}

    <hr />

    <select v-model="selectedCountry">
      <option value="au">Australia</option>
      <option value="tr">Türkiye</option>
      <option value="de">Germany</option>
      <option value="gb">U.K</option>
    </select>

    Selected Country: {{ selectedCountry }}

    <hr />

    Double Counter: {{ doubleCounter }} <br />
    Triple Counter: {{ tripleCounter }}
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onBeforeUpdate, onBeforeUnmount, onBeforeMount } from 'vue'

const counter = ref(0)
const doubleCounter = computed(() => {
  return counter.value * 2
})

const tripleCounter = ref(0)

const userData = reactive({ name: 'John Doe', age: 30 })

const inputName = ref('')
const isAgreed = ref(false)
const selectedCountry = ref('')

const handleClick = () => {
  alert('Button clicked!')
}

const decreaseCounter = () => {
  counter.value = counter.value - 1

  userData.age = userData.age - 1
}

watch(selectedCountry, (newValue, oldValue) => {
  console.log('Selected country changed', oldValue, newValue)
})

watch(counter, (newValue) => {
  tripleCounter.value = newValue * 3
})

onBeforeMount(() => {
  debugger
  console.log('Component birazdan oluşturulacak.')
})

onBeforeUpdate(() => {
  console.log('Birazdan component güncellenecek.')
})

onBeforeUnmount(() => {
  console.log('Kullanıcı bu componenti terk ediyor.')
})
</script>

<style scoped></style>
