import pokemonClickerImage from './hofFiles/pokemonClicker.jpg';
import pokemonClickerScreencap from './hofFiles/pokemonClicker.gif';
import barteringBeavsImage from './hofFiles/barteringBeavs.jpg';
import barteringBeavsScreencap from './hofFiles/barteringBeavs.gif';

/*
 * Some helpful resources for converting image/movie files to the right formats:
 *   * Image conversion: https://squoosh.app
 *   * GIF to MP4: https://gist.github.com/gvoze32/95f96992a443e73c4794c342a44e0811
 *   * MP4 to GIF: Gifski
 */

const hof = [
  {
    title: "Pokémon Clicker",
    developers: [
      "Annabel Wang",
      "Dylan Liu",
      "Katie Kimura",
      "Michael Bernardino",
      "Zach Benedetti"
    ],
    description: "Pokémon Clicker is an interactive web app that blends the mechanics of an incremental clicker game with a battle simulator, based on the classic Pokémon games. Developed with React and real time data from PokéAPI, the app challenges players to battle, capture, and collect their way through five increasingly difficult levels. The gameplay focuses on a strategic loop: players must manage a growing inventory of Pokémon, leverage type advantages in timed encounters, and farm XP to purchase power ups in the Shop, all while building toward the ultimate goal of defeating the final boss (who may or may not be a familiar figure). Check out our game at [https://pokemon-clicker-ashen.vercel.app/](https://pokemon-clicker-ashen.vercel.app/)!",
    imageUrl: pokemonClickerImage,
    screencapUrl: pokemonClickerScreencap
  },
  {
    title: "BarteringBeavs",
    developers: [
      "Peter Mora-Stevens",
      "Jamie Liu",
      "Antonio Rodriguez",
      "McCall Woodward",
    ],
    description: "BarteringBeavs is a web app supporting Oregon State University members to list, sell, and buy items from other verified members of the community. The app allows user ratings on sales for both seller and buyer, a messaging platform to plan/haggle in-app, and a high-quality marketplace experience.",
    imageUrl: barteringBeavsImage,
    screencapUrl: barteringBeavsScreencap
  }
];

export default hof;
