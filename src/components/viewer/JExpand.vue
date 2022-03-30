<template>
    <input type="button" class="a" :value="text" @click="change"/>
</template>

<script>
export default {
    name: "j-expand",
    props: {
        expand: { 
            type: Boolean, 
            required: true
        }
    },
    computed: {
        text() {
            return this.expand ? "-": "+";
        }
    },
    methods: {
        change() {
            this.$emit("changed");
        }
    }
}
</script>

<style>
    input.a {
        color: #292929;
        display: inline; /* the default for span */
        margin-left: 5px;
        margin-right: 5px;
        border: 1px solid #686451;
        border-radius: 3px;  
        background-color: #f1f1f1; 
        font-size: 0.6em;
    }
</style>