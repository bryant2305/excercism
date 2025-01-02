export function age(planet:  'earth' | 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune', seconds: number) : number | undefined{
  
  const planetYears = {
    earth: 31557600,
    mercury: 7600543,
    venus: 19414149,
    mars: 59354032,
    jupiter: 374355659,
    saturn: 929292362,
    uranus: 2651370019,
    neptune: 5200418560
  }

  if (planetYears[planet]){
  
    return parseFloat((seconds / planetYears[planet]).toFixed(2));
  }
  else {
    throw console.error( "invalid planet");
    
  }
}
