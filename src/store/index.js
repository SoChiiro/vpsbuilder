import { createStore } from 'vuex'

const store = createStore({
    state:{
        userLogged: {
            pseudo : '',
            pwd: '',
        },
        view : 'home',
        
    },
    getters: {
        getView(state) {
            return state.view;
        },
    },
    mutations: {
        setView(state, newView){
            state.view = newView;
        },
    }
});

export default store;