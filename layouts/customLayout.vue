<template>
  <div class="layout-container">
    <div class="header-wrapper">
      <NuxtLink v-for="item in menuList" :to="'/'+item.code" :class="{ 'is-active': isCurrentRoute(`/${item.code}`) }">{{item.title}}</NuxtLink>
    </div>
    <div class="recent-wrapper">
      最近常用=>大屏开发
    </div>
    <div class="main-wrapper">
      <div class="side-wrapper">left</div>
      <div class="section-wrapper">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
const {data}= await useFetch('/api/menuList')
const menuList = reactive(data.value.data)
// console.log(data);
const route = useRoute()

const isCurrentRoute = (routePath) => {
  return route.fullPath == routePath
}

// const menuList =

</script>
<style lang="less" scoped>
.layout-container {
  height: 100vh;
  background-color: #f1f1f1;
  padding: 10px 12px;
  box-sizing: border-box;
}

.header-wrapper {
  line-height: 40px;
  margin-bottom: 5px;

  a {
    text-decoration: none;
    display: inline-block;
    padding: 0 10px;
    background-color: #fff;
    font-size: 14px;
    letter-spacing: 0.1em;
    &:active {
      color: black;
    }

    &:link {
      color: black;
    }

    &:visited {
      color: black;
    }
  }

  a+a {
    margin-left: 10px
  }

  .is-active {
    color: red !important;
  }
}

.recent-wrapper{
  line-height: 40px;
  padding: 0 10px;
  margin-bottom: 5px;
  background-color: #fff;
}

.main-wrapper {
  display: flex;
  gap: 10px;
  height: calc(100% - 90px);
}

.side-wrapper {
  width: 200px;
  background-color: #fff
}

.section-wrapper {
  background-color: #fff;
  flex: 1
}
</style>