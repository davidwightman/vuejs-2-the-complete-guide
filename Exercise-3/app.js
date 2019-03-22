new Vue({
        el: '#exercise',
        data: {
            value: 0,
            result: ''
        },
        computed: {
            hello: function(){
                return this.value === 7 ? 'done' : 'not there yet'
            }
        }
    });