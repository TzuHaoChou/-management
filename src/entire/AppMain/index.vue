<template>
  <div>
    <div>
      <menutop></menutop>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import menutop from "../../components/menutop";
export default {
  name: "App-Main",
  components: {
    menutop,
  },
};
</script>

<style scoped>
</style>
