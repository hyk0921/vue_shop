/* 
使用mockjs定义mock接口的模块
*/
import Mock from 'mockjs'

import data from './data.json'  // js对象
import shops from './shops.json'


// 定义mock接口: goods
Mock.mock('/api/goods', {code: 0, data: data.goods})

// 定义mock接口: ratings
Mock.mock('/api/ratings', {code: 0, data: data.ratings})

// 定义mock接口: info
Mock.mock('/api/info', {code: 0, data: data.info})
// 根据请求在id参数返回对应的商家数据
Mock.mock(/^\/api\/shop\/\d+$/, function(options){ // /api/shop/12
    // 得到请求params参数id
    const id = options.url.substring(10)
    // 找到对应shops
    const shop = shops.find(shop => shop.id==id)
    console.log('/api/shop', options, shop || shops[0])
    // 返回一个动态数据
    return Mock.mock({code: 0, data: shop || shops[0]})
  }) // 

console.log('mockServer...')