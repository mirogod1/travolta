<template>
  <div class="hotels-container">
    <FilterBox @ratingFilterChanged="setRatingsFilter($event)" @nameFilterChanged="setNameFilter($event)"></FilterBox>
    <HotelList :ratingsFilter="ratingFilter" :nameFilter="nameFilter"></HotelList>
  </div>
</template>
<script lang="ts" setup>
import FilterBox from '@/components/FilterBox.vue'
import HotelList from '@/components/HotelList.vue'
import { ref } from 'vue'

const ratingFilter = ref(0)
const nameFilter = ref('')

const setRatingsFilter = (event: number) => {
  console.log('setRatingsFilter ' + event)
  ratingFilter.value = event
}
const setNameFilter = (event: string) => {
  console.log('setNameFilter ' + event)

  nameFilter.value = event
}
</script>
<style lang="scss">
.hotels-container {
  display: flex;
}
</style>
