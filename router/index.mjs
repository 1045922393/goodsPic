import getPic, { getPicUrl } from '../controller/getPic.mjs'

export default [{
  path: '/getPicUrl',
  method: getPicUrl
},
{
  path: '/:pure',
  method: getPic
},
{
  path: '/*',
  method: getPic
},
]