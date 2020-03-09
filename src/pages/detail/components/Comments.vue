<template>
    <div class="comments">
        <div class="comments-title">
            用户评论
        </div>
        <div class="comments-list"
             v-for="item in this.commentsList"
             :key="item.id">
            <div class="comments-list-title">
                <span class="score">
                    <span class="iconfont star">&#xe633;</span> 
                    <span class="iconfont star">&#xe633;</span> 
                    <span class="iconfont star">&#xe633;</span> 
                    <span class="iconfont star">&#xe633;</span> 
                    <span class="iconfont star">&#xe633;</span> 
                </span>
                <span class="user">{{item.name}} {{item.time}}</span>
            </div>
            <div class="comments-list-content">
                {{item.content}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detailComments',
    props: {
        commentsList: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.comments {
    width: 100%;
    margin-top: .3rem;
    background-color: #fff;
}

.comments-title {
    position: relative;
    width: 100%;
    height: .88rem;
    padding: 0 .4rem;
    line-height: .88rem;
    font-size: .32rem;
    color: #333;
}

.comments-title::after {
    content: "\0020";
    position: absolute;
    top: .3rem;
    left: .2rem;
    width: .06rem;
    height: .25rem;
    background: #1ba9ba;
    border-radius: .04rem;
}

.comments-list {
    width: 100%;
}

.comments-list .comments-list-title {
    width: 100%;
    height: .6rem;
    margin-top: .1rem;
    line-height: .6rem;
    color: $minDarkColor;
    font-size: .24rem;
}

.comments-list .comments-list-title .score {
    color: $commentsColor;
}

.comments-list .comments-list-title .user {
    padding-left: 3.8rem;
}

.comments-list .comments-list-content {
    width: 100%;
    min-height: 4rem;
    font-size: .26rem;
    color: $minFontColor;
}
</style>