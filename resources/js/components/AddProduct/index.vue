<template>
    <button type="button" class="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Add product
    </button>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-dark text-white">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Tambah Produk</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-between flex-column">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nama Produk</label>
                            <input type="text" class="form-control" id="name" v-model="name">
                        </div>
                        <div class="mb-3">
                            <label for="desc" class="form-label">Deskripsi Produk</label>
                            <input type="text" class="form-control" id="desc" v-model="desc">
                        </div>
                        <div class="mb-3">
                            <label for="stock" class="form-label">Jumlah Produk</label>
                            <input type="text" class="form-control" id="stock" v-model="stock">
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Harga Produk</label>
                            <input type="text" class="form-control" id="price" v-model="price">
                        </div>
                        <div class="mb-3">
                            <button type="button" class="btn btn-primary" @click="handleProduct">Add product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
    export default {
        data(){
            return{
                name:"",
                desc:"",
                stock:0,
                price:0
            }
        },
        methods:{
            handleProduct(){
                this.$store.dispatch("productAdd", {
                    id: this.product[this.product.length - 1].id + 1,
                    name: this.name,
                    desc: this.desc,
                    stock: this.stock,
                    price: this.price
                })
                this.name = ""
                this.desc = ""
                this.stock = 0
                this.price = 0
            }
        },
        computed:{
            ...mapGetters({
                product: "getProduct"
            })
        }
    }
</script>
