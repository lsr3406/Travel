/**
 * encoding: utf-8
 * @author: siru
 * @create on: 2018-12-05 16:38:04
 * @update on: 2018-12-05 16:56:32
 */
// 当业务庞大时, 可以使用 module 对 mutation 进行拆分
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
      console.log(e)
    }
  }
}
