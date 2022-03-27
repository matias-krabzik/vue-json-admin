<template>
    <div v-if="!edit">
        <json-viewer v-model="localValue" :bags="bags" />
    </div> 
    <div v-else>
        <p>Comming soon...    C:</p>
    </div> 
</template>

<script>
import vmodel from "../vmodel";
import JsonViewer from './viewer/JsonViewer.vue';

export default {
    components: { JsonViewer },
    name: 'json-admin',
    mixins: [ vmodel ],
    props: {
        label: { type: String, default: null },
        bags: { type: Boolean, default: true },
        edit: { type: Boolean, default: false }
    }
}
</script>

<style>

</style>