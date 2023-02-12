<script>
import axios from 'axios'
export default {
  name: 'Blog',
  data() {
    return {
      allArticles: []
    }
  },
  created() {
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      // console.log(res);
      for (const blogPost of res.data) {
        this.allArticles.push(blogPost)
      }
    })
  }
}
</script>

<template>
  <div class="container mt-5 mb-5">
    <h2>Articles de Blog</h2>
    <hr>
    <ul>
      <li v-for="(article, index) in allArticles" :key="index">
        <router-link :to="`/blogpost/${index + 1}`">
        <div class="card m-2">
          <h3>{{ article.title }}</h3>
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>