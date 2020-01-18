<template>
    <div>
        <h1>I am {{title}} component</h1>
        
            <v-btn color="success">Success</v-btn>
            <v-btn color="error">Error</v-btn>
            <v-btn color="warning">Warning</v-btn>
            <v-btn color="info">Info</v-btn>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
             title: 'hello',
        } 
    }
}
</script>