export interface Aqi{
    aqiFromThirdPartyService: AqiFromThirdPartyService,
    aqiFromUSB: number
}

export interface AqiFromThirdPartyService{
    aqi: string,
    station: object,
    time: object,
    uid: number
}