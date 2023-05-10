<template>
  <span v-for="index in roundedStarsNumber" :key="index">
    ✴
  </span>
</template>
<script lang="ts" setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  starsCount: { type: Number, default: () => { return 1 } }
})
const roundedStarsNumber = computed(() => {
  return Math.round(props.starsCount)
})
</script>
<style lang="scss" scoped>
span {
  text-align: left;
}
</style>
