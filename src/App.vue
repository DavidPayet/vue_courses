<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';

export default {
  components: {
    Navbar,
    Header
}
}

</script>

<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Header />
    <!-- <Accueil />
    <hr />
    <Contenu />
    <hr />
    <ValeursPrimitivesEtRefs />
    <hr />
    <Header />
    <hr />
    <OngletsContenu />
    <hr />
    <Modale :revele="revele" :toggleModale="toggleModale" />
    <div class="btn btn-success" @click="toggleModale">Ouvre la modale</div>
    <hr />
    <AppelAPI />
    <hr />
    <Formulaire />
    <hr />
    <TodoList />-->
  </div>
</template>

<style>
h2 {
  text-align: center;
}
</style>