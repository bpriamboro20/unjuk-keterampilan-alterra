import { ref } from "vue";
import { defineStore } from "pinia";

export const useServicesStore = defineStore("services", () => {
  const service = ref([
    {
      icon: `<svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill="white" d="M5.829 6c-.412 1.165-1.524 2-2.829 2-1.656 0-3-1.344-3-3s1.344-3 3-3c1.305 0 2.417.835 2.829 2h13.671c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5h-4.671c-.412 1.165-1.524 2-2.829 2-1.305 0-2.417-.835-2.829-2h-4.671c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h13.671c.412-1.165 1.524-2 2.829-2 1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.305 0-2.417-.835-2.829-2h-13.671c-2.484 0-4.5-2.016-4.5-4.5s2.016-4.5 4.5-4.5h4.671c.412-1.165 1.524-2 2.829-2 1.305 0 2.417.835 2.829 2h4.671c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5h-13.671zm6.171 5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg>`,
      namaIcon: "Web Developer",
      descriptionIcon:
        "I possess foundational knowledge in web development, encompassing the creation of Data Flow Diagrams and Unified Modeling Language. My skills include designing mockup user interfaces and developing websites. Additionally, I often create relational databases for various projects.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="white" d="M0 0v19h24v-19h-24zm22 17h-20v-15h20v15zm-6.599 4l2.599 3h-12l2.599-3h6.802z"/></svg>`,
      namaIcon: "Front end",
      descriptionIcon:
        "I have the ability to design attractive website layouts through harmonizing colors, typography, and icons and elements. Additionally, I am capable of creating user-friendly interfaces and employing organized layouts using either flexbox or grid while considering good accessibility.",
    },
    {
      icon: `<svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill="white" d="M24 8.2c0-.318-.126-.623-.351-.849-.226-.225-.531-.351-.849-.351h-6.6c-.318 0-.623.126-.849.351-.225.226-.351.531-.351.849v13.6c0 .318.126.623.351.849.226.225.531.351.849.351h6.6c.318 0 .623-.126.849-.351.225-.226.351-.531.351-.849v-13.6zm-11 14.8h-8l2.599-3h5.401v3zm6.5-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3.5-3v-9.024h-7v9.024h7zm-2-14h-2v-2h-17v13h11v2h-13v-17h21v4zm-.5 4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2z"/></svg>`,
      namaIcon: "Website Responsive",
      descriptionIcon:
        "Responsive design ensures optimal website layout across devices like smartphones and tablets. By considering modern user needs, I enhance experience by adjusting and adapting design elements for different screen sizes, ultimately enhancing user comfort and satisfaction.",
    },
  ]);
  return { service };
});
