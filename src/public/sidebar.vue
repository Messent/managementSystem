<template>
    <el-menu
      :default-active="onRouter"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      router
      unique-opened
      :collapse="isCollapse"
      active-text-color="#ffd04b">
      <el-submenu :index="index+''" v-for="(items,index) in sidebarMenu" :key="items.id">
        <template slot="title">
          <i :class="items.icon"></i>
          <span>{{items.title}}</span>
        </template>
          <el-menu-item :index="item.path" v-for="item in items.children" :key="item.path" >{{item.title}}</el-menu-item>
      </el-submenu>
      <!-- <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-management"></i>
          <span>数据管理</span>
        </template>
          <el-menu-item index="2-1">字典目录</el-menu-item>
          <el-menu-item index="2-2">字典明细</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-service"></i>
          <span>客户管理</span>
        </template>
          <el-menu-item index="3-1">客户列表</el-menu-item>
          <el-menu-item index="3-2">潜在列表</el-menu-item>
          <el-menu-item index="3-3">客户池</el-menu-item>
          <el-menu-item index="3-4">失败客户</el-menu-item>
      </el-submenu>
      
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>客户历史</span>
        </template>
          <el-menu-item index="1-1">跟进历史</el-menu-item>
          
      </el-submenu>
       <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>报表统计</span>
        </template>
          <el-menu-item index="1-1">潜在客户报表</el-menu-item>
          
      </el-submenu> -->
     
    </el-menu>
</template>

<script>
import bus from './bus';
import sidebarMenu from '../config/sidebarMenu';
export default {
    data() {
        return {
            isCollapse : false,
            sidebarMenu:sidebarMenu
        };
    },
    components: {

    },
    computed:{
      onRouter(){
        return this.$route.meta.name
      }
    },
    created(){
      bus.$on('collapse',msg=>{
        this.isCollapse = msg
      })
      console.log(this.$router)
      console.log(this.$route)
    },
    methods:{
      handleOpen(){},
      handleClose(){}
    },
    
};
</script>

<style lang="less" scoped>
.el-menu{
    border-right:none !important
}
.el-menu-item{
    text-align: left !important
}


</style>
