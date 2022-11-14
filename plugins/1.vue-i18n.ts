import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import de from "../locales/de.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const app = useAppConfig();
  const localeUserSetting = useCookie("locale") || app.defaultLanguage;
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localeUserSetting.value,
    messages: {
      en,
      de,
    },
  });

  vueApp.use(i18n);
});
