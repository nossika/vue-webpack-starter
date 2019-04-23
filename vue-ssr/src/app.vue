<template>
  <section>
    <my-title>Vue Starter</my-title>
    <div>Hi, {{ user }}</div>
    <div>
      <router-link :to="{ path: '/'}">home</router-link>
      <router-link :to="{ path: '/list'}">list</router-link>
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
  asyncData({store, route}) {
    // todo
    return new Promise((res) => {
      setTimeout(() => {
        store.commit('setUser', 'abc');
        res();
      }, Math.random() * 300);
    });
  },
  components: {
    MyTitle,
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  created() {
  
  },
}
</script>

<style>
html {
  font-size: 16px;
}
</style>
