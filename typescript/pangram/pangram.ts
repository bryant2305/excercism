export function isPangram(pangram : string): boolean{
  

  const abecedario = 'abcdefghijklmnopqrstuvwxyz';

  const pangramLetters = pangram.toLowerCase().replace(/[^a-z]/g , "")
  
  return abecedario.split('').every(letter=>pangramLetters.includes(letter))
}
