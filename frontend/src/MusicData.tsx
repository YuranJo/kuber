import cover from './assets/acid_trip.png';


type Artist = {
    name: string;
    picture: any;
  };
  
  type Album = {
    name: string;
    artist: string;
    year: number;
    cover: string;
  };
  
  type EP = {
    name: string;
    artist: string;
    year: number;
    cover: string;
  };
  
  type Single = {
    name: string;
    artist: string;
    year: number;
    cover: string;
  };
  
  const artists: Artist[] = [
    {
      name: "Metallica",
      picture: cover
    },
    {
      name: "Iron Maiden",
      picture: cover
    },
    {
      name: "Black Sabbath",
      picture: cover
    },
    {
      name: "AC/DC",
      picture: cover
    },
    {
      name: "Led Zeppelin",
      picture: cover
    }
  ];
  
  const albums: Album[] = [
    {
      name: "Master of Puppets",
      artist: "Metallica",
      year: 1986,
      cover: cover
    },
    {
      name: "The Number of the Beast",
      artist: "Iron Maiden",
      year: 1982,
      cover: cover
    },
    {
      name: "Paranoid",
      artist: "Black Sabbath",
      year: 1970,
      cover: cover
    },
    {
      name: "Back in Black",
      artist: "AC/DC",
      year: 1980,
      cover: cover
    },
    {
      name: "Led Zeppelin IV",
      artist: "Led Zeppelin",
      year: 1971,
      cover: cover
    }
  ];
  
  const eps: EP[] = [
    {
      name: "Garage Days Re-Revisited",
      artist: "Metallica",
      year: 1987,
      cover: cover
    },
    {
      name: "Maiden Japan",
      artist: "Iron Maiden",
      year: 1981,
      cover: cover
    },
     {
      name: "Six Pack",
      artist: "Queen", // Including a rock band with a known EP
      year: 1984,
      cover: cover // Found on a retail site, check usage rights
    },
      {
      name: "Symptoms of the Universe",
      artist: "Black Sabbath",
      year: 1976, // Often appears on compilations, using as a representative EP/single
      cover: cover // Found on a retail site, check usage rights
    },
    {
      name: "Square Hammer",
      artist: "Ghost",
      year: 2016,
      cover: cover
    }
  ];
  
  
  const singles: Single[] = [
    {
      name: "One",
      artist: "Metallica",
      year: 1989,
      cover: cover
    },
    {
      name: "Run to the Hills",
      artist: "Iron Maiden",
      year: 1982,
      cover: cover
    },
    {
      name: "Paranoid",
      artist: "Black Sabbath",
      year: 1970,
      cover: cover
    },
    {
      name: "Highway to Hell",
      artist: "AC/DC",
      year: 1979,
      cover: cover
    },
    {
      name: "Stairway to Heaven",
      artist: "Led Zeppelin",
      year: 1971, // Released as a single later in some regions
      cover: cover
    }
  ];

 export {artists, eps, albums, singles};