import { ref } from "vue";
import { defineStore } from "pinia";
import profileImage from "@/assets/image/fotoBayu.png";

export const useHeroStore = defineStore("hero", () => {
  const firstName = ref("BAYU");
  const middleName = ref("AJI");
  const lastName = ref("PRIAMBORO");
  const description = ref(
    "<i>I am currently focused on pursuing a career as a frontend web developer. Nevertheless, I remain open to the possibility of transitioning into a full-stack web developer role. I am deeply passionate about continuous learning and personal development.</i>"
  );

  const imageUrl = ref(profileImage);

  return {
    firstName,
    middleName,
    lastName,
    description,
    imageUrl,
  };
});
