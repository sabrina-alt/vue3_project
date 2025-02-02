<template>
  <div>
      <v-sheet 
        class="pa-4 d-flex flex-column justify-center custom-opacity"
        rounded
        border
        :height="500" 
        :width="500"
        :elevation="10"
      >
        <v-skeleton-loader  v-if="loading" type="paragraph"/>
        <div v-else>
            <v-card-title class="text-h2 d-flex flex-column align-center pb-4">
            <h2 class="text-h3 font-weight-black text-primary">{{ weatherInfo.name }}</h2>
            <div class="text-h4">
              {{ parseInt(weatherInfo.main.temp) }}°c
            </div>
            <div class="text-h6">
              {{ weatherInfo.weather[0].description }}
            </div>
            <div class="text-h6">
              <span class='text-disabled' >Min: </span>{{ weatherInfo.main.temp_min }}° 
               <span class='text-disabled'>Max: </span>{{ weatherInfo.main.temp_max }}°
            </div>
          </v-card-title>
          <InfoCards :weatherInfo="weatherInfo"/>
        </div>
      </v-sheet>
  </div>
</template>
<script>
import { weather } from '@/api'
import InfoCards from '@/components/InfoCards.vue'

export default {
  data () {
    return {
      weatherInfo: [],
      selectedCity: '',
      loading: false
    }
  },
  components: {
    InfoCards
  },
  async created () {
    this.loading = true
    this.getGeolocation()
  },
  methods: {
    getGeolocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            this.getWeather({ lat, lon })
          },
          (err) => {
            err.value = 'Permissão de localização negada'
            console.error(err)
            this.loading = false
          }
        )
      } else {
        error.value = 'Geolocalização não suportada'
        this.loading = false
      }
    },
    async getWeather (params) {
      console.log(params)
      try {
        const res = await weather.currentWeather(params)
        this.weatherInfo = res.data
        this.updateBackgroundImage(res.data.weather[0].description)
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    },
    updateBackgroundImage(weatherCondition) {
      const body = document.body

      if (weatherCondition === 'Céu limpo') {
        body.style.backgroundImage = 'url("src/img/sunny.jpg")'
      } else if (weatherCondition === 'nublado') {
        body.style.backgroundImage = 'url("src/img/cloudy.jpg")'
      } else if (weatherCondition === 'algumas nuvens' || weatherCondition === 'nuvens dispersas') {
        body.style.backgroundImage = 'url("src/img/partiallyCloudy.jpg")'
      } else if (weatherCondition === 'Neve') {
        body.style.backgroundImage = 'url("src/img/snow.jpg")'
      } else {
        body.style.backgroundImage = 'url("src/img/default.jpg")'
      }
    },
  }
}
</script>
<style>
.v-sheet.custom-opacity {
  background: rgba(255, 255, 255, 0.4) !important;
}
</style>