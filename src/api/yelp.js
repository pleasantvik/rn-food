import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer GcKyMo37CfsYMH-hymtTe0xcBunGYxwDmF6GVX2hxSrUoKW7nZ6pjBXjQAYYk1JNOgBd5v7HMYUtd26NnjSLOSC5EIDCp5b1C9O-bu4SQvmylsADDTIMS5mfG5EHZHYx",
  },
});
