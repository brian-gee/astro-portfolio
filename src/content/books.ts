import miniHabits from "@assets/books/mini-habits.jpg";
import howToWinFriends from "@assets/books/how-to-win-friends.jpg";
import howToBeAnImperfectionist from "@assets/books/imperfectionist.jpg";
import soundtracks from "@assets/books/soundtracks.jpg";

export const books = [
  {
    title: "Mini Habits",
    author: "Stephen Guise",
    comment:
      "Great explanation of why habits are so important and how to turn small actions into big results.",
    img: miniHabits,
    year: 2013,
    reading: false,
    loading: "eager",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    comment:
      "Dale Carnegie provides practical advice on how to improve your social skills and relationships. The book emphasizes the importance of understanding human nature and using communication and influence techniques to positively impact others.",
    img: howToWinFriends,
    year: 1936,
    reading: false,
    loading: "eager",
  },
  {
    title: "Soundtracks: The Surprising Solution to Overthinking",
    author: "Jon Acuff",
    comment:
      "An execllent book about how to stop overthinking and start living your life. It's a great book for anyone who struggles with anxiety.",
    img: soundtracks,
    year: 2021,
    reading: false,
    loading: "eager",
  },
  {
    title:
      "How to Be an Imperfectionist: The New Way to Fearlessness, Confidence, and Freedom from Perfectionism",
    author: "Stephen Guise",
    comment:
      "Strategies for overcoming the negative impact of perfectionism, including fear and anxiety. Encourages you to embrace imperfection as a path to greater confidence and freedom.",
    img: howToBeAnImperfectionist,
    year: 2015,
    reading: false,
    loading: "eager",
  },
];
