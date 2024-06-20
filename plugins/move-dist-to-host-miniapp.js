const fs = require('fs-extra')
const path = require('path')

export default (ctx, options) => {
  ctx.onBuildFinish(async () => {
    handleFixAppJson();
    // 根路径
    const rootPath = path.resolve(__dirname, '..')
    // 要移动的资源路径
    const outputPath = path.resolve(__dirname, `../xiao-c`)
    // 移动资源到哪个路径
    const destPath = path.join(rootPath, 'dist/xiao-c')

    // 开始拷贝
    fs.copySync(outputPath, destPath)
  })
}


async function handleFixAppJson() {
  // 根路径
  const rootPath = path.resolve(__dirname, '..');
  // 移动根目录下的 app.json 到 dist 目录
  const appJsonPath = path.join(rootPath, 'app.json');
  const distAppJsonPath = path.join(rootPath, 'dist/app.json');
  fs.copySync(appJsonPath, distAppJsonPath, { overwrite: true });
}
