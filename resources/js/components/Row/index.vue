<template>
    <template v-if="products.length > 0">
        <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.desc }}</td>
            <td>{{ product.stock }}</td>
            <td>Rp. {{ product.price }}</td>
            <td v-if="product.stock > 0">
                <button type="button" class="btn btn-primary" v-on:click="handleAdd(product.id)">Add to cart</button>
            </td>
        </tr>
    </template>
    <template v-else>
        <template v-if="carts.length > 0">
            <tr v-for="cart in carts" v-bind:key="cart.id">
                <td>{{ cart.name }}</td>
                <td>{{ cart.quantity }}</td>
                <td>Rp. {{ cart.price }}</td>
                <td>
                    <button type="button" class="btn btn-danger" v-on:click="handleDelete(cart.id)">Delete</button>
                </td>
            </tr>
        </template>
        <tr v-else>
            <td colspan="5">
                <p class="text-center">Produk belum ada</p>
            </td>
        </tr>
        <tr>
            <th colspan="2">Total:</th>
            <th colspan="3">Rp. {{ total }}</th>
        </tr>
    </template>
</template>
<script>
import { mapGetters } from "vuex"
    export default {
        props:{
            products: {
                default: []
            },
            carts: {
                default: []
            },
        },
        methods: {
            handleAdd(id){
                this.$store.dispatch("addProduct", id)
            },
            handleDelete(id){
                this.$store.dispatch("deleteProduct", id)
            }
        },
        computed:{
            ...mapGetters({
                total: "getTotal"
            })
        }
    }
</script>
