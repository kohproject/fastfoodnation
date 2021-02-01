import { createStore } from 'vuex';
import mod1 from './modules/mod1';


export default createStore({
  modules:{
    mod1:mod1
  }
})


