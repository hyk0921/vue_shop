import ajax from "./ajax"
export const reqAddress = (longitude,latitude)=> ajax(`/position/${latitude},${longitude}`)
export const reqCategorys = ()=> ajax("/index_category")
export const reqShops = ({latitude,longitude})=> ajax("/shops",{params:{latitude,longitude}})