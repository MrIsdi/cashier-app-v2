import { createStore } from "vuex";
import axios from "axios"

const result = (data) =>{
    let total = 0
    data.forEach((a)=>{
        total += a.price
    })
    return total
}

export default createStore({
    state: {
        products: [],
        carts: [],
        total: 0,
    },
    getters: {
        getProduct(state){
            return state.products;
        },
        getCart(state){
            return state.carts
        },
        getTotal(state){
            return state.total
        }
    },
    actions: {
        addProduct(context, payload) {
            context.commit("ADD_PRODUCT", payload);
        },
        deleteProduct(context, payload) {
            context.commit("DELETE_PRODUCT", payload);
        },
        productAdd(context, payload){
            context.commit("PRODUCT_ADD", payload)
        },
        loadProduct: async (context) =>{
            const response = await axios.get("api/getProduct")
            context.commit("GET_PRODUCT", response.data.data)
        }
    },
    mutations: {
        ADD_PRODUCT(state, payload) {
            let product = state.products.filter((a) => a.id == payload)[0];
            product.stock -= 1;
            if (state.carts.length == 0) {
                state.carts.push({
                    id: product.id,
                    name: product.name,
                    quantity: 1,
                    price: 1 * product.price,
                });
            } else {
                let cart = state.carts.filter((a) => a.name == product.name);
                if (cart.length == 0) {
                    state.carts.push({
                        id: product.id,
                        name: product.name,
                        quantity: 1,
                        price: 1 * product.price,
                    });
                } else {
                    cart[0].quantity += 1;
                    cart[0].price = cart[0].quantity * product.price;
                }
            }
            state.total = result(state.carts);
        },
        DELETE_PRODUCT(state, payload) {
            let cart = state.carts.filter((a) => a.id == payload)[0],
                product = state.products.filter((a) => a.id == payload)[0];
            cart.quantity -= 1;
            cart.price = cart.quantity * product.price;
            product.stock += 1;
            if (cart.quantity == 0) {
                state.carts = state.carts.filter((a) => a.id !== cart.id);
            }
            state.total = result(state.carts);
        },
        PRODUCT_ADD(state, payload){
            state.products.push(payload)
        },
        GET_PRODUCT(state, payload){
            state.products = payload
        }
    },
});
