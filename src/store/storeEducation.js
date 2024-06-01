import { ref } from "vue";
import { defineStore } from "pinia";
import imageEducation from "@/assets/image/education.svg";

export const useEducationStore = defineStore("education", () => {
  const imageUrl = ref(imageEducation);
  const education = ref([
    {
      year: "2019 - 2023",
      school: "Indraprasta PGRI University",
      major: "Informatics Engineering",
    },
    {
      year: "2013 - 2016",
      school: "Senior High School 82 Jakarta",
      major: "Social Science",
    },
    {
      year: "2010 - 2013",
      school: "Junior High School 12 Jakarta",
      major: "-",
    },
    {
      year: "2004 - 2010",
      school: "Elementary School 015 Cipete Utara",
      major: "-",
    },
  ]);

  return { education, imageUrl };
});
