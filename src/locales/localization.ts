
import {configureLocalization} from '@lit/localize';
import {sourceLocale, targetLocales} from './locale-codes';

export const getLocale = () => {

  const locale = localStorage.getItem( 'locale' ) || navigator.language;

  return locale === 'de' ? 'de-DE' : locale;
}

export const {setLocale} = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: () => {
    return import( './de-DE.js' );
  },
});

export const setLocaleFromLocalStorage = async ( locale: string ) => {
  localStorage.setItem( 'locale', locale )
  await setLocale( locale );
};
