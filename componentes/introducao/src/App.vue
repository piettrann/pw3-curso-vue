<template>
  <div>
      <AppContador v-for="c in 10" :key="c" />
      <button>???</button>
  </div>
</template>

<script>
import AppContador from '@/components/AppContador.vue'

export default {
  components: {
      AppContador
  }
}
</script>

<style scoped>
    /* *{
      border: 1px solid red;
    } */
</style>
