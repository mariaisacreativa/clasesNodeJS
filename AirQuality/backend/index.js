const express = require('express')
const {getAirQualityIndexFromUSB, getAirQualityIndexFromThirdPartyService } = require('./helpers/airQualityIndexService')

const app = express()
const port = 3030

app.get("/aqi", async (req,res)=>{
  res.send(
    {
      aqiFromUSB:getAirQualityIndexFromUSB(),
      aqiFromThirdPartyService: await getAirQualityIndexFromThirdPartyService()
    }
  )
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`) //root -> localhost:3030
})