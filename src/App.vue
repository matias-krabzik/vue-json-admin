<template>
  <div id="app">
    <json-admin v-model="json" 
      :tags="false" 
      :edit="false" 
      :styled="true" />
  </div>
</template>

<script>
import JsonAdmin from './components/JsonAdmin.vue'

export default {
  name: 'App',
  components: {
    JsonAdmin
  },
  data() {
    return {
      json: {
        "hello": "world",
        "nested": {
          "hello": "world",
          "key": "value"
        },
        "nested_array": [
          "esto", "es", "Array", 4
        ]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
