<template>
    <div @click="setCount">{{ count }}</div>
</template>

<script setup>
defineProps({
    count: {
        type: String,
        default: 0
    }
})

</script>

<style></style>