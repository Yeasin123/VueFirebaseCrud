import Vue from "vue";
import Vuex from "vuex";
import {
  db
} from "../firebaaseInit.js"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    ALL_USERS(state, data) {
      state.users.push(data)
    },
    DELETE_USER(state, id) {
      state.users = state.users.filter((user) => {
        return user.userId != id
      })
    }
  },


  actions: {
    async getAllUser({commit,state}) {
      try {
        const database = await db.collection('user').get();
        database.forEach((doc) => {
          if (!state.users.some((user) => user.userId === doc.id)) {
            const data = {
              firstName: doc.data().firstName,
              lastName: doc.data().lastName,
              phoneNumber: doc.data().phoneNumber,
              userId: doc.id,
            };
            commit("ALL_USERS", data)
          }
        })

      } catch (error) {
        console.log(error.message)

      }

    },

     deleteUser({commit}, id) {
       db.collection("user").doc(id).delete().then(() => {
        commit("DELETE_USER", id)
      })
      
    },

  },
  modules: {},
});