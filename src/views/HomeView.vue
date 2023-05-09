<template>
  <div class="home">

    <section>
      <fieldset>
        <div class="form-group">
          <label for="destination">Destination
          </label>
          <input type="text" name="destination" v-model="destination" id="">
        </div>
        <div class="form-group">
          <label for="">Check-in</label>
          <VueDatePicker v-model="checkInDate" :start-date="today" :placeholder="today.toDateString()"></VueDatePicker>
        </div>
        <div class="form-group">
          <label for="">Check-out</label>
          <VueDatePicker v-model="checkOutDate" :start-date="today" :placeholder="today.toDateString()"></VueDatePicker>
        </div>
        <div class="form-group">
          <label for="">Adults</label>
          <input type="number" v-model="adultsCount">
        </div>
        <div class="form-group">
          <label for="">Children</label>
          <input type="number" v-model="childrenCount">
        </div>
        <button class="search-btn">Search</button>
      </fieldset>
    </section>
    <section class="align-left">
      <h3>Travel with <span class="name">TRAVOLTA</span></h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti provident perferendis placeat aspernatur omnis,
        maiores, quas dolorem vitae ex quisquam, cumque adipisci eius. Consectetur facilis aliquam doloremque sequi cumque
        magni repudiandae excepturi consequatur pariatur. Asperiores, neque aliquam, harum earum reprehenderit facere
        autem libero error, enim dolor debitis explicabo eos voluptatum a veniam laborum quidem repellendus? Impedit
        nostrum nulla consectetur esse odio numquam. Suscipit, nihil? Ex harum architecto repellat nulla explicabo soluta,
        consequuntur doloribus ipsa, officiis eaque et reprehenderit minima. Architecto voluptates, quis fugiat animi,
        repellendus placeat molestiae nemo, sit assumenda facilis inventore dolor sed minus modi labore mollitia suscipit
        commodi?
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { computed, ref } from 'vue'

const destination = ref(null)
const checkInDate = ref(null)
const checkOutDate = ref(null)
const adultsCount = ref(null)
const childrenCount = ref(null)

const today = computed(() => { return new Date(Date.now()) })
</script>
<style lang="scss">
fieldset {
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-color: white;
  padding-top: 10px;
}

.search-btn {
  background-color: fuchsia;
  color: white;
  height: 35px;
  border-radius: 5px;
  box-sizing: border-box;

}

.form-group {
  display: flex;
  flex-direction: column;
  justify-items: start;

  input {
    border: 1px solid black;
    height: 30px;
    border-radius: 5px;
  }

  label {
    text-align: left;
  }
}

.name {
  color: fuchsia
}

.align-left {
  text-align: left;
}
</style>
