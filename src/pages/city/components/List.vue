<template>
    <div class="city-list" ref="cityListSwiper">
        <div class="content">
        <div class="hot-city">
            <div class="hot-title">热门城市</div>
            <div class="hot-list">
                <ul class="clearfix">
                    <li class="hot-item" 
                        v-for="(item, index) in getHotNewArr"
                        :key="index"
                        :class="item.borderType"
                        @click="handelCity(item.name)">{{item.name}}</li>
                </ul>
            </div>
        </div>
        <div class="alpha">
            <div class="alpha-title">字母排列</div>
            <div class="alpha-list">
                <ul class="clearfix">
                    <li class="alpha-item" 
                        v-for="(item, index) in getAlpha" 
                        :key="index" 
                        @click="letterClick">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="alpha-city" 
             v-for="(item, key) in cities" 
             :key="key"
             :ref="key">
            <div class="alpha-city-title">{{key}}</div>
            <div class="alpha-city-list">
                <ul class="clearfix">
                    <li class="alpha-city-item" 
                        v-for="place in item" 
                        :key="place.id"
                        @click="handelCity(place.name)">{{place.name}}</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'cityList',
    data () {
        return {
            letter: ''
        }
    },
    props: {
        hotCities: Array,
        cities: Object
    },
     mounted () {
        this.$nextTick(() => {
            this.scroll = new BScroll (this.$refs.cityListSwiper, {
                click: true
            });
        }, 20)
    },
    computed: {
        getHotNewArr () {
            let len = this.hotCities.length,
                item,
                hotList = [];

            for (let i = 0; i < len; i++) {
                let newObj = {};
                item = this.hotCities[i];
                newObj.name = item.name;
                if (item.order === 1) {
                    newObj.borderType = ''
                } else if (item.order === 2 || item.order === 3) {
                    newObj.borderType = 'border-left';
                } else if (item.order % 3 === 1) {
                    newObj.borderType = 'border-top';
                } else {
                    newObj.borderType = 'border-topleft';
                }
                hotList.push (newObj);
            }
            return hotList;
        },
        getAlpha () {
            let alphaList = [];

            for (let key in this.cities) {
                alphaList.push (key);
            }
            return alphaList;
        }
    },
    methods: {
        letterClick (e) {
            this.letter = e.target.innerText;
        },
        handelCity (city) {
            this.changeCityName (city);
            this.$router.push ('/');
        },
        ...mapMutations({
            changeCityName: 'changeCityName'
        })
    },
    watch: {
        letter () {
            let elem = this.$refs[this.letter][0];
            this.scroll.scrollToElement (this.$refs[this.letter][0]);
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'

.city-list {
    position: fixed;
    top: .88rem;
    bottom: 0;
    width: 100%;
    height: 100%;
    color: $minDarkColor;
    overflow: hidden;
    background-color: #F5F5F5;
}

.city-list .content {
    height: auto;
}

.hot-city {
    width: 100%;
    heigth: 4.4rem;
}

.hot-city .hot-title,
.alpha-title,
.alpha-city-title {
    width: 100%;
    height: .8rem;
    padding-left: .3rem;
    line-height: .8rem;
    font-size: .24rem;
}

.hot-city .hot-item {
    float: left;
    width: 33.3%;
    height: .9rem;
    line-height: .9rem;
    text-align: center;
    background-color: #fff;
}

.alpha {
    width: 100%;
    height: 5rem;
}

.alpha ul {
    padding: .3rem 0;
    background-color: #fff;
}

.alpha-item {
    float: left;
    width: 16.6%;
    height: .9rem;
    line-height: .9rem;
    text-align: center;
}

.alpha-city ul {
    background-color: #fff;
}

.alpha-city-item {
    float: left;
    width: 25%;
    height: .9rem;
    line-height: .9rem;
    text-align: center;
}
</style>