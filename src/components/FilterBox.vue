<template>
  <div class="filters-container">
    <div>
      <label>Filter by hotel name</label>
      <input type="text" v-model="hotelNameFilter">
    </div>
    <div class="stars-container">
      <label>Filter by rating</label>
      <div @click="setRatingFilter(5)">
        <DrawStars :starsCount="5"></DrawStars>
      </div>
      <div @click="setRatingFilter(4)">
        <DrawStars :starsCount="4"></DrawStars>
      </div>
      <div @click="setRatingFilter(3)">
        <DrawStars :starsCount="3"></DrawStars>
      </div>
      <div @click="setRatingFilter(2)">
        <DrawStars :starsCount="2"></DrawStars>
      </div>
      <div @click="setRatingFilter(1)">
        <DrawStars :starsCount="1"></DrawStars>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue'
import DrawStars from './DrawStars.vue'

const emits = defineEmits(['ratingFilterChanged', 'nameFilterChanged'])

const hotelNameFilter = ref('')
const ratingsFilter = ref(0)

const setRatingFilter = (n: number) => {
  ratingsFilter.value = n
  emits('ratingFilterChanged', n)
}

watch(hotelNameFilter, () => {
  emits('nameFilterChanged', hotelNameFilter.value)
})
</script>
<style lang="scss" scoped>
.filters-container {
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
}

.stars-container {
  cursor: pointer;
}

input {
  background: white;
}
</style>
