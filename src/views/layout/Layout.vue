<template>
    <!--div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}"-->
    <div >
        <div class="navbar">
            <navbar></navbar>
        </div>
        <div class="page">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// import {Sidebar, Navbar, Main} from '@/views/layout'
import navbar from "@/views/layout/Navbar.vue";

export default {
  name: "layout",
  components: {
    navbar
  }
};
</script>



<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.page {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 70px;
  left: 0;
}
</style>
