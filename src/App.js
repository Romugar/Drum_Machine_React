import React, { Component } from "react";
import "./App.css";

const bankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const bankTwo = [{
keyCode: 81,
keyTrigger: 'Q',
id: 'Chord-1',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
keyCode: 87,
keyTrigger: 'W',
id: 'Chord-2',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
keyCode: 69,
keyTrigger: 'E',
id: 'Chord-3',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
keyCode: 65,
keyTrigger: 'A',
id: 'Shaker',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
keyCode: 83,
keyTrigger: 'S',
id: 'Open-HH',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
keyCode: 68,
keyTrigger: 'D',
id: 'Closed-HH',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
keyCode: 90,
keyTrigger: 'Z',
id: 'Punchy-Kick',
url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
keyCode: 88,
keyTrigger: 'X',
id: 'Side-Stick',
url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
keyCode: 67,
keyTrigger: 'C',
id: 'Snare',
url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    currentBank: bankOne,
    power: false,
    screen: "",
    volume: "5",      
  };
  
  this.handleChangeVolume = this.handleChangeVolume.bind(this);
  this.playSound = this.playSound.bind(this);  
  this.handleKeyPress = this.handleKeyPress.bind(this);
  this.changeBank = this.changeBank.bind(this);
}

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    
    const sound = this.state.currentBank.filter(item => 
      e.keyCode === item.keyCode
    );  
    if (sound.length > 0) {
      this.playSound(sound[0].keyTrigger, sound[0].id); 
    }; 
    }
  

  handleChangeVolume(event) {
    this.setState({volume: event.target.value, screen: "volume: " + event.target.value})    
  }

  playSound(key, id) { 
    
    const sound = document.getElementById(key);
    sound.play()
    this.setState({screen: id})  
  }
  

  changeBank() {
    if (this.state.currentBank === bankOne) {
      this.setState({currentBank: bankTwo, screen: "bankTwo"})
    } else {
      this.setState({currentBank: bankOne, screen: "bankOne"})
    }
  }


render() {
  const { currentBank, screen, volume } = this.state
  return (
    <div className="container-fluid" id="drum-machine">        
      <Instruments currentBank={currentBank} playSound={this.playSound}/>
      <Panel screen={screen} volume={volume} onChangeVolume={this.handleChangeVolume} onChangeBank={this.changeBank}/>
    </div>
  );
}  
}

const Instruments = ({ currentBank, playSound }) => {
return (
  <div className="container">
    {currentBank.map(item => (
      <div key={item.id} id={item.id} className={item.keyTrigger}>
        <button className="btn btn-warning btn-lg" onClick={() => playSound(item.keyTrigger, item.id)}>{item.keyTrigger}
          <audio className="clip" id={item.keyTrigger} src={item.url} />
        </button>
      </div>
    ))}
  </div>    
)
}

const Panel = ({ screen, volume, onChangeVolume, onChangeBank }) => {
return (
  <div>
    <div id="display" className="screen">
      {console.log(typeof(screen))}{screen}
    </div>      
    <div className="panel">        
      <div><p>BANK</p></div>        
      <label className="switch">
        <input type="checkbox" onChange={onChangeBank}/>
        <span className="slider round"></span>
      </label>        
          
    </div>      
  </div>    
)
}

export default App;
