import React from "react";
import Music from './audio/medieval-music-wild-boars-inn.mp3';
import styled from "styled-components";

const Player= styled.div`
  button {
    padding: 5px 10px;
    background-color: rgba(
    ${({ play }) => (play ? '100, 163, 76': '214, 62, 39')}); 
    border: none;
    border-radius: 5px;
    outline: none;
  }
`;

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        play: false,
    }
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(){
    const music = document.getElementById('music');
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
    this.setState({
      play: !this.state.play,
    });
  }


  render() {
      return(
            <Player play= {this.state.play}> 
                <button onClick={this.handlePlay}>{this.state.play ? 'Music On' : 'Music Off'}</button>       
                <audio id="music" src={Music} autoPlay="false" />
            </Player>
    )
}
}

export default Audio
