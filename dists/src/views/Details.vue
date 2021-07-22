<template>
  <div class="justfather" ref="justfather">
    <div class="maincontainer" ref="maincontainer">
      <a @click="$router.back()" v-text="backText" style="cursor: pointer"></a>
      <div class="baseInfo">
        <div class="bookIcon"></div>
        <p class="bookInfo">基本信息</p>
        <div class="bookCover"></div>
        <p class="bookTitle" v-text="bookData.title"></p>
        <p class="bookAuthor">作者：</p>
        <p class="bookPress">出版社：</p>
        <p class="bookNote">编者按：</p>
        <p class="bookAuthors" v-text="bookData.author"></p>
        <p class="bookPresses" v-text="bookData.publisher"></p>
        <p class="bookNotes" v-text="bookData.note"></p>
        <div class="division">
          <p>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </p>
        </div>
        <p class="baseData">图书简介：</p>
        <p class="baseDatas" v-text="bookData.introduce"></p>
      </div>
      <div class="toLove"></div>
    </div>
    <Footers></Footers>
  </div>
</template>

<script>
const axios = require("axios");
import Footers from "../components/Footer.vue";
export default {
  name: "Details",
  data: () => ({
    backText: "<  返回上一级",
    bookData: {},
  }),
  created() {
    this.fetchData("/api/bookDetail/" + this.$route.params.id);
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData(i) {
      axios.get(i).then((response) => {
        this.bookData = response.data.data;
      });
    },
  },
  components: {
    Footers,
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
  background-position: center bottom, center bottom;
}
.maincontainer {
  position: relative;
  top: -90px;
  margin: 0 auto;
  width: 900px;
  height: 100vh;
  text-align: left;
}
.maincontainer a {
  position: absolute;
  top: 165px;
  left: 5px;
}
.baseInfo {
  position: absolute;
  top: 200px;
  left: 5px;
  width: 890px;
  height: 455px;
  background-color: white;
  border: 1px solid rgb(245, 245, 245);
  box-shadow: 1px 1px 2px rgb(232, 232, 232);
}
.bookIcon {
  position: absolute;
  top: 20px;
  left: 30px;
  width: 40px;
  height: 40px;
  background-image: url("../assets/bookDetail.png");
  background-size: 40px 40px;
}
.bookInfo {
  position: absolute;
  top: 24px;
  left: 80px;
  width: 100px;
  font-size: 22px;
  color: #aaa;
}
.bookCover {
  position: absolute;
  top: 60px;
  left: 50px;
  width: 170px;
  height: 200px;
  background-image: url("../assets/bookimage.png");
  background-size: 170px 200px;
}
.bookTitle {
  position: absolute;
  top: 80px;
  left: 280px;
  width: 610px;
  font-size: 24px;
  font-weight: 600;
  color: rgb(63, 63, 63);
}
.bookAuthor {
  position: absolute;
  top: 130px;
  left: 280px;
  font-size: 17px;
  color: #666;
}
.bookPress {
  position: absolute;
  top: 170px;
  left: 280px;
  font-size: 17px;
  color: #666;
}
.bookNote {
  position: absolute;
  top: 210px;
  left: 280px;
  font-size: 17px;
  color: #666;
}
.bookAuthors {
  position: absolute;
  top: 130px;
  left: 420px;
  height: 40px;
  width: 450px;
  font-size: 17px;
  color: #666;
  overflow: hidden;
}
.bookPresses {
  position: absolute;
  top: 170px;
  left: 420px;
  height: 50px;
  width: 450px;
  font-size: 17px;
  color: #666;
  overflow: hidden;
}
.bookNotes {
  position: absolute;
  top: 210px;
  left: 420px;
  width: 450px;
  font-size: 17px;
  color: #666;
}
.division {
  position: absolute;
  top: 250px;
  left: 40px;
  width: 820px;
  height: 20px;
  color: #999;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.baseData {
  position: absolute;
  top: 275px;
  left: 40px;
  font-size: 17px;
  font-weight: 700;
  color: #444;
}
.baseDatas {
  position: absolute;
  top: 280px;
  left: 125px;
  width: 760px;
  height: 170px;
  color: #666;
  font-size: 14px;
  overflow: hidden;
}
.toLove {
  position: absolute;
  top: 191px;
  right: 30px;
  width: 80px;
  height: 72px;
  background: url("../assets/unfav.png");
  background-size: 80px 72px;
}
@media screen and (max-width: 1024px) {
  .justfather {
    transition: 0.3s ease-in;
    background-size: 630px 70px, 630px 420px;
    background-position: center bottom, center bottom;
  }
  .maincontainer {
    width: 728px;
  }
  .baseInfo {
    width: 718px;
  }
  .bookTitle {
    left: 280px;
    width: 420px;
    font-size: 20px;
  }
  .bookAuthors {
    left: 370px;
    width: 340px;
  }
  .bookPresses {
    left: 370px;
    width: 340px;
  }
  .bookNotes {
    left: 370px;
    width: 340px;
  }
  .division {
    width: 648px;
  }
  .baseDatas {
    width: 580px;
    height: 170px;
    font-size: 13px;
  }
}
@media screen and (max-width: 768px) {
  .justfather {
    transition: 0.3s ease-in;
    background-size: 351px 39px, 351px 354px;
    background-position: center bottom, center bottom;
  }
  .maincontainer {
    width: 350px;
  }
  .baseInfo {
    width: 340px;
  }
  .bookIcon {
    top: 10px;
    left: 20px;
    width: 30px;
    height: 30px;
    background-size: 30px 30px;
  }
  .bookInfo {
    top: 12px;
    left: 55px;
    width: 100px;
    font-size: 19px;
  }
  .bookCover {
    top: 50px;
    left: 20px;
    width: 119px;
    height: 140px;
    background-image: url("../assets/bookimage.png");
    background-size: 119px 140px;
  }
  .bookTitle {
    top: 65px;
    left: 150px;
    font-size: 15px;
    font-weight: 700;
    width: 180px;
  }
  .bookAuthor {
    top: 110px;
    left: 150px;
  }
  .bookPress {
    top: 150px;
    left: 150px;
  }
  .bookNote {
    top: 190px;
    left: 20px;
  }
  .bookAuthors {
    top: 110px;
    left: 195px;
    width: 130px;
  }
  .bookPresses {
    top: 150px;
    left: 210px;
    width: 120px;
  }
  .bookNotes {
    top: 190px;
    left: 85px;
    width: 250px;
  }
  .division {
    top: 240px;
    left: 20px;
    width: 300px;
  }
  .baseData {
    top: 265px;
    left: 20px;
    font-size: 14px;
  }
  .baseDatas {
    position: absolute;
    top: 265px;
    left: 90px;
    width: 245px;
    height: 185px;
    color: #666;
    font-size: 9px;
    overflow: hidden;
  }
  .toLove {
    top: 192px;
    right: 20px;
    width: 70px;
    height: 63px;
    background-size: 70px 63px;
  }
}
</style>
