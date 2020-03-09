<template>
    <div class="header">
        <router-link tag="div" to='/' class="header-left">
            <span class="iconfont">&#xe624;</span>
        </router-link>
        <div class="header-middle">个人中心</div>
        <div v-show="!showLogin">
            <router-link to="/login" tag="div" class="header-right">登录</router-link>
        </div>
        <div v-show="showLogin">
            <router-link to="/all" tag="div" class="header-right">推荐</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'userHeader',
    data () {
        return {
            showLogin: false,
        }
    },
    mounted ()  {
        if (localStorage.user && localStorage.isLogin) {
            this.showLogin = true;
        } else {
            this.showLogin = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header {
    display: flex;
    width: 100%;
    height: .88rem;
    background-color: $bgColor;
    color: #fff;
}

.header .header-left {
    width: .8rem;
    height: 100%;
    line-height: .88rem;
    text-align: center;
}

.header .header-middle {
    flex: 1;
    text-align: center;
    line-height: .88rem;
    font-size: .36rem;
}

.header .header-right {
    width: 1.12rem;
    height: 100%;
    line-height: .88rem;
    text-align: center;
}
</style>