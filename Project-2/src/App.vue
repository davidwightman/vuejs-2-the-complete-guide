<template>
  <div class="container">
    <InputQuote @saveQuoteEvent="saveQuote($event)"/>
    <DisplayQuotes v-bind:quotes="quotes"/>
  </div>
</template>

<script>
import DisplayQuotes from './DisplayQuotes.vue'
import InputQuote from './InputQuote.vue'

    export default {
      data: function(){
        return {
          quotes: []
        }
      },
      components: {
        DisplayQuotes,
        InputQuote
      },
      methods: {
        saveQuote: function(e){
          console.log(`in save quote event ${e}!!!!!!!!!!!`)
          this.quotes.push(e)
        }
      }
    }
</script>

<style>
</style>
