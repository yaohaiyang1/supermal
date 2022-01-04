<template>
  <tab-bar>
    <!--如果想增加或删除tabBar请自动向这里更新系统会自动布局 -->
    <tab-bar-item path="/home" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/img/tabbar/shouye.jpg" />
      <img slot="item-icon-active" src="../assets/img/tabbar/shouye1.jpg" alt=""/>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/img/tabbar/fenlei.jpg" />
      <img slot="item-icon-active" src="../assets/img/tabbar/fenlei1.jpg" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/img/tabbar/gouwuche.jpg" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/gouwuche1.jpg" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/img/tabbar/wode.jpg" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/wode1.jpg" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar.vue';
import TabBarItem from "@/components/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>