<template>
    <section>
        <v-title title="title"></v-title>
        <a href="/#/room1">enter room</a>
        <div>
            <button @click="updateGreeter">dispatch an action!</button>
            <div>state: {{ greeter }} </div>
        </div>
    </section>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import vTitle from 'components/title.vue';
export default {
    components: { vTitle },
    methods: {
        ...mapActions(['setGreeter']),
        updateGreeter () {
            this.setGreeter(this.greeter + '+');
        },
    },
    computed: {
        ...mapGetters(['greeter']),
    },
    created () {
        this.setGreeter('');
    },
}
</script>