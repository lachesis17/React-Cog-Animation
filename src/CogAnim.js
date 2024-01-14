import React, {useState} from 'react';
import cog1 from './cog1.svg';
import cog2 from './cog2.svg';
import cog3 from './cog3.svg';
import cog4 from './cog4.svg';

const CogAnim = () => {
    // const [x, placeholder] = useState(''); // local state to update on something

  return (
      <div className="App">
      <a href="https://github.com/lachesis17/React-Cog-Animation"><header className="App-header">
          <div className="cog-wrapper"><img src={cog1} className="cog1" alt="logo" /></div>
          <div className="cog-wrapper2"><img src={cog2} className="cog2" alt="logo" /></div>
          <div className="cog-wrapper"><img src={cog3} className="cog3" alt="logo" /></div>
          <div className="cog-wrapper2"><img src={cog4} className="cog4" alt="logo" /></div>
      </header></a>
  </div>
  );
};

export default CogAnim;