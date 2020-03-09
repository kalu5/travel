<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-middle">
            <input type="text" class="search" />
            <div class="kw">请输入城市/景点/游玩主题</div>
            <span class="iconfont search-icon">&#xe632;</span>
        </div>
        <router-link tag="div" to="/city" class="header-right">
            {{this.city}}
            <span class="iconfont">&#xe6aa;</span>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'homeHeader',
    computed: {
        ...mapState({
            city: 'city'
        })
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
    position: relative;
    flex: 1;
    margin: .14rem 0;
}

.header .header-middle .search {
    width: 100%;
    height: 100%;
    border-radius: .06rem;
    z-index: 99;
}

.header .header-middle .kw {
    position: absolute;
    top: .16rem;
    left: .65rem;
    color: #e4e7ea;
    z-index: 2;
}

.header .header-middle .search-icon {
    position: absolute;
    top: .13rem;
    left: .2rem;
    color: #e4e7ea;
    z-index: 2;
}

.header .header-right {
    min-width: 1.12rem;
    height: 100%;
    padding: 0 .1rem;
    line-height: .88rem;
    text-align: center;
}
</style>