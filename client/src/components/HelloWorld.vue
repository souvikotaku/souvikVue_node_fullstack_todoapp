<template>
  <div class="hello" >
    <h1>{{ msg }}</h1>
    
    <h3>Submit your ToDos for today</h3><br/>
    <div style="display:flex;justify-content:center">
       <input type='text' placeholder="Enter Work" className="form-control inpBox" v-model="query"/>
    </div><br/>
      <button type="submit" className="btn btn-md btn-success btndiv" @click="addTodo">Submit</button><br/>

    
    <div style="display:flex;justify-content:center">
      <div class="tododiv">
      <div
      class="todolist"
      v-for="todo in todos" 
      v-bind:key="todo"
    >
      <ul>
        <li>{{todo.work}}</li><span title="Delete" style="cursor:pointer;float:right;padding-right:6px" @click="delTodo(todo._id)"  ><i class="fas fa-times-circle"></i></span>
      </ul>
    </div>
    </div>
    </div>
    <br/><br/>
    
    
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
      return {
        query: '',
        todos: {},
        
      }
  },
  methods: {
    // const url = "http://localhost:5003/todolists/"
    // const response = await fetch(url);
    // const data = response.json();
    // console.log(data);

    
    addTodo(){

      let form_data = {
        work: this.query
      }
      
        axios
      .post(`https://souvik-vuejs-todoapp.herokuapp.com/todolists/add`,form_data)
      .then(() => {
        // console.log(res.data)
        alert('submitted successfully');
        window.location.reload()
        
      });
    },

    delTodo(id){
      if(window.confirm("Are you sure you want to delete this ToDo?")){
          axios
      .delete(`https://souvik-vuejs-todoapp.herokuapp.com/todolists/`+ id)
      .then(() => {
        
        window.location.reload()
        
      });
      }
     
    }

    
  },

  
  mounted: async function(){
      const url = `https://souvik-vuejs-todoapp.herokuapp.com/todolists/`;
      const response2 = await fetch (url);
      const responseJson2 = await response2.json();
      // console.log(responseJson2);

      this.todos = responseJson2;

      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import '../assets/bootstrap.css';
@import '../assets/todostyle.css';

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
