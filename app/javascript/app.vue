<template>
  <div id="app">
    <p>{{ message }}</p>
    <button v-on:click="addOne">Add One</button>
    {{counter}}
    <app-hello> </app-hello>
  </div>
</template>

<script>
import hello_component from './components/hello_component.vue'
export default {
  data() {
    return {
      message: "Hello Vue!",
      counter: 0
    }
  },
  components:{
    'app-hello': hello_component
  },
  methods:{
    addOne: function(){ 
          alert(this.message)
          this.counter += 1;
         
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
