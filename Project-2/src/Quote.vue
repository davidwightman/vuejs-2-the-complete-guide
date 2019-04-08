<template>
<div>
<li v-for="quote in quotes" v-bind:key="quote">
    {{quote}}
</li>
</div>
</template>

<script>
export default {
    props: ['quotes']
}
</script>