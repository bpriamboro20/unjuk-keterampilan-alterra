<!-- <script setup>
import { RouterLink } from "vue-router";

const logoName = "Personal Website";
</script>

<template>
  <div class="container-navbar bg-custom-color py-3 px-5 text-color-whitesmoke d-flex justify-content-between align-items-center sticky-top shadow-sm">
    <div class="logo-name">
      <h4 class="ps-2 mb-0 fw-bold cursor-pointer hover-navbar">{{ logoName }}</h4>
    </div>
    <div class="navigasi">
      <ul class="nav d-flex justify-content-evenly pe-4 gap-5">
        <li class="list-unstyled"><RouterLink to="/" class="hover-navbar text-decoration-none cursor-pointer text-color-whitesmoke fs-5" href="">Home</RouterLink></li>
        <li class="list-unstyled"><RouterLink to="/resume" class="hover-navbar text-decoration-none cursor-pointer text-color-whitesmoke fs-5" href="">Resume</RouterLink></li>
        <li class="list-unstyled"><RouterLink to="/projects" class="hover-navbar text-decoration-none cursor-pointer text-color-whitesmoke fs-5" href="">Projects</RouterLink></li>
        <li class="list-unstyled"><RouterLink to="/skill" class="hover-navbar text-decoration-none cursor-pointer text-color-whitesmoke fs-5" href="">Skill</RouterLink></li>
      </ul>
    </div>
  </div>
</template> -->

<script setup>
import { RouterLink, useRoute } from "vue-router";

const logoName = "Personal Website";
const route = useRoute();

const closeNavbar = () => {
  // Tutup navbar setelah mengarahkan ke halaman utama
  const navbar = document.getElementById("navbarNav");

  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-md bg-custom-color py-3 px-1 px-md-5 text-color-whitesmoke sticky-top shadow-sm">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <RouterLink to="/" class="fs-3 hover-navbar text-color-whitesmoke text-decoration-none cursor-pointer fw-bold pe-3">{{ logoName }}</RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto d-flex justify-content-evenly gap-3 gap-xl-5">
          <li class="nav-item center-sm">
            <RouterLink to="/" class="hover-navbar text-color-whitesmoke text-decoration-none cursor-pointer fs-5" :class="{ 'active-link': route.path === '/' }" @click="closeNavbar()">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/resume" class="hover-navbar text-color-whitesmoke text-decoration-none cursor-pointer fs-5" :class="{ 'active-link': route.path === '/resume' }" @click="closeNavbar()">Resume</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/projects" class="hover-navbar text-color-whitesmoke text-decoration-none cursor-pointer fs-5" :class="{ 'active-link': route.path === '/projects' }" @click="closeNavbar()">Projects</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/skill" class="hover-navbar text-color-whitesmoke text-decoration-none cursor-pointer fs-5" :class="{ 'active-link': route.path === '/skill' }" @click="closeNavbar">Skill</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active-link {
  font-weight: bold;
  color: white; /* Or any other color you prefer */
}

.navbar-toggler {
  border-color: rgba(255, 255, 255); /* Adjust transparency as needed */
  border: 0.2rem;
  padding: 0.7rem 0.7rem; /* Adjust padding for smaller size */
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='5' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  width: 1.5rem; /* Adjust width for smaller size */
  height: 1.5rem; /* Adjust height for smaller size */
}
#navbarNav {
  transition: 0.7s ease-in-out;
}

/* responsive */
@media (max-width: 330px) {
}
@media (max-width: 575.98px) {
}
@media (min-width: 576px) and (max-width: 767.98px) {
}
@media (min-width: 768px) {
}
@media (max-width: 992px) {
}
</style>

<!-- 
 <div class="container-navbar bg-custom-color py-3 px-5 text-color-whitesmoke d-flex justify-content-between align-items-center sticky-top shadow-sm">
    <div class="logo-name">
      <RouterLink to="/" class="hover-navbar text-color-whitesmoke text-decoration-none cursor-pointer fs-4 fw-bold">{{ logoName }}</RouterLink>
    </div>
    <div class="navigasi">
      <ul class="nav d-flex justify-content-evenly pe-4 gap-5">
        <li class="list-unstyled"><RouterLink to="/" class="hover-navbar text-color-whitesmoke text-decoration-none cursor-pointer fs-5" :class="{ 'active-link': route.path === '/' }">Home</RouterLink></li>
        <li class="list-unstyled"><RouterLink to="/resume" class="hover-navbar text-color-whitesmoke text-decoration-none cursor-pointer fs-5" :class="{ 'active-link': route.path === '/resume' }">Resume</RouterLink></li>
        <li class="list-unstyled"><RouterLink to="/projects" class="hover-navbar text-color-whitesmoke text-decoration-none cursor-pointer fs-5" :class="{ 'active-link': route.path === '/projects' }">Projects</RouterLink></li>
        <li class="list-unstyled"><RouterLink to="/skill" class="hover-navbar text-color-whitesmoke text-decoration-none cursor-pointer fs-5" :class="{ 'active-link': route.path === '/skill' }">Skill</RouterLink></li>
      </ul>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a href="#" class="navbar-brand text-uppercase">Aurora</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Packages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

 -->
