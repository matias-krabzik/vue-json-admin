# json-admin-vue

## Add it to your project
```
npm install json-admin-vue --save
```

## How to use it

```vue
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
## Properties

| Property      | Action | Values |
| ----------- | ----------- | ----------- |
| tags      | shows the data type indicator labels        | ```Boolean```, default: ```true```|
| edit      | The component behaves as a JSON data editor.        | ```Boolean```, default: ```false```|
| styled      | Just add a container box        | ```Boolean```, default: ```false```|