<template>
    <v-card 
      class="pa-4"
      variant="plan"
    >
    <v-row>
      <v-col>
        <span class="text-h3">
          Selecione a Cidade para mais Informações
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-combobox
        label="Busque pela Cidade"
        v-model="selectedCity"
        :items="allCities"
        item-title="nome"
        item-value="id"
      />
      </v-col>
    </v-row>
    <SelectedCityInfo 
      :selectedCity="selectedCity"
    />
    </v-card>
</template>
<script>
import { cptec } from '@/api'
import SelectedCityInfo from './SelectedCityInfo.vue'
export default {
  components: {
    SelectedCityInfo
  },
  data () {
    return {
      allCities: [],
      selectedCity: ''
    }
  },
  async created () {
    await this.listCities()
  },
  methods: {
    async listCities () {
      try {
        const res = await cptec.listAllCities()
        this.allCities = res.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>