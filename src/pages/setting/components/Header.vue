<template>
    <div class="header">
        <div class="header-middle">
            <router-link to='/mine' tag="div" class="iconfont back">&#xe624;</router-link>
            设置
        </div>
    </div>
</template>

<script>
export default {
    name: 'settingHeader',
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header {
    width: 100%;
    height: .88rem;
    background-color: $bgColor;
    color: #fff;
}

.header .header-middle {
    position: relative;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    font-size: .32rem;
}

.header .header-middle .back {
    position: absolute;
    left: .3rem;
}

</style>