<template>
    <li class="list-group-item"
    @click="showDetail" >
        Server #{{ id }}
    </li>
</template>

<script>
export default {
    props: ['id', 'showDetailEvent', 'showDetailEvent'],
    methods: {
        showDetail(){
            this.$emit('showDetailEvent', this.id)
        }
    }
}
</script>