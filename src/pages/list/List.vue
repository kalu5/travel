<template>
    <div class="list">
        <list-header></list-header>
        <list-tlist :recommend-list="recommendList"></list-tlist>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header'
import Tlist from './components/Tlist'
export default {
    name: 'list',
    data () {
        return {
            recommendList: [],
        }
    },
    components: {
        'list-header': Header,
        'list-tlist': Tlist
    },
    mounted () {
        this.getLists ();
    },
    methods: {
        getLists () {
            axios.get ('api/cq.json?city=' + this.curCity)
                 .then (this.getAllLists)
        },
        getAllLists (res) {
            if (res.data.ret === true && res.data.data) {
                let ret = res.data.data;
                this.recommendList = ret.recommendList;
            }      
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>