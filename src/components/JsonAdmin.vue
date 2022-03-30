<template>
    <div v-if="!edit">
        <json-viewer v-model="mixval" :bags="bags" />
    </div> 
    <div v-else>
        <j-editor v-model="mixval" />
    </div> 
</template>

<script>
import vmodel from "vmodel-mixin";

import JEditor from './editor/JEditor.vue';
import JsonViewer from './viewer/JsonViewer.vue';

export default {
    components: { JsonViewer, JEditor },
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