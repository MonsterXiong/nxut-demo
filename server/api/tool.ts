
import * as changeCase from 'change-case'
export default defineEventHandler((event) => {
  const query = getQuery(event)
  // console.log(query);

  return {
    data: changeCase.camelCase(query.name as any)
    // data: 'xxx'
  }
})
