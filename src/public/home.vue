<template>
    <el-container>
  <el-header>
      <my-header></my-header>
  </el-header>
  <el-container>
    <el-aside :width="collapse==true?'60px':'270px'">
        <my-sidebar></my-sidebar>
    </el-aside>
    <el-main :class="{'showBox':collapse}">
      <h3>{{onTitle}}</h3>
      <div class="content">
        <router-view></router-view>
      </div>
      <footer>
        <span>Copyright © 2016-2019 <a href="#">叩丁狼</a>. All rights reserved.
        </span>
          <span>Version 1.0.0</span>
      </footer>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import MyHeader from "@/public/header.vue";
import MySidebar from "@/public/sidebar.vue";
import Bus from './bus'
export default {
    data() {
        return {
            collapse:false
        };
    },
    components: {
        MyHeader,
        MySidebar
    },
    computed:{
      onTitle(){
        return this.$route.meta.title
      }
    },
     created(){
      Bus.$on('collapse',msg=>{
        this.collapse = msg
      })
    },
};
</script>

<style lang="less" scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 70px !important;
    padding: 0 !important;
  }
  
  .el-aside {
    background-color: #545C64;
    color: #333;
    text-align: center;
    line-height: 200px;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 70px;
    transition: all .4s linear;
  }
  .el-aside::-webkit-scrollbar{
      width: 0;
  }
  
  .el-main {
    background-color: pink;
    color: #333;
    // text-align: center;
    position: absolute;
    left: 270px;
    top: 70px;
    padding-bottom: 0;
    // bottom: 0;
    // right: 0;
    width: calc(~'100% - 270px');
    height: calc(~'100% - 70px');
    transition: all .4s linear;
    &.showBox{
      left: 60px;
      width: calc(~'100% - 60px');
    }

    .content{
      height: calc(~'100% - 70px');
      background-color: skyblue;
      box-sizing: border-box;
      padding: 20px 15px;
      
    }
    h3{
      height: 40px;
      line-height: 40px;
    }

    footer{
    color: #333;
    line-height: 30px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    }
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  /deep/ .el-submenu__title {
    text-align: left !important
}

  
</style>
