<template>
    <div>
        <p v-if="label != null" style="margin: 1px;">
            {{ label }}: <j-bag v-if="bags" :text="whatIsIt(localValue)" /> {{ startTag() }}
        </p>
        <p v-else style="margin: 1px;">{{ startTag() }}</p>
        <p style="margin: 1px; margin-left: 15px;" v-for="(k, i) in localValue" :key="i">

            <template v-if="isArray()">
                <j-bag v-if="bags" :text="whatIsIt(k)" /> {{ k }}
            </template>

            <json-admin v-else-if="hasChilds(localValue[i])" v-model="localValue[i]" :label="i" :bags="bags"></json-admin>

            <template v-else>
                {{ i }}: <j-bag v-if="bags" :text="whatIsIt(k)" /> {{ k }}
            </template>
            
        </p>
        <p style="margin: 1px;">{{ endTag() }}</p>
    </div> 
</template>

<script>
import JsonAdmin from './JsonAdmin.vue';
import vmodel from "../vmodel";
import JBag from './JBag.vue';

export default {
    components: { JsonAdmin, JBag },
    name: 'json-admin',
    mixins: [ vmodel ],
    props: {
        label: { type: String, default: null },
        bags: { type: Boolean, default: true }
    },
    methods: {
        startTag() {
            return this.isArray() ? "[": "{"
        },
        endTag() {
            return this.isArray() ? "]": "}"
        },
        isArray() {
            return Array.isArray(this.localValue)
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
        }
    }
}
</script>

<style>
    span.a {
        font-size: 65%;
        color: rgb(255, 255, 255);
        display: inline; /* the default for span */
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 1px;
        padding-bottom: 1px;
        height: auto;
        border: 1px solid #686451;
        border-radius: 3px;  
        background-color: #acacac; 
    }
</style>