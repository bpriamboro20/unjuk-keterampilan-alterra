<script setup>
const waves = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 220">
    <path
      fill=" #00e664"
      fill-opacity="1"
      d="M0,192L48,202.7C96,213,192,235,288,208C384,181,480,107,576,101.3C672,96,768,160,864,186.7C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>`;
</script>

<template>
  <div v-html="waves"></div>
</template>
