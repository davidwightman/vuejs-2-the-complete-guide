new Vue({
  el: '#exercise',
  data: {
    classValue: true,
    color: 'green'
  },
  methods: {
    startEffect: function() {
      console.log(`hello`)
      let vm = this;
      setInterval(function(){
        vm.classValue = !vm.classValue
      }, 2000)
    }
  }
});
