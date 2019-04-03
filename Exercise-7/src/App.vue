<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <Servers @showDetailAppEvent="showDetailFinalEvent($event)" />
            <app-server-details :status="serverStatus"
            :id="serverId"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data: function(){
            return {
                serverStatus: '',
                serverId: ''
            }
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        methods: {
            showDetailFinalEvent(e){
                this.serverStatus = e.status
                this.serverId = e.id
            },
        }
    }
</script>
