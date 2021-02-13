<template>
<div >
  
  <div class="skulldiv">
      <img alt="Vue logo" class="skull" src="./assets/punisher.png">
  </div>
  <HelloWorld msg="Welcome to the coolest ToDoList"/>

  <p style="color:green">made by Souvik Das</p>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.skulldiv{
   width: 100%;
}

.skull{
  width: 12%;
}

</style>
