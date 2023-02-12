<script>
import Item from "./Item.vue"
export default {
    name: "TodoList",
    data() {
        return {
            formData: {
                taches: ""
            },
            tableauTaches: ["Javascript", "Vue", "Python", "React"]
        };
    },
    methods: {
      creationItem() {
        this.tableauTaches.push(this.formData.taches)
        // Remet l'input à zero
        this.formData.taches = ''
      },
      suppression(e) {
        this.tableauTaches.splice(e.target.parentNode.id, 1)
      }
    },
    components: { Item }
}
</script>

<template>
  <div class="container mt-5 mb-5">
    <h2>Todo Liste</h2>

  <div class="container mt-5">
    <h3>Entrez des choses à faire</h3>
    <form>
      <div class="form-group">
        <label for="action">Action</label>
        <input v-model="formData.taches" type="text" id="action" class="form-control">
      </div>
      <button @click.prevent="creationItem" class="btn btn-primary mt-3 mb-3">Créer une tâche</button>
    </form>
    <ul>
      <li v-for="(taches, index) in tableauTaches" :key="index">
        <Item :taches="taches" :id="index" :suppression="suppression" />
      </li>
    </ul>
  </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>