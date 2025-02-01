<template>
    <v-row>
        <v-col>
            Nome: {{ selectedCity.nome }}
        </v-col>
        <v-col>
            ID: {{ selectedCity.id  }}
        </v-col>
        <v-col>
            Estado: {{ selectedCity.estado }}
        </v-col>
        {{ weatherInfo }}
    </v-row>
</template>
<script>
import { cptec } from '@/api'
export default {
    props: {
        selectedCity: {
            type: Object,
            default: () => ({})
        }
    },
    watch: {
        selectedCity (value) {
            if (value) {
                this.getWeatherForecast()
            }
        }
    },
    data () {
        return {
            weatherInfo: []
        }
    },
    methods: {
        async getWeatherForecast () {
            try {
                const res = await cptec.getWeatherForecast(this.selectedCity.id)
                this.weatherInfo = res.data
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
