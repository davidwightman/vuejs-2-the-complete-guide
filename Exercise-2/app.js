new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function(event){
                alert('Hi');
            },
            enterMethod: function(event){
                this.value = event.target.value
            }
        }
    });