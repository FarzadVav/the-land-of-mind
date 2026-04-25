import type { MetadataRoute } from "next";

function Manifest(): MetadataRoute.Manifest {
  return {
    name: "The land of mind",
    short_name: "The land of mind",
    description: "Your land for develop your life",
    start_url: "/",
    display: "standalone",
    background_color: "#efefef",
    theme_color: "#151515",
    icons: [
      {
        src: "/icons/48x48.jpg",
        sizes: "48x48",
        type: "image/jpg",
      },
      {
        src: "/icons/72x72.jpg",
        sizes: "72x72",
        type: "image/jpg",
      },
      {
        src: "/icons/96x96.jpg",
        sizes: "96x96",
        type: "image/jpg",
      },
      {
        src: "/icons/128x128.jpg",
        sizes: "128x128",
        type: "image/jpg",
      },
      {
        src: "/icons/144x144.jpg",
        sizes: "144x144",
        type: "image/jpg",
      },
      {
        src: "/icons/152x152.jpg",
        sizes: "152x152",
        type: "image/jpg",
      },
      {
        src: "/icons/192x192.jpg",
        sizes: "192x192",
        type: "image/jpg",
      },
      {
        src: "/icons/256x256.jpg",
        sizes: "256x256",
        type: "image/jpg",
      },
      {
        src: "/icons/384x384.jpg",
        sizes: "384x384",
        type: "image/jpg",
      },
      {
        src: "/icons/512x512.jpg",
        sizes: "512x512",
        type: "image/jpg",
      },
    ],
  }
};

export default Manifest;