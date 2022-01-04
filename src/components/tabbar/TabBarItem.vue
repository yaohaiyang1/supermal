<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path:String,
    activeColor: {
     type: String,
     default: 'red'
    }
  },
  data() {
    return {
      // isActive: false,
    }
  },
  methods: {
    itemclick() {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path)
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  }

}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 25px;
  width: 25px;
  vertical-align: middle;
  margin-top: 2px;
  margin-bottom: 2px;
}

.active {
  color: red;
 }
</style>