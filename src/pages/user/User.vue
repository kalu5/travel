<template>
    <div class="user">
        <user-header></user-header>
        <home-nav></home-nav>
        <user-tip></user-tip>
        <user-list></user-list>
    </div>
</template>

<script>
import Nav from 'common/Nav'
import Header from './components/Header'
import Tip from './components/Tip'
import List from './components/List'
export default {
    name: 'user',
    components: {
        'home-nav': Nav,
        'user-header': Header,
        'user-tip': Tip,
        'user-list': List
    }
}
</script>

<style lang="stylus" scoped>

</style>