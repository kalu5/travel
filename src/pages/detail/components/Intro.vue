<template>
    <div class="intro">
        <div v-for="item in this.introList"
             :key="item.id">
            <div class="intro-header">
                <div class="comments">
                    <div class="comments-score">{{item.score}}分  <span class="good">{{item.scoreTip}}</span></div>
                    <div class="comments-number">{{item.comments}}条评论  {{item.method}}条攻略</div>
                    <span class="iconfont right">&#xe62d;</span>
                </div>
                <div class="scenery-intro">
                    <div class="title">景点介绍</div>
                    <div class="tips">开放时间  贴士</div>
                    <span class="iconfont right">&#xe62d;</span>
                </div>
            </div>
            <div class="location"> <span class="iconfont">&#xe63f;</span>{{item.place}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detailIntro',
    props: {
        introList: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.intro {
    width: 100%;
    height: 1.98rem;
    margin: 0 0 .1rem;
    padding: .1rem .2rem 0;
    background-color: #fff;
    border-radius: 0 0 .2rem .2rem;
}

.intro-header {
    display: flex;
    width: 100%;
    height: 1.12rem;
    padding: .1rem 0 .2rem;
}

.intro-header .comments {
    position: relative;
    width: 3.4rem;
    height: .82rem;
}

.right {
    position: absolute;
    right: 0;
    top: .2rem;
    color: $minFontColor;
}

.intro-header .comments .comments-score {
    height: .34rem;
    line-height: .34rem;
    margin-bottom: .1rem;
    font-size: .4rem;
    color: $commentsColor;
}

.intro-header .comments .comments-score .good {
    font-size: .28rem;
}

.intro-header .comments .comments-number {
    font-size: .28rem;
    color: $minFontColor;
}

.intro-header .scenery-intro {
    position: relative;
    flex: 1;
}

.intro-header .scenery-intro .title {
    height: .34rem;
    line-height: .34rem;
    margin-bottom: .1rem;
    font-size: .28rem;
    color: $minDarkColor;
}

.intro-header .scenery-intro .tips {
    font-size: .24rem;
    color: $minFontColor;
}

.intro-header .location {
    width: 100%;
    height: .86rem;
    padding: .2rem 0;
    color: $minDarkColor;
    line-height: .86rem;
}
</style>