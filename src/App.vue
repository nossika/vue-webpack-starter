<template>
    <section id="app">
        <section>
            <router-view name="body"></router-view>
        </section>
    </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import api from 'utils/api';
export default {
    created () {
        api.getPage({
            tip: 'a'
        })
        .then(res => {
            console.log(res);
        });
    }
}
</script>
<style lang="less">

</style>