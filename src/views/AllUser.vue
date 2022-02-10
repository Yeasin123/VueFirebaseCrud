<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
         <all-user-table />
        </div>
      </div>
    </div>
</template>

<script>
import AllUserTable from '../components/AllUserTable.vue';
export default {
  components: { AllUserTable },
  
  methods:{
     allUsers() {
       this.$store.dispatch("getAllUser")
    },
    deleteUser(id) {
     this.$store.dispatch("deleteUser",id)         
    },
    
  },
  created() {
      this.allUsers()
  },
};
</script>
