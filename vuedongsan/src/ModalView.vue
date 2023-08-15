<template>
    <div class="black_bg" v-if="modal == true">
        <div class="white_bg">
            <img :src="원룸들[pushNum].image" class="room_img" alt="" />
            <h4>{{ 원룸들[pushNum].title }}</h4>
            <input v-model.number="month" />
            <p>{{ month }}개월 선택함 {{ 원룸들[pushNum].price * month }}원</p>
            <p>{{ 원룸들[pushNum].content }}</p>

            <DiscountView></DiscountView>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalView',
    data() {
        return {
            month: 1,
        };
    },
    watch: {
        month(a) {
            if (a > 12) {
                alert('13이상 입력하지마삼');
                this.month = 1;
            }
            if (isNaN(a) == true) {
                alert('문자입력하지마라');
                this.month = 1;
            }
        },
    },

    props: {
        원룸들: Array,
        pushNum: Number,
        modal: Boolean,
    },
};
</script>

<style lang="scss" scoped>
.black_bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}
.white_bg {
    width: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 20px;
}
</style>
