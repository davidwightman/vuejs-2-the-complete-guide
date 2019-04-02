<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item"
                v-for="item in servers"
                @click="getServerDetail(event)"
                :currnet-server.id = "id"
                :currnet-server.status = "status"
            >
                    Server #{{ item.id }}
            </li>
        </ul>
    </div>
</template>

<script>
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
            // console.log(`clicked`)
            console.log(event)
            this.currentServer = this.servers[event.target.value]
            console.log(this.currentServer)
        }
    }
   
}
</script>

<style>

</style>
