# goodsPic

  使用了以下技术栈 搭建了一个mvc思想的简易服务端渲染
    "axios": "^0.21.1",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "nodemon": "^2.0.7"

# 主文件
script.mjs
    
# ejs
 
 通用结构 ejs\common\head.ejs | ejs\common\foot.ejs
 网页 ejs\pages\index.ejs
`<%- include('../common/head.ejs'); %>`
`<%- include('../common/foot.ejs'); %>`

使用变量
`<img title="<%=title %>" src="<%=src %>">`

# 样式失效问题

  `<link href="/style/index.css" type="text/css" rel="stylesheet">`
  指定type的识别格式
  
# 静态文件夹的暴露
### script.mjs
app.use(express.static(path.join(__dirname, "public")));

# mjs使用__dirname
`
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const projectDirname = path.join(__dirname)
`

# 一个奇怪的问题
当使用ejs.renderFile(filename,option,callback)
filename使用路径'../ejs/pages/index.ejs' (相对s_getPic.mjs文件路径是没有问题的)报错了 使用'./ejs/pages/index.ejs'才成功(难不成这是相对script.mjs的路径吗) 最后为了避免想疯了 使用__dirname绝对路径

# 内网穿透

使用ngrok 
安装
`npm i ngrok -g`
启动服务
`ngrok http {port}`
