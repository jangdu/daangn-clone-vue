<template>
<div class="article-block">
  <h1 class="card-title text-title">중고거래</h1>
  <div class="card-block">
    <div v-for="item in 8" :key="item" class="article">
      <ArticleCard />
    </div>
  </div>
</div>
</template>
<script setup>
import ArticleCard from './ArticleCard.vue'

</script>

<style lang="scss" scoped>
*{
  padding: 0;
}
.article-block{
  padding-top: 60px;
  display: block;
}
.card-block{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 980px;
  margin: 0 auto;
  padding-bottom: 30px;
  align-content: center;
  justify-content: center;
}
.article{
  width: calc(25% - 44px);
  margin: 5px 5px 20px 5px;
  padding: 15px 15px 20px 15px;
  border-radius: 15px;
  &:hover { background-color: $cursoredColor;}
  cursor: pointer;
}
.card-title{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
}
</style>
