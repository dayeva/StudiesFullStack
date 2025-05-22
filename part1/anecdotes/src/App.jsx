import { useState } from 'react';

// Componente para el botón "Next anecdote"
const Nextanecdote = ({ handleclick }) => (
   // JSX con evento onClick que ejecuta la función pasada por props
   <button onClick={handleclick}>
      Next anecdote
   </button>
);

// Componente para el botón "vote"
const Votes = ({ handleclick }) => (
   // JSX con evento onClick
   <button onClick={handleclick}>
      vote
   </button>
);

const TopAnecdote = ({index, votes, anecdotes}) => {
   console.log('event', index);
   console.log('votes', votes);
   return(
      <div>
         <div>{anecdotes[index]}</div>
         <div>has {votes[index]} votes</div>
      </div>
   )
}

// Componente principal
const App = () => {
  // Array de anécdotas
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  // Estado para saber qué anécdota está seleccionada inicialmente
  const [selected, setSelected] = useState(0);

  // Estado inicial para contar los votos
  const [votes, setVotes] = useState({
    0: 0,
    1: 0, 
    2: 0, 
    3: 0, 
    4: 0, 
    5: 0, 
    6: 0, 
    7: 0
  });

  // Función que suma un voto a la anécdota actual
  const handleclickVote = () => {
    const updatedVotes = { ...votes, [selected]: votes[selected] + 1 };
    setVotes(updatedVotes);
    console.log(votes);
  };

  // Función para mostrar una anécdota aleatoria
  const handleNext = () => {
    const numRandom = Math.floor(Math.random() * anecdotes.length);
    setSelected(numRandom);
    console.log(numRandom);
  };

  const getMaxVotedKey = () => {
    const selected = Object.keys(votes).reduce((maxKey, currentKey) => {
      return votes[currentKey] > votes[maxKey] ? currentKey : maxKey;
      });
    return selected;
  };

  return (
    // JSX del componente principal
    <div>
      <div>
         <h1>Anecdote of the day</h1>
         <div>{anecdotes[selected]}</div>
         <div>has {votes[selected]} votes</div>
         <Votes handleclick={handleclickVote} />
         <Nextanecdote handleclick={handleNext} />
      </div>
         <h1>Anecdote with most votes</h1>
         <TopAnecdote index={getMaxVotedKey()} votes={votes} anecdotes={anecdotes}/>
    </div>
    
  );
};

export default App;
