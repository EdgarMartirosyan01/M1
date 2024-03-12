import { createStore } from 'vuex';

const store = createStore({
    state: {
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    },
    mutations: {
        addToCartMutation(state, product) {
            if (product && product.id && product.count > 0) {
                const existingItem = state.cartItems.find(item => item.id === product.id);
                if (existingItem) {
                    existingItem.count = product.count;
                } else {
                    state.cartItems.push({ ...product });
                }
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },
    },
    actions: {
        addToCartAction({ commit }, product) {
            commit('addToCartMutation', product);
        },
    },
});

export default store;