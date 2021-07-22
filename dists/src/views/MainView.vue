<template>
  <div class="justfather" @keydown.enter="sure" ref="justfather">
    <div class="maincontainer" ref="maincontainer">
      <input
        type="text"
        placeholder="请输入关键词检索"
        v-model="searchItem"
        ref="searchDiv"
        @focus="focusMode"
        @blur="blurMode"
      />
      <div ref="loadDiv" class="loadDiv1"></div>
      <input type="submit" value="检索" ref="searchBtn" @click="toSearch" />
      <p id="P" v-show="beenok">共检索到<span v-text="booknum"></span>本书籍</p>
      <div class="bookshome" ref="bookshome" v-show="beenok">
        <div class="justson">
          <div class="bookitem" v-for="items in bookdata" :key="items.id">
            <div class="division"></div>
            <p class="booktitle" v-text="items.title"></p>
            <div class="author"></div>
            <p class="authoritem">作者：{{ items.author }}</p>
            <div class="press"></div>
            <p class="pressitem">出版社：{{ items.publisher }}</p>
            <router-link
              :to="'/details/' + items.id"
              class="todetails"
            ></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="thefooter" ref="thefooter">
      <p>
        <a href="https://recruit.twt.edu.cn/" target="_blank">加入我们</a> -
        <a href="#">联系方式</a> -
        <a href="https://www.twt.edu.cn/" target="_blank">天外天</a>
      </p>
      <p v-text="copyright"></p>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "MainView",
  data: () => ({
    booknum: 0,
    searchItem: "",
    beenok: false,
    bookdata: [],
    copyright:
      "Powered by TWT STUDIO Copyright © 2000-" + new Date().getFullYear(),
  }),
  activated() {
    this.saveData();
  },
  beforeRouteLeave(to, from, next) {
    sessionStorage.setItem("bookData", JSON.stringify(this.bookdata));
    sessionStorage.setItem("bookNum", this.booknum);
    next();
  },
  methods: {
    toAni() {
      setTimeout(() => {
        this.$refs.loadDiv.classList.add("bereplace");
        this.$refs.searchBtn.classList.add("bereplace");
        this.$refs.searchDiv.classList.add("bereplace");
        this.$refs.thefooter.classList.add("bebrown");
        this.$refs.justfather.classList.add("belower");
        setTimeout(() => {
          this.beenok = true;
        }, 500);
      }, 2400);
    },
    toAniback() {
      this.$refs.searchBtn.classList.add("beout");
      this.$refs.searchBtn.disabled = true;
      if (this.beenok) this.$refs.loadDiv.classList.add("loadDiv3");
      else this.$refs.loadDiv.classList.add("loadDiv2");
      this.$refs.searchBtn.style.cursor = "default";
      setTimeout(() => {
        this.$refs.searchBtn.disabled = false;
        this.$refs.searchBtn.style.cursor = "pointer";
        this.$refs.searchBtn.classList.remove("beout");
        this.$refs.loadDiv.classList.remove("loadDiv2");
        this.$refs.loadDiv.classList.remove("loadDiv3");
      }, 2400);
    },
    toSearch() {
      if (this.searchItem != "") {
        this.toAniback();
        let bookName = this.searchItem.trim();
        axios
          .post("/api/search", {
            key: bookName,
          })
          .then((response) => {
            setTimeout(() => {
              this.booknum = response.data.data.length;
              this.bookdata = response.data.data;
              this.$forceUpdate();
            }, 1200);
            if (response.data.data.length) {
              this.toAni();
            } else {
              setTimeout(() => {
                this.$refs.searchDiv.value = "";
                this.$refs.searchDiv.placeholder = "^-^ 暂未找到有关书籍哦";
              }, 1200);
            }
          });
      }
    },
    focusMode() {
      this.$refs.searchDiv.placeholder = "";
    },
    blurMode() {
      this.$refs.searchDiv.placeholder = "请输入关键词检索";
    },
    sure() {
      this.$refs.searchBtn.click();
    },
    saveData() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.booknum = sessionStorage.getItem("bookNum");
          this.bookdata = JSON.parse(sessionStorage.getItem("bookData"));
        }, 10);
      });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(149, 149, 149);
}
.justfather {
  position: relative;
  top: -65px;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/backwater.png"),
    url("../assets/backgrounds.png");
  background-repeat: no-repeat;
  background-size: 900px 100px, 900px 600px;
  background-position: center 385px, center -120px;
}
.maincontainer {
  position: relative;
  top: -90px;
  margin: 0 auto;
  width: 900px;
  height: 100vh;
}
#P {
  position: absolute;
  color: rgb(108, 108, 108);
  top: 275px;
  left: 100px;
}
#P span {
  color: rgb(230, 57, 53);
}
.bookshome {
  position: relative;
  top: 305px;
  width: 690px;
  height: 400px;
  margin: 0px auto;
  text-align: left;
  overflow-y: auto;
  overflow-x: hidden;
}
.justson {
  position: relative;
  top: 0px;
  width: 725px;
  height: 400px;
  overflow-x: hidden;
}
.bookitem {
  position: relative;
  margin: 15px auto;
  width: 600px;
  height: 120px;
  background-color: #fff;
  background-image: url("../assets/bookimage.png");
  background-repeat: no-repeat;
  background-size: 100px 100px;
  background-position: 50px center;
  border-radius: 4px;
  box-shadow: 1px 1px 4px #ddd;
  animation-name: bein;
  animation-duration: 1s;
  animation-fill-mode: both;
}
.todetails {
  position: absolute;
  height: 100%;
  width: 100%;
}
.division {
  position: absolute;
  top: 20px;
  left: 190px;
  width: 10px;
  height: 25px;
  background-color: rgb(230, 57, 53);
}
.booktitle {
  position: absolute;
  top: 19px;
  left: 210px;
  width: 390px;
  font-size: 19px;
  font-weight: 600;
  color: rgb(45, 45, 45);
}
.author {
  position: absolute;
  top: 50px;
  left: 210px;
  width: 20px;
  height: 20px;
  background: url("../assets/author.png");
  background-size: 20px 20px;
}
.authoritem {
  position: absolute;
  top: 48px;
  left: 235px;
  width: 500px;
  height: 20px;
  font-size: 17px;
  color: rgb(86, 86, 86);
}
.press {
  position: absolute;
  top: 75px;
  left: 210px;
  width: 20px;
  height: 20px;
  background: url("../assets/press.png");
  background-size: 20px 20px;
}
.pressitem {
  position: absolute;
  top: 73px;
  left: 235px;
  width: 500px;
  height: 20px;
  font-size: 17px;
  color: rgb(86, 86, 86);
}
input {
  outline: none;
  text-align: center;
  border: 0px;
  font-size: 17px;
}
.maincontainer input[type="text"] {
  position: absolute;
  top: 469px;
  left: 200px;
  width: 400px;
  height: 40px;
  transition: 0.3s ease-in;
  opacity: 0.8;
  background-color: rgb(250, 250, 250);
  border-radius: 3px;
  border: 2px solid #ddd;
}
.maincontainer input[type="text"]:focus {
  background-color: rgb(255, 255, 255);
  opacity: 1;
  left: 175px;
  width: 450px;
}

.maincontainer input[type="submit"] {
  position: absolute;
  top: 470px;
  left: 650px;
  width: 100px;
  height: 40px;
  background-color: rgb(230, 57, 53);
  color: #fff;
  border-radius: 2px;
  transition: 0.3s ease-in;
}
.loadDiv1 {
  position: absolute;
  top: 470px;
  left: 680px;
  width: 40px;
  height: 40px;
  background-image: url("../assets/loading.png");
  background-size: 100% 100%;
}
.maincontainer input[type="submit"]:hover {
  cursor: pointer;
  background-color: rgb(240, 66, 63);
}
.maincontainer input[type="submit"]:active {
  transition: 0.01s;
  background-color: rgb(223, 38, 35);
  box-shadow: 0 0 3px rgb(156, 26, 26) inset;
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
  position: relative;
  bottom: 90px;
  width: 100%;
  height: 90px;
  background-color: rgb(248, 248, 248);
}

.beout {
  transition: 0.05s;
  transform: scale(1.02);
  opacity: 0;
}
.loadDiv2 {
  animation-delay: 0.1s;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.07, 0.65, 0.11, 1);
  animation-name: loading1;
}
.loadDiv3 {
  animation-delay: 0.1s;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.07, 0.65, 0.11, 1);
  animation-name: loading2;
}

.bereplace {
  transition: 0.3s ease-in;
  transform: translateY(-250px);
}
.bebrown {
  transition: 0.3s ease-in;
  background-color: rgb(63, 47, 47);
}
.belower {
  transition: 0.3s ease-in;
  background-position: center bottom, center bottom;
}
@keyframes loading1 {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(680deg);
  }
}
@keyframes loading2 {
  from {
    top: 220px;
    transform: rotate(0deg);
  }

  to {
    top: 220px;
    transform: rotate(680deg);
  }
}
@keyframes bein {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@media screen and (max-width: 1024px) {
  .maincontainer {
    width: 728px;
  }
  .maincontainer input[type="text"] {
    left: 110px;
  }
  .maincontainer input[type="text"]:focus {
    left: 85px;
  }

  .maincontainer input[type="submit"] {
    left: 560px;
  }
  .loadDiv1 {
    left: 560px;
  }
  #P {
    left: 10px;
  }
  .justfather {
    background-size: 630px 70px, 630px 420px;
    background-position: center 385px, center 35px;
  }
  .belower {
    transition: 0.3s ease-in;
    background-position: center bottom, center bottom;
  }
}
@media screen and (max-width: 768px) {
  .maincontainer {
    width: 350px;
  }
  .bookshome {
    width: 320px;
  }
  .justson {
    width: 350px;
  }
  .bookitem {
    left: -5px;
    width: 312px;
  }
  .maincontainer input[type="text"] {
    left: 25px;
    width: 200px;
  }
  .maincontainer input[type="text"]:focus {
    left: 10px;
    width: 230px;
  }

  .maincontainer input[type="submit"] {
    left: 260px;
    width: 80px;
  }
  .loadDiv1 {
    left: 280px;
  }
  #P {
    left: 5px;
  }
  .justfather {
    background-size: 351px 39px, 351px 354px;
    background-position: center 395px, center 97px;
  }
  .belower {
    transition: 0.3s ease-in;
    background-position: center bottom, center bottom;
  }
  .bookitem {
    background-size: 40px 40px;
    background-position: 20px 10px;
  }
  .division {
    top: 20px;
    left: 75px;
    width: 8px;
    height: 20px;
  }
  .booktitle {
    top: 19px;
    left: 90px;
    width: 225px;
    font-size: 16px;
    font-weight: 600;
  }
  .author {
    top: 55px;
    left: 25px;
  }
  .authoritem {
    top: 57px;
    left: 50px;
    font-size: 13px;
  }
  .press {
    top: 80px;
    left: 25px;
  }
  .pressitem {
    top: 82px;
    left: 50px;
    font-size: 13px;
  }
}
</style>
