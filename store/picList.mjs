import { getPic } from '../methods/api.mjs'

const pureType = [
  "100",
  "010",
  "111"
]
class Picture {
  list = {};

  setList(list, pureType) {
    let onlyOne = Array.from(new Set(list, this.list));
    this.list[pureType] = onlyOne;
  }

  async getPic(pure = '100', num = 1) {
    if (!pureType.includes(pure)) pure = pureType[0]
    if (this.list[pure] && this.list[pure].length > 0) {
      console.log('this pic purity is ', pure);
      return this.list[pure].splice(Math.floor(Math.random() * this.list.length), num)
    } else {
      const picRes = await getPic(pure)
      this.setList(picRes.map(item => item.path), pure)
      return this.getPic(pure);
    }
  }
}

export default new Picture();