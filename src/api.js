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
      case "Aww":
        return "aww";
      case "Doggos":
        return "dogpictures";
      case "Puppies":
        return "puppies";
      case "Bunnies":
        return "bunnies";
      default:
        return "corgi";
    }
  },

  getTopDogPictures(breed, limit) {
    return axios.get(`https://www.reddit.com/r/${this.getSubredditFromBreed(breed)}/.json?limit=${limit}`)
        .then(response => {
            return response.data.data.children.map(obj => obj.data.url);
        });
  },
};