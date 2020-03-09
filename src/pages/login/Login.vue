<template>
    <div class="login">
        <user-header></user-header>
        <login-form></login-form>   
    </div>
</template>

<script>
import Header from './components/Header'
import LoginForm from './components/LoginForm'
export default {
    name: 'login',
    components: {
        'user-header': Header,
        'login-form': LoginForm
    }

}
</script>

<style lang="stylus" scoped>

</style>