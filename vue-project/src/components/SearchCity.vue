<template>
  <div>
    <v-card 
      width='800'
      class="pa-4"
    >
          <v-text-field
            label="Buscar Cidade"
            prepend-icon="mdi-map-marker"
            clearable
          />
          <v-btn @click="searchCity">buscar</v-btn>
    </v-card>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  methods: {
    async searchCity () {
    const instance = axios.create({
      baseURL: 'https://brasilapi.com.br/api/',
      timeout: 1000,
      headers: {'X-Custom-Header': 'foobar'}
    });
      try {
      const response = await instance.get('cptec/v1/cidade/Imbituba');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    }
  }
}
</script>