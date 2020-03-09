<template>
    <div class="recoment">
        <div class="title">
            全部分类
            <span class="iconfont like">&#xe600;</span>
        </div>
        <div class="recoment-list" >
            <ul class="list" >
                <router-link 
                    tag="li"
                    class="recoment-item" 
                    v-for="item in this.recommendList" 
                    :key="item.id"
                    :to="'/detail/'+ item.id">
                    <div class="recoment-imgs">
                        <img :src="item.imgUrl" alt="item.title"/>
                        <span class="tips">{{item.tag}}</span>
                    </div>
                    <div class="infos">
                        <h3>{{item.title}}</h3>
                        <div class="score"> 
                            <span class="iconfont star">&#xe633;</span> 
                            <span class="iconfont star">&#xe633;</span> 
                            <span class="iconfont star">&#xe633;</span> 
                            <span class="iconfont star">&#xe633;</span> 
                            <span class="iconfont star">&#xe633;</span> 
                            <span class="comment">{{item.commentNum}}条评论</span> 
                        </div>
                        <div class="price-place">
                            <span class="price">￥<em>{{item.price}}</em></span> 起
                            <span class="place">{{item.district}}</span>
                        </div>
                        <div class="recoment-tip">
                            <p>{{item.tips}}</p>
                        </div>
                    </div>  
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 't-list',
    props: {
        recommendList: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
.recoment {
    width: 100%;
    min-height: 20rem;
}

.title {
    width: 100%;
    height: .88rem
    padding: 0 0 0 .3rem;
    background-color: #F5F5F5;
    line-height: .88rem;
    font-size: .32rem;
}

.title .like {
    color: #FF5B58;
}

.recoment-item {
    display: flex;
    width: 100%;
    height: 3.16rem;
    padding: .2rem 0 .2rem .3rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
}

.recoment-item .recoment-imgs {
    position: relative;
    width: 2rem;
    height: 2rem;
}

.recoment-item .recoment-imgs img {
    height: 100%;
}

.recoment-item .recoment-imgs .tips {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.02rem;
    height: .38rem;
    background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);
    background-size: 100% 100%;
    font-size: .24rem;
    line-height: .38rem;
    color: #fff;
    text-indent: .04rem;
}

.recoment-item .infos {
    min-width: 0;
    flex: 1;
    padding: 0 0 0 .2rem;
}

.recoment-item .infos h3 {
    margin: .26rem 0 0 0;
    font-size: .32rem;
}

.recoment-item .infos .score {
    height: .34rem;
    margin: .14rem 0 0 0;
}

.recoment-item .infos .score .star {
    font-size: .28rem;
    color: #FFb436;
}

.recoment-item .infos .score .comment {
    margin-left: .3rem;
    font-size: .24rem;
    color: #616161;
}

.recoment-item .infos .price-place {
    position: relative;
    height: .46rem;
    margin: .22rem 0 0 0;
    font-size: .24rem;
    line-height: .46rem;
    color: #616161;
}

.recoment-item .infos .price-place .price {
    color: #FF8300;
}

.recoment-item .infos .price-place em {
    font-size: .4rem;
}

.recoment-item .infos .price-place .place {
    position: absolute;
    right: .24rem;
    top: 0;
    color: #616161;
}

.recoment-item .infos .recoment-tip {
    width: 5rem;
    height: .34rem;
    margin: .48rem .24rem 0 0;
}

.recoment-item .infos .recoment-tip p {
    line-height: .34rem;
    color: #FF5555;
    font-size: .24rem;
    ellipsis();
}

.all-product {
    width: 100%;
    height: .8rem;
    margin: .2rem 0;
    color: #00AFC7;
    line-height: .8rem;
    text-align: center;
}
</style>