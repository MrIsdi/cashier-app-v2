/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});
const router = createRouter({
    history: createWebHistory(),
    routes
})

import AppComponent from './components/AppComponent.vue';
import ListProduct from './components/ListProduct/'
import ListCart from './components/ListCart/'
import StrukPembayaran from './components/StrukPembayaran/'
import TableCashier from './components/Table/'
import RowCashier from './components/Row/'
import TitleCashier from './components/Title/'
import AddProduct from './components/AddProduct/'
import Navbar from './components/Navbar'
import store from './store'

app.component('app-component', AppComponent);
app.component('list-product', ListProduct);
app.component('list-cart', ListCart);
app.component('struk-pembayaran', StrukPembayaran);
app.component('table-cashier', TableCashier)
app.component('row-cashier', RowCashier)
app.component('title-cashier', TitleCashier)
app.component('add-product', AddProduct)
app.component("navbar", Navbar)
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.use(router)
app.use(store).mount('#app');
