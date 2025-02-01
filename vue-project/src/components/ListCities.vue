<template>
  <div>
    <v-card 
      class="pa-4"
      variant="plan"
      width="1500px"
    >
    oi
    </v-card>
  </div>
</template>
<script>
import { weather } from '@/api'

export default {
  data () {
    return {
      allCities: [],
      selectedCity: ''
    }
  },
  async created () {
    console.log(`caiu aqui created`)
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
            console.error(err);
          }
        )
      } else {
        error.value = 'Geolocalização não suportada'
      }
    },
    async getWeather (params) {
      console.log(params)
      try {
        const res = await weather.currentWeather(params)
        console.log(res.data)
        this.allCities = res.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>