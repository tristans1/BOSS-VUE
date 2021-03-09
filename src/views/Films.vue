<template>
  <div>
    <MenuColor/>
    <div class="p-3" id="PageFilm">
      <div id="film-search" class="d-block d-md-flex ">
        <h1 class="text-center mb-3">Filmographie</h1>
        <div class="ml-auto d-block d-md-flex mt-2">
          <div id="searchbar" class="form-inline pl-3 ">
            <input name type="text" v-model="search" placeholder="Rechercher un film"/>
            <img src="../assets/img/search-svgrepo-com.svg" style="width: 20px" alt="" class="ml-auto mr-3"/>
          </div>
          <router-link to="/formulaire">
            <button class="p-1 pl-2 pr-2 mt-3 mt-md-0 ml-md-3">AJOUTER UN FILM</button>
          </router-link>
        </div>
      </div>

      <div class="leFilm mt-5  d-block d-md-flex" v-for="film in filteredList" :key="film.id">
        <img class="img-film ml-3" :src="film.affiche" :alt="film.titre">
        <div class="infos ml-5 mt-5">
          <h2 class="mb-4">{{film.titre}}</h2>
          <div class="d-flex"><p class="mr-3">Genre</p> <img class="arrow mr-3 d-block d-md-none" style="width: 50px"
                                                             src="../assets/img/arrow-r.svg" alt="arrow"> <img
            class="arrow mr-3 d-none d-md-block" style="width: 50px"
            src="../assets/img/arrow-r-black.svg" alt="arrow"> <span> {{ film.genre }} </span>
          </div>
          <div class="d-flex"><p class="mr-3">Année</p>  <img class="arrow mr-3 d-block d-md-none" style="width: 50px"
                                                              src="../assets/img/arrow-r.svg" alt="arrow"> <img
            class="arrow mr-3 d-none d-md-block" style="width: 50px"
            src="../assets/img/arrow-r-black.svg" alt="arrow"> <span>{{ film.annee }} </span>
          </div>

          <div class="d-flex"><p class="mr-3">Pays</p>  <img class="arrow mr-3 d-block d-md-none" style="width: 50px"
                                                             src="../assets/img/arrow-r.svg" alt="arrow"> <img
            class=" arrow mr-3 d-none d-md-block" style="width: 50px"
            src="../assets/img/arrow-r-black.svg" alt="arrow"> <span> {{ film.pays }} </span>
          </div>

          <div class="d-flex align-items-baseline"><p class="mr-3 mb-5">Acteurs</p>  <img class="arrow mr-3  d-block d-md-none"
                                                                     style="width: 50px; top: 0px"
                                                                     src="../assets/img/arrow-r.svg" alt="arrow">
            <img
            class=" mr-3 d-none d-md-block" style="width: 50px"
            src="../assets/img/arrow-r-black.svg" alt="arrow"> <span>  {{ film.acteurs}}</span>
          </div>

          <div><p class="mr-3">Synopsis</p> <span>{{film.synopsis}}</span>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import MenuColor from "../components/MenuColor";
import Footer from "../components/Footer";
export default {
name: "Films",
  components: {MenuColor, Footer},
  data (){
  return{
    mesDonnees : [],
    search : ''
  }
  },
  created() {
    axios.get('../timburton/static/films.json')
      .then(function (response) {
        console.log(response.data);
        this.mesDonnees = response.data;
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  },
  computed: {
    filteredList() {
      return this.mesDonnees.filter(film => {
        return film.titre.toLowerCase().includes(this.search.toLowerCase())
      })
    },

  }
}
</script>

<style scoped>

.arrow {

  position: relative;
  top: -7px;
}


#PageFilm{
  margin-top: 100px;
}

.img-film {
  width: 300px;
  height: 533px;
}


button {
  border: 1px solid #E4E4E4;
  border-radius: 20px;
  background: none;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: .1rem;

}

#searchbar {
  border: 1px solid #E4E4E4;
  border-radius: 20px;
  /*   width: 300px;*/
  height: fit-content;
}

header {
  background: rgb(15, 15, 15);

}

.leFilm {
  margin-bottom: 100px !important;
}

input {
  width: 80%;
}

input {
  border: none;
  padding-top: 1%;
  padding-bottom: 1%;
}

input[type="text"]:focus {
  outline: none;
}

@media screen and (max-width: 764px) {
  button {
    width: 100%;
  }

  #searchbar {
    width: 100%;
  }
  .leFilm{
    margin-left: 0 !important;
    height: fit-content;
  }
  .leFilm > .infos{
    background: rgba(15, 15, 15, .9);
    padding: 10%;
    color: white;
    margin-left: 0 !important;
  }
}

@media (min-width: 765px ) {
  button {
    width: 200px;
  }

  #searchbar {
    width: 300px;
  }
}


@media screen and (max-width: 764px) {


  .img-film {
    max-width: 90%;
    margin-left: 5%;
    width: 100%;
  }

  .leFilm > .infos{
    margin-bottom: 150px !important;

  }
  .arrow {
    width: 50px;
    position: relative;
    top: -9px;
  }
}
</style>
