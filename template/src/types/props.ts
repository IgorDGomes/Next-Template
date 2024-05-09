
/*
 * Interface for components receiving the locale parameter.
*/

export interface Props {
  params: {
    locale: string
  }
}

/*
 * Interface for the LanguageSwitch component.
*/

export interface LanguageSwitchProps {
  text: string,
  locale?: any
}