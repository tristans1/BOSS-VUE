<template>
<div>
  <MenuColor/>
  <div id="formulaire" class="mb-5">
    <h1 class="text-center mb-3">Ajout d'une oeuvre de Tim Burton</h1>

    <b-form @submit="submit" enctype="multipart/form-data" class="mt-5 col-12 col-md-10 offset-md-1 text-left">
      <div class="d-block d-md-flex">
        <img :src="imageData"
             id="previewImage"
             class="img-responsive text-center"
             alt="image du projet"
             style="width:25%;border:1px solid lightgray;margin:10px;"
        />

        <div class="w-100 mt-3">
        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            @change="previewImage"
            id="validatedCustomFile" required
          >
          <label
            class="custom-file-label"
            for="validatedCustomFile">
            Choisir une image...
          </label>
          <div class="invalid-feedback">Image invalide</div>
        </div>

        <b-form-group class="mt-3"
                      id="input-group-1"

                      label="Nom de l'oeuvre :"
                      type="text"
                      label-for="input-1"
                      aria-required="true"
                      description="Obligatoire."
        >
          <b-form-input class="mt-3"
                        v-model="film.nom"
                        id="input-1"
                        type="text"
                        placeholder="Nom de l'oeuvre"
                        required
          ></b-form-input>
        </b-form-group>
          <b-form-group class="mt-3"
                        id="input-annee"
                        label="Date de l'oeuvre :"
                        type="text"
                        label-for="annee"
                        description="Obligatoire."
                        aria-required="true"
          >
            <b-form-input class="mt-3"
                          v-model="film.annee"
                          id="annee"
                          type="text"
                          placeholder="Date "
                          required
            ></b-form-input>
          </b-form-group>
        </div>

      </div>

      <b-form-group id="input-group-3" label="Genre :" label-for="input-3" description="Obligatoire">
        <b-form-select v-model="film.genre"   :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group class="mt-3" id="input-actor" label="Acteurs :" label-for="input-actor"
                    description="Obligatoire.">
        <b-form-textarea v-model="film.acteurs"
          style="height: 100px"
                         id="input-actor"
                         type="textarea"
                         placeholder="Acteurs principaux"
                         required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group class="mt-3" id="input-group-2" label="Synopsis :" label-for="input-2"
                    description="Obligatoire (4-5 lignes).">
        <b-form-textarea style="height: 200px"
                         id="input-2"
                         v-model="film.synopsis"
                         type="textarea"
                         placeholder="Synopsis de l'oeuvre"
                         required
        ></b-form-textarea>
      </b-form-group>

      <div id="btn" class="d-flex text-center">
        <button type="submit" id="valider" class="p-1 mt-3 mt-md-0 ml-md-3 mr-3">
          VALIDER
        </button>

        <button type="reset" class="ml-3 p-1 mt-3 mt-md-0 ml-md-3">
          ANNULER
        </button>
      </div>

    </b-form>
  </div>

  <Footer/>
</div>
</template>

<script>
import MenuColor from "../components/MenuColor";
import Footer from "../components/Footer";
import ajaxService from "../services/ajaxService";
export default {
  name: "Formulaire",
  components: {MenuColor, Footer},
  data (){
    return{
      imageData : 'https://store-images.microsoft.com/image/apps.46713.13510798886206986.e1e7e0cb-5610-4e39-bcf7-7ea0d34190c6.1e099cc1-5726-4cc4-9a8a-f9944fad66e3',
      film: {
        image : '',
        nom : '',
        annee : '',
        genre : '',
        acteurs : '',
        synopsis: ''
      },
      selected: null,
      options: [
        {value: null, text: 'Genre', disabled: true},
        {value: '1', text: 'Action / Aventure'},
        {value: '2', text: 'Animation'},
        {value: '3', text: 'Comédie'},
        {value: '4', text: 'Drame'},
        {value: '5', text: 'Épouvante'},
        {value: '6', text: 'Fantastique'},
        {value: '7', text: 'Science-Fiction'}

      ]
    }

  },
  methods: {
    previewImage: function (event) {

//      console.log("Fichier ",event.target.files[0]);
      this.film.image = event.target.files[0];

      // Reference à l'origine de l'évenement
      var input = event.target;
      // Récupération d'un ou de champs file existants
      // et renseignés
      if (input.files && input.files[0]) {

        // Création d'un objet FileReader
        // fichier en lecture
        var reader = new FileReader();

        // Création d'un callback sur event onload
        reader.onload = (e) => {
          // Lecture de l'image en base64
          // pour la charger dans imageData
          this.imageData = e.target.result;
        }
        // Render de l'image en tant qu'URL
        // Format base64 pour affichage
        reader.readAsDataURL(input.files[0]);
      }
    },
    submit: function () {

      // Objet FormData pour paramètres du villageois
      let params = new FormData();
      // Les paramètres à passer au back-end
      params.append('image', this.film.image);
      params.append('nom', this.film.nom);
      params.append('genre', this.film.genre);
      params.append('acteurs', this.film.acteurs);
      params.append('synopsis', this.film.synopsis);

      ajaxService.maj('test', params)
        .then(promise => {
          console.log("Creation film: ", promise);
          // Redirection sur les films
          this.$router.push("/films");
        })
        .catch(error => console.log(error))



    }
  }

}
</script>

<style scoped>
#valider {
  color: #E8E8E8;
  background: #111012;
}

#formulaire {
  margin-top: 100px;
}


@media screen and (max-width: 764px) {
  button {
    width: 60%;
  }

}

@media (min-width: 765px ) {
  button {
    width: 80%;
  }
}

button {
  border: 1px solid #E4E4E4;
  border-radius: 20px;
  background: none;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: .1rem;
}

</style>
