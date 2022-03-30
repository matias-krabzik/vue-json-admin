<template>
    <div :class="container">
        <div v-if="!edit">
            <json-viewer v-model="mixval" :tags="tags" />
        </div> 
        <div v-else>
            <j-editor v-model="mixval" />
        </div> 
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
        tags: { type: Boolean, default: true },
        edit: { type: Boolean, default: false },
        styled: { type: Boolean, default: false }
    },
    computed: {
        container() {
            return this.styled ? "container": "";
        }
    }
}
</script>

<style>
    .container  {
        background-color: ghostwhite;
        border: 1px solid silver;
        border-radius: 5px;
        padding: 15px; 
   }
</style>