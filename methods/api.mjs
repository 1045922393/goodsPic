import axios from 'axios'

let time = 0;

export const getPic = async (purity = '010') => {
  console.log(purity, 'api purity');
  let api = `https://wallhaven.cc/api/v1/search?sorting=random&purity=${purity}&categories=001`;
  const res = await axios.get(api)
  console.log(`>>>>>>getPic|${api}| request times is>>>>>`, ++time);
  return res.data.data
}