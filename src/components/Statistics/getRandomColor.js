export function getRandomColor(id) {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = Number(id); i < Number(id) + 5; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color + Number(id);
}
