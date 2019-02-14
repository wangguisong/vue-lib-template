import Test from './src/test.vue'

Test.install = Vue => {
  Vue.component(Test.name, Test)
}

export default Test
