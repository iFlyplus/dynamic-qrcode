<template>
    <!--div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}"-->
    <div class="app-wrapper">
        <v-navbar></v-navbar>
        <div class="sidebar-wrapper">
            <v-sidebar class="sidebar-container"></v-sidebar>
        </div>
        <div class="main-container">          
            <v-main>
                <router-view />
            </v-main>
        </div>
    </div>
</template>

<script>
// import {Sidebar, Navbar, Main} from '@/views/layout'
import vSidebar from '@/views/layout/Sidebar.vue'
import vNavbar from '@/views/layout/Navbar.vue'
import vMain from '@/views/layout/Main.vue'


export default {
    name: 'layout',
    components:{
        vSidebar,
        vNavbar,
        vMain
    }
}
</script>



<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.hideSidebar {
            .sidebar-wrapper {
                transform: translate(-140px, 0);
                .sidebar-container {
                    transform: translate(132px, 0);
                }
                &:hover {
                    transform: translate(0, 0);
                    .sidebar-container {
                        transform: translate(0, 0);
                    }
                }
            }
            .main-container {
                margin-left: 40px;
            }
        }
        .sidebar-wrapper {
            width: 260px;
            position: fixed;
            top: 69px;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow: hidden;
            transition: all .28s ease-out;
        }
        .sidebar-container {
            transition: all .28s ease-out;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: -17px;
            // overflow-y: scroll;
        }
        .main-container {
            min-height: 100%;
            transition: all .28s ease-out;
            margin-left: 260px;
        }
    }
</style>
