<template>
  <div class="hotel-item">
    <div class="hotel-image">
      🏨
    </div>
    <div class="hotel-data">
      <div>
        {{ hotel.name }}
      </div>
      <div>
        <DrawStars :starsCount="hotel.hotel_rating"></DrawStars>
      </div>
      <div>
        {{ hotel.address }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import IHotel from '@/models/hotel'
import DrawStars from './DrawStars.vue'
defineProps({
  hotel: { type: Object as () => IHotel, default: () => { return {} } }
})
</script>
<style lang="scss">
.hotel-item {
  display: flex;
  border: 1px solid black;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
  gap: 10px;
}

.hotel-data {
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.hotel-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border: 1px solid black;

}
</style>
