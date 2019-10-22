import axios from "axios";

const KEY = "AIzaSyAlFBiQiPcBvsVKrcwrTuU4l4wtxJubgLA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
