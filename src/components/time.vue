<template>
  <div class="root-layout">
    <div class="timezone-selection">
      <select onfocus="this.size=6;" onchange="this.size=1; this.blur();" v-model="timezone">
        <option value selected disabled hidden>Timezone</option>
        <option v-for="(zone, index) in timezone_list" :key="index">{{zone}}</option>
      </select>
    </div>
    <div class="time-show-layout">
      <div class="time-wrapper">
        <div class="date">{{ date }}</div>
        <br>
        <br>
        <br>
        <br>
        <div class="time">{{ time }}</div>
      </div>
    </div>
    <div class="list-show-layout">
      <button v-on:click="change_show_state(0)">memo</button>
      <span class="list-show-bar">|</span>
      <button v-on:click="change_show_state(1)">todo</button>
    </div>
    <div v-if="todoShow" class="list-layout" style="right: calc(3% + 121px);"></div>
    <div v-if="memoShow" class="list-layout"></div>
  </div>
</template>

<script>
var moment = require("moment-timezone");
export default {
  name: "Time",
  data() {
    return {
      time: "",
      date: "",
      timezone: "Asia/Seoul",
      timezone_list: null,
      todoShow: false,
      memoShow: false
    };
  },
  components: {},
  beforeCreate: function() {},
  mounted: function() {
    this.show_time();
    moment.tz.setDefault("Asia/Seoul");
    this.timezone_list = moment.tz.names();
  },
  watch: {
    timezone: function() {
      this.show_time();
    }
  },
  methods: {
    show_time: function() {
      var timerID = setInterval(this.update_time, 1000);
      this.update_time();
    },
    update_time: function() {
      this.date = moment()
        .tz(this.timezone)
        .format("YYYY[.]MM[.]DD[.]");
      this.time = moment()
        .tz(this.timezone)
        .format("HH:mm:ssa");
    },
    change_show_state: function(obj) {
      console.log("show state", obj);
      if (obj == 0) {
        this.memoShow = !this.memoShow;
        this.todoShow = false;
      } else if (obj == 1) {
        this.memoShow = false;
        this.todoShow = !this.todoShow;
      } else {
        this.memoShow = false;
        this.todoShow = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root-layout {
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: transparent;
}

.timezone-selection {
  display: block;
  position: relative;
  width: 100%;
  height: 10%;
}

.timezone-selection select {
  outline: 0px;
  font-size: 100%;
  position: absolute;
  float: right;
  width: max-content;
  text-align-last: right;
  border: 0px;
  outline: 0px;
  background-color: transparent;
  overflow: scroll;
  font-size: 25px;
  top: 25%;
  z-index: 1;
  right: 1%;
}

.time-show-layout {
  position: relative;
  height: 80%;
}

.time-show-layout .time-wrapper {
  position: relative;
  display: inline-block;
  top: 30%;
}

.time-show-layout .date {
  /* font-size: 150px; */
  display: block;
  position: relative;
  float: left;
  font-size: 56px;
  /* font-weight: bold; */
}

.time-show-layout .time {
  /* font-size: 200px; */
  display: block;
  position: relative;
  float: left;
  font-size: 86px;
  font-weight: bold;
  top: -15px;
}

.list-show-layout {
  position: relative;
  height: 10%;
  font-size: 100%;
  padding-right: 3%;
}

.list-show-layout button {
  border: 0px;
  outline: 0px;
  float: right;
  font-size: 30px;
  font-weight: bold;
  z-index: 2;
}

.list-show-bar {
  float: right;
  font-size: 35px;
}

.list-layout {
  /* background-image: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    violet,
    yellow,
    orange,
    red
  ); */
  background-color: #ccc;
  position: absolute;
  width: 280px;
  height: 200px;
  bottom: calc(55px + 5%);
  right: calc(3% + 23px);
  border-radius: 15px;
  z-index: 3;
}

.list-layout:after {
  content: "";
  position: absolute;
  border-top: 30px solid #ccc;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  bottom: -26px;
  right: 15px;
  z-index: 1;
}
</style>
