<script>
import copy from 'copy-to-clipboard';

export default {
    name: 'VaahVueClickToCopy', // vue component name
    props:{
        data:{
            type: String,
            default: null
        },
        text:{
            type: String,
            default: null
        },
    },
    data() {
        let obj = {
            vh_data: this.data,
            vh_text: this.data,
        };
        return obj
    },
    methods: {
        copyData: function () {

            copy(this.vh_data);

            this.$emit('copied', this.vh_data);

        },
    }
}
</script>

<template>
    <span class="vaah-vue-clicktocopy" v-on:click="copyData()">
        {{vh_text}}
    </span>
</template>

<style scoped>

    .vaah-vue-clicktocopy{
        cursor: pointer !important;
    }

</style>
