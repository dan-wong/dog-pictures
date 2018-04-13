import axios from 'axios';

export default {
  getSubredditFromBreed(breed) {
    switch(breed) {
      case "Corgi":
        return "corgi";
      case "Husky":
        return "husky";
      case "Labrador":
        return "labrador";
      case "Shiba%20Inu":
        return "shiba";
      case "Samoyeds":
        return "samoyeds";
      default:
        return "corgi";
    }
  },

  getTopDogPictures(breed) {
    return axios.get(`https://www.reddit.com/r/${this.getSubredditFromBreed(breed)}/top/.json?limit=5`)
        .then(response => {
            return response.data.data.children.map(obj => obj.data.url);
        });
  },
};