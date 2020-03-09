<template>
    <div class="list">
        <ul>
            <li class="item" v-for="item in Lists" :key="item.id">
                <span class="iconfont left">{{item.left}}</span>
                <span class="title">{{item.title}}</span>
                <span class="iconfont right">{{item.right}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'list',
    data () {
        return {
            Lists: [
                {
                    id: 1,
                    left: '\ue65e',
                    title: '火车票订单',
                    right: '\ue62d'
                },
                {
                    id: 2,
                    left: '\ue719',
                    title: '机票订单',
                    right: '\ue62d'
                },
                {
                    id: 3,
                    left: '\ue60f',
                    title: '酒店订单',
                    right: '\ue62d'
                },
                {
                    id: 4,
                    left: '\ue609',
                    title: '门票订单',
                    right: '\ue62d'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.list {
    width: 100%;
    height: .9rem;
    line-height: .9rem;
    color: #8c8c8c;
    border-top: 1px solid #ddd;
}

.item {
    position: relative;
    border-bottom: 1px solid #ddd;
}

.left {
    padding-left: .3rem;
}

.title {
    padding-left: .3rem;
    font-size: .32rem;
    color: #000;
}

.right {
    position: absolute;
    right: .3rem;
}
</style>