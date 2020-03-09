<template>
    <div class="mine-order">
        <div class="outer">
            <div class="inner">
                <div class="title">
                    <h1>我的订单</h1>
                    <span class="all">查看全部订单</span>
                </div>
                <div class="order-kinds">
                    <ul class="list">
                        <li class="item" v-for="item in lists" :key="item.id">
                            <span class="iconfont order-count">{{item.icon}}</span>
                            <p class="order-tip">{{item.title}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mineOrder',
    data () {
        return {
            lists: [
                {
                    id: 1,
                    icon: '\ue670',
                    title: '待付款'
                },
                 {
                    id: 2,
                    icon: '\ue613',
                    title: '待出行'
                },
                 {
                    id: 3,
                    icon: '\ue646',
                    title: '待点评'
                },
                 {
                    id: 4,
                    icon: '\ue757',
                    title: '退款单'
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.mine-order {
    width: 100%;
    height: 2.6rem;
    padding: .2rem;
}

.mine-order .outer {
    width: 100%;
    height: 100%;
    border-radius: .1rem;
    background-color: #F5F5F5;
}

.mine-order .inner {
    padding: .2rem;
}

.mine-order .inner .title {
    width: 100%;
    height: .6rem;
    line-height: .6rem;
}

.mine-order .inner .title h1 {
    display: inline-block;
    font-size: .32rem;
    font-weight: bold;
}

.mine-order .inner .title .all {
    float: right;
    height: 100%;
    font-size: .24rem;
    color: #616161;
}

.mine-order .inner .order-kinds {
    width: 100%;
    height: 1rem;
    margin-top: .2rem;
}

.mine-order .inner .order-kinds .list {
    height: 1rem;
}

.mine-order .inner .order-kinds .list .item {
    float: left;
    width: 25%;
    height: 100%;
    text-align: center;
}

.mine-order .inner .order-kinds .list .item .order-count {
    font-size: .6rem;
    color: #85D1DB;
}

.mine-order .inner .order-kinds .list .item .order-tip {
    margin-top: .1rem;
    font-size: .22rem;
    color: #424242;
}
</style>