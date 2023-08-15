<template>
    <div v-for="(a, i) in blogData" :key="a">
        <h5 @click="$router.push(`/detail/${i}`)">{{ blogData[i].title }}</h5>
        <p>{{ blogData[i].date }}</p>
    </div>
</template>

<script>
export default {
    name: 'blogList',
    props: {
        blogData: Array,
    },
};
</script>

<style></style>
