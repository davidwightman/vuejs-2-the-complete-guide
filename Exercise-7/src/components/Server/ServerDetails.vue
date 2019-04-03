<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="id !== ''">
        <p >Server {{id}} status is {{status}}</p>
        <button @click="resetStatus">Reset Status</button>
        </div>
        <p v-else>Select a server</p>
    </div>

</template>

<script>
export default {
    props: ['id', 'status']
}
</script>