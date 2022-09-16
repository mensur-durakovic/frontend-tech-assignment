import React from 'react';
import family from './family.svg';

function App() {
  return (
    <main>
     <div 
        style={{background: "#173F4B", width: "130px", height: "136px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)"}}>
          <img src={family} alt="Family" />
          <p style={{textAlign: "center"}}>Baby's birth</p>
     </div>
    </main>
  );
}

export default App;
