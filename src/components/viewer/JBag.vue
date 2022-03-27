<template>
  <span class="a">{{ text }}</span>
</template>

<script>
export default {
    name: "j-bag",
    props: {
        text: {
            type: String, 
            required: true
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
        margin-left: 5px;
        margin-right: 5px;
        height: auto;
        border: 1px solid #686451;
        border-radius: 3px;  
        background-color: #acacac; 
    }
</style>