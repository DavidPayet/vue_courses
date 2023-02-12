<script>
import Liste from "./Liste.vue"

export default {
  name: "Contenu",
  data() {
    return {
      txt: "Je suis le contenu",
      perso: {
        prenom: 'David',
        age: 37
      },
      sport: ['football', 'handball', 'basketball'],
      reversing: function () {
        return this.perso.prenom.split('').reverse().join('')
      }
    }
  },
  methods: {
    goDebut() {
      this.$router.push('/todo-list')
    }
  },
  components: {
    Liste
  }
}
</script>

<template>
  <div class="container mt-5 mb-5">
    <p>{{ txt }}</p>
    <Liste v-bind:perso="perso" v-bind:sport="sport" v-bind:reversing="reversing">
      <!-- Utilisation des Slots -->
      <p>Envoyer</p>
      <template v-slot:info>
        <h3>Le contenue du slot nommé</h3>
      </template>
    </Liste>
    <hr>
    <h3>Chemin dynamique VueRouter / Redirection ciblée</h3>
    <div @click="goDebut" class="btn btn-warning">Direction Todo Liste</div>
  </div>
</template>