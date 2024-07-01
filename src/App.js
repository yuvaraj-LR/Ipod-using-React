import { Component } from "react";

import images from "./assets/images/images";
import songs from "./assets/songs/songs";
import "./assets/css/index.css"

import Ipod from "./components/ipod";

class App extends Component {
  constructor() {
    super();
    // Set songs to audio format.
    const song1 = new Audio(songs.music1);
    const song2 = new Audio(songs.music2);
    const song3 = new Audio(songs.music3);
    this.state = {
      // Menu and its options.
      menu: {
        options: [
          {music: ["All Songs", "Artists", "Albums"]},
          {games: []},
          {coverflow: []},
          {settings: ["Theme"]},
        ]
      },
      // Showing which menu should have to present.
      menuVisible: true,
      musicVisible: false,
      settingVisible: false,
      gameVisible: false,
      // Selecting option from the menu.
      optionIndex: 0,
      musicIndex: 0,

      // Background screen display
      screen: {
        wallpaper: [
          // Home-wallpapers.
          images.wallpaper1,
					images.wallpaper2,
					images.wallpaper3,
					images.wallpaper4,
					images.wallpaper5,
					// coverflow
					images.coverflow,
					// games
					images.games,
					// all songs
					images.allsongs,
					// artists
					images.artists,
					// albums
					images.albums,
        ]
      },
      // Wallpaper index for traversal in Wallpaper Array to access wallpaper
      wallpaperIndex: 0,
      // Wallpaper index for traversal in Wallpaper Array for every Screen
      screenIndex: 0,
      songsList: {
        songs: [song1, song2, song3],
        thumbnails: [images.song1Img, images.song2Img, images.song3Img],
        songIndex: 0,
        name: ["Stay", "Senorita", "Yummy"],
        isPlaying: false,
      },

      // Setting up the theme.
      theme: {
        themeList: ["Classic", "Dark"],
        themeIndex: 0
      }
    }
  }

  render() {
    return (
      <>
        <Ipod />
      </>
    )
  }
}

export default App;
