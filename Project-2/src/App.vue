<template>
    <div class="container">
<InputQuote @saveQuote="saveQuoteEvent($event)"/>
<DisplayQuotes />
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
            saveQuoteEvent(quote){
              console.log(`in save quote event`)
              this.quotes = this.quotes.push(quote)
              console.log(this.quotes)
            }
        }
    }
</script>

<style>
</style>
