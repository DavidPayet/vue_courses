<script>
export default {
  name: 'Liste',
  data() {
    return {
      fruits: ['Orange', 'Papaye', 'Fraise']
    }
  },
  props: {
    perso: {
      type: Object,
      required: true
    },
    sport: Array,
    prenom: String,
    reversing: Function
    /* reversing: {
      type: Function,
      default() {
        return this.perso.prenom.split('').reverse().join('')
      }
    } */
  }
}
</script>

<template>
  <div>
    <ul class="liste">
      <li v-for="(fruits, index) in fruits" v-bind:key="index">{{ fruits }}</li>
    </ul>
    <p>{{ perso.age }}</p>
    <p>{{ sport[1] }}</p>
    <p>{{ perso.prenom }}</p>
    <p>{{ reversing() }}</p>
    <hr>
    <h2>Les Slots</h2>
    <slot>Patientez</slot>
    <slot name="info"></slot>
  </div>
</template>

<style src="./Liste.css" />