<template>
    <div class="setting">
        <setting-header></setting-header>
        <div class="list">
            <ul>
                <li class="item">实名认证</li>
                <li class="item">账号安全</li>
                <li class="item">账号关联</li>
                <li class="item">支付设置</li>
                <li class="item">关于</li>
            </ul>
        </div>
        <div class="logout" @click="handleLogout">退出登录</div>
    </div>
</template>

<script>
import Header from './components/Header'
export default {
    name: 'setting',
    components: {
        'setting-header': Header
    },
    methods: {
        handleLogout () {
            localStorage.user = '';
            localStorage.isLogin = false;
            window.location.href = 'http://localhost:8080/#/login'
        }
    }

}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.setting {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
}

.list {
    width: 100%;
    height: 5.5rem;
}

.list .item {
    width: 100%;
    height: .88rem;
    line-height: .88rem;
    padding: 0 .3rem;
    border-bottom: 1px solid #000;
    font-size: .32rem;
    color: #ffff;
}

.logout {
    width: 100%;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    background-color: #fff;
    border-radius: .1rem;
    background-color: $bgColor;
    color: #fff;
    font-size: .38rem;
}
</style>