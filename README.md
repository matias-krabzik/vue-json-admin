# json-admin-vue

## Add it to your project
```
npm install json-admin-vue --save
```

## How to use it

```
<template>
    <div>
        <json-admin-vue v-model="json"></json-admin-vue>
    </div>
</template>

<script>
import JsonAdminVue from "json-admin-vue";

export default {
  name: 'App',
  components: { 
    JsonAdminVue 
  }, 
  data() {
      return {
          json: {
              "key": "value"
          }
      }
  }
}
</script>
```
