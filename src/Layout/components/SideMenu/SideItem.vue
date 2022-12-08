<template>
    <div>
        <template v-for="menu in menus" :key="menu.path">
            <template v-if="!menu.hidden">
                <el-sub-menu  v-if="menu.children && menu.children.length > 1" :index="resolvePath(menu.path)">
                    <!-- 多级节点 -->
                    <template #title>
                        <el-icon>
                            <component :is="menu.meta.icon"></component>
                       </el-icon> 
                       <span>{{menu.meta.title}}</span>
                    </template>
                    <SideItem
                    :menus="menu.children"
                    :basepath="menu.path"
                    ></SideItem>
                </el-sub-menu>
                <template v-else>
                    <el-menu-item :index="resolvePath(menu.path)">
                        <el-icon>
                            <component :is="menu.meta.icon"></component>
                       </el-icon> 
                       <template #title>
                            <span>{{menu.meta.title}}</span>
                        </template>
                       
                    </el-menu-item>
                </template>
            </template>      
        </template>
    </div>
  </template>
<script lang="ts" setup>
import { isExternal } from '@/utils/validate.js'
import path from 'path-browserify'
const props = defineProps<{
    menus:any,
    basepath: string;
}>();

const resolvePath = (routePath:string) => {
    if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basepath)) {
        return props.basepath
      }
    
    if(props.basepath === '/'){
        return routePath
    }
    return  path.resolve(props.basepath, routePath) 

}
</script>