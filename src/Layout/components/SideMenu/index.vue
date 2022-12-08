<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :collapse="collapse"
      :collapse-transition="false"
      mode="vertical"
      :background-color="'#1f2d3d'"
      :text-color="'#bfcbd9'"
      :unique-opened="false"
      :active-text-color="'#409EFF'"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
    >
      <SideItem
      :menus="menus"
      :basepath="'/'"
      ></SideItem>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref ,reactive,computed} from "vue";
import {useRouter,useRoute} from 'vue-router';
import SideItem from './SideItem.vue';

defineProps<{
  collapse: Boolean;
}>();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const router =useRouter()
const route =useRoute()

const menus = router.options.routes
const activeMenu = computed<string>(() => {
      const { meta, path } = route
      // if (meta.activeMenu) {
      //   return meta.activeMenu
      // }
    return path
})
</script>

<style scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

/* .el-scrollbar {
  height: calc(100% - 50px) !important;
} */
</style>
<style>
.el-menu--collapse  .el-menu-item span{
        display: none;
    }
.el-menu--collapse  .el-sub-menu .el-sub-menu__title span{
        display: none;
    }
    /*隐藏 > */
    .el-menu--collapse  .el-sub-menu .el-sub-menu__title .el-sub-menu__icon-arrow {
        display: none;
    }
</style>
