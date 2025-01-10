<template>
    <div @click="setCount">props:{{ count }} real:{{ relCount }} myCount:{{ myCount }}</div>
</template>

<script>
export default {
    props: {
        count: {
            type: Number,
            default: 0
        },
        onMyFn: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            myCount: 22
        }
    },
    computed: {
        relCount() {
            return this.count + this.myCount
        }
    },
    methods: {
        setCount() {
            this.myCount += 1
            this.onMyFn(this.relCount)
        }
    },
}
</script>

<style></style>