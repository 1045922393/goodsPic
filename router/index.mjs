import getPic, { getPicUrl, c_hzx3DPhoto } from '../controller/getPic.mjs'

export default [{
  path: '/getPicUrl',
  method: getPicUrl
},
{
  path: '/pure/:pure',
  method: getPic
},
{
  path: '/3dphoto/:name',
  method: c_hzx3DPhoto
},
{
  path: '/*',
  method: getPic
},
]