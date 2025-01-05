export const DEFAULT_EVENTS = [
  // Festivals
  {
    id: "001",
    image: "/christmas.jpg",
    title: "Christmas Eve Party",
    dateTime: "25 Dec 2024, 20:00",
    location: "Behind Napo Street",
    price: 100,
    seatsAvailable: 19,
    description: "Celebrate the magic of Christmas with festive music and delicious treats. Join us for a memorable night of joy and holiday cheer.",
    eventType: "festival"
  },
  {
    id: "002",
    image: "/newyear.jpg",
    title: "New Year Bash",
    dateTime: "31 Dec 2024, 22:00",
    location: "Downtown Square",
    price: 150,
    seatsAvailable: 50,
    description: "Ring in the New Year with an unforgettable party at Downtown Square. Enjoy live music, great food, and a countdown to the New Year!",
    eventType: "festival"
  },
  {
    id: "003",
    image: "/halloween.jpg",
    title: "Halloween Night",
    dateTime: "31 Oct 2024, 21:00",
    location: "Spooky Mansion",
    price: 120,
    seatsAvailable: 30,
    description: "Get spooked at our Halloween party at Spooky Mansion! Come dressed in your scariest costume for a night full of thrills and chills.",
    eventType: "festival"
  },
  {
    id: "004",
    image: "/diwali.jpg",
    title: "Diwali Celebration",
    dateTime: "12 Nov 2024, 18:00",
    location: "Main Market",
    price: 90,
    seatsAvailable: 45,
    description: "Celebrate the festival of lights with family and friends at Main Market. Enjoy traditional sweets, dances, and a spectacular fireworks show.",
    eventType: "festival"
  },
  {
    id: "005",
    image: "/holi.jpg",
    title: "Holi Festival",
    dateTime: "29 Mar 2024, 16:00",
    location: "City Park",
    price: 80,
    seatsAvailable: 40,
    description: "Join the vibrant celebration of colors at City Park. Splash into the joyous spirit of Holi with music, dance, and endless fun.",
    eventType: "festival"
  },

  // Comedy
  {
    id: "006",
    image: "/standup1.jpg",
    title: "Laugh Riot",
    dateTime: "20 Jan 2024, 19:30",
    location: "Comedy Club",
    price: 50,
    seatsAvailable: 30,
    description: "Prepare for a night of non-stop laughter at Comedy Club. Watch some of the best comedians deliver their funniest sets in a lively atmosphere.",
    eventType: "comedy"
  },
  {
    id: "007",
    image: "/standup2.jpg",
    title: "Stand-Up Night",
    dateTime: "22 Jan 2024, 20:00",
    location: "Laugh Factory",
    price: 60,
    seatsAvailable: 25,
    description: "Join us at Laugh Factory for an evening full of hilarious stand-up performances. It's guaranteed to be a night full of wit, humor, and great vibes.",
    eventType: "comedy"
  },
  {
    id: "008",
    image: "/comedyfest.jpg",
    title: "Comedy Festival",
    dateTime: "15 Feb 2024, 18:00",
    location: "City Hall",
    price: 70,
    seatsAvailable: 60,
    description: "Catch a variety of top comedians performing live at the Comedy Festival. A day full of humor, laughter, and unforgettable jokes!",
    eventType: "comedy"
  },
  {
    id: "009",
    image: "/improv.jpg",
    title: "Improv Comedy Show",
    dateTime: "10 Mar 2024, 19:00",
    location: "Laughing Room",
    price: 55,
    seatsAvailable: 35,
    description: "Watch a live improv comedy show at Laughing Room, where everything is made up on the spot. Prepare to laugh at unscripted, spontaneous humor!",
    eventType: "comedy"
  },
  {
    id: "010",
    image: "/sketchcomedy.jpg",
    title: "Sketch Comedy Night",
    dateTime: "5 Apr 2024, 21:00",
    location: "Comedy Zone",
    price: 65,
    seatsAvailable: 20,
    description: "Experience a night of clever sketches and witty humor at Comedy Zone. Perfect for those who love quick, comedic performances and surprising twists.",
    eventType: "comedy"
  },

  // Theater
  {
    id: "011",
    image: "/hamlet.jpg",
    title: "Hamlet - The Play",
    dateTime: "1 Feb 2024, 19:00",
    location: "Royal Theater",
    price: 150,
    seatsAvailable: 80,
    description: "A powerful production of Shakespeare's 'Hamlet' at the Royal Theater. Don't miss this timeless tragedy full of drama, betrayal, and suspense.",
    eventType: "theater"
  },
  {
    id: "012",
    image: "/macbeth.jpg",
    title: "Macbeth - Tragedy",
    dateTime: "12 Mar 2024, 20:00",
    location: "City Stage",
    price: 130,
    seatsAvailable: 45,
    description: "Experience the tragedy of Macbeth at City Stage. A gripping performance of ambition, fate, and dark forces in one of Shakespeare's most famous plays.",
    eventType: "theater"
  },
  {
    id: "013",
    image: "/midsummer.jpg",
    title: "A Midsummer Night's Dream",
    dateTime: "25 Apr 2024, 18:30",
    location: "Park Theater",
    price: 100,
    seatsAvailable: 60,
    description: "Enjoy the magic and mischief of 'A Midsummer Night's Dream' at Park Theater. A delightful comedy full of fairies, love, and humorous twists.",
    eventType: "theater"
  },
  {
    id: "014",
    image: "/romeo.jpg",
    title: "Romeo and Juliet",
    dateTime: "5 Jun 2024, 19:00",
    location: "Grand Hall",
    price: 110,
    seatsAvailable: 50,
    description: "A heart-wrenching production of 'Romeo and Juliet' at Grand Hall. Experience the timeless love story that ends in tragedy and passion.",
    eventType: "theater"
  },
  {
    id: "015",
    image: "/lesmiserables.jpg",
    title: "Les Misérables",
    dateTime: "10 Jul 2024, 21:00",
    location: "Opera House",
    price: 180,
    seatsAvailable: 70,
    description: "Experience the grandeur of 'Les Misérables' at the Opera House. This epic musical tells the moving story of revolution, love, and redemption.",
    eventType: "theater"
  },

  // Concerts
  {
    id: "016",
    image: "/rockconcert.jpg",
    title: "Rock Concert",
    dateTime: "20 Feb 2024, 19:30",
    location: "Arena Stadium",
    price: 200,
    seatsAvailable: 100,
    description: "Get ready for an electrifying night at Arena Stadium with our Rock Concert. Enjoy powerful performances from top rock bands and live music!",
    eventType: "concert"
  },
  {
    id: "017",
    image: "/classical.jpg",
    title: "Classical Music Concert",
    dateTime: "10 Mar 2024, 18:00",
    location: "Symphony Hall",
    price: 120,
    seatsAvailable: 150,
    description: "Indulge in the serene sounds of a Classical Music Concert at Symphony Hall. Immerse yourself in orchestral music and timeless compositions.",
    eventType: "concert"
  },
  {
    id: "018",
    image: "/popconcert.jpg",
    title: "Pop Music Night",
    dateTime: "5 Apr 2024, 21:00",
    location: "Concert Arena",
    price: 160,
    seatsAvailable: 120,
    description: "Join us for a high-energy Pop Music Night at Concert Arena. Dance the night away to hits from your favorite pop artists and bands!",
    eventType: "concert"
  },
  {
    id: "019",
    image: "/jazznight.jpg",
    title: "Jazz Night",
    dateTime: "25 May 2024, 20:00",
    location: "Jazz Bar",
    price: 80,
    seatsAvailable: 40,
    description: "Relax and unwind at Jazz Bar with smooth jazz music. Enjoy an intimate atmosphere and the soulful rhythms of talented jazz artists.",
    eventType: "concert"
  },
  {
    id: "020",
    image: "/electronicparty.jpg",
    title: "Electronic Dance Party",
    dateTime: "15 Jun 2024, 22:00",
    location: "Club Spectrum",
    price: 150,
    seatsAvailable: 75,
    description: "Get ready to dance all night at Club Spectrum's Electronic Dance Party. The best DJs will take you on a journey through electronic beats and high-energy music.",
    eventType: "concert"
  }
];
