import axios from 'axios'

let time = 0;

export const getPic = async () => {
    const res = await axios.get('https://wallhaven.cc/api/v1/search?sorting=random&purity=010&categories=001')
    console.log('>>>>>>getPic response>>>>>', ++time);
    return res.data.data
}