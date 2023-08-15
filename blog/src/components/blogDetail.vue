<template>
    <div class="">
        <h4>상세 페이지</h4>
        <h5>{{ blogData[$route.params.id].title }}</h5>
        <p>{{ blogData[$route.params.id].content }}</p>
    </div>
</template>

<script>
export default {
    name: 'blogDetail',
    props: {
        blogData: Array,
    },
};
</script>

<style></style>
