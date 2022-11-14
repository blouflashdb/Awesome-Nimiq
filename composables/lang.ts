import { useI18n } from "vue-i18n";

export const useLocaleUserSetting = () => {
  const app = useAppConfig();
  const { locale } = useI18n({ useScope: "global" });
  const localeUserSetting = useCookie("locale") || app.defaultLanguage;

  const localeSetting = useState<string>(
    "locale",
    () => localeUserSetting.value
  );

  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting;
    locale.value = localeSetting;
  });

  const init = () => {
    localeSetting.value = localeUserSetting.value;
    locale.value = localeSetting.value;
  };

  // lifecycle
  onBeforeMount(() => init());

  return localeSetting;
};
