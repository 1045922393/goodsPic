import sGetPic, { s_gitPicUrl, hzx3DPhoto } from '../service/s_gitPic.mjs'

export default async (req, res) => {
  let pure = req.params.pure
  sGetPic(pure).then(strRes => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(strRes);
    res.end();
  }).catch(err => {
    console.log(err, '>>>>>>>>>sGetPic Error<<<<<<<<<<<')
    res.writeHead(404);
    res.send(err);
  })
}

export const getPicUrl = (req, res) => {
  let pure = req.query.pure;
  s_gitPicUrl(pure).then(str => {
    res.send(str)
  })
}

export const c_hzx3DPhoto = (req, res) => {
  let name = req.params.name
  hzx3DPhoto(name).then(strRes => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(strRes);
    res.end();
  }).catch(err => {
    console.log(err, '>>>>>>>>>c_hzx3DPhoto Error<<<<<<<<<<<')
    res.writeHead(404);
    res.send(err);
  })
}
