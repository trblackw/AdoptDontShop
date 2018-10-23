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
            console.log('yewwwww')
          option = "Special Needs";
          return option;
      }
    });
  }
};

