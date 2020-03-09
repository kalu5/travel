<template>
    <div class="city">
        <city-header></city-header>
        <city-list :cities="cities" :hot-cities="hotCities"></city-list>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header'
import List from './components/List'
export default {
    name: 'city',
    data () {
        return {
            scroll: '',
            hotCities: [],
            cities: {}
        }
    },
    components: {
        'city-header': Header,
        'city-list': List
    },
     mounted () {
        this.getCityList ();
    },
    methods: {
        getCityList () {
            axios.get ('api/city.json')
                 .then (this.getListSucess)
        },
        getListSucess (res) {
            if (res.data.ret === true && res.data.data) {
                let ret = res.data.data;
                this.hotCities = ret.hotCities;
                this.cities = ret.cities;
            }
        }
    }
}
</script>

<style lang="stylus">

</style>