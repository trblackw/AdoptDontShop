import pf from "petfinder-client";
const MAPS_API_KEY = process.env.MAPS_API_KEY;

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

  console.log(
    navigator.geolocation.getCurrentPosition(location => ({
      lat: location.coords.latitude,
      lon: location.coords.longitude
    }))
  );

  return navigator.geolocation.getCurrentPosition(location => ({
    lat: location.coords.latitude,
    lon: location.coords.longitude
  }));
};

export const getLocation = async (lat, lng) => {
  const locationRes = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAPS_API_KEY}`
  );

  const locations = await locationRes.json();
  return location.results;
};

export const getPlaceDetails = id => {
  fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&fields=name,rating,formatted_address,photo&key=${MAPS_API_KEY}`
  );
};

//the only reason these are hardcoded is because there's a finite number of attributes
export const formatOptions = options => {
  console.log(options);
  if (Array.isArray(options)) {
    return options.map(option => {
      switch (option) {
        case "altered":
          option = "Neutered";
          return option;
        case "hasShots":
          option = "Vaccinated";
          return option;
        case "housetrained":
          option = "House Trained";
          return option;
        case "noCats":
          option = "No Cats!";
          return option;
        case "specialNeeds":
          option = "Special Needs";
          return option;
        case "noKids":
          option = "Not a Parent";
          return option;
        case "noDogs":
          option = "No Dogs!";
          return option;
      }
    });
  } else {
    switch (options) {
      case "altered":
        options = "Neutered";
        return options;
      case "hasShots":
        options = "Vaccinated";
        return options;
      case "housetrained":
        options = "House Trained";
        return options;
      case "noCats":
        options = "No Cats!";
        return options;
      case "specialNeeds":
        options = "Special Needs";
        return options;
      case "noKids":
        options = "Not a Parent";
        return options;
      case "noDogs":
        options = "No Dogs!";
        return options;
    }
  }
};
