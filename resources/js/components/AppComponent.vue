<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 my-3">
                <list-product
                    :products="products"
                    @add-carts="handleAdd"
                />
                <list-cart
                    :carts="carts"
                    :total="total"
                    @delete-carts="handleDelete"
                />
            </div>
        </div>
    </div>
</template>

<script>
    const result = (data) =>{
        let total = 0
        data.forEach((a)=>{
            total += a.price
        })
        return total
    }
    export default {
        data(){
            return{
                products:[
                    {
                        id: 1,
                        name: "Indomie Goreng Rendang",
                        desc: "Masakan instan terenak di dunia",
                        stock: 10,
                        price: 3900
                    },
                    {
                        id: 2,
                        name: "Mie Gelas Rendang",
                        desc: "Mie instan khusus anak kosan",
                        stock: 3,
                        price: 1500
                    },
                    {
                        id: 3,
                        name: "Bakmi Mewah",
                        desc: "Kalau anak kos jangan macam2 deh",
                        stock: 80,
                        price: 10000
                    },
                ],
                carts: [],
                total: 0,
            }
        },
        methods: {
            handleAdd(id){
                let product = this.products.filter((a)=> a.id == id)[0]
                product.stock -= 1
                if(this.carts.length == 0){
                    this.carts.push(
                        {
                            id: product.id,
                            name: product.name,
                            quantity: 1,
                            price: 1 * product.price
                        }
                    )
                }else{
                    let cart = this.carts.filter((a)=> a.name == product.name )
                    if(cart.length == 0){
                        this.carts.push(
                            {
                                id: product.id,
                                name: product.name,
                                quantity: 1,
                                price: 1 * product.price
                            }
                        )
                    }else{
                        cart[0].quantity += 1
                        cart[0].price = cart[0].quantity * product.price
                    }
                }
                this.total = result(this.carts)
            },
            handleDelete(id){
                let cart = this.carts.filter((a)=> a.id == id)[0],
                    product = this.products.filter((a)=> a.id == id)[0]
                cart.quantity -= 1
                cart.price = cart.quantity * product.price
                product.stock += 1
                if(cart.quantity == 0){
                    this.carts = this.carts.filter((a)=> a.id !== cart.id)
                }
                this.total = result(this.carts)
            }
        }
    }
</script>
