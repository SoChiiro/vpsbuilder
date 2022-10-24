import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import "semantic-ui-css/semantic.min.css";

// eslint-disable-next-line no-unused-vars
class Vue {
    _any;
    constructor(any) {
        this._any = any;
        new Vue({
            el: '#app',
            router,
            components: { App },
            store: store,
            template: '<App/>'
        })
    }

}



createApp(App).use(router).use(store).mount('#app')
