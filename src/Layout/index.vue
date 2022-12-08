<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px" class="sidebar-container">
        <SideLogo :collapse="collapse"></SideLogo>
        <SideMenu :collapse="collapse"></SideMenu>
      </el-aside>
      <el-container>
        <el-header>
          <Navbar></Navbar>
        </el-header>
        <el-main>
          <!-- <AppMain></AppMain> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import AppMain from "./components/AppMain.vue";
import SideLogo from "./components/SideLogo/index.vue";
import SideMenu from "./components/SideMenu/index.vue";
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

const store = useAppStore()
const {collapse } = storeToRefs(store)

</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
  .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
    width: auto;
  }
  .el-menu {
    border-right: none;
  }
  .el-main {
    padding: 0;
    transition: margin-left 0.28s;
  }
}
</style>
