<template>
  <div class="home">

    <section>
      <fieldset>
        <div class="fields-wrapper">
          <div class="form-group">
            <label for="destination">Destination
            </label>
            <v-autocomplete :items="destinationsSugest" variant="solo" v-model="destination"></v-autocomplete>
          </div>
          <div class="form-group">
            <label for="">Check-in</label>
            <VueDatePicker v-model="checkInDate" :start-date="today" :placeholder="today.toDateString()"></VueDatePicker>
          </div>
          <div class="form-group">
            <label for="">Check-out</label>
            <VueDatePicker v-model="checkOutDate" :start-date="today" :placeholder="today.toDateString()"></VueDatePicker>
          </div>

          <div class="form-group number">
            <label for="">Adults</label>
            <input type="number" v-model="adultsCount" placeholder="0">
          </div>
          <div class="form-group number">
            <label for="">Children</label>
            <input type="number" v-model="childrenCount" placeholder="0">
          </div>

          <button class="search-btn" @click="search()">Search</button>
        </div>
        <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
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
import destinations from '../../public/data/destinations.json'
import 'vuetify/styles'
import '@vuepic/vue-datepicker/dist/main.css'
import VueDatePicker from '@vuepic/vue-datepicker'
import { computed, ref, onMounted } from 'vue'
import store from '@/store'
import router from '@/router'

const checkInDate = ref(new Date())
const checkOutDate = ref(new Date())
const destination = ref('')
const adultsCount = ref(0)
const childrenCount = ref(0)
const errorMessage = ref('')
const destinationsSugest = computed(() => {
  return Array.from(new Set(destinations.map(x => x.name)))
})

const today = computed(() => { return new Date(Date.now()) })

const validateForm = () => {
  errorMessage.value = ''
  const allHaveValue = (destination.value !== '' && checkInDate.value !== null &&
    checkOutDate.value !== null &&
    adultsCount.value > 0 &&
    childrenCount.value >= 0)
  if (allHaveValue) {
    if (checkInDate.value! >= checkOutDate.value!) {
      errorMessage.value = 'Check-out date must be bigger than check-in date.'
      return false
    }
  } else {
    errorMessage.value = 'Not all filds have value.'
    return false
  }
  return true
}
const saveToStore = () => {
  store.commit('setDestination', destination.value)
  store.commit('setCheckInDate', checkInDate.value)
  store.commit('setCheckOutDate', checkOutDate.value)
  store.commit('setAdultsCount', adultsCount.value)
  store.commit('setChildrenCount', childrenCount.value)
}
const saveToLocalStorage = () => {
  localStorage.setItem('destination', destination.value)
  localStorage.setItem('checkInDate', checkInDate.value.toDateString())
  localStorage.setItem('checkOutDate', checkOutDate.value.toDateString())
  localStorage.setItem('adultsCount', adultsCount.value.toString())
  localStorage.setItem('childrenCount', childrenCount.value.toString())
}
const search = () => {
  const isValidForm = validateForm()
  if (isValidForm) {
    saveToStore()
    saveToLocalStorage()
    router.push({ name: 'hotels' })
  }
}

const getStorageDate = (key: string) => {
  const storageVal = localStorage.getItem(key)
  if (!storageVal) { return }
  return new Date(Date.parse(storageVal))
}

onMounted(() => {
  checkInDate.value = getStorageDate('checkInDate') ?? new Date()
  checkOutDate.value = getStorageDate('checkOutDate') ?? new Date()
  destination.value = localStorage.getItem('destination') ?? ''
  adultsCount.value = +(localStorage.getItem('adultsCount') ?? 0)
  childrenCount.value = +(localStorage.getItem('childrenCount') ?? 0)
})
</script>
<style lang="scss">
fieldset {
  background-color: white;
  padding: 10px 5px;
  margin-bottom: 30px;

  .fields-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 10px;
  }

  .error-message {
    text-align: left;
    color: red;
    padding-left: 20px;
  }
}

.search-btn {
  background-color: fuchsia;
  color: white;
  height: 35px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0 5px;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-items: start;
  min-width: 15%;

  input {
    border: 1px solid black;
    height: 30px;
    border-radius: 5px;

    &[type='number'] {
      min-width: 50px;
      width: auto;
    }
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

.v-field__append-inner,
.v-input__details {
  display: none !important;
}

.v-field--appended {
  padding-inline-end: 0 !important;
}

.v-field__input {
  padding: 0 !important;
}

@media (max-width: 660px) {
  nav {
    display: none;
  }

  .fields-wrapper {
    //flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    .form-group {
      width: 100%;
      margin-bottom: 10px;

      &.number {
        width: 50%;
        max-width: 100px;
      }
    }

    .search-btn {
      width: 100%;
    }
  }
}
</style>
