<template>
    <section>
        <div>
            room: {{ room }}
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
            room () {
                return this.$route.params.room;
            },
        },
        created () {
            this.setGreeter('');
        },
    }
</script>