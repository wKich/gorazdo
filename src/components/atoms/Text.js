import React, { useContext } from 'react';
import { LocaleContext, FALLBACK_LOCALE } from 'contexts/Locale';

const useLocalizedValue = (value) => {
  const [locale] = useContext(LocaleContext);
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

export const Text = (props) => {
  const { component: Component, value, ...rest } = props;
  const localizedValue = useLocalizedValue(value);
  return <Component {...rest}>{localizedValue}</Component>;
};

Text.defaultProps = {
  component: 'span',
};
