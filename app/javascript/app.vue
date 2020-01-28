<template>
  <v-app>
    <p> {{message}} </p>
    <v-btn class="primary" v-on:click="messageIs()"> what is message? </v-btn>
    <v-alert
      :value = "messageValue"
      type = "success"
    >
      This is a success alert.
    </v-alert>
    <google-contacts></google-contacts>
    <sample-vuetify> </sample-vuetify>
  </v-app>
</template>


<script>
import GoogleContacts from './components/GoogleContacts'
import sampleVuetify from './components/sampleVuetify'
export default {
  components:{
    'google-contacts': GoogleContacts,
    'sample-vuetify': sampleVuetify
  },
  data(){
    return {
        messageValue: false,
        message: "Vuetify is here"
    }  
  },
  methods:{
    messageIs(){
       this.messageValue == true ? this.messageValue =false : this.messageValue =true
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