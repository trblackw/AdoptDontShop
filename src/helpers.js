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

//www.google.com/maps?q=${latitude},${longitude}`

// export const getShelterLocation = (lat, lng) => {
//   fetch(`https://www.google.com/maps?q=${lat},${lng}`);
// };

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
