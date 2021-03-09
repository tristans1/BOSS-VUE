<template>
<div id="footer" class="p-5 text-center">
  <p class="text-white">® Tristan Seclet - voir mon <a href="https://tristanseclet.com/">portofolio</a></p>
  <p class="text-white">Sources : <a href="https://fr.wikipedia.org/wiki/Tim_Burton">Wikipédia</a>, <a href="http://www.tim-burton.net/biographie/biographie/">TimBurton.net</a>  </p>
  <p class="text-white">Projet réalisé en 48 heures dans le cadre d'un projet universitaire au <a class="text-white"
                                                                                     href="http://mmimontbeliard.com/">Département
    MMI</a></p>


</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
a, a:hover {
  color: white;
font-weight: bolder;
}

a:hover{
  text-decoration: underline white;
}

#footer {
  background: rgb(15, 15, 15);
}
</style>
