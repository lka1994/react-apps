import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song 1", duration: "1:01" },
    { title: "Song 2", duration: "1:02" },
    { title: "Song 3", duration: "1:03" },
    { title: "Song 4", duration: "1:04" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
