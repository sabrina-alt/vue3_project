<template>
    <v-row>
        <v-col>
            <span class="text-h3">
                {{ selectedCity.nome }}
            </span>
            <Icon :path="icon"/>
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
import { weather } from '@/api'
import { mdiWeatherHazy } from '@mdi/js'
import Icon from '@/globals/Icon.vue'
export default {
    props: {
        selectedCity: {
            type: Object,
            default: () => ({})
        }
    },
    components: {
        Icon
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
            weatherInfo: [],
            icon: mdiWeatherHazy
        }
    },
    methods: {
        async getWeatherForecast () {
            try {
                const res = await weather.getWeatherForecast(this.selectedCity.id)
                this.weatherInfo = res.data
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
