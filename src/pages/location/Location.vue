<template>
    <div class="location">
        <location-nav></location-nav>
        <location-header></location-header>
        <div class="location-center">
            <span class="iconfont">&#xe63f;</span>
            定位失败...
        </div>
        
    </div>
</template>

<script>
import Header from './components/Header'
import Nav from 'common/Nav'
export default {
    name: 'location',
    data () {
        return {
            middle: '定位',
            right: '高德'
        }
    },
    components: {
        'location-header': Header,
        'location-nav': Nav
    }
}
</script>

<style lang="stylus" scoped>
.location-center {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    color: #616161;
    font-size: .4rem;
}
</style>