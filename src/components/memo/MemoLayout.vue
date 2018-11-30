<template>
  <div class="root-layout">
    <div class="header-layout">
      <div class="header-title">{{ title }}</div>
      <div class="header-selection"></div>
    </div>
    <div class="content-layout">
      <memo-detail v-if="mode == 1"></memo-detail>
      <memo-modification v-else-if="mode == 2"></memo-modification>
      <memo-list v-else></memo-list>
    </div>
    <!-- <router-view class="content-layout"></router-view> -->
  </div>
</template>

<script>
import memoDetail from "./MemoDetail.vue";
import memoList from "./MemoList.vue";
import memoModification from "./MemoModification.vue";
export default {
  name: "Memo",
  components: {
    memoDetail,
    memoList,
    memoModification
  },
  watch: {
    mode: function() {
      if (tihs.mode == 1) {
        this.title = this.memo_list[this.selected_index];
      }
    }
  },
  data() {
    return {
      title: "MEMO",
      mode: 0,
      selected_index: -1,
      memo_list: []
    };
  },
  methods: {}
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

.header-layout {
  display: block;
}

.header-title {
  font-size: 23px;
  font-weight: bold;
  text-align: left;
  display: block;
  left: 3%;
  width: fit-content;
  position: relative;
}

.header-selection {
}

.content-layout {
  overflow-y: scroll;
  position: relative;
  height: calc(100% - 40px);
}
</style>
