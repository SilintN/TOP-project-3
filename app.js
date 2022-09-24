const choices = ['Rock', 'Paper', 'Scissors'];

const getCompChoice = () => {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return 'Computer chooses ' + choice;
};
getCompChoice();

console.log(getCompChoice());
