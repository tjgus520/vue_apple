<template>
    <div>
        <transition name="fade">
            <ModalView @closeModal="modal = false" :원룸들="원룸들" :pushNum="pushNum" :modal="modal"></ModalView>
        </transition>

        <div class="menu">
            <a href=" " v-for="(a, i) in menu" :key="i">{{ a }}</a>
        </div>
        <DiscountView v-if="showDiscount == true" />

        <button @click="priceSort">가격 낮은 정렬 버튼</button>
        <button @click="priceSortHight">가격 높은 정렬 버튼</button>
        <button @click="sortBack">되돌리기</button>

        <CardProduct
            @openModal="
                modal = true;
                pushNum = $event;
            "
            v-for="(a, i) in 원룸들"
            :key="a"
            :원룸들="원룸들[i]"
        ></CardProduct>
    </div>
</template>

<script>
import data from './assets/oneroom.js';
import DiscountView from './DiscountView.vue';
import ModalView from './ModalView.vue';
import CardProduct from './CardProduct.vue';
export default {
    name: 'App',
    data() {
        return {
            showDiscount: true,
            원룸들오리지널: [...data],
            원룸들: [...data],
            오브젝트: { name: 'choi', age: 20 },

            pushNum: 0,
            modal: false, // 모달창 상태 저장
            clickNum: [0, 0, 0],
            menu: ['home', 'about', 'list', '여어'],
            products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
        };
    },
    methods: {
        openModal(index) {
            this.pushNum = index;
            this.modal = true;
        },
        closeModal() {
            this.modal = false;
        },
        priceSort() {
            this.원룸들.sort(function (a, b) {
                return a.price - b.price;
            });
        },
        priceSortHight() {
            this.원룸들.sort(function (a, b) {
                return b.price - a.price;
            });
        },
        //sort 함수를 쓰면 원본을 아예 변형 시켜버림
        //요즘은 원본 데이터를 보존하는게 유행? 임
        sortBack() {
            this.원룸들 = [...this.원룸들오리지널];
            // [...this.어쩌고]어레이의 원본카피본이라는 뜻
        },
        // 신고수() {
        //   this.clickNum += 1;
        // },
    },
    mounted() {
        setTimeout(() => {
            this.showDiscount = false;
        }, 2000);
    },

    components: {
        DiscountView,
        ModalView,
        CardProduct,
    },
};
</script>

<style>
.fade-leave-from {
    opacity: 1;
}
.fade-leave-active {
    transition: all 1s;
}
.fade-leave-to {
    opacity: 0;
}
.fade-enter-from {
    opacity: 0;
}
.fade-enter-active {
    transition: all 1s;
}
.fade-enter-to {
    opacity: 1;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.menu {
    background-color: darkblue;
    padding: 15px;
    border-radius: 5px;
}
.menu a {
    color: white;
    padding: 10px;
}

body {
    margin: 0;
}
div {
    box-sizing: border-box;
}
.room_img {
    width: 100%;
    margin-top: 40px;
}
</style>
