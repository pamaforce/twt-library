<template>
  <div class="hello">
    <div class="imgcontainer">
      <img src="../assets/headerlogo.svg" alt="header-logo" /><img
        src="../assets/account.svg"
        alt="user-logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Headers",
};
</script>

<style scoped>
.hello {
  width: 100%;
  height: 65px;
  background: rgb(229, 57, 53);
}
.imgcontainer {
  position: relative;
  width: 900px;
  height: 65px;
  margin: 0 auto;
}
.imgcontainer img:nth-of-type(1) {
  position: absolute;
  left: 0px;
  width: 300px;
  height: 50px;
  top: 5px;
}
.imgcontainer img:nth-of-type(2) {
  position: absolute;
  right: 0px;
  width: 30px;
  height: 30px;
  top: 20px;
}

@media screen and (max-width: 1024px) {
  .imgcontainer {
    width: 728px;
  }
}
@media screen and (max-width: 768px) {
  .imgcontainer {
    width: 350px;
  }
  .imgcontainer img:nth-of-type(1) {
    left: 10px;
    width: 180px;
    height: 30px;
    top: 20px;
  }
  .imgcontainer img:nth-of-type(2) {
    right: 15px;
    width: 20px;
    height: 20px;
    top: 27px;
  }
}
</style>
