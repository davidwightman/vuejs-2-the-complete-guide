<template>
  <div>
    <div>Input A Quote</div>
    <input placeholder="enter a quote here" v-model="inputData"/> 
    <button @click="saveQuote">Add Quote</button>
  </div>
</template>
<script>
export default {
  props: ['saveQuoteEvent'],
  data: function(){
    return {
      inputData: '',
    }
  },
  methods: {
    saveQuote(){
      console.log(`in save quote ${this.inputData}`)
      this.$emit('saveQuoteEvent', this.inputData)
     // this.inputData = ''
    }
  }
}
</script>