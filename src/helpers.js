import pf from "petfinder-client";

export const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export const getPhotos = media => {
  let photos = [];

  if (media && media.photos && media.photos.photo) {
    photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
  }
  return { photos };
};

export const getUserLocation = () => {
  if (!navigator.geolocation) {
    return alert("Having trouble accessing your location!");
  }
  navigator.geolocation.getCurrentPosition(location => {
    const searchString = "animal shelters";
    fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURI(
        searchString
      )}&inputtype=textquery&fields=formatted_address,name,opening_hours&locationbias=point:${
        location.coords.latitude
      },${location.coords.longitude}&key=${process.env.MAPS_API_KEY}`
    ).then(data => console.log(data));
  });
};
