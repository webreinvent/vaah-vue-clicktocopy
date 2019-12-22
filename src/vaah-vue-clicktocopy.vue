<script>
import copy from 'copy-to-clipboard';
import {ToastProgrammatic as Toast} from "buefy";

export default {
    name: 'VaahVueClickToCopy', // vue component name
    props:{
        data:{
            type: String,
            default: null
        },
        label:{
            type: String,
            default: null
        },
        confirmDialog:{
            type: String,
            default: null
        },
    },
    watch:{
        data: function (newVal, oldVal) {
            this.vh_data = newVal;
        },
        label: function (newVal, oldVal) {
            this.vh_label = newVal;
        },
        confirm_dialog: function (newVal, oldVal) {
            this.vh_confirm_dialog = newVal;
        },
    },
    data() {
        let obj = {
            vh_data: this.data,
            vh_label: this.label,
            vh_confirm_dialog: this.confirm_dialog,
        };
        return obj
    },
    methods: {
        copyData: function () {
            copy(this.vh_data);
            this.$emit('copied', this.vh_data);

            if(this.vh_confirm_dialog === 'buefy')
            {
                this.buefyConfirmDialog();
            }

        },
        buefyConfirmDialog: function () {
            Toast.open({
                message: 'Copied',
                type: 'is-success'
            });
        }
    }
}
</script>

<style scoped>

    .vaah-vue-clicktocopy{
        cursor: pointer !important;
    }

</style>
