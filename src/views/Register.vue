<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1">FirstName</label>
                  <input type="text" class="form-control" v-model="firstName" >
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">LastName</label>
                  <input type="text" class="form-control" v-model="lastName" >
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">phoneNumber</label>
                  <input type="text" class="form-control" v-model="phoneNumber" >
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email</label>
                  <input type="email" class="form-control" v-model="email" >
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control"  v-model="password">
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="signUp">Submit</button>
              </form>
            </div>
           
               <p v-if="success">
                  <span class="text-success">{{errorMsg}}</span>
                </p>
               <p v-if="err">
                  <span class="text-danger">{{errorMsg}}</span>
                </p>
            
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {userAuth,db} from '../firebaaseInit.js'
export default {
  data() {
    return {
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      phoneNumber:'',
      err:null,
      success:null,
      errorMsg:''
    }
  },
  methods:{
    async signUp() {
      try {
         const currentUser = await userAuth.createUserWithEmailAndPassword(this.email,this.password)
         const database = await db.collection('user').doc(currentUser.user.uid)
         database.set({
           firstName:this.firstName,
           lastName:this.lastName,
           phoneNumber:this.phoneNumber,
         })
          this.success=true
          this.errorMsg= 'Registration Successfull'
          setTimeout(() => {
          this.success= false
        },3000)
      
      }catch (error) {
          this.err=true
          this.errorMsg= error.message
        setTimeout(() => {
          this.err= false
        },3000)
      }
    }
  }
};
</script>
