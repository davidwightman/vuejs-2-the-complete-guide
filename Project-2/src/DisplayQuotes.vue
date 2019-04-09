<template>
<div>
    <ul>
        <Quote :quotes="quotes" @deleteQuoteEvent="$emit('deleteQuoteApp', $event)"/>
    </ul>
    </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
    props: ['quotes', 'deleteQuoteApp'],
    components: {
        Quote
    }
}
</script>