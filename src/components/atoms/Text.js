import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react';
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

const SimpleText = (props) => {
  const { component: Component, value, ...rest } = props;
  const [locale] = useContext(LocaleContext);
  const localizedValue = extractLocale(value, locale);
  return <Component {...rest}>{localizedValue}</Component>;
};

export const Text = (props) => {
  if (props.doc) {
    return <FirebaseText {...props} />;
  }
  return <SimpleText {...props} />;
};

const FirebaseText = (props) => {
  const { component: Component, path, doc, ...rest } = props;
  const ref = useRef();
  const [editMode, setEditMode] = useState();
  const [locale] = useContext(LocaleContext);
  const value = doc.get(path);
  const localizedValue = extractLocale(value, locale);

  const handleClick = (event) => {
    if (event.altKey) {
      setEditMode(true);
    }
  };

  const handleBlur = async (event) => {
    if (ref.current.textContent !== localizedValue) {
      setEditMode(false);
    }
  };
  const handleKeyDown = async (event) => {
    if (event.key.startsWith('Esc')) {
      ref.current.textContent = localizedValue;
      setEditMode(false);
      return false;
    }
    if (event.key === 'Enter') {
      event.stopPropagation();
      event.preventDefault();
      setEditMode(false);
      return false;
    }
  };
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const hasChanges = ref.current.textContent.trim() !== localizedValue.trim();
    const updateChanges = async () => {
      try {
        await doc.ref.update({
          [`${path}.${locale}`]: ref.current.textContent.trim(),
        });
      } catch (error) {
        alert(error);
      }
    };
    if (editMode === false && hasChanges) {
      updateChanges();
    }
  }, [doc.ref, editMode, locale, localizedValue, path]);

  useLayoutEffect(() => {
    if (editMode === true) {
      ref.current.focus();
    }
  }, [editMode]);
  return (
    <Component
      {...rest}
      onClick={Boolean(doc) ? handleClick : undefined}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      contentEditable={editMode}
      suppressContentEditableWarning
      ref={ref}
    >
      {localizedValue}
    </Component>
  );
};

Text.defaultProps = {
  component: 'span',
};
