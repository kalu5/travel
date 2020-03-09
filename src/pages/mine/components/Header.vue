<template>
    <div class="header">
        <div class="icons">
            <router-link to='/setting' tag="span" class="iconfont">&#xe61d;</router-link>
            <span class="iconfont">&#xe60e;</span>
            <span class="iconfont">&#xe622;</span>
        </div>
        <div class="user-message">
            <div class="avatar">
                <img src="../../../assets/images/1.jpg" alt=""/>
            </div>
            <div class="user" v-show="!showLogin">
                <router-link to='/login' tag="p" class="login">登录/注册</router-link>
                <span class="tips">登录享受更多优惠及服务</span>
            </div>
             <div class="user" v-show="showLogin">
                <p class="login">{{this.user}}</p>
                <span class="tips-vip">开通vip享受更多优惠及服务</span>
            </div>
            <div class="register"> <span class="iconfont">&#xeb25;</span> 签到</div>
        </div>
        <div class="server">
            <ul>
                <li>
                    <p>0</p>
                    <span>代金卷</span>
                </li>
                <li>
                    <p>0</p>
                    <span>收藏</span>
                </li>
                <li>
                    <p>0</p>
                    <span>足迹</span>
                </li>
                <li>
                    <p><span class="iconfont">&#xe625;</span></p>
                    <span>常用信息</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mineHeader',
    data () {
        return {
            showLogin: false,
            user: ''
        }
    },
    mounted ()  {
        if (localStorage.user && localStorage.isLogin) {
            this.showLogin = true;
            this.user = localStorage.user;
        } else {
            this.showLogin = false;
        }
    }

}
</script>

<style lang="stylus" scoped>
.header {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background-color: #85D1DB;
}

.header .icons {
    text-align: right;
    font-size: .4rem;
}

.header .user-message {
    display: flex;
    height: 1.2rem;
    margin-top: .6rem;
}

.header .user-message .avatar {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: #fff;
}

.header .user-message .avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.header .user-message .user {
    flex: 1;
    margin-left: .2rem;
} 

.header .user-message .user .login {
    margin-top: .3rem;
    font-size: .36rem;
    font-weight: bold;
}

.header .user-message .user .tips {
    color: #616161;
}

.tips-vip {
    color: #FF0303;
}

.header .user-message .register {
    width: 1.6rem;
    height: .6rem;
    margin: .3rem .3rem 0 0;
    line-height: .6rem;
    border-radius: .5rem;
    background-color: #FF9600;
    text-align: center;
    color: #fff;
}

.server {
    width: 100%;
    height: .8rem;
    margin-top: .3rem;
}

.server ul {
    height: .8rem;
}

.server ul li {
    float: left;
    width: 25%;
    height: 100%;
    text-align: center;
}

.server ul li p {
    font-weight: bold;
}

.server ul li span {
    color: #616161;
    font-size: .24rem;
}
</style>