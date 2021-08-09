import picStore from '../store/picList.mjs'
import ejs from 'ejs'
import { projectDirname } from '../config.mjs'
import path from 'path';

export default (pure = '100') => {
  return new Promise(async (resolve, reject) => {
    let picUrl = await picStore.getPic(pure)
    ejs.renderFile(path.join(projectDirname, 'ejs/pages/index.ejs'), { picList: picUrl }, function (err, str) {
      if (err) {
        reject(err)
        return;
      }
      resolve(str)
    });
  })
}

export const s_gitPicUrl = (pure) => {
  return new Promise(async (resolve, reject) => {
    let picUrl = await picStore.getPic(pure);
    resolve(picUrl[0]);
  })
}

export const hzx3DPhoto = (name) => {
  return new Promise(async (resolve, reject) => {
    ejs.renderFile(path.join(projectDirname, 'ejs/pages/3dphoto.ejs'), { name }, function (err, str) {
      if (err) {
        reject(err)
        return;
      }
      resolve(str)
    })
  })
}