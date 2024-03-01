<template>
    <div class="row justify-content-center">
        <div class="col-md-12 my-3">
            <main>
                <title-cashier name="All Product" />
                <add-product />
                <table-cashier
                    :kolom="['Name', 'Description', 'Stock', 'Price']"
                    :products="products"
                />
            </main>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    mounted(){
        this.$store.dispatch("loadProduct")
    },
    computed: {
        ...mapGetters({
            products: "getProduct",
        }),
    },
};
</script>
