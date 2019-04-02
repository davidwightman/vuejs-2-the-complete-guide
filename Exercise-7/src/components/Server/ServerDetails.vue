<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server {{id}} status is {{status}}</p>
    </div>

</template>

<script>
export default {
    props: ['id', 'status']
}
</script>

<style>

</style>
