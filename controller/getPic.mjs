import sGetPic from '../service/s_gitPic.mjs'

export default async (req, res) => {
  sGetPic().then(strRes => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(strRes);
    res.end();
  }).catch(err => {
    console.log(err, '>>>>>>>>>sGetPic Error<<<<<<<<<<<')
    res.writeHead(404);
    res.send(err);
  })
}