const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;
const API_KEY = '07db70f402d233aec0eef084d968a50f'

app.use(cors());

const fetchWeatherData = async (endpoint, lat, lon) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/${endpoint}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        const response = await axios.get(url)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
// 🔹 Rota para Clima Atual
app.get('/weather', async (req, res) => {
    const { lat, lon } = req.query;
    try {
        const data = await fetchWeatherData('weather', lat, lon);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
});
