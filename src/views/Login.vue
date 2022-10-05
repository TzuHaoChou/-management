<template>
  <div class="login">
    <el-card class="box">
      <h3>系统登录</h3>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <div class="df" prop="code">
            <el-input v-model="form.code" placeholder="请输入验证码" class="width"></el-input>
            <span class="w"><img :src="img" alt="" @click="imgReset"></span>
          </div>
        </el-form-item>
        <el-form-item class="df">
          <el-button type="primary" @click="loginOk">{{log}}</el-button>
          <el-button @click="rese">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

import { handelLoginImg, handelLogin } from "../aip/login";
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      log: "登录",
      form: {
        username: "",
        password: "",
        code: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
      },
      img: "",
    };
  },
  methods: {
    async loginImg() {
      try {
        let arr = [];
        let img = await handelLoginImg();
        arr.push(img);
        this.img = window.URL.createObjectURL(new Blob(arr));
      } catch (error) {
        console.log(error);
      }
    },
    imgReset() {
      this.loginImg();
    },
    loginOk() {
      this.$refs["form"].validate(async (valid) => {
        if (valid) {
          let str = `username=${this.form.username}&password=${this.form.password}&code=${this.form.code}`;
          await this.$store.dispatch("handleLogin", str);
          const token = this.$store.state.token;
          if (!token) return;
          this.log = "登陆中....";
          this.$message({
            message: "恭喜你，登录成功",
            type: "success",
          });
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    rese() {
      this.$refs["form"].resetFields();
    },
  },
  created() {
    this.loginImg();
  },
};
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  /* background-color: aquamarine; */
  overflow: hidden;
}
.box {
  width: 430px;
  height: 340px;
  border-radius: 10px;
  background-color: #fff;
  margin: 200px auto;
  padding: 20px 35px;
}
h3 {
  text-align: center;
  font-size: 25px;
  margin-bottom: 30px;
}
.df {
  display: flex;
  padding: 0;
  justify-content: space-between;
}
.width {
  flex: 1;
  margin-right: 20px;
}
.w {
  flex: 0.4;
}
button {
  width: 185px;
}
</style>