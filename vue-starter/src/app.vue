<template>
  <section>
    <my-title>Vue Starter</my-title>
    <div>Hi, {{ user }}</div>
    <div>
      <router-link to="/">home</router-link>
      <router-link to="/list">list</router-link>
    </div>
  <section>
    <router-view name="body"></router-view>
  </section>
  </section>
</template>

<script>

import MyTitle from 'components/my-title';
import api from 'api';

export default {
  components: {
    MyTitle,
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  created() {
    this.$store.dispatch('setUser', 'abc');
    api.test().then(res => {
      console.log(res);
    });
  },
}
</script>

<style>
html {
  font-size: 16px;
}
</style>
