<template>
  <div>
    <div class="container mt-3">
      <div class="product">
        <div class="thumbnail" style="background-image: url('https://via.placeholder.com/350')"></div>
        <div class="flex-grow-1 p-4">
          <h5 class="title">아기다스 신발</h5>
          <p class="date">2030년 1월 8일</p>
          <p class="price">20000원</p>
          <p class="float-end">?0</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      sampleData: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>
<style lang="scss">
.product {
  display: flex;
  padding: 10px;
}
.thumbnail {
  max-width: 200px;
  width: 100%;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
}
.product .price {
  font-size: 16px;
  font-weight: 600;
}
.product .title {
  font-size: 17px;
  font-weight: 600;
}
.product .date {
  color: grey;
  font-size: 13px;
}
</style>
