<template>
<div>
    <ul>
        <Quote :quotes="quotes"/>
    </ul>
    </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
    props: ['quotes'],
    components: {
        Quote
    }
}
</script>