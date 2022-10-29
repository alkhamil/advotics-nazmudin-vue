import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const app = createApp(App)

app.config.globalProperties.$filters = {
    toCurrency(value) {
        if (typeof value !== "number") {
            return value;
        }
        var formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: '0'
        });
        return formatter.format(value);
    }
}

app.use(router)
app.mount('#app')
