<template>
  <div>
    <span class="test-class">{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>

<style scoped>
  .test-class {
    color: blue;
    font-size: 24px;
  }
</style>
