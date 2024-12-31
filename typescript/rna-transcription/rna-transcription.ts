export function toRna(DNA:string):string {

  const DNAMap : Record<string , string> ={
    
    C : "G" ,
    G : "C" ,
    A : "U" ,
    T : "A"
  }
  
  if(!DNA || !/^[GCTA]+$/.test(DNA)){
 
   throw new Error ("Invalid input DNA.") ;
  }
   
  return DNA.split('').map((base)=>DNAMap[base]).join('')
  
}
