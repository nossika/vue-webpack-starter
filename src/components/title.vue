<template>
    <section>
        this is a {{title}} ~!
    </section>
</template>
<script lang="ts">
export default {
    props: {
        title: String,
    },
}
</script>
<style scoped>
section {
    font-weight: bold;
}
</style>