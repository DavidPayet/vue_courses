<script>
import axios from 'axios'
export default {
  name: 'AppelAPI',
  data() {
    return {
      urlImg: null
    }
  },
  mounted() {
    axios
    .get('https://api.thecatapi.com/v1/images/search')
    .then(res => {
      // console.log(res);
      this.urlImg = res.data[0].url
    })
  }
}
</script>

<template>
<div class="container mt-5 mb-5">
  <h2>Appel à une API</h2>
  <img :src="urlImg" alt="chat">
</div>
</template>