<template>
    <div class="row justify-content-center">
        <div class="col-md-12 my-3">
            <main>
                <title-cashier name="Keranjang Belanja" />
                <table-cashier
                    :kolom="['Name', 'Quantity', 'Price']"
                    :carts="carts"
                />
                <struk-pembayaran />
            </main>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    computed:{
        ...mapGetters({
            carts: "getCart"
        }),
        ...mapGetters({
            total: "getTotal"
        })
    }
};
</script>
