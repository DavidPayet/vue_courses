<script>
import ListeFilms from "./ListeFilms.vue";

// VALEURS DE RÉFÉRENCES : TABLEAUX/OBJETS
// VALEURS PRIMITIVES : STRINGS/NUMBERS/BOOLÉANS/SYMBOLS/NULL/UNDEFINED/BIGINT
// https://blog.nicolas.brondin-bernard.com/comprendre-les-primitives-et-les-references-en-javascript/

export default {
  name: 'ValeursPrimitivesEtRefs',
  data() {
    return {
      myArr: [
        { titre: 'Inception', date: 2010 },
        { titre: 'Avatar', date: 2009 },
        { titre: 'Seven', date: 1995 },
      ],
      supprFilm: function() {
        return this.myArr.pop()
      },
      txt: 'Hello World',
      supprTxt: function() {
        return this.txt = ""
      },
      titre: 'Envoyer des données enfant-parent'
    }
  },
  // Envoyer des données enfant-parent
  methods: {
    changementTitre: function(nvTitre) {
      this.titre = nvTitre
    }
  },
  components: {
    ListeFilms
  }
}
</script>

<template>
  <div class="container mt-5 mb-5">
    <ListeFilms v-bind:myArr="myArr" v-bind:supprFilm="supprFilm" :txt="txt" :supprTxt="supprTxt" v-on:changeTitre="changementTitre($event)" />
    <!-- <ListeFilms v-bind:myArr="myArr" v-bind:supprFilm="supprFilm" :txt="txt" :supprTxt="supprTxt" /> -->
    <h2>{{ titre }}</h2>
  </div>
</template>