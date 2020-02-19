import Color from 'color';
const getStyle = (...params) => props => {
  const [key, value, enhancer] = params;
  try {
    const result = props.theme[key][value];
    if (['space', 'sizes', 'radii'].includes(key)) {
      return `${result}px`;
    }
    if (key === 'colors') {
      if (typeof enhancer === 'function') {
        const colorInstance = Color(result);
        return enhancer(colorInstance).string();
      }
      return result;
    }
    return result;
  } catch (e) {
    console.error(e);
    return 'unset';
  }
};

export default getStyle;
