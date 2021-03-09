<template>
  <div id="leMenu">
    <div id="menucolor" class="d-flex pt-2 pb-2 align-items-center">
      <div>
        <img class="ml-3" style="width: 97px; height: auto;" src="../assets/img/logo-TB.png" alt="logo du site">

      </div>
      <nav class="ml-auto d-md-flex d-none mt-auto ">
        <ul class="ml-auto d-md-flex d-none">
          <li>
            <router-link to="/" class="menu-link ml-4 mr-4">HOME</router-link>
          </li>
          <li>
            <router-link to="/biographie" class="menu-link ml-4 mr-4">BIOGRAPHIE</router-link>
          </li>
          <li>
            <router-link to="/films" class="menu-link ml-4 mr-4">FILMS</router-link>
          </li>
          <li>
            <router-link to="/court-metrage" class="menu-link ml-4 mr-4">COURTS-MÉTRAGES</router-link>
          </li>
        </ul>
      </nav>
      <div id="nav-toggle" class="d-flex d-md-none" v-bind:class="[menu ? 'open-toggle' : 'close-toggle']">
        <div class="nav-toggle-bar" v-on:click=" flipMenu"></div>
      </div>


      <nav class="menu" v-bind:class="[menu ? 'open-menu' : 'close-menu']">
        <ul class="">
          <li>
            <router-link to="/" class="menu-link menu-link_menu ">HOME</router-link>
          </li>
          <li>
            <router-link to="/biographie" class="menu-link menu-link_menu ">BIOGRAPHIE</router-link>
          </li>
          <li>
            <router-link to="/films" class="menu-link menu-link_menu ">FILMS</router-link>
          </li>
          <li>
            <router-link to="/court-metrage" class="menu-link menu-link_menu ">COURTS-MÉTRAGES</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuColor",
  data() {
    return {
      menu: false,
      toggle: false
    }
  },
  methods: {
    flipMenu() {
      this.menu = !this.menu;
      this.toggle = !this.toggle;
    }
  }
}
</script>

<style scoped>
#menucolor{
  background: rgb(15, 15, 15);
}
/*menu*/
#leMenu{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.close-menu {
  position: fixed;
  z-index: 1;
  top: 0;
  background: rgba(0, 0, 0, .9);
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  visibility: visible;
  overflow: hidden;
  transform: translateX(100vw);
  transition: all .4s ease-in-out;
}

.open-menu {
  position: fixed;
  pointer-events: auto;
  visibility: visible;
  transform: translateX(0);
  overflow: hidden;
  z-index: 1;
  top: 0;
  background: rgba(0, 0, 0, .9);
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .4s ease-in-out;
}

.menu > ul > li {
  text-align: center;
  margin-top: 20%;
  margin-bottom: 20%;
}

.open-menu body {
  overflow: hidden;
}

#nav-toggle {
  z-index: 2;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav-toggle {
  z-index: 2;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav-toggle .nav-toggle-bar,
#nav-toggle .nav-toggle-bar::before,
#nav-toggle .nav-toggle-bar::after {
  content: '';
  background: #E8E8E8;
  width: 100%;
  height: 2px;
  position: absolute;
  right: 0;
}

#nav-toggle .nav-toggle-bar::before {
  top: -8px
}

#nav-toggle .nav-toggle-bar::after {
  top: 8px
}

/*animation croix*/
#nav-toggle.open-toggle .nav-toggle-bar {
  transform: rotate(135deg);
  background: #E8E8E8;
  transition: all .4s ease;
}

#nav-toggle.open-toggle .nav-toggle-bar::before,
#nav-toggle.open-toggle .nav-toggle-bar::after {
  background: #E8E8E8;
  transform: rotate(90deg);
  top: 0;
  transition: all .4s ease;
}

#nav-toggle.open-toggle .nav-toggle-bar::before,
#nav-toggle.open-toggle .nav-toggle-bar::after {
  top: 0;
  transition: all .4s ease;
}

#nav-toggle.close-toggle .nav-toggle-bar,
#nav-toggle.close-toggle .nav-toggle-bar:before,
#nav-toggle.close-toggle .nav-toggle-bar:after {
  content: '';
  background: #E8E8E8;
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  transition: all .4s ease;

}


.menu-link,
.menu-link:hover {
  margin: 0;
  color: white;
  font-weight: bold;
  letter-spacing: .4rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
}

.menu-link_menu {
  font-size: 20px !important;
  letter-spacing: .5rem !important;
}

.menu-link_menu:hover {
  text-decoration: none;
}

.menu-link:hover {
  text-decoration: none;
}

</style>
