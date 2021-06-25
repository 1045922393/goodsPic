
import ejs from 'ejs'
import express from 'express'
import axios from 'axios'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000
// commonHead + style + commonNav + body + commonFoot

//令人蛋疼的路径啊 暴露静态资源路径
app.use(express.static(path.join(__dirname, "public")));

app.get('/', async (req, res) => {
  async function getPic() {
    return await axios.get('https://wallhaven.cc/api/v1/search?sorting=random&purity=010&categories=001')
  }
  const picRes = await getPic()
  ejs.renderFile('./ejs/pages/index.ejs', { picList: picRes.data.data.map(item => item.path).splice(0,1) }, async function (err, str) {
    if (err) {
      res.writeHead(404);
      res.send(err);
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(str);
    res.end();
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})