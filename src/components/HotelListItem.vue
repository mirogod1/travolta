<template>
  <div class="hote-item">
    <div class="hotel-image">

    </div>
    <div class="hotel-data">
      {{ hotel.name }}
      {{ hotel.hotel_rating }}
      {{ hotel.address }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import IHotel from '@/models/hotel'
defineProps({
  hotel: { type: Object as () => IHotel, default: () => { return {} } }
})

</script>
<style lang="scss">
.hotel-image {
  width: 50px;
  height: 50px;
}
</style>
