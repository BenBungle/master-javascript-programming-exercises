function checkAge(name, age) {
  
  if (age < 21) {
    return `Go home, ${name}!`;
  } else {
    return `Welcome, ${name}!`;
  }
  
}
const person1Name  = "Juanito";
const person1Age = 18;
console.log(checkAge(person1Name, person1Age));

const person2Name = "Alberto";
const person2Age = 28;
console.log(checkAge(person2Name, person2Age));