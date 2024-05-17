// For Nuxt 3
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

library.add(fas, faLinkedin, faGithub, faYoutube, faPinterest);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
