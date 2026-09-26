import { Heart, Sparkles, Smile, Gift, Laugh, Coffee, Star, Music4, MessageCircleHeart } from 'lucide-react';

/**
 * 🎂 BIRTHDAY WEBSITE CONFIGURATION
 * 
 * Edit the values below to customize your birthday experience!
 * 
 * Key fields to update:
 * - bestFriendName: Your friend's name
 * - yourName: Your name
 * - characterMessages: Messages from each character
 * - memoryCards: Update image paths and captions
 * - appreciationCards: Things you appreciate
 * - quizQuestions: Custom questions about your friendship
 * - finalLetter: Your heartfelt message
 */

export const birthdayConfig = {
  // 👉 CHANGE THIS TO YOUR FRIEND'S NAME
  bestFriendName: 'Her Name',
  
  // 👉 CHANGE THIS TO YOUR NAME
  yourName: 'Your Name',

  // Character messages shown when selecting each character
  characterMessages: {
    penguin: 'Okay... you picked me. I guess I have something to tell you. Someone pretty amazing was born today. 🎂',
    teddy: 'Important announcement: today is officially a very special day. Happy Birthday! 🧸',
    bunny: 'I knew you\'d pick me 😂 Anyway... HAPPY BIRTHDAY! 🐰',
  },

  // Memory cards - update image paths and captions
  // Place your photos in /public/images/ folder
  memoryCards: [
    {
      image: '/images/memory1.svg',
      caption: 'That day 😂',
    },
    {
      image: '/images/memory2.svg',
      caption: 'One of my favourite memories.',
    },
    {
      image: '/images/memory3.svg',
      caption: 'Still makes me smile.',
    },
    {
      image: '/images/memory4.svg',
      caption: 'Random day, good memory.',
    },
    {
      image: '/images/memory5.svg',
      caption: 'Another one for the memory box.',
    },
    {
      image: '/images/memory6.svg',
      caption: 'A tiny reminder of a great moment.',
    },
  ],

  // Appreciation cards - things you appreciate about them
  appreciationCards: [
    { title: 'Your kindness.', description: 'The way you make people feel comfortable and cared for.', icon: <Heart size={24} /> },
    { title: 'Your sense of humour.', description: 'The kind of laughter that makes ordinary days feel lighter.', icon: <Laugh size={24} /> },
    { title: 'The random conversations.', description: 'The little chats that somehow become the best parts of the day.', icon: <MessageCircleHeart size={24} /> },
    { title: 'Your vibe.', description: 'The way you make even the quietest moments feel special.', icon: <Sparkles size={24} /> },
    { title: 'The memories we have made.', description: 'The kind of stories that stay in your head and make you smile later.', icon: <Star size={24} /> },
    { title: 'Simply being yourself.', description: 'The realest, warmest, funniest version of you is genuinely lovely.', icon: <Smile size={24} /> },
  ],

  // Quiz questions - make them easy and fun!
  // answerIndex: the correct option index (0, 1, or 2)
  quizQuestions: [
    {
      question: 'Where did we first properly meet?',
      options: ['The cafe', 'The movie night', 'That random evening walk'],
      answerIndex: 0,
    },
    {
      question: 'What kind of vibe do I always associate with you?',
      options: ['Warm and easygoing', 'Strict and serious', 'Mystery and silence'],
      answerIndex: 0,
    },
    {
      question: 'Which one is a true part of our friendship?',
      options: ['Endless random conversations', 'Silent treatment', 'Never talking again'],
      answerIndex: 0,
    },
    {
      question: 'What is one thing you definitely bring into every room?',
      options: ['Good energy', 'Alarm bells', 'A complicated schedule'],
      answerIndex: 0,
    },
    {
      question: 'What would I probably say about you?',
      options: ['You are the kind of person who makes life brighter', 'You are a mystery box', 'You are a full-time secret agent'],
      answerIndex: 0,
    },
  ],

  // Final letter - your heartfelt birthday message
  finalLetter: `Happy Birthday, Her Name ❤️

I just wanted to make something a little different for your birthday.

We've shared so many random conversations, laughs, memories and moments, and I'm genuinely glad I got to know you.

I hope this year brings you lots of happiness, good memories, success and countless reasons to smile.

Stay exactly the amazing person you are.

Happy Birthday once again! 🎂❤️

— Your Name`,
};

export const routes = [
  { path: '/welcome', label: 'Secret Door' },
  { path: '/choose', label: 'Character' },
  { path: '/gift', label: 'Gift' },
  { path: '/memories', label: 'Memories' },
  { path: '/appreciation', label: 'Appreciation' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/letter', label: 'Letter' },
];

export const mediaConfig = {
  // Place your birthday music at /public/audio/birthday-music.mp3
  musicPath: '/audio/birthday-music.mp3',
  defaultVolume: 0.4,
};
