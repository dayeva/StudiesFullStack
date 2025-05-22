// 🔁 Importación de hooks de React
import { useState } from "react";

// ✅ Componente Feedback (funcional)
const Feedback = ({ text, handleclick }) => { // 📦 Recibe props: text y handleclick
   console.log("pueba"); // 🧮 Lógica interna o debug

   return (
      // 🧱 JSX y uso de evento onClick
      <button onClick={handleclick}>{text}</button>
   )
}

// ✅ Componente StatisticsLine (funcional)
const StatisticsLine = ({ text, value }) => { // 📦 Props
   return (
      // 🧱 JSX que muestra texto y valor
      <>
         <td>{text}</td>
         <td>{value}</td>
      </>
   )
}

// ✅ Componente Statistics (funcional)
const Statistics = ({ good, neutral, bad }) => { // 📦 Props
   // 🧮 Lógica interna para determinar si hay feedback
   if (good === 0 && neutral === 0 && bad === 0) {
      return (
         // 🧱 JSX si no hay feedback
         <div>
            <h1>statistics</h1>
            <h3>No feedback given</h3>
         </div>
      )
   } else {
      // 🧮 Lógica interna: cálculos
      const total = good + neutral + bad;
      const average = (good - bad) / total || 0;
      const positive = (good / total) * 100 || 0;

      return (
         // 🧱 JSX para mostrar la tabla de estadísticas
         <div>
            <h1>statistics</h1>
            <table>
               <tr><StatisticsLine text={'good'} value={good} /></tr>
               <tr><StatisticsLine text={'neutral'} value={neutral} /></tr>
               <tr><StatisticsLine text={'bad'} value={bad} /></tr>
               <tr><td>all</td><td>{total}</td></tr>
               <tr><td>average</td><td>{average}</td></tr>
               <tr><td>positive</td><td>{positive} %</td></tr>
            </table>
         </div>
      )
   }
}

// ✅ Componente principal App
const App = () => {
   // 🧠 Estado (state) para contar cada tipo de feedback
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);

   return (
      // 🧱 JSX del componente principal
      <div>
         <div>
            <h1>give feedback</h1>
            {/* 🧩 Componentes hijos + eventos + props */}
            <Feedback handleclick={() => setGood(good + 1)} text={'good'} />
            <Feedback handleclick={() => setNeutral(neutral + 1)} text={'neutral'} />
            <Feedback handleclick={() => setBad(bad + 1)} text={'bad'} />
         </div>
         <div>
            {/* 🧩 Componente hijo con props */}
            <Statistics good={good} neutral={neutral} bad={bad} />
         </div>
      </div>
   )
}

// 📤 Exportación del componente principal
export default App;
