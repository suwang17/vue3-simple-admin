<template>
  <div>
    <!-- <el-button type="primary" :icon="Edit" /> -->
    <el-icon style="font-size: 26px;" @click="toggleSideBar">
      <component :is="collapse ? Expand : Fold"></component>
    </el-icon>
  </div>
</template>
<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

const store = useAppStore()
const {collapse } = storeToRefs(store)

const toggleSideBar = () => {
  store.collapse = !store.collapse
}
</script>
