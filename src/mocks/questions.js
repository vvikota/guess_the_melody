
const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `./music/JK_leila.mp3`,
        genre: `rock`,
      },
      {
        src: `./music/Jah_Khalib_angela.mp3`,
        genre: `pop`,
      },
      {
        src: `./music/Animals.flac`,
        genre: `jazz`,
      },
      {
        src: `./music/Lullaby.flac`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `./music/Jah_Khalib_angela.mp3`,
    },
    answers: [
      {
        picture: `./img/artist_1.jpg`,
        artist: `John Snow`,
      },
      {
        picture: `./img/artist_2.jpg`,
        artist: `Jack Daniels`,
      },
      {
        picture: `./img/artist_3.jpg`,
        artist: `Jim Beam`,
      },
    ],
  },
];

export default questions;
