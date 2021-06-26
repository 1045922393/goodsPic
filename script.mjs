import express from 'express'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import getRouters from './router/index.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000
// commonHead + style + commonNav + body + commonFoot

//令人蛋疼的路径啊 暴露静态资源路径
app.use(express.static(path.join(__dirname, "public")));

// get请求
getRouters.forEach(item => {
  app.get(item.path, item.method)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})