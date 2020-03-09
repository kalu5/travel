<template>
    <div class="swiper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in this.swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'homeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: 3000
            }
        }
    },
    props: {
        swiperList: Array
    },
    computed: {
        showSwiper () {
            return this.swiperList.length
        }
    }
}
</script>

<style lang="stylus" scoped>
.swiper {
    width: 100%;
    height: 0;
    padding-bottom: 26.67%;
    background-color: #eee;
    overflow: hidden;
}

.swiper-img {
    width: 100%;
}
</style>