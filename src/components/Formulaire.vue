<script>
export default {
  name: 'Formulaire',
  data() {
    return {
      formData: {
        prenom: '',
        age: '',
        txt: '',
        checkFruits: [],
        select: '',
        listePays: ['Russie', 'France', 'Norvège', 'Hongrie']
      },
      infoSubmit: false
    }
  },
  methods: {
    envoieForm() {
      this.infoSubmit = true;
    },
    // Réinitialise le résultat si modification avec v-on:input
    toggleResult() {
      this.infoSubmit = false
    }
  }
}
</script>

<template>
  <div class="container mt-5 mb-5">
    <h2>Les Formulaires</h2>
    <form>
      <div class="form-group">
        <label for="prenom">Ton Prénom</label>
        <input v-on:input="toggleResult" v-model.lazy="formData.prenom" type="text" id="prenom" class="form-control" />
      </div>
      <div class="form-group">
        <label for="age">Ton Âge</label>
        <input v-model.number="formData.age" type="number" id="prenom" class="form-control" />
      </div>
      <div class="form-group">
        <label for="txt">Ton Texte</label>
        <textarea v-model="formData.txt" id="txt" class="form-control"></textarea>
      </div>

      <!-- Checkbox -->
      <div class="mt-5 mb-5">
        <h3>CheckBoxs</h3>
        <div class="form-check">
          <input
            v-model="formData.checkFruits"
            value="fraise"
            id="fraise"
            type="checkbox"
            class="form-check-input"
          />
          <label for="fraise">Fraise</label>
        </div>
        <div class="form-check">
          <input
            v-model="formData.checkFruits"
            value="pomme"
            id="pomme"
            type="checkbox"
            class="form-check-input"
          />
          <label for="pomme">Pomme</label>
        </div>
        <div class="form-check">
          <input
            v-model="formData.checkFruits"
            value="cerises"
            id="cerises"
            type="checkbox"
            class="form-check-input"
          />
          <label for="cerises">Cerises</label>
        </div>
      </div>

      <!-- Select Box -->
      <div class="mt-5 mb-5">
        <h3>Select Boxs</h3>
        <select v-model="formData.select">
          <option v-for="(pays, index) in formData.listePays" v-bind:key="index">{{ pays }}</option>
        </select>
      </div>

      <button @click.prevent="envoieForm" class="btn btn-primary">Envoyer les données</button>
    </form>

    <div v-if="infoSubmit" class="mt-5 mb-5">
      <h3>Résultats</h3>
      <div class="card p-3">
        <p>Prénom : {{ formData.prenom }}</p>
        <p>Âge : {{ formData.age }}</p>
        <p style="white-space: pre">Texte : {{ formData.txt }}</p>
        <p style="text-decoration: underline;">Résultats checkboxs :</p>
        <ul>
          <li v-for="(fruit, index) in formData.checkFruits" v-bind:key="index">{{ fruit }}</li>
        </ul>
        <p>Pays sélectionné : {{ formData.select }}</p>
      </div>
    </div>
  </div>
</template>