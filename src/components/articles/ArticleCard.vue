<template>
  <div>
    <div class="card">
      <div class="card-img">

        <img src="https://firebasestorage.googleapis.com/v0/b/daangn-clone-vue.appspot.com/o/IMG_8873.JPG?alt=media&token=1d799c6e-ae4b-4ab1-93d0-fb7df86287a6" alt="">
      </div>
      <div class="card-info">
        <div class="text-m">식품 건조 뭐 이렇고저렇고 저래도 저래</div>
        <div class="text-m bold">30,000 원</div>
        <div class="text-xs">울산 남구 상산동</div>
        <div class="text-xs counts"><span>관심 5</span>
        ∙
        <span>채팅 21</span></div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.card{
  width: 100%;
  cursor: pointer;
}
.card-img{
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
  background-color: #F8F9FA;
  box-sizing: border-box;
  img{
    position: relative;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid transparent;
  }
}
.card-info{
  margin-top: 12px;
  div{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }
  .counts{
    color: $clickedColor;
  }
}
</style>
