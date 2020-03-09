<template>
    <div class="header">
        <router-link tag="div" to='/' class="header-left">
            <span class="iconfont">&#xe624;</span>
        </router-link>
        <div class="header-middle">{{middle}}</div>
        <router-link to="/register" tag="div" class="header-right">{{right}}</router-link>
    </div>
</template>

<script>
export default {
    name: 'userHeader',
    data () {
        return {
            middle: '登录',
            right: '注册'
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