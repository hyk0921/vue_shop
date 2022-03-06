import ajax from "./ajax"
export const reqAddress = (longitude,latitude)=> ajax(`/position/${latitude},${longitude}`)
export const reqCategorys = ()=> ajax("/index_category",
{
    headers:{
        needCheck:true
    }
})
export const reqShops = ({latitude,longitude})=> ajax("/shops",
{
    params:{latitude,longitude},
    headers:{
        needCheck:true
    }
})
export const reqSendCode = (phone)=> ajax("/sendcode",{params:{phone}})
export const reqSmsLogin = ({phone,code})=> ajax.post("/login_sms",{phone,code})
export const reqPwdLogin = ({name,pwd,captcha})=> ajax.post("/login_pwd",{name,pwd,captcha})
export const reqAutoLogin = ()=> ajax("/auto_login")
export const reqShopGoods = ()=> ajax("/goods")
export const reqShopRatings = ()=> ajax("/ratings")
export const reqShopInfo = ()=> ajax("/info")