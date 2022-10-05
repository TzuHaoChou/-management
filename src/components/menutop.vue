
<template>
  <div>
    <i
      :class="[isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']"
      class="arrow-icon"
      @click="handleCollapse"
    ></i>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isCollapse"]),
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations({
      setCollapse: "modu/setCollapse",
    }),
    handleCollapse() {
      this.setCollapse();
    },
  },
};
</script>
<style scoped lang='scss'>
.arrow-icon {
  float: left;
  background: #eaedf1;
  border: 1px solid transparent;
  font-size: 23px;
  height: 39px;
  line-height: 39px !important;
  width: 40px;
  text-align: center;
}
</style>
