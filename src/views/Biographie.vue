<template>
  <div>
<MenuColor/>
    <div id="bio" class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
      <h1 CLASS="mb-5">Tim Burton, rêveur de l'horreur</h1>
      <div class="row">
  <div v-for="bio in mesDonnees" :key="bio.id" class="p-3 p-md-0">
  <h2 class="mt-4 mb-4">{{bio.titre}}</h2>
    <h3 class="mb-4 p-2 p-md-0">{{ bio.intertitre }}</h3>
    <p class="mb-4">{{bio.texte}}</p>
    <p class="mb-4">{{ bio.texte2 }}</p>
    <img class="img-fluid col-10 offset-1 col-md-6 offset-md-3 mb-3" :src="bio.image" alt="">
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
name: "Biographie",
  components : {
  MenuColor,
    Footer

  },
  data(){
  return {
    mesDonnees: []
  }
  },
  created() {
    axios.get('../timburton/static/timburton.json')
      .then(function (response) {
        console.log(response.data);
        this.mesDonnees = response.data;
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  }
}
</script>

<style scoped>

h3 {
  font-size: 18px;
}

p {
  letter-spacing: .05rem;
}

blockquote {
  font-size: 17px;

}

#bio {
  margin-top: 150px;
}

header {
  background: rgb(15, 15, 15);


}
</style>
