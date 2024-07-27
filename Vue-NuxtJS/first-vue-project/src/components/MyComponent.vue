<script setup>
defineProps({
  exampleProp: String
})

let exampleVariable = 2024
let exampleHtmlCode = '<h1>HTML code</h1>'

let isVisible = false
let isVisible2 = true

let imageUrl = 'https://via.placeholder.com/150'

const exampleStudents = [
  {
    id: 1,
    name: 'John Doe',
    age: 25
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 24
  },
  {
    id: 3,
    name: 'John Smith',
    age: 30
  }
]
</script>

<template>
  <div>
    <h1>This is my component</h1>
  </div>
  <div>
    <h2>It is a component</h2>
    {{ exampleProp }} - {{ exampleVariable }}
    <br />
    <span>{{ exampleProp }}</span>
    <span v-text="exampleProp"></span>
    <hr />
    <span v-html="exampleHtmlCode"></span>

    <span v-show="isVisible">Example Text</span>

    <span v-if="isVisible">Görünüyor</span>
    <span v-else-if="isVisible2">Else if bloğu görünüyor</span>
    <span v-else>Görünmüyor</span>

    <span v-show="isVisible">Görünüyor</span>
    <span v-show="!isVisible && isVisible2">Else if bloğu görünüyor</span>
    <span v-show="!isVisible && !isVisible2">Görünmüyor</span>

    <hr />

    <div>
      <ul>
        <li v-for="(student, index) in exampleStudents" :key="index">
          {{ student.name }} ({{ student.age }})
        </li>
      </ul>
    </div>

    <hr />

    <img v-bind:src="imageUrl" alt="Placeholder" />
    <img :src="imageUrl" alt="Placeholder" />
  </div>
</template>
