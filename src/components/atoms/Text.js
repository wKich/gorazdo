import React, { useContext } from 'react';
import { LocaleContext, FALLBACK_LOCALE } from 'contexts/Locale';

const extractLocale = (value, locale) => {
  if (typeof value === 'object') {
    if (locale in value) {
      return value[locale];
    }
    if (FALLBACK_LOCALE in value) {
      return value[FALLBACK_LOCALE];
    }
    return JSON.stringify(value);
  }
  return value;
};

const useLocalizedValue = ({ value, path, doc }) => {
  const [locale] = useContext(LocaleContext);
  if (doc && path) {
    const value = doc.get(path);
    return extractLocale(value, locale);
  }
  return extractLocale(value, locale);
};

export const Text = (props) => {
  const { component: Component, value, path, doc, ...rest } = props;
  const localizedValue = useLocalizedValue({ value, doc, path });

  return <Component {...rest}>{localizedValue}</Component>;
};

Text.defaultProps = {
  component: 'span',
};
