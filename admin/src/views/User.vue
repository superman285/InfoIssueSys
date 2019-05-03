<template>
    <div>

        <header>
            <div class="logo">
                <img src="../assets/logo.png" alt="logo">
                <span>信息管理</span>
            </div>
            <div class="func">
                <span>≡ 用户管理</span>
                <a href="#">退出系统<i class="el-icon-switch-button"></i></a>
            </div>
        </header>

        <aside>

            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    >
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">用户管理</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-document"></i>
                    <span slot="title">分类管理</span>
                </el-menu-item>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>文章管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">文章列表</el-menu-item>
                        <el-menu-item index="1-2">新建文章</el-menu-item>
                    </el-menu-item-group>

                </el-submenu>
            </el-menu>
        </aside>


    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped lang="scss">

    header {
        display: flex;
        align-items: center;
        height: 5rem;
        width: 100%;
        border-bottom: 1px solid lightgrey;

        .logo {
            padding: 0 1rem;
            width: 18rem;
            height: 100%;
            line-height: 5rem;
            box-sizing: border-box;
            background: #f4f4f4;
            img {
                margin-right: 1rem;
                vertical-align: middle;
            }
            span {
                vertical-align: middle;
            }
        }

        .func {
            flex: 1;
            display: flex;
            justify-content: space-between;
            span {
                margin-left: 2rem;
            }
            a {
                margin-right: 4rem;
            }
        }
    }

    aside {
        width: 18rem;
        height: 400px;
        background: #f8f8f8;
    }

    .el-menu-vertical-demo {
        border-right:none;
        background: #f4f4f4;
    }

</style>