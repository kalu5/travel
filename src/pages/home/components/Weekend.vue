<template>
    <div class="week">
        <div class="title">周末去哪儿</div>
        <ul class="list">
            <li class="item" v-for="item in this.weekendList" :key="item.id">
                <div class="week-imgs">
                    <img :src="item.imgUrl" alt="item.title"/>
                </div>
                <div class="tips">
                    <p class="tips-title">{{item.title}}</p>
                    <p class="tips-content">{{item.comment}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'week',
    props: {
        weekendList: Array
    }
}
</script>

<style lang="stylus" scoped>
.week {
    width: 100%;
    min-height: 22rem;
}

.title {
    width: 100%;
    height: .8rem;
    padding-left: .3rem;
    background-color: #F5F5F5;
    line-height: .8rem;
}

.item {
    width: 100%;
    height: 100%;
}

.week-imgs {
    width: 100%;
    height: 2.83rem;
}

.week-imgs img {
    width: 100%;
    height: 100%;
}

.tips {
    width: 100%;
    height: 1.24rem;
    padding: .14rem .3rem .2rem;
    box-sizing: border-box;
}

.tips .tips-title {
    height: .48rem;
    line-height: .48rem;
    font-size: .28rem;
    color: #212121;
}

.tips .tips-content {
    height: .42rem;
    line-height: .42rem;
    font-size: .24rem;
    color: #616161;
}
</style>