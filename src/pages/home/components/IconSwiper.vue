<template>
    <div class="icon-swiper">
         <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(page, index) in pages" :key="index" >
                <router-link tag="div" to="/list" class="icons" v-for="item in page" :key="item.id">
                    <div class="icon-imgs">
                        <img class="img" :src="item.imgUrl" alt="" />
                    </div>
                    <div class="icon-desc">
                        {{item.description}}
                    </div>
                </router-link>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'iconSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                aotoplay: false
            }
        }
    },
    props: {
        iconsList: Array
    },
    computed: {
        pages () {
            let pages = [];
            this.iconsList.forEach ((item, idx) => {
                let page = Math.floor (idx / 8);
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push (item);
            });
            return pages;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
@import '~styles/variable.styl'

.icon-swiper >>> .swiper-pagination-bullets {
    position: absolute;
    left: 0;
    bottom: 0;
}

.icon-swiper >>> .swiper-pagination {
    position: relative;
    width: 100%;
    height: 100%;
}

.icon-swiper >>> .swiper-pagination-bullet {
    width: .12rem;
    height: .12rem;
}

.icon-swiper >>> .swiper-pagination-bullet-active {
    background-color: #00BCD4;
}
.icon-swiper {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    margin: .1rem 0;
    overflow: hidden;
}

.icon-swiper .icons{
    float: left;
    width: 25%;
    height: 1.5rem;
    padding: .1rem 0 0 0;
    text-align: center;
}

.icon-swiper .icons .icon-imgs {
    display: inline-block;
    width: 1.1rem;
    height: 1.1rem;
}

.icon-swiper .icons .icon-imgs .img {
    width: 100%;
}

.icon-swiper .icons .icon-desc {
    margin-top: .1rem;
    color: $darkColor;
    ellipsis();
}

</style>