<template>
    <div class="table-responsive-md mt-3">
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th v-for="(data, index) in kolom" :key="index">{{ data }}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <row-cashier :products="products" :carts="carts" />
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        props:{
            products:{
                default: []
            },
            carts:{
                default: []
            },
            kolom:{
                require: true
            },
        },
    }
</script>
