<script setup>
import iconSkill from "@/components/iconSkill.vue";
const skill = "../../src/assets/image/skill.svg";
</script>
<template>
  <div class="container-wide pb-5 mb-5">
    <h3 class="pt-4 pb-4 text-custom-color fw-bold text-center mb-3">My Skill</h3>
    <div class="row justify-content-center px-1 px-lg-5 d-flex justiy-content-center">
      <div class="col-10 col-lg-6 mb-5 animated fadeInLeft">
        <img :src="skill" alt="" class="img-fluid" />
      </div>
      <div class="col-14 col-lg-6 animated fadeInRight">
        <iconSkill />
      </div>
    </div>
  </div>
  <div></div>
</template>
<style scoped>
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animated {
  animation-duration: 2s;
  animation-fill-mode: both;
}

.fadeInRight {
  animation-name: fadeInRight;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-150px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animated {
  animation-duration: 2s;
  animation-fill-mode: both;
}

.fadeInLeft {
  animation-name: fadeInLeft;
}
</style>
