import { ref } from "vue";
import { defineStore } from "pinia";
import image from "@/assets/image/projects/project.jpg";
import image1 from "@/assets/image/projects/project1.jpg";
import image2 from "@/assets/image/projects/project2.jpg";
import image4 from "@/assets/image/projects/project4.jpg";
import image5 from "@/assets/image/projects/project5.jpg";
import image6 from "@/assets/image/projects/project6.jpg";
import image7 from "@/assets/image/projects/project7.jpg";

export const useProjectsWebsiteStore = defineStore("projectsWebsite", () => {
  const projects = ref([
    {
      img: image1,
      title: "BR Architects",
      tech: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
              </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
              </svg>
  
              
              `,
      description: "br architect is a website landing page that I recreated/rebuilt. The inspiration for this design came from w3school for learning purposes.",
    },
    {
      img: image2,
      title: "Mount Everest",
      tech: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
              </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
              </svg>
  
              
              `,
      description: "Mount Everest is a landing page website that I created to learn HTML and CSS practices.",
    },
    {
      img: image4,
      title: "Make Better Coffee",
      tech: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
              </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
              </svg>
  
              
              `,
      description: "Make Better Coffee is a landing page of a website that I rebuilt. Honestly, I forgot the exact source of my inspiration, but it came from either W3Schools or YouTube for learning purposes.",
    },
    {
      img: image5,
      title: "My Blog",
      tech: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
              </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
              </svg>
  
              
              `,
      description: "My Blog is a website landing page that I recreated/rebuilt. The inspiration for this design came from w3school for learning purposes.",
    },
    {
      img: image6,
      title: "Landing Page Portofolio",
      tech: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
              </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
              </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
            <path fill="#7c4dff" d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"></path><path fill="#fff" d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"></path>
            </svg>
  
              
              `,
      description: "The landing page portfolio was created while I was studying and practicing material from the Unpas YouTube channel.",
    },
    {
      img: image7,
      title: "Portal News",
      tech: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
              </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
              <g fill="#0040ff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M9.91211,2l6.08789,13.39063v0.10938l6,-13.5h-6zM13.01953,4h2.98047v6.49805l-0.01367,0.03125zM4,6l12,25l12,-25h-6l-6,13l-6,-13zM23.2793,8h1.54297l-8.82227,18.37891v-2.60547l1.81641,-3.93359z"></path></g></g>
              </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon>
                <polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon>
              </svg>
  
              
              `,
      description: "The news portal is a website built for practical learning of the JavaScript framework Vue.js on the JustKoding YouTube channel. This website has CRUD and authentication features.",
    },
    {
      img: image,
      title: "Coffeeshop",
      tech: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
              </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
                <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
              </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                <path
                  fill="#000001"
                  d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                ></path>
              </svg>
  
              
              `,
      description: "Coffeeshop is a website that I created to learn and practice my understanding of HTML, CSS, and JavaScript.",
    },
  ]);
  return { projects };
});
