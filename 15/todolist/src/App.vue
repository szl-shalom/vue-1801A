<template>
  <div id="app">
      <Mess />
      <Content />
  </div>
</template>

<script>
import Mess from './components/Mess.vue';
import Content from './components/Content.vue';

export default {
  name: 'App',
  components: {
    Content,
    Mess
  }
}
</script>

<style>

</style>
