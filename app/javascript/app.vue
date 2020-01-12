<template>
  <div id="app">
    <p>{{ message }}</p>
    <button v-on:click="addOne">Add One</button>
    {{counter}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
      counter: 0
    }
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
