
/*
 * Props for components receiving the locale parameter.
*/

export interface Props {
  params: {
    locale: string
  }
}

/*
 * Props for the LanguageSwitch component.
*/

export interface LanguageSwitchProps {
  text: string,
  locale?: any
}