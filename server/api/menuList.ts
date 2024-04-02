

export default defineEventHandler((event) => {

  const list = [{
    title:'首页导航',
    code:'welcome'
  },{
    title:'热门推荐',
    code:'hot'
  },{
    title:'离线文档',
    code:'offilineDoc'
  },{
    title:'技术分析',
    code:'techShare'
  },{
    title:'工具',
    code:'tool'
  },{
    title:'待做事项',
    code:'todo'
  },{
    title:'关于',
    code:'about'
  }]

  return {
    data: list
  }
})
