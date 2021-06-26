import picStore from '../store/picList.mjs'
import { getPic } from '../methods/api.mjs'
import ejs from 'ejs'
import { projectDirname } from '../config.mjs'
import path from 'path';

export default () => {
    return new Promise(async (resolve, reject) => {
        let picUrl = picStore.getPic()
        if (!picUrl) {
            const picRes = await getPic()
            picStore.setList(picRes.map(item => item.path))
            picUrl = picStore.getPic()
        }
        ejs.renderFile(path.join(projectDirname, 'ejs/pages/index.ejs'), { picList: [picUrl] }, async function (err, str) {
            if (err) {
                reject(err)
                return;
            }
            resolve(str)
        });
    })
}