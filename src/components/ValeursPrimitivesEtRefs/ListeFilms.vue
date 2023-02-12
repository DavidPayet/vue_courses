<script>

export default {
  name: 'ListeFilms',
  data() {
    return {
      films: ['1er Film', '2eme Film', '3eme Film']
    }
  },
  // Déclaration des props dans un Objet avec le type de donnée attendu
  props: {
    myArr: {
      type: Array,
      required: true
    },
    supprFilm: Function,
    txt: String,
    supprTxt: Function
  },
  methods: {
    // Envoyer des données enfant-parent
    changeTitre: function () {
     this.$emit('changeTitre', 'Mon nouveau Titre')
    },
    // Communique directement avec le Header (ici pour changer le titre)
      changeTitreHeader() {
        this.emitter.emit('changeTitreHeader', {'eventContent': 'Titre changé avec le bus'})
      }
  }
}
</script>

<template>
  <div>
    <h3>Liste de Films</h3>
    <ul class="liste-films mt-5">
      <li v-for="(films, index) in myArr" v-bind:key="index">
        <div class="card">
          <div class="card-body">
            Titre: {{ films.titre }}
            <br />
            Date de sortie: {{ films.date }}
          </div>
        </div>
      </li>
    </ul>
    <p>{{ txt }}</p>
    <div @click="supprFilm" class="btn btn-danger mt-2">Supprimer le film</div>
    <div @click="supprTxt" class="btn btn-danger mt-2 ms-2">Supprimer le txt</div>
    <hr />
    <div @click="changeTitre" class="btn btn-danger mt-2">Modifie le titre</div>
    <div @click="changeTitreHeader" class="btn btn-warning mt-2 ms-2">Modifie le titre du Header</div>
  </div>
</template>

<style src="./ListeFilms.css" />