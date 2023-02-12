<script>
export default {
  name: 'Item',
  props: ['taches', 'suppression']
}
</script>

<template>
  <div class="card my-2 item-todo">
    <p>{{ taches }}</p>
    <div @click="suppression" class="btn btn-danger btn-suppr">X</div>
  </div>
</template>

<style>
.item-todo {
  position: relative;
  padding: 20px 60px 20px 30px;
  font-size: 20px;
  height: 88px;
}

.btn-suppr {
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>