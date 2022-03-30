<template>  
    <div>
        <div v-if="label != null">
            <span v-html="keyStyle(label)"></span>: <j-bag v-if="tags" :text="whatIsIt(mixval)" />{{ startTag() }}
            <span v-if="!expand"> ... {{ endTag() }}</span>
            <j-expand :expand="expand" @changed="toggleSpand" />
        </div>
        <p v-else>{{ startTag() }}<span style="font: bold;" v-if="!expand"> ... {{ endTag() }}</span><j-expand :expand="expand" @changed="toggleSpand" /></p>
        <div v-if="expand">
            <div style="margin-left: 15px;" v-for="(v, k, i) in mixval" :key="i">

                <template v-if="isArray()">
                    <j-bag v-if="tags" :text="whatIsIt(v)" /> <span v-html="valueStyle(v)"></span>
                </template>

                <json-viewer v-else-if="hasChilds(mixval[k])" v-model="mixval[k]" :label="k" :tags="tags" :expanded="false" :size="Object.keys(mixval[k]).length"></json-viewer>

                <template v-else>
                    <div class="json-key">"{{ k }}"</div>: <j-bag v-if="tags" :text="whatIsIt(v)" /> <span v-html="valueStyle(v)"></span>
                </template>
            </div>
        </div>
        <p v-if="expand">{{ endTag() }}<!--span v-if="addComma(i)" style="display: inline;">,</span--></p>
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
        tags: { type: Boolean, default: true },
        expanded: { type: Boolean, default: true },
        size: { type: Number, default: -1 }
    },
    data() {
        return {
            expand: false,
            count: -1
        }
    },
    mounted() {
        this.expand = this.expanded;
        if (this.label == null) this.count = Object.keys(this.mixval).length;
        else this.count = this.size;
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
        },
        valueStyle(value) {
            if (this.whatIsIt(value) === "String") {
                return this.jsonClass("string", `"${value}"`);
            } return this.jsonClass("value", value);
        },
        keyStyle(value) {
            return this.jsonClass("key", `"${value}"`);
        },
        jsonClass(type, value) {
            return `<span class="json-${type}">${value}</span>`;
        },
    }
}
</script>

<style>
    p {
        margin: 1px;
    }

    .json-key {
        color: brown;
        display: inline;
    }
    
    .json-value {
        color: navy;
        display: inline;
    }

    .json-string {
        color: olive;
        display: inline;
    }

</style>