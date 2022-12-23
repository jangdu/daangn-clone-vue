<template>
  <div>
    <MainSelection/>
    <div class="home-article">
      <ArticleCards aricleCount='20'/>
      <div class="text-m bold text-center mb-5"><a href="">인기매물 더 보기</a> </div>
    </div>
    <div class="home-keyword-block">
      <div class="text-m bold text-center mb-5"><a href="">중고거래 인기 검색어</a> </div>
      <ul class="home-keyword">
        <li v-for="item in 10" :key="item"><a href="">아이패드</a></li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import MainSelection from '../components/main/MainSelection.vue'
import ArticleCards from '../components/articles/ArticleCards.vue'
</script>
<style lang="scss">
.home-article{
  background-color: #F8F9FA;
  padding-top: 60px;
  padding-bottom: 80px;
}
.home-keyword-block{
  width: 1024px;
  margin: 4rem auto;
  text-align: center;
}
.home-keyword{
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  li{
    a{
      padding: 7px;
      border-radius: 10px;
      &:hover{
        background-color: $cursoredColor;
      }
    }
  }
}
</style>
