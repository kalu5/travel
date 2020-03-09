<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :swiper-list="swiperList"></home-swiper>
        <icon-swiper :icons-list="iconsList"></icon-swiper>
        <home-weekhot :week-hot="weekHot"></home-weekhot>
        <home-recomment :recommend-list="recommendList"></home-recomment>
        <home-weekend :weekend-list="weekendList"></home-weekend>
        <home-nav></home-nav>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header'
import Swiper from './components/Swiper'
import IconSwiper from './components/IconSwiper'
import Weekhot from './components/Weekhot'
import Recomment from './components/Recoment'
import Weekend from './components/Weekend'
import Nav from 'common/Nav'
import { mapState } from 'vuex'
export default {
    name: 'home',
    data () {
        return {
            lastCity: '',
            swiperList: [],
            iconsList: [],
            recommendList: [],
            weekendList: [],
            weekHot: []
        }
    },
    components: {
        'home-header': Header,
        'home-swiper': Swiper,
        'icon-swiper': IconSwiper,
        'home-weekhot': Weekhot,
        'home-recomment': Recomment,
        'home-weekend': Weekend,
        'home-nav': Nav
    },
    mounted () {
        this.lastCity = this.curCity;
        this.getLists ();
    },
    computed: {
        ...mapState({
            curCity: 'city'
        })
    },
    methods: {
        getLists () {
            axios.get ('api/cq.json?city=' + this.curCity)
                 .then (this.getAllLists)
        },
        getAllLists (res) {
            if (res.data.ret === true && res.data.data) {
                let ret = res.data.data;
                this.swiperList = ret.swiperList;
                this.iconsList = ret.iconsList;
                this.recommendList = ret.recommendList;
                this.weekendList = ret.weekendList;
                this.weekHot = ret.weekHot;
            }      
        }
    },
    activated () {
        if (this.lastCity !== this.curCity) {
            this.lastCity = this.curCity;   
        }
    }
}
</script>

<style scoped>

</style>