import { ref } from "vue";
import { defineStore } from "pinia";
import imageWork from "@/assets/image/work.svg";

export const useWorkStore = defineStore("works", () => {
  const imageUrl = ref(imageWork);
  const works = ref([
    {
      year: "November 2023 - current (Freelance)",
      company: "PT. Duta Venue ",
      position: "Event Organizer Crew",
    },
    {
      year: "March 2023 - May 2023 (Internship)",
      company: "PMB Bidan Lena ",
      position: "Information Technology - Programmer Dekstop",
    },
    {
      year: "July 2018 - current (Freelance)",
      company: "Grab Indonesia ",
      position: "Driver",
    },
    {
      year: "October 2018 - March 2019 (Fulltime)",
      company: "PT. Violad Creative Studio ",
      position: "Office Boy",
    },
    {
      year: "December 2016 - April 2018 (Fulltime)",
      company: "PT. Pertamina Retail ",
      position: "Pramuniaga",
    },
  ]);

  return { imageUrl, works };
});
