<template>
    <div class="mine">
        <mine-header></mine-header>
        <home-nav></home-nav>
        <mine-order></mine-order>
    </div>
</template>

<script>
import Nav from 'common/Nav'
import Header from './components/Header'
import Order from './components/Order'
export default {
    name: 'mine',
    components: {
        'home-nav': Nav,
        'mine-header': Header,
        'mine-order': Order
    }
}
</script>

<style lang="stylus" scoped>

</style>