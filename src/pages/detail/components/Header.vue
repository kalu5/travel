<template>
    <div class="header">
        <router-link to="/" tag="div" class="back-home" >
            <span class="iconfont">&#xe624;</span>
        </router-link>
        <div class="header-content" 
             v-if="showHeader"
             :style="changeOpacity">
            <router-link tag="span" to='/' class="iconfont back">&#xe624;</router-link>
            龚滩古镇(AAAA景区)
        </div>
    </div>
</template>

<script>
export default {
    name: 'detailHeader',
    data () {
        return {
            showHeader: false,
            changeOpacity: {
                opacity: 0
            }
        }
    },
    activated () {
        window.addEventListener ('scroll', this.scrollFun, false);
    },
    methods: {
        scrollFun () {
            let scroll = document.documentElement.scrollTop;
            if (scroll > 50) {
                let opacity = scroll / 200;
                let opacityF = opacity > 1 ? 1 : opacity;
                this.changeOpacity = {
                    opacity: opacityF
                }
                this.showHeader = true;
            } else {
                this.showHeader = false;
            }
        }
    },
    deactivated () {
        window.removeEventListener ('scroll', this.scrollFun, false);
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.back-home {
    position: absolute;
    top: .1rem;
    left: .1rem;
    width: .8rem;
    height: .8rem;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 50%;
    line-height: .8rem;
    text-align: center;
    color: #fff;
}

.header-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    background-color: $bgColor;
    color: #fff;
    z-index: 2;
    font-size: .36rem;
}

.back {
    position: absolute;
    left: .3rem;
}
</style>