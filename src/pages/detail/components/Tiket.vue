<template>
    <div class="tikit">
        <div 
            v-for="item in this.tikitList" 
            :key="item.id">
            <div class="title">
                <span class="title-icon"></span>
                {{item.title}}
            </div>
            <div class="tiket-kinds">
                <div class="man-tiket">{{item.mTitle}}
                    <span class="price">￥<em>{{item.mPrice}}</em><span class="tip">起</span></span></div>
                <div class="man-tiket">{{item.yTitle}}
                    <span class="price">￥<em>{{item.yPrice}}</em><span class="tip">起</span></span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detailTiket',
    data () {
        return {
            
        }
    },
    props: {
        tikitList: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.tikit {
    position: relative;
    width: 100%;
    height: 3rem;
    margin: .3rem 0;
    background-color: #fff;
}

.title {
    width: 100%;
    height: .88rem;
    padding: 0 .2rem 0 .6rem;
    line-height: .88rem;
    font-size: .32rem;
}

.title-icon {
    display: inline-block;
    position: absolute;
    width: .36rem;
    height: .36rem;
    top: .26rem;
    left: .2rem;
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
}

.man-tiket {
    position: relative;
    width: 100%;
    height: .96rem;
    padding: 0 .2rem;
    line-height: .96rem;
    font-size: .3rem;
    border-top: 1px solid #ddd;
}

.man-tiket .price {
    position: absolute;
    right: .3rem;
    font-size: .24rem;
    color: $commentsColor;;
}

.man-tiket .price em {
    font-size: .4rem;
}

.man-tiket .price .tip {
    color: $minFontColor;
}

</style>