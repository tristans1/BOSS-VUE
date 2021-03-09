<template>
  <div>
    <Menu/>
    <div id="background">
      <div id="title" class="d-flex">
        <h1>TIM BURTON, <br/> RÊVEUR DANS L'HORREUR </h1>
        <router-link to="/biographie"><img id="arrow" src="../assets/img/arrow-r.svg" alt=""></router-link>
      </div>

    </div>

  </div>
</template>

<script>
import Menu from "../components/Menu";
export default {
  name: "Home",
  components :{
    Menu
  }
}
</script>

<style scoped>
#title {
  position: absolute;
  bottom: 10%;
  left: 10%;
}

h1 {
  color: #E8E8E8;
  font-size: 55px;

}

#title a {
  height: fit-content;
  margin-top: 80px;
  margin-left: 25px;
}

#background {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;
  background: url("../assets/img/Tim_home.png") 50% 50% no-repeat;
}

@media screen and (max-width: 764px) {
  #title > a {
    margin-left: 0 !important;
    position: relative;
    right: 30px;
    top: 30px;
  }

  h1 {
    font-size: 40px;
  }

  #arrow {
    width: 60px;
  }

}

</style>
