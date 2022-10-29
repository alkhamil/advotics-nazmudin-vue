
<template>
    <div class="app-layout">
        <HeaderComponent class="app-header" />
        <div class="app-wrapper" :class="{collapsed: isCollapsed}">
            <SidebarComponent @onCollapsed="onCollapsed" class="app-sidebar" />
            <div class="app-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

export default {
    name: 'LayoutComponent',
    data() {
        return {
            isCollapsed: false
        }
    },
    components: {
        HeaderComponent,
        SidebarComponent
    },
    methods: {
        onCollapsed(value) {
            this.isCollapsed = value;
        },
    }
}
</script>
<style lang="scss">
.app-layout {
    display: grid;
    grid-template-rows: 64px 1fr;

    .app-header {
        background: #FFFFFF;
        box-shadow: 0px 3px 6px #00000029;
        position: relative;
        z-index: 999;
    }

    .app-wrapper {
        height: calc(100vh - 64px);
        display: grid;
        grid-template-columns: 72px 1fr;
        transition: all ease-in-out .3s;

        &.collapsed {
            grid-template-columns: 210px 1fr;
            transition: all ease-in-out .3s;
        }

        .app-sidebar {
            background: #FFFFFF;
            height: 100%;
        }

        .app-content {
            background: #f7f7f7;
            height: inherit;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 14px;
        }
    }
}
</style>