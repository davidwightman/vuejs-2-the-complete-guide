<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
           <Server 
           v-for="server in servers"
           :id="server.id"
           @showDetailEvent="showDetailEvent($event)"/>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue'

export default {
    data: function() {
         return{
            servers: [
                {id: 1, status: 'normal'},
                {id: 2, status: 'critical'},
                {id: 3, status: 'normal'},
                {id: 4, status: 'unknown'},
                {id: 5, status: 'unknown'},
            ],
            currentServer: {id: 1, status: 'normal'}
         }
    },
    methods: {
        getServerDetail(event) {
            this.currentServer = this.servers[event.target.value]
        },
        showDetailEvent(e){
            e = e-1
            this.$emit('showDetailAppEvent', this.servers[e])
        }

    },
    components: {
        Server
    }
   
}
</script>

<style>

</style>
