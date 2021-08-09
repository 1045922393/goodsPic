import { s_gitPicUrl } from '../service/s_gitPic.mjs'

export const postPicUrl = (req, res) => {
  let pure = req.body;
  s_gitPicUrl(pure).then(str => {
    res.send(str)
  })
}