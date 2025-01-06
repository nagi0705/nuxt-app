export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event)
  
  // handle post data
  // const { age } = await useBody(event)
  
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_jOUIxe6aZ9hj5SQoDPcjePJ1ee6bYKTdH810F1V8')
  
  return data
})