<template>
  <div class="hotels-list">
    <HotelListItem v-for="hotel in hotelList" :key="hotel.id" :hotel="hotel"></HotelListItem>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed, defineProps } from 'vue'
import store from '@/store'
import IHotel from '../models/hotel'
import HotelListItem from '@/components/HotelListItem.vue'
import hotels from '../../public/data/hotels.json'

const props = defineProps({
  ratingsFilter: { type: Number, default: () => { return 0 } },
  nameFilter: { type: String, default: () => { return '' } }
})

const destination = ref('')

const hotelList = computed(() => {
  let filtered = hotels.filter(x => x.city === destination.value) as Array<IHotel>
  if (props.ratingsFilter > 0) {
    filtered = filtered.filter(x => x.hotel_rating === props.ratingsFilter)
  }
  if (props.nameFilter.length > 2) {
    console.log('filtering ' + props.nameFilter)

    filtered = filtered.filter(x => x.name.toLocaleLowerCase().includes(props.nameFilter.toLocaleLowerCase()))
  }
  return filtered
})
onMounted(() => {
  destination.value = store.state.destination
  console.log(destination.value)
})

</script>
<style lang="scss">
.hotels-list {
  width: 100%;
}
</style>
