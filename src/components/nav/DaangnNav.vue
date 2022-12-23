<template>
  <div class="daangn-nav-block">
    <div class="nav-logo-block">
      <router-link to="/" class="nav-logo"><img src="../../assets/daangn.png" alt="" class="nav-icon"></router-link>
    </div>
    <nav class="nav-btns">
      <ul class="nav-btn-block block">
        <li class="block"><router-link to='/' style="color: #ff6f0f;">중고거래</router-link></li>
        <li class="block"><router-link to='/'>동네가게</router-link></li>
        <li class="block"><router-link to='/'>알바</router-link></li>
        <li class="block"><router-link to='/'>부동산 직거래</router-link></li>
      </ul>
    </nav>
    <div class="nav-search-chat">
      <input type="text" placeholder="물품이나 동네를 검색해보세요">
      <button>채팅하기</button>
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
a{
  text-decoration: none;
  color: black;
}
.btn{
  &:hover{
    color: $cursoredColor;
  }
}
.block{
  display: inline-block;
  margin: 0;
}
.daangn-nav-block{
  padding: 12px 16px;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  position: relative;
  display: flex;
  margin: 0 auto;
  align-items: center;
}
.nav-logo-block{
  display: inline-flex;
  align-items: center;
  margin-right: 40px;
}
.nav-icon{
  width: 100px;
  height: 28px;
}
.nav-logo{
  width: 100px;
  height: 30;
}
.nav-btns{
  @include bp-m {
    display: none;
  }
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 0;
  padding-right: 40px;
  padding-bottom: 0;
  padding-left: 0;
}
.nav-btn-block{
  list-style: none;
  padding: 0;
  li {
    font-weight: 700;
    margin-right: 30px;
    font-style: normal;
    font-size: 18px;
    line-height: 1.32;
    a {
      &:hover{
        color: $clickedColor;
      }
    }
  }
}

.nav-search-chat{
  display: flex;
  justify-content: center;
  align-items: center;
  input{
    @include bp-xl {
      box-sizing: border-box;
      display: block;
      position: relative;
      margin-right: 12px;
      width: 288px;
      line-height: 1.36;
      font-size: 16px;
      height: 40px;
      padding: 9px 12px;
      border: none;
      border-radius: 6px;
      background-color: $cursoredColor;
    }
    display: none;
  }
  button{
    &:hover{
      background-color: $cursoredColor;
      color: $clickedColor;
    }
    line-height: 1.3;
    font-size: 16px;
    display: block;
    white-space: nowrap;
    font-weight: 700;
    min-height: 40px;
    padding: 8px 14px;
    border-radius: 4px;
    background: none;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    border: 1px solid #d1d3d8;
  }
}
</style>
