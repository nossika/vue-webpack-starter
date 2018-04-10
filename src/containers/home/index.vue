<template>
    <section>
        <v-title title="title"></v-title>
        <a href="javascript:void(0);" @click="enterRoom">enter room</a>
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
        enterRoom () {
            this.$router.push('/room1');
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