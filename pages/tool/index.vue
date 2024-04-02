<template>
  <div>
    tool
    <input v-model="name"/>
    <button @click="onSubmit">提交</button>
  </div>
</template>

<script setup>
const name = ref('')
// const menuList = reactive(data.value.data)
const onSubmit = async ()=>{
  const {data}= await $fetch('/api/tool',{ query:{name:name.value}})
  // console.log(data);
}
</script>

<style lang="less" scoped>

</style>