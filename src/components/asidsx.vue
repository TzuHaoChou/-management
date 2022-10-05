
<template>
  <fragment>
    <template v-for="(item, index) in menuList">
      <el-submenu
        :index="item.path"
        :key="item.path"
        v-if="item.children && item.children.length > 0"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </template>
        <asidsx :menuList="item.children"></asidsx>
      </el-submenu>
      <el-menu-item
        v-if="item.children && item.children.length <= 0"
        :key="index"
        :index="item.path"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </template>
      </el-menu-item>
    </template>
  </fragment>
</template>

<script>
export default {
  name: "asidsx",
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
</style>
