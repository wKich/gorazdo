import Color from 'color';
// should not be an arrow function
export function color(palette, shade = 'main', fn) {
  if (typeof fn === 'function') {
    return fn(Color(this.palette[palette][shade])).string();
  }
  return this.palette[palette][shade];
}
