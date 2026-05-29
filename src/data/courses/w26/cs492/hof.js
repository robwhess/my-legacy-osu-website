import botwImage from './hofFiles/botw.jpg';
import botwScreencap from './hofFiles/botw.gif';
import beaverEatsImage from './hofFiles/beaverEats.jpg';
import beaverEatsScreencap from './hofFiles/beaverEats.gif';
import plantamonGoImage from './hofFiles/plantamonGo.jpg';
import plantamonGoScreencap from './hofFiles/plantamonGo.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "BOTW Compendium App",
    developers: [
      "Nathan Puckett",
      "Nathaniel White",
      "Sarah Satchell",
      "Philip Nguyen"
    ],
    description: "Our application allows the user to search, view, and save items related to the video game The Legend of Zelda: Breath of the Wild. The [Hyrule Compendium API](https://github.com/gadhagod/Hyrule-Compendium-API) is used as the backbone, with the UI having been made with Jetpack Compose. The home screen is formatted so a user can view all types of compendium entries, or switch to a tab that houses a specific type. Along with this, there’s a material design search bar at the top of the screen that allows for direct searches, as well as contains filters for locations found. The app also supports the ability to both save entries and mark them as found, and contains a screen that showcases all of the saved entries. All of this functionality is also completely accessible offline via local data persistence.",
    imageUrl: botwImage,
    screencapUrl: botwScreencap
  },
  {
    title: "BeaverEats",
    developers: [
      "Minsu Kim",
      "Ryan Shankar",
      "Adithya Nair",
      "Nicholas Nguyen",
      "Tyler Nguyen"
    ],
    description: "BeaverEats is a student-first mobile app built exclusively for the Oregon State University community in Corvallis, OR. It helps students discover the best restaurants, bars, cafes, and late-night eats near campus, ranked not by the general public, but by fellow Beavers. Starting from a Google Reviews baseline, the app's dynamic ratings evolve in real time through student-submitted reviews and campus-specific tags. Featuring an interactive, campus-centered map and algorithmically curated trending lists like \"Best Study Cafe\" and \"Budget-Friendly,\" BeaverEats goes beyond a simple directory to serve as a living, community-driven culinary companion tailored to student life.",
    imageUrl: beaverEatsImage,
    screencapUrl: beaverEatsScreencap
  },
  {
    title: "Plantamon Go",
    developers: [
      "Savhanna Beene",
      "Dristi Patel",
      "Hailey Prater",
      "Kiana Shim"
    ],
    description: "Plantamon is a mobile application inspired by Pokémon Go. The app allows users to collect and identify plants by \"catching\" them using their mobile device’s camera. Once a plant is captured, it can be identified using the [Plant.id API](https://documenter.getpostman.com/view/24599534/2s93z5A4v2) and added to the user’s personal Plant-dex. As users explore and expand their collection, they can also unlock achievements along the way!",
    imageUrl: plantamonGoImage,
    screencapUrl: plantamonGoScreencap
  },
];

export default hof;
