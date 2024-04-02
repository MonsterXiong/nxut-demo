<script setup>
// import { fetch } from '@nuxt/bridge'

const url = 'http://localhost:3000'

const { data, error } = useFetch(url)
console.log(data);
// const message = ref('你好')
// const {data}= await useFetch('/api/hello')
// setTimeout(() => {
//   message.value = '我的'
// }, 1000);
</script>

<template>
<div>
  {{ data }}

</div>
</template>