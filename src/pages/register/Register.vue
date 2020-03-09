<template>
    <div class="register-home">
        <register-header></register-header>
        <register-form></register-form>
    </div>
</template>

<script>
import Header from './components/Header'
import RegisterForm from './components/RegisterForm'
export default {
    name: 'register',
    components: {
        'register-header': Header,
        'register-form': RegisterForm
    }

}
</script>

<style lang="stylus" scoped>

</style>