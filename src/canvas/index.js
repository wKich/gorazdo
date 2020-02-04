const canvas = ctx => {
  ctx.beginPath();
  ctx.arc(100, 75, 40, 0, Math.PI * 2);
  const gradient = ctx.createLinearGradient(50, 50, 100, 100);
  gradient.addColorStop(0, 'green');
  gradient.addColorStop(1, 'red');
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.closePath();
};

export default canvas;
