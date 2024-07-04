import { Component } from "react";

import "./assets/css/index.css"

import Ipod from "./components/ipod";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Menu and its options.
      menu: {
        options: ["music", "games", "coverflow", "settings"]
      },

      music: {
        options: ["All Songs", "Artists", "Albums"]
      },

      settings: {
        options: ["Theme", "Background"]
      },
      
      // Showing which menu should have to present.
      menuVisible: false,
      musicVisible: false,
      settingVisible: false,
      gameVisible: false,
      coverVisible: false,
      // Selecting option from the menu.
      optionIndex: 0,
      musicIndex: 0,
      screenIndex: 0,
    }
  }

  handleMenuButtonClick = () => {
    this.setState({
      menuVisible: true,
      musicVisible: false,
      settingVisible: false,
      gameVisible: false,
      coverVisible: false
    })
  }

  handleForwardButtonClick = () => {
    if (this.state.optionIndex > 0) {
      this.setState({
        optionIndex: --this.state.optionIndex
      })
    } else {
      this.setState({
        optionIndex: 3
      })
    }
  }

  handleBackwardButtonClick = () => {
    if (this.state.optionIndex < 3) {
      this.setState({
        optionIndex: ++this.state.optionIndex
      })
    } else {
      this.setState({
        optionIndex: 0
      })
    }
  }

  handlePlayMusicButtonClick = () => {
    console.log("I am play music click");
  }

  handleNextButton = () => {
    if(this.state.menuVisible && this.state.optionIndex === 0) {
      this.setState({
        musicVisible: !this.state.musicVisible,
      });
    } else if(this.state.menuVisible && this.state.optionIndex === 3) {
      this.setState({
        settingVisible: !this.state.settingVisible
      })
    } else if(this.state.menuVisible && this.state.optionIndex === 1) {
      this.setState({
        gameVisible: !this.state.gameVisible,
        menuVisible: false
      })
    } else if(this.state.menuVisible && this.state.optionIndex === 2) {
      this.setState({
        coverVisible: !this.state.coverVisible,
        menuVisible: false
      })
    }
  }

  render() {
    return (
      <>
        <Ipod state={this.state} onClickMenuButton={this.handleMenuButtonClick} onClickForwardButton={this.handleForwardButtonClick} onClickBackwardButton={this.handleBackwardButtonClick} onClickPlayButton={this.handlePlayMusicButtonClick} onClickNextButton={this.handleNextButton}/>
      </>
    )
  }
}

export default App;
