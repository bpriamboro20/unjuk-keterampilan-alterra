<script setup>
import { ref, onUnmounted, onMounted } from "vue";
import { useHeroStore } from "@/store/storeHero";

const { firstName, middleName, lastName, description, imageUrl } = useHeroStore();

const jobs = ["Programmer", "Junior Frontend Web Developer", "Soon to be a Fullstack Web Developer"];
const currentJobIndex = ref(0);
const currentJob = ref("");
const typingSpeed = 100;
const deletingSpeed = 50;
const isDeleting = ref(false);

let typingTimeout;

const startTyping = () => {
  const job = jobs[currentJobIndex.value];
  if (isDeleting.value) {
    if (currentJob.value.length > 0) {
      currentJob.value = currentJob.value.substring(0, currentJob.value.length - 1);
      typingTimeout = setTimeout(startTyping, deletingSpeed);
    } else {
      isDeleting.value = false;
      currentJobIndex.value = (currentJobIndex.value + 1) % jobs.length;
      typingTimeout = setTimeout(startTyping, 500); // menunggu sebelum mengetik nextjob
    }
  } else {
    if (currentJob.value.length < job.length) {
      currentJob.value = job.substring(0, currentJob.value.length + 1);
      typingTimeout = setTimeout(startTyping, typingSpeed);
    } else {
      isDeleting.value = true;
      typingTimeout = setTimeout(startTyping, 2000); // menunggu sebelum menghapus
    }
  }
};

onMounted(() => {
  startTyping();
});

onUnmounted(() => {
  clearTimeout(typingTimeout);
});
</script>

<template>
  <div class="row align-items-center px-1 px-md-5 mb-lg-2">
    <div class="custom-col col-12 col-md-6 col-lg-7 col-xl-7 order-2 order-md-1 pt-md-5 py-lg-0 py-xl-0">
      <div class="name fs-1 fs-md-5 fs-lg-1 fw-bold animated fadeInLeft">
        {{ firstName }} {{ middleName }} <span>{{ lastName }}</span>
      </div>
      <div class="job fs-4 fs-md-6 fs-xl-2 mb-2 fw-bold animated fadeInLeft" style="animation-delay: 0.7s">{{ currentJob }}</div>
      <div class="description fs-5 fs-md-6 fs-xl-3 text-start-align text-justify lh-base animated fadeInLeft" v-html="description" style="animation-delay: 1.2s"></div>
    </div>
    <div class="custom-col col-12 col-md-6 col-lg-5 col-xl-5 order-1 order-md-2">
      <img :src="imageUrl" alt="gambarWebsite" class="animated fadeInRight justify-content-center custom-img img-fluid" style="animation-delay: 1.6s" />
    </div>
  </div>
</template>

<style scoped>
.name span {
  color: #00e664;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animated {
  animation-duration: 1.5s;
  animation-fill-mode: both;
}

.fadeInLeft {
  animation-name: fadeInLeft;
}

.fadeInRight {
  animation-name: fadeInRight;
}

/* Responsive HP */
@media (max-width: 430px) {
  .text-start-align {
    text-align: start;
  }
}

@media (max-width: 400px) {
  .custom-col {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .text-start {
    text-align: start;
  }
  .custom-img {
    width: 100% !important;
    height: auto !important;
  }
}

@media (max-width: 576px) {
}

@media (min-width: 577px) and (max-width: 768px) {
}

@media (min-width: 769px) and (max-width: 992px) {
}

@media (min-width: 993px) {
}
</style>
