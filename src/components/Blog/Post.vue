<script>
import axios from 'axios'

export default {
  name: 'Post',
  data() {
    return {
      id: this.$route.params.id,
      articleUnique: []
    }
  },
  mounted() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(res => {
        // console.log(res);
        this.articleUnique = res.data
      })
  }
}
</script>

<template>
  <h3>Le Post numéro {{ id }}</h3>
  <div>
    <h4>{{ articleUnique.title }}</h4>
    <br />
    <p>{{ articleUnique.body }}</p>
  </div>
</template>