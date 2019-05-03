<template>
    <el-container class="container">
        <el-aside class="aside"></el-aside>
        <el-main class="main">
            <header class="subheader">
                <img src="../assets/logo.png" alt="logo">
            </header>
            <main class="submain">
                <h2>Geek信息发布系统</h2>
                <el-input v-model="inputPhone" class="phone" placeholder="手机号" clearable></el-input>
                <el-input v-model="inputPwd" class="pwd" placeholder="密码" show-password clearable></el-input>
                <el-button type="primary" class="loginBtn">登录</el-button>
            </main>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Login",
        data: ()=>({
            inputPhone: '123',
            inputPwd: '456',
        })
    }
</script>

<style scoped lang="scss">

    .aside {
        height: 100vh;
        min-width: 500px;
        min-height: 725px;
        background: url("../assets/login_bg.jpg");
        background-size: cover;
    }

    .main {
        padding: 0;
        margin: 0;
        min-width: 780px;
    }

    .subheader {
        display: flex;
        align-items: center;
        height: 4rem;
        background: #fafafa;
        //border-bottom: 1px solid lightgrey;
        box-shadow: 2px 2px 2px #cccccc;

        img {
            margin-left: 1rem;
        }
    }

    .submain {
        display: flex;
        flex-direction: column;
        margin: 8rem auto 0;
        width: 60%;
        h2 {
            text-align: center;
            color: #409EFF;
        }

        .phone,.pwd,.loginBtn {
            margin-top: 2rem;
        }
    }





</style>