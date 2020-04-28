
export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `./music/JK_leila.mp3`,
        genre: `pop`,
      },
      {
        src: `./music/Jah_Khalib_angela.mp3`,
        genre: `pop`,
      },
      {
        src: `./music/Animals.flac`,
        genre: `rock`,
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
      artist: `Jah_Khalib`,
      src: `./music/Jah_Khalib_angela.mp3`,
    },
    answers: [
      {
        picture: `./img/artist_1.jpg`,
        artist: `John Snow`,
      },
      {
        picture: `./img/artist_2.jpg`,
        artist: `Jah_Khalib`,
      },
      {
        picture: `./img/artist_3.jpg`,
        artist: `Jim Beam`,
      },
    ],
  },
];
