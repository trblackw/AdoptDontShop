export const getPhotos = media => {
   let photos = [];
 
   if (media && media.photos && media.photos.photo) {
     photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
   }
   return { photos };
 };