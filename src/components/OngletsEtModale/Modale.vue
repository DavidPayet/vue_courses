<script>
export default {
  name: 'Modale',
  // Déclaration des props dans un tableau de strings
  props: ['revele', 'toggleModale']
}
</script>

<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" @click="toggleModale"></div>
    <div class="modale card">
      <div class="btn-modale btn btn-danger" @click="toggleModale">X</div>
      <h3>Le contenu de la modale</h3>
    </div>
  </div>
</template>

<style>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0,.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.modale {
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: fixed;
  bottom: 10%;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>