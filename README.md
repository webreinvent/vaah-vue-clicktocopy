# vaah-vue-clicktocopy

> Click To Copy Vue.js component

Please consider starring the project to show your :heart: and support.


## Install

Install with [npm](https://www.npmjs.com/):

```sh
npm i vaah-vue-clicktocopy
```

Register the component

```sh
import Vue from 'vue'
import VaahVueClickToCopy from 'vaah-vue-clicktocopy'

Vue.component('vh-copy', VaahVueClickToCopy)
```

You can pass following `props` to the vue components:

```html
<vh-copy class="btn btn-primary"
:data="'Data string to Copy'"
:label="'Text String to Display'"
:confirm_dialog="'buefy'"
@copied="copiedData"
></vh-copy>
```

OR

You can write label in between the tags as well:

```html
<vh-copy class="btn btn-primary"
:data="'Data string to Copy'"
:confirm_dialog="'buefy'"
@copied="copiedData">
Copy
</vh-copy>
```

OR

You can also write html tag for icon or anything:

```html
<vh-copy class="btn btn-primary"
:data="'Data string to Copy'"
:confirm_dialog="'buefy'"
@copied="copiedData">
<!--code for icon-->
</vh-copy>
```

## Support us

[WebReinvent](https://www.webreinvent.com) is a web agency based in Delhi, India. You'll find an overview of all our open source projects [on github](https://github.com/webreinvent).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

#### Credits:
- To generate vue npm package:
https://github.com/team-innovation/vue-sfc-rollup

- To check download stats:
http://npm-stats.org/#/vaah-vue-clicktocopy
