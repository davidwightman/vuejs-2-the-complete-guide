<template>
<div>
  <li v-for="(quote, key) in quotes" v-bind:key="quote" @click="deleteQuote(key)">
    {{quote}}
  </li>
</div>
</template>

<script>
export default {
    props: ['quotes', 'deleteQuoteEvent'],
    methods: {
        deleteQuote(key){
            this.$emit('deleteQuoteEvent', key)
        }
    }
}
</script>