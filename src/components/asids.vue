
<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      router
      unique-opened
      :collapse="isCollapse"
    >
      <asidsx :menuList="menuList"></asidsx>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import asidsx from "./asidsx";
export default {
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  name: "asids",
  components: {
    asidsx,
  },
  data() {
    return {
      // isCollapse: true,
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    ...mapGetters(["isCollapse"]),
  },
};
</script>
<style scoped lang='scss'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
