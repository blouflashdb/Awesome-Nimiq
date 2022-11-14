import { useI18n } from "vue-i18n";

export const useLocaleUserSetting = () => {
  const app = useAppConfig();
  const { locale } = useI18n({ useScope: "global" });
  const localeUserSetting = useCookie("locale");

  const getUserLocale = (): string =>
    localeUserSetting.value || app.defaultLanguage;

  const localeSetting = useState<string>("locale", () => getUserLocale());

  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting;
    locale.value = localeSetting;
  });

  const initLang = () => {
    localeUserSetting.value = getUserLocale();
    locale.value = getUserLocale();
  };

  return { localeSetting, initLang };
};
