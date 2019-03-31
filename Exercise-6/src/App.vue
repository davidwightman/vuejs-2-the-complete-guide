<template>
    <div class="container">
        <Header />
        <div class="row">
            <ServerList />
            <ServerDetails />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import ServerList from './ServerList.vue'
import ServerDetails from './ServerDetails.vue'

export default {
    components: {Header, Footer, ServerList, ServerDetails},
}
</script>

<style>
</style>
