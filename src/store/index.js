import Vue from "vue";
import Vuex from "vuex";
import {db} from "../firebaaseInit.js"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users:[],
  },
  mutations: {
    ALL_USERS(state,data) {
        state.users.push(data)
   },
    DELETE_USER(state,id) {
      state.users = state.users.filter((user) => {
        return user.id != id
      })
    }
  },
  
  
  actions: {
    async getAllUser({commit}) {
      try {
        const database = await db.collection('user').get();
        database.forEach((doc) => {
          const data = {
            firstName:doc.data().firstName,
            lastName:doc.data().lastName,
            phoneNumber:doc.data().phoneNumber,
            userId:doc.id,
          }
          commit("ALL_USERS",data)
        })
      
      }catch (error) {
         console.log(error.message)
      }
    },
   async deleteUser({commit},id) {
      await  db.collection("user").doc(id).delete()      
      commit("DELETE_USER", id)    
    },
    // async updateUserInfo({state},id) {
    //   const update = await  db.collection("user").doc(id).update({
    //     firstName:state.users.firstName,
    //     lastName:state.users.lastName,
    //     phoneNumber:state.users.phoneNumber,
    //  }) 
    
    //  console.log(update)     
    // },
    
  },
  modules: {},
});
