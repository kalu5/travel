<template>
    <div>
        <div class="tip" v-show="!showLogin">
            <div class="title">
                <h1>您处于未登录状态，请尽快登录</h1>
            </div>
            <div class="tips">
                登录可以：
                <ul class="list">
                    <li class="item">订单信息同步云端</li>
                    <li class="item">支持常用乘机人/联系人功能，填写订单更快捷</li>
                    <li class="item">支持购买团购，出行住店更便宜</li>
                </ul>
            </div>
        </div>
        <div class="tip" v-show="showLogin">
            <div class="title">
                <h1>您当前没有任何订单</h1>
            </div>
            <div class="tips">
                您可以：
                <ul class="list">
                    <li class="item">添加订单</li>
                    <li class="item">添加行程</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tips',
    data () {
        return {
            showLogin: false,
        }
    },
    mounted ()  {
        if (localStorage.user && localStorage.isLogin) {
            this.showLogin = true;
        } else {
            this.showLogin = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
.tip {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background-color: #F3F3F3;
}

.tip .title h1 {
    height: .48rem;
    padding: .6rem 0 .1rem;
    font-size: .36rem;
    text-align: center;
}

.tip .tips {
    width: 100%;
    height: 2.08rem;
    padding: .2rem;
    font-size: .28rem;
    color: #8c8c8c;
}
</style>