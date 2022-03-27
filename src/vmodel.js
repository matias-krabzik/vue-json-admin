export default {
    props: {
        value: { require: false }
    },
    data () {
        return {
            localValue: this.value
        }
    },
    watch: {
        localValue (value) {
            this.$emit('input', value)
        },
        value (value) {
            this.localValue = value
        }
    }
}
