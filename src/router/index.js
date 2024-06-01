import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue";
import resume from "@/views/resume.vue";
import projects from "@/views/projects.vue";
import skill from "@/views/skill.vue";
import resumeEducation from "@/views/resumeEducation.vue";
import resumeExperience from "@/views/resumeExperience.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/resume",
      name: "resume",
      component: resume,
    },
    {
      path: "/resume/education",
      name: "resumeEducation",
      component: resumeEducation,
    },
    {
      path: "/resume/experience",
      name: "resumeExperience",
      component: resumeExperience,
    },
    {
      path: "/projects",
      name: "projects",
      component: projects,
    },
    {
      path: "/skill",
      name: "skill",
      component: skill,
    },
  ],
});

export default router;
