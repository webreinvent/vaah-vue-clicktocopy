import t from"copy-to-clipboard";var e=function(t,e,n,o,a,i,r,s,d,c){"boolean"!=typeof r&&(d=s,s=r,r=!1);var l,u="function"==typeof n?n.options:n;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,a&&(u.functional=!0)),o&&(u._scopeId=o),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,d(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):e&&(l=r?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),l)if(u.functional){var f=u.render;u.render=function(t,e){return l.call(e),f(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,l):[l]}return n}({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vaah-vue-clicktocopy",on:{click:function(e){return t.copyData()}}},[t._v("\n    "+t._s(t.vh_text)+"\n")])},staticRenderFns:[]},void 0,{name:"VaahVueClickToCopy",props:{data:{type:String,default:null},text:{type:String,default:null}},data:function(){return{vh_data:this.data,vh_text:this.data}},methods:{copyData:function(){t(this.vh_data),this.$emit("copied",this.vh_data)}}},"data-v-1792eeb1",!1,void 0,void 0,void 0);function n(t){n.installed||(n.installed=!0,t.component("vaah-vue-clicktocopy",e))}var o={install:n},a=null;"undefined"!=typeof window?a=window.Vue:"undefined"!=typeof global&&(a=global.Vue),a&&a.use(o),e.install=n;export default e;
