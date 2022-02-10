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
                  <label for="exampleInputEmail1" class="form-label">Number</label>
                  <input type="number" class="form-control" v-model="number" >
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="updateUser">Submit</button>
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
import {db} from '../firebaaseInit.js'
export default {
  data() {
    return {

      firstName:'',
      lastName:'',
      number:'',
      err:null,
      success:null,
      errorMsg:''
    }
  },
  methods:{
     async getUserById() {
      try {
          let id = this.$route.params.id
          const database = await db.collection('user').doc(id).get();
          this.firstName = database.data().firstName,
          this.lastName = database.data().lastName,
          this.number = database.data().phoneNumber
      
      }catch (error) {
         console.log(error.message);
      }
    },
    async updateUser() {
       const id = this.$route.params.id
       try {
         await  db.collection("user").doc(id).update({
          firstName:this.firstName,
          lastName:this.lastName,
          phoneNumber:this.number
       }) 
      
        this.$router.push({name:'AllUser'})
         
       }catch (error) {
         console.log(error.message)
       }
       
    }
    
  },
  created() {
    this.getUserById()
  }
};
</script>
