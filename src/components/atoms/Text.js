import React, { useContext } from 'react';
import { LocaleContext } from 'contexts/Locale';

const useLocalizedValue = (value) => {
  const [locale] = useContext(LocaleContext);
  if (typeof value === 'object') {
    if (locale in value) {
      return value[locale];
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
