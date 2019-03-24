new Vue({
  el: '#exercise',
  data: {
    classValue: true,
    color: 'green',
    long: 'long',
    styleColor: '',
    intervalWidth: 10,
    class2: '',
    argh: ''
  },
  methods: {
    startEffect: function() {
      console.log(`hello`)
      let vm = this;
      setInterval(function(){
        vm.classValue = !vm.classValue
      }, 2000)
    },
    startProgressBar: function(){
      let vm = this;
      setInterval(function(){
        vm.intervalWidth = vm.intervalWidth + 10 
        console.log('hi')
      }, 200)
    }
  }
});
