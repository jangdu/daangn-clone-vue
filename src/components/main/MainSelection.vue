<template>
<div>
  <!-- main 1 -->
  <div class="main-contaner" style="background-color: #FBF7F2;">
    <div class="main-block" style="width: 1200px;">
      <div>
        <h1 class="main-title">당신 근처의<br />당근마켓</h1>
        <p class="main-text text-m">중고 거래부터 동네 정보까지, 이웃과 함께해요.<br/>가깝고 따뜻한 당신의 근처를 만들어요.
        </p>
      </div>
      <div class="main-img">
        <img style="width: 804px; height: 685px;" src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png'>
      </div>
    </div>
  </div>
  <!-- main 2 -->
  <div class="main-contaner" style="">
    <div class="main-block" style="background-color: white;">
      <img style="width: 532px; height: 685px;" src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png'>
      <div>
        <h1 class="main-title">우리 동네<br />중고 직거래 마켓</h1>
        <p class="main-text text-m">동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
        </p>
        <div class="dangn-btns">
          <button class="dangn-btn text-lg">인기매물보기</button>
          <button class="dangn-btn text-lg" style="margin-left: 30px">믿을 수 있는 중고거래</button>
        </div>
      </div>
    </div>
  </div>
  <!-- main 3 -->
  <div class="main-contaner" style="background-color: #E6F3E6;">
    <div class="main-block">
      <div>
        <h1 class="main-title">이웃과 함께 하는<br/>동네생활</h1>
        <p class="main-text text-m">우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</p>
        <ul>
          <li>
            <div class="icon_1 icon"></div>
            <div class="text-sm bold mt-2 mb-1" style="margin-left: 0;">우리동네질문</div>
            <div class="text-xs">궁금한 게 있을 땐 <br/>이웃에게 물어보세요.</div>
          </li>
          <li>
            <div class="icon_2 icon"></div>
            <div class="text-sm bold mt-2 mb-1">우리동네질문</div>
            <div class="text-xs">궁금한 게 있을 땐 <br/>이웃에게 물어보세요.</div>
          </li>
          <li>
            <div class="icon_3 icon"></div>
            <div class="text-sm bold mt-2 mb-1">우리동네질문</div>
            <div class="text-xs">궁금한 게 있을 땐 <br/>이웃에게 물어보세요.</div>
          </li>
        </ul>
      </div>
      <img style="width: 546px; height: 740px;" src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-f286322ab98acedf914a05bf77e84c67dcb897c8ccb543e66f6afea9d366d06d.png'>
    </div>
  </div>
  <!-- main 4 -->
  <div class="main-contaner">
    <div class="main-block">
      <img style="width: 526px; height: 735px;" src='https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-0c8b631ac2294ac5a3b3e7a3a5580c3e68a3303ad2aded1e84aa57a2e1442786.png'>
      <div>
        <h1 class="main-title">내 근처에서 찾는<br/>동네가게</h1>
        <p class="main-text text-m">우리 동네 가게를 찾고 있나요?<br/>동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
        </p>
        <div class="dangn-btns">
          <button class="dangn-btn text-lg">당근마켓 동네가게 찾기</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
</script>

<style lang='scss' scoped>

.main-contaner{
  width: 100%;
  padding-top: 60px;
  margin: 0 auto;
}
.main-block{
  display: flex;
  width: 1024px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
}
.main-title{
  font-size: 40px;
  line-height: 1.35;
  margin-bottom: 24px;
}
.main-text{
  font-weight: 350;
  color: rgb(46, 46, 46);
}
.main-img{
  display: inline-block;
}

ul{
  padding: 0;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}
li {
  padding: 0;
  margin-right: 40px;
  margin-left: 0;
  max-width: 140px;
}
.icon{
  width: 56px;
  height: 56px;
  background-size: 56px 56px;
}
.icon{
  &_1{
    background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg);
  }
  &_2{
    background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-2-208bb88cad31e335b40bc8ac5b7684dcf8a36d77ac50770a497a9c967a3bfc4f.svg);
  }
  &_3{
    background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-3-0a14d64c6101a7271655747d8401b9f71506578f8a4c0640608074e977bbc7c0.svg);
  }
}
</style>
