<template>
    <section>
        <v-title></v-title>
        <div>hey {{ greeter }} !</div>
    </section>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import vTitle from 'components/title.vue';
export default {
    components: { vTitle },
    methods: {
        ...mapActions(['setGreeter']),
    },
    computed: {
        ...mapGetters(['greeter']),
    },
    created () {
        this.setGreeter('you');
    },
}
</script>