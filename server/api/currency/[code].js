export default defineEventHandler(async (event) => { 
  const { code } = event.context.params
  
  // api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?currencies=' + code + '&apikey=cur_live_jOUIxe6aZ9hj5SQoDPcjePJ1ee6bYKTdH810F1V8')
  
  return data
})