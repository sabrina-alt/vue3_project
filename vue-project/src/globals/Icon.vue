<template>
    <svg-icon type="mdi" :path="path"></svg-icon>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon'
export default {
    components: {
        SvgIcon
    },
    props: {
        path: {
            type: String,
            default: ''
        }
    }
}
</script>
