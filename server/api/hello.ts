
import path from 'path'
import fs from 'fs'
export default defineEventHandler((event) => {
  const filePath = path.join(process.cwd(),'../rs-project/rsbuild.config.mjs')
  const data =  fs.readFileSync(filePath,{encoding:'utf-8'})
  console.log(data);

  return {
    hello: data
  }
})
