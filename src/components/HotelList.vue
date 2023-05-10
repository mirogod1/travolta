<template>
    <div>
        <HotelListItem v-for="hotel in hotelList" :key="hotel.id" :hotel="hotel"></HotelListItem>
    </div>
</template>
<script lang="ts" setup>
import Hotel from '../models/hotel'
import HotelListItem from '@/components/HotelListItem.vue'
import hotels from '../../public/data/hotels.json'

const hotelList = hotels as Array<Hotel>
</script>
<style ></style>
