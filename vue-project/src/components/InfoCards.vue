<template>
    <div class="pt-5 d-flex justify-center">
        <v-sheet 
        :height="150" 
        :width="150" 
        border 
        rounded class="pa-4 d-flex flex-column justify-center custom-opacity mr-4"
        >
        <div class="d-flex flex-column align-center">
            <span class="pb-2 text-disabled">Umidade</span>
            <span  class="text-h5">{{  weatherInfo.main.humidity }}%</span>
        </div>
        </v-sheet>
        <v-sheet 
        :height="150" 
        :width="150" 
        border 
        rounded class="pa-4 d-flex flex-column justify-center custom-opacity ml-4"
        >
        <div class="d-flex flex-column align-center">
            <span class="pb-2 text-disabled">Sensação</span>
            <span  class="text-h5">{{  parseInt(weatherInfo.main.feels_like) }}°c</span>
        </div>
        </v-sheet>
    </div>
</template>
<script>
export default {
    props: {
        weatherInfo: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>
<style scoped>
.v-sheet.custom-opacity {
  background: rgba(170, 226, 242, 0.1) !important;
}
</style>
