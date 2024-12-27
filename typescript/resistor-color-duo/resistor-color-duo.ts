export function decodedValue(colors: string[]): number {
  const bandColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

  const totalColors = colors.slice(0,2).map((color) => bandColors.indexOf(color)).join('');

  return parseInt(totalColors, 10);
}
