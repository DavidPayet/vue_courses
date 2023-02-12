<script>
import Texte1 from "./Texte1.vue"
import Texte2 from "./Texte2.vue"
import Modale from "./Modale.vue"

export default {
  name: 'OngletsContenu',
  data() {
    return {
      titre: "Système d'onglets",
      toggle1: true,
      toggle2: false,
      revele: false
    }
  },
  methods: {
    toggleOng1() {
      this.toggle1 = true
      this.toggle2 = false
    },
    toggleOng2() {
      this.toggle1 = false
      this.toggle2 = true
    },
    toggleModale() {
      this.revele = !this.revele
    }
  },
  components: {
    Texte1,
    Texte2,
    Modale
  }
}
</script>

<template>
  <div class="container mt-5">
    <h2>{{ titre }}</h2>
    <div class="btn btn-outline-primary me-2" @click="toggleOng1">Onglet 1</div>
    <div class="btn btn-outline-primary" @click="toggleOng2">Onglet 2</div>
    <div class="card mb-5">
      <Texte1 class="p-3" v-if="toggle1" />
      <Texte2 class="p-3" v-if="toggle2" />
    </div>
    <hr />
    <Modale :revele="revele" :toggleModale="toggleModale" />
    <div class="btn btn-success" @click="toggleModale">Ouvre la modale</div>
  </div>
</template>