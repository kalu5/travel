<template>
    <div>
        <div class="banner" 
             v-show="showGorB"
             @click="handelShow"
             >
            <div class="banner-img-box"> 
                <img class="banner-img" :src="bannerImage" alt=""/>
            </div>
            <div class="banner-intro">
                <div class="banner-img-number"> <span class="iconfont">&#xe7f1;</span> {{this.pictrueNum}}</div>
                <div class="banner-title">{{this.sightName}}</div>
            </div>
        </div>
        <banner-gallery 
            v-show="!showGorB" 
            @changeShow="hideGallery"
            :gallery-images="this.galleryImages"></banner-gallery>
    </div>
</template>

<script>
import Gallery from 'common/gallery/Gallery'
export default {
    name: 'detailBanner',
    data () {
        return {
            showGorB: true
        }
    },
    props: {
        sightName: String,
        pictrueNum: String,
        bannerImage: String,
        galleryImages: Array
    },
    methods: {
        handelShow () {
            this.showGorB = false;
        },
        hideGallery () {
            this.showGorB = true;
        }
    },
    components: {
        'banner-gallery': Gallery,
    }
}
</script>

<style lang="stylus" scoped>
.banner {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 55%;
    background-color: #ccc;
}

.banner .banner-img-box {
    width: 100%;
    height: 100%;
}

.banner .banner-img {
    width: 100%;
}

.banner .banner-intro {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5) );
}

.banner .banner-intro .banner-img-number {
    width: 1.2rem;
    height: .4rem;
    margin: 0 0 .1rem .3rem;
    line-height: .4rem;
    text-align: center;
    color: #fff;
    font-size: .24rem;
    border-radius: .5rem;
    background-color: rgba(0, 0, 0, .5);
}

.banner .banner-intro .banner-title {
    width: 100%;
    height: .4rem;
    padding-left: .3rem;
    line-height: .4rem;
    color: #fff;
    font-size: .36rem;
}

</style>