<template>
   <div class="card">
             <div class="card-title">
                 <h3 class="text-center pt-1">All Users </h3>
             </div>
            <div class="card-body">
                <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">SL</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">PhoneNumber</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user,index) in users" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{user.firstName}}</td>
                        <td>{{user.lastName}}</td>
                        <td>{{user.phoneNumber}}</td>
                        <td>
                            <div class="d-flex justify-content-between">
                                <router-link class="btn btn-success btn-sm" :to="{name:'EditUser',params:{id:user.userId}}">Edit</router-link>
                                <button class="btn btn-danger btn-sm" @click="deleteUser(user.userId)">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
          </div>
</template>

<script>
import {mapState} from "vuex"
export default {
computed:{
    ...mapState(['users'])
  },
}
</script>

<style>

</style>