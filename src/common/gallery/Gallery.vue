<template>
    <div class="gallery" @click="handelShow">
        <gallery-fade>
            <div class="gallery-img-box">
                <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="item in this.galleryImages" :key="item.id">
                    <img :src="item.imgUrl" alt="" />
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            </div>
        </gallery-fade>
    </div>  
</template>

<script>
import Fade from 'common/fade/Fade'
export default {
    name: 'gallery',
    components: {
        'gallery-fade': Fade
    },
    props: {
        galleryImages: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observer: true,
                observeParents: true

            }
        }
    },
    methods: {
        handelShow () {
            this.$emit ('changeShow')
        }
    }
}
</script>

<style lang="stylus" scoped>
div {
    display: flex;
}

.gallery >>> .swiper-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.gallery >>> .swiper-slide {
    flex-direction: column;
    justify-content: center;
}

.gallery {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    z-index: 99;
}

.gallery-img-box {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
}

.gallery-img-box img {
    width: 100%;
}

.gallery .swiper-pagination {
	bottom: .48rem;
	color: #fff;
	justify-content: center;
}
</style>