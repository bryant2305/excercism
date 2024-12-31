export function isLeap(leap: number):boolean {
  if(leap %4 ===0 && leap %100 !==0 && leap %400 !==0){
    return true
  }
    else if (leap %400 ===0){
      return true
    }
  else{
    return false
  }
}