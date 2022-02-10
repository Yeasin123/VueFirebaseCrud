<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email</label>
                  <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control"  v-model="password" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="Login">Login</button>
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
import {userAuth} from '../firebaaseInit.js'
export default {
  data() {
    return {
      email:'',
      password:'',
      err:null,
      success:null,
      errorMsg:''
    }
  },
  methods:{
    async Login() {
      try {
         const login = await userAuth.signInWithEmailAndPassword(this.email,this.password)
         console.log(login)
          this.success=true
          this.errorMsg= 'Registration Successfull'
          setTimeout(() => {
          this.success= false
        },3000)
        this.$router.push({name:'Home'})
      
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
