<script>
  export default {
    name: 'Header',
    data() {
      return {
        titre: 'Modifiez ce titre depuisle lien "Valeurs Primitive et Refs"'
      }
    },
    beforeCreate() {
      console.log('Il va être créé !');
    },
    // Reçois des données directement de ListeFilms (ici pour changer le titre)
    created() {
      console.log('Le composant est créé !');
      this.emitter.on('changeTitreHeader', (data) => {
        this.titre = data.eventContent;
      })
    },
    beforeMount() {
      console.log('Il va être monter dans le DOM');
    },
    mounted() {
      console.log('Il est intégré dans le DOM');
    },
    beforeUpdate() {
      console.log('Il va se mettre à jour');
    },
    updated() {
      console.log("Le composant s'est mis à jour");
    }
    // https://vuejs.org/guide/essentials/lifecycle.html
  }
</script>

<template>
  <div class="header-top">
    <p>{{ titre }}</p>
  </div>
</template>

<style>
  .header-top {
    height: 50px;
    background: #333;
    width: 100%;
    color: #f1f1f1;
    text-align: center;
    line-height: 50px;
    font-size: 25px;
  }
</style>