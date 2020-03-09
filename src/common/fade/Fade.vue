<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'fade'
}
</script>

<style lang="stylus" scoped>
.v-enter,
.v-enter-to {
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 1s linear;
}
</style>