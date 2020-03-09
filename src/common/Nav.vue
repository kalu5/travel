<template>
    <div class="nav">
        <ul class="nav-list">
            <router-link 
            tag="li"
            v-for="(item, index) in navList" 
            :key="index" 
            active-class="active"
            exact
            :to="item.route">
                <span class="iconfont nav-icon">{{item.icon}}</span>
                <p>{{item.title}}</p> 
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'travelNav', 
    data () {
        return {
            navList: [
                {
                    id: 1,
                    title: '首页',
                    icon: '\ue62e',
                    route: '/'
                },
                {
                    id: 2,
                    title: '订单',
                    icon: '\ue645',
                    route: '/user'
                },
                {
                    id: 3,
                    title: '重庆',
                    icon: '\ue63f',
                    route: '/place'
                },
                {
                    id: 4,
                    title: '我的',
                    icon: '\ue62f',
                    route: 'mine'
                }
            ]
        }
    }
    
}
</script>

<style lang="stylus" scoped>
.nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .88rem;
    background-color: #fff;
    border-top: 1px solid #ddd;
}

.nav-list {
    height: .88rem;
}

.nav li {
    position: relative;
    float: left;
    width: 25%;
    height: 100%;
    text-align: center;
    color: #616161;
    font-size: .24rem;
}

li.active {
    color: #00BCD4;
}

.nav li .nav-icon {
   font-size: .5rem;
}
</style>