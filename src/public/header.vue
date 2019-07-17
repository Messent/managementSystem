<template>
  <div class="header">
    <h1>叩丁狼客户管理系统 <i class="el-icon-menu" @click="changeCollapse"></i></h1>
    <el-dropdown trigger="click" placement="top" @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="login">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Bus from './bus'
import {logoutApi} from '../request/api'
export default {
  data() {
    return {
      collapse:false
    };
  },
  components: {},
  methods: {
      handleCommand(command){
          logoutApi({
            token:localStorage.getItem('token')
          }).then(res=>{
            if(res){
              localStorage.removeItem('username')
            localStorage.removeItem('token')
             this.$router.push('/'+command)
            }
          })
      },
      changeCollapse(){
        this.collapse = !this.collapse
        Bus.$emit('collapse',this.collapse)
      }
  }
};
</script>

<style lang="less" scoped>
.header {
  background: #409eff;
  color: #fff;
  height: 70px;
  line-height: 70px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>