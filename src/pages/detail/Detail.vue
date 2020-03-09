<template>
    <div class="detail">
        <detail-banner :sight-name="sightName" 
                       :pictrue-num="pictrueNum"
                       :banner-image="bannerImage"
                       :gallery-images="galleryImages"></detail-banner>
        <detail-header ></detail-header>
        <detail-intro :intro-list="introList"></detail-intro>
        <detail-tiket :tikit-list="tikitList"></detail-tiket>
        <detail-comments :comments-list="commentsList"></detail-comments>
    </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/Banner'
import Header from './components/Header'
import Intro from './components/Intro'
import Tiket from './components/Tiket'
import Comments from './components/Comments'
export default {
    name: 'detailPages',
    data () {
        return {
            sightName: '',
            pictrueNum: '',
            bannerImage: '',
            galleryImages: [],
            introList: [],
            commentsList: [],
            tikitList: [],
        }
    },
    components: {
        'detail-banner': Banner,
        'detail-header': Header,
        'detail-intro': Intro,
        'detail-tiket': Tiket,
        'detail-comments': Comments
    },
    mounted () {
        this.getDetailList ();
    },
    methods: {
        getDetailList () {
            axios.get ('api/cqdetail.json')
            .then (this.getListSuccess)
        },
        getListSuccess (res) {
            if (res.data.ret === true && res.data.data) {
                let ret = res.data.data;
                this.sightName = ret.sightName;
                this.pictrueNum = ret.pictrueNum;
                this.bannerImage = ret.bannerImage;
                this.galleryImages = ret.galleryImages;
                this.introList = ret.introList;
                this.commentsList = ret.commentsList;
                this.tikitList = ret.tikitList;
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.detail {
    height: 20rem;
    background-color: $bodyColor;
}
</style>