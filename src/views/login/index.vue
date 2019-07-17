<template>
  <div class="login-page">
    <section class="login-container">
      <h3 class="login-title">叩丁狼客户管理系统</h3>
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="account">
          <el-input v-model="form.account" placeholder="账号" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="密码" />
        </el-form-item>
        <el-form-item>
          <el-button class="login-submit-btn" type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import {loginApi} from '@/request/api'	// 调用loginApi方法
export default {
  data() {
    return {
      form: {
        account: "", // 账号
        password: "" // 密码
      },
      rules: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          // this.$message.success("登录成功~");
          // this.$axios({
          //   method:'post',
          //   url:'/api/tokens',
          //   data:{
          //     username:this.form.account,
          //     password:this.form.password
          //   }
          // }).then(res=>{
          //   console.log(res)
          // })
           loginApi({
            username: this.form.account,
            password: this.form.password
        }).then(res=>{
            console.log(res);
            if(res.success){
              localStorage.setItem('token',res.data);
              localStorage.setItem('username',this.form.account);
              this.$message.success(res.msg);
              this.$router.push('/');
            }
        }).catch(err=>{
            console.log(err);
        })
        } else {
          this.$message.error("账号或密码没填喔~");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-page {
  width: 100%;
  height: 100%;
  background-color: #324057;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-container {
    width: 330px;
    height: 210px;

    .login-title {
      padding: 10px 0;
      color: #fff;
      font-size: 24px;
      text-align: center;
    }

    .login-submit-btn {
      width: 100%;
    }
  }
}
</style>
