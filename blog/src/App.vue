<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-link to="/list">리스트 페이지</router-link>
    <router-link to="/introdusMain">홈 페이지</router-link>
    <router-view :blogData="blogData"></router-view>

    <!-- <blogList :blogData="blogData" /> -->
</template>

<script>
// import blogList from './components/blogList.vue';
import blogData from './assets/blog.js';

export default {
    name: 'App',
    data() {
        return {
            blogData: blogData,
        };
    },
    components: {
        // blogList,
    },
};
</script>

<style></style>
