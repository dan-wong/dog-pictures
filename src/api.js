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
      default:
        return "corgi";
    }
  },

  getTopDogPictures(breed, limit) {
    return axios.get(`https://www.reddit.com/r/${this.getSubredditFromBreed(breed)}/top/.json?limit=${limit}`)
        .then(response => {
            return response.data.data.children.map(obj => obj.data.url);
        });
  },
};