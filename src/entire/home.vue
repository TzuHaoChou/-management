
<template>
  <div class="el-container">
    <el-container>
      <el-header >
        <AppHeader></AppHeader>
      </el-header>
      <el-container>
        <el-aside width="auto" >
          <AppAside  width="100%"></AppAside>
        </el-aside>
        <el-container>
          <el-main>
            <!-- <i
                :class="flag ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
                style="font-size: 30px"
                @click="flag = !flag"
              ></i
            > -->
            <AppMain>
            </AppMain>
          </el-main>
          <el-footer>
            <AppFooter></AppFooter>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppAside from "../entire/AppAside";
import AppMain from "../entire/AppMain";
import AppFooter from "../entire/AppFooter";
import AppHeader from "../entire/AppHeader";

export default {
  name: "",
  components: { AppAside, AppMain, AppFooter, AppHeader },
  data() {
    return {
      flag: false,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.el-container {
  height: 100%;
}

.el-header {
  background-color: #167bd8;
  
}

.el-aside {
  background-color: #fff;
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  font-size:20px;
}

.el-main {
  background-color: #fff;
  padding: 0;
}

.el-footer {
  background-color: #fff;
  height: 50px;
  border-top: 1px solid rgb(230, 230, 230);
  font-size: 14px;
}
</style>

