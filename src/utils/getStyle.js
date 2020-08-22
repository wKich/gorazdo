import Color from 'color';
const getStyle = (...params) => (props) => {
  const [key, value, postProcessor] = params;

  try {
    const result = getValueByPath(value, props.theme[key]);
    if (key === 'colors' && typeof postProcessor === 'function') {
      return postProcessor(Color(result)).string();
    }
    if (['space', 'sizes', 'radii'].includes(key)) {
      return `${result}px`;
    }
    return result;
  } catch (e) {
    console.error(e);
    return 'unset';
  }
};

export default getStyle;

const getValueByPath = (path, object) => {
  if (typeof path !== 'string') {
    return object[path];
  }
  return path.split('.').reduce((acc, unit) => acc[unit], object);
};
