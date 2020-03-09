<template>
    <div class="week-hot">
        <div class="title">
            <span class="iconfont hot">&#xe65a;</span>
            本周热门榜单
        </div>
        <div class="list">
           <ul class="clearfix">
                <router-link tag="li" class="inner" v-for="item in this.weekHot" :key="item.id" :to="'detail/'+ item.id">
                    <div class="img-box">
                        <img :src="item.imgUrl" alt="item.title" />
                    </div>
                    <div class="tips">{{item.title}}</div>
                    <div class="price"><em>{{item.price}}</em>起</div>
                </router-link>
           </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'week-hot',
    props: {
        weekHot: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
@import '~styles/mixin.styl'
.week-hot {
    width: 100%;
    height: 4rem;
}

.hot {
    color: #FF5B58;
}

.title {
    width: 100%;
    height: .88rem;
    padding: 0 .3rem;
    font-size: .32rem;
    line-height: .88rem;
    background-color: $bodyColor;
}

.list {
    width: 100%;
    height: 3.12rem;
    padding: .2rem 0 .2rem 0;
}

.list .inner {
    float: left;
    width: 33.3%;
    height: 100%;
    padding: .2rem;
    text-align: center;
}

.list .inner .img-box {
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
}

.list .inner .img-box img {
    width: 100%;
    heightL 100%;
}

.list .inner .tips {
    margin-top: .1rem;
    text-align: center;
    font-size: .24rem;
    ellipsis();
}

.list .inner .price {
    margin-top: .1rem;
    text-align: center;
    font-size: .24rem;
}

.list .inner .price em {
    color: $commentsColor;
}
</style>