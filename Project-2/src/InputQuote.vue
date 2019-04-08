<template>
  <div>
    <div>Input A Quote</div>
    <input placeholder="enter a quote here" v-model="inputData"/> 
    <button @click="saveQuoteEvent">Add Quote</button>
  </div>
</template>
<script>
export default {
  props: ['saveQuote'],
  data: function(){
    return {
      inputData: '',
    }
  },
  methods: {
    saveQuoteEvent: function(){
      this.$emit('saveQuoteEvent', this.inputData)
      this.inputData = ''
    }
  }
}
</script>