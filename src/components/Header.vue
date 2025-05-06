<script lang="ts" setup>
    import { ElIcon } from 'element-plus'
    import { SuccessFilled } from '@element-plus/icons-vue'

    // 项目主页配置
    const logo = {
        name: "Template",  // 修改这里显示的项目名称
        link: "#",         // 修改这里的主页链接
    }

    // 更多菜单配置（已清空）
    const more_paper = {}
</script>

<template>
    <!-- 固定定位的顶部导航 -->
    <el-affix :offset="0" :style="{ width: '100%' }">
        <!-- 水平导航菜单 -->
        <el-menu default-active="1"
                 class="el-menu-demo"
                 mode="horizontal"
                 :ellipsis="false">
            <!-- 项目主页菜单项 -->
            <el-menu-item index="1">
                <el-icon :size="20"><SuccessFilled /></el-icon>
                <a :href="logo.link">{{ logo.name }}</a>
            </el-menu-item>
        </el-menu>
    </el-affix>
</template>

<style>
    /* 导航背景透明 */
    .el-menu {
        background: none;
    }

    /* 固定定位后的毛玻璃效果 */
    .el-affix--fixed {
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        background-image: radial-gradient(#ffffffca 1px, #ffffff 1px);
        background-size: 3px 3px;
    }

    /* 设置导航栏高度 */
    .el-header {
        --el-header-height: 50px;
    }
</style>

<style scoped>
    /* 主菜单项靠右对齐 */
    .el-menu--horizontal > .el-menu-item:first-child {
        margin-right: auto;
    }

    /* 设置导航栏高度 */
    .el-menu--horizontal {
        --el-menu-horizontal-height: 50px;
    }

    /* 链接样式重置 */
    a {
        text-decoration: none;
        color: inherit;
    }

        a:hover {
            color: inherit;
            border-bottom: none;
        }
</style>
