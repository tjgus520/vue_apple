<template>
    <div class="room">
        <img :src="원룸들.image" class="room_img" alt="" />
        <h4 @click="$emit('openModal', 원룸들.id)">{{ 원룸들.title }}</h4>
        <p>{{ 원룸들.price }}원</p>
        <!-- <button @click="신고수(i)">허위매물 신고 버튼</button>
        <span>신고수 : {{ clickNum[i] }}</span> -->
        <!-- @click="openModal(i)" -->
    </div>
</template>

<script>
export default {
    name: 'CardProduct',
    props: {
        원룸들: Array,
        pushNum: Number,
        modal: Boolean,
    },
};
</script>

<style lang="scss" scoped>
.room_img {
    width: 100%;
    margin-top: 40px;
}
</style>
