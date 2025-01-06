export function hey(message: string) {
  
  const trimmedMessage = message.trim();


  function checkUpperCaseQ(text: string) {
    return /^[A-Z\s]+\?$/.test(text);
  }


  function checkUpperCase(text: string) {
    return /^[^a-z]*[A-Z]+[^a-z]*$/.test(text);
  }


  if (trimmedMessage === "") {
    return "Fine. Be that way!";
  }


  if (checkUpperCaseQ(trimmedMessage)) {
    return "Calm down, I know what I'm doing!";
  }

  if (trimmedMessage.slice(-1) === "?") {
    return "Sure.";
  }

  
  if (checkUpperCase(trimmedMessage)) {
    return "Whoa, chill out!";
  }

 
  return "Whatever.";
}
