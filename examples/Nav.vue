<template>
  <div>
    <ul>
      <li v-for="(item, idx) in list" :key="idx"><a href="javascript:"  @click="to(item)">{{item.title}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { title: 'test', path: '/test' }
      ]
    }
  },
  methods: {
    to(route) {
      this.$router.push(route.path)
    }
  }
}
</script>

<style>

</style>
