<template>  
    <div>
        <p v-if="label != null">
            {{ label }}: <j-bag v-if="bags" :text="whatIsIt(mixval)" />{{ startTag() }}
            <span v-if="!expand"> ... {{ endTag() }}</span>
            <j-expand :expand="expand" @changed="toggleSpand" />
        </p>
        <p v-else>{{ startTag() }}<span style="font: bold;" v-if="!expand"> ... {{ endTag() }}</span><j-expand :expand="expand" @changed="toggleSpand" /></p>
        <div v-if="expand">
            <p style="margin-left: 15px;" v-for="(k, i) in mixval" :key="i">

                <template v-if="isArray()">
                    <j-bag v-if="bags" :text="whatIsIt(k)" /> {{ k }}
                </template>

                <json-viewer v-else-if="hasChilds(mixval[i])" v-model="mixval[i]" :label="i" :bags="bags" :expanded="false"></json-viewer>

                <template v-else>
                    {{ i }}: <j-bag v-if="bags" :text="whatIsIt(k)" /> {{ k }}
                </template>
                
            </p>
        </div>
        <p v-if="expand">{{ endTag() }}</p>
    </div> 
</template>

<script>
import vmodel from "vmodel-mixin";

import JBag from "./JBag.vue"
import JExpand from './JExpand.vue';
import JsonViewer from "./JsonViewer.vue";

export default {
    name: "json-viewer",
    components: {
        JsonViewer, 
        JBag,
        JExpand
    },
    mixins: [ vmodel ],
    props: {
        label: { type: String, default: null },
        bags: { type: Boolean, default: true },
        expanded: { type: Boolean, default: true }
    },
    data() {
        return {
            expand: false
        }
    },
    mounted() {
        this.expand = this.expanded;
    },
    methods: {
        startTag() {
            return this.isArray() ? "[": "{"
        },
        endTag() {
            return this.isArray() ? "]": "}"
        },
        isArray() {
            return Array.isArray(this.mixval)
        },
        hasChilds(value) {
            return (this.whatIsIt(value) === "Array" || this.whatIsIt(value) === "Object");
        },
        whatIsIt(object) {
            if (object === null) {
                return "null";
            }
            if (object === undefined) {
                return "undefined";
            }
            if (Number.isInteger(object)) {
                return "Number";
            }
            if (object.constructor === Boolean) {
                return "Boolean";
            }
            if (object.constructor === Number) {
                return "Number";
            }
            if (object.constructor === String) {
                return "String";
            }
            if (object.constructor === Array) {
                return "Array";
            }
            if (object.constructor === Object) {
                return "Object";
            }
            {
                return "-unknown-";
            }
        },
        toggleSpand() {
            this.expand = !this.expand;
        }
    }
}
</script>

<style>
    p {
        margin: 1px;
    }
</style>