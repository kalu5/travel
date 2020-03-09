<template>
    <div class="login-page">
        <el-alert
            title="用户名或密码错误"
            type="warning"
            center
            show-icon
            v-show="showWarningTips">
        </el-alert>
        <el-alert
            title="服务器忙，请稍后"
            type="error"
            center
            show-icon
            v-show="showErrorTips">
        </el-alert>
        <div class="login-form">
            <form class="form-inner">
                <div class="username">
                    <label for="username">
                        账号
                        <input type="text" id="username" placeholder="手机号/邮箱/用户名" ref="username" />
                    </label>
                </div>
                <div class="username">
                    <label for="password">
                         密码
                        <input type="password" id="password" placeholder="请输入密码" ref="password" />
                    </label>
                </div>
                <div class="submit">
                    <button class="btn" @click="handleLogin">登录</button>
                </div>
                <div class="tip">找回密码?</div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'loginPage',
    data () {
        return {
            showWarningTips: false,
            showErrorTips: false
        }
    },
    methods: {
        handleLogin (e) {
            e.preventDefault ();
            const username = this.$refs.username.value,
                  password = this.$refs.password.value;

            axios.post ('/login', {
                username: username,
                password: password
            })
            .then (this.loginSuccess)
        },
        loginSuccess (res) {
            let code = res.data.err_code;

            if (code === 0) {
                const user = this.$refs.username.value;
                localStorage.user = user;
                localStorage.isLogin = true;
                window.location.href = 'http://localhost:8080/#/mine';
            } else if (code === 1) {
                this.showWarningTips = true;
                setTimeout (() => {
                    this.showWarningTips = false;
                }, 1000)
            } else if (code === 500) {
                this.showErrorTips = true;
                setTimeout (() => {
                    this.showErrorTips = false;
                }, 1000)
            }
        }
    }

}
</script>

<style lang="stylus" scoped>
.login-form {
    width: 100%;
    height: 0;
    padding-bottom: 60%;
    margin-top: 1rem;
}

.login-form .form-inner {
    padding: .3rem .3rem;
}

.login-form .form-inner .username {
    width: 100%;
    height: .8rem;
    border-bottom: 1px solid #ddd;
    line-height: .8rem;
    font-size: .36rem;
    color: #19A9BA;
}

.login-form .form-inner label {
    width: 1.5rem;
    height: .6rem;
    text-align: right;
}

.login-form .form-inner input {
    padding-left: .6rem;
    font-size: .32rem; 
}

.login-form .form-inner .submit {
    width: 100%;
    height: .8rem;
    margin-top: .3rem;
}

.login-form .form-inner .submit .btn {
    width: 100%;
    height: 100%;
    line-height: .8rem;
    text-align: center;
    background-color: #85D1DB;
    color: #fff;
    font-size: .36rem;
}

.login-form .form-inner .tip {
    width: 100%;
    height: .34rem;
    margin-top: .2rem;
    line-height: .34rem;
    text-align: right;
    color: #00afc7;
}
</style>