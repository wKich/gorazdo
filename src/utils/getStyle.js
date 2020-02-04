const getStyle = (...params) => props => {
  console.log(params, props);
  const [key, value] = params;
  try {
    const result = props.theme[key][value];
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
