<template>
  <div class="root-layout">
    <div class="content-layout" v-if="memo_list.length"></div>
    <div class="non-content-layout" v-else>
      <div class="non-content-content">항목이 없습니다.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemoList",
  data() {
    return {
      memo_list: [{}]
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
  overflow-y: scroll;
}

.non-content-layout {
  display: table;
  height: 100%;
  width: 100%;
}

.non-content-content {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  overflow-y: hidden;
}
</style>
