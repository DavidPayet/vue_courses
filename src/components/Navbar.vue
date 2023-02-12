<script>
export default {
  name: 'Navbar'
}
</script>

<template>
  <div>
    <ul class="nav">
      <li class="btn btn-primary btn-nav">
        <router-link to="/">Accueil</router-link>
      </li>
      <li class="btn btn-primary btn-nav">
        <router-link to="/contenu">1ers Contenu</router-link>
      </li>
      <li class="btn btn-primary btn-nav">
        <router-link to="/val-primitives-et-refs">Valeurs Primitives et Refs</router-link>
      </li>
      <li class="btn btn-primary btn-nav">
        <router-link to="/onglets">Système d'onglets + Modale</router-link>
      </li>
      <li class="btn btn-primary btn-nav">
        <router-link to="/appel-api">Appel API</router-link>
      </li>
      <li class="btn btn-primary btn-nav">
        <router-link to="/formulaire">Formulaire</router-link>
      </li>
      <li class="btn btn-primary btn-nav">
        <router-link to="/todo-list">Todo Liste</router-link>
      </li>
      <li class="btn btn-primary btn-nav">
        <router-link to="/blog">Blog</router-link>
      </li>
    </ul>
  </div>
</template>

<style>
.btn-nav {
  margin: 5px;
}
.btn-nav a {
  color: #fff;
  text-decoration: none;
}
.btn-nav a:hover {
  color: #fff;
}
</style>