<template>
  <div class="thefooter" ref="thefooter">
    <p>
      <a href="https://recruit.twt.edu.cn/" target="_blank">加入我们</a> -
      <a href="#">联系方式</a> -
      <a href="https://www.twt.edu.cn/" target="_blank">天外天</a>
    </p>
    <p v-text="copyright"></p>
  </div>
</template>

<script>
export default {
  name: "Footers",
  data: () => ({
    copyright:
      "Powered by TWT STUDIO Copyright © 2000-" + new Date().getFullYear(),
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(149, 149, 149);
}
.thefooter p:first-of-type {
  font-size: 14px;
  color: rgb(149, 149, 149);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 53px;
  width: 100%;
}
.thefooter p:last-of-type {
  font-size: 14px;
  color: rgb(149, 149, 149);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 22px;
  width: 100%;
}
.thefooter {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 90px;
  background-color: rgb(63, 47, 47);
}
</style>