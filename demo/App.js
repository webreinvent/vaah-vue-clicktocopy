import vhCopy from "./../dist/vaah-vue-clicktocopy.esm.js";

export default {
    name: 'App',
    template: `
    <div class="container mx-auto p-4">
      <h1>Demo</h1>
      
      <vh-copy :data="data" :text="text"
      class="btn btn-primary"
      v-on:copied="getCopiedData"
      ></vh-copy>
      
      
    </div>
  `,
    components:{
        'vh-copy': vhCopy,
    },
    data()
    {
        let obj = {
            data: 'Copied Data',
            text: 'Show Text',
        };

        return obj;
    },
    methods: {
        getCopiedData: function (data) {

            console.log("copied data", data);

        }
    }

};