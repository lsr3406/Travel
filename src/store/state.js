/**
 * encoding: utf-8
 * @author: siru
 * @create on: 2018-12-05 16:35:02
 * @update on: 2018-12-05 16:38:48
 */
let defaultCity = '杭州'
try {
  defaultCity = localStorage.city || defaultCity
} catch (e) {
  console.log(e)
}

export default {
  city: defaultCity
}
