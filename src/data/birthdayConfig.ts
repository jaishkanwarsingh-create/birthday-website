export const birthdayConfig = {
  bestFriendName: 'Her Name',
  yourName: 'Your Name',
  characterMessages: {
    penguin: 'Okay... you picked me. Someone pretty amazing was born today. 🎂',
    teddy: 'Important announcement: today is officially a very special day. Happy Birthday! 🧸',
    bunny: "I knew you'd pick me 😂 Anyway... HAPPY BIRTHDAY! 🐰",
  },
  memoryCards: [
    { image: '/images/memory1.svg', caption: 'That day 😂' },
    { image: '/images/memory2.svg', caption: 'One of my favourite memories.' },
    { image: '/images/memory3.svg', caption: 'Still makes me smile.' },
    { image: '/images/memory4.svg', caption: 'Random day, good memory.' },
    { image: '/images/memory5.svg', caption: 'Another one for the memory box.' },
    { image: '/images/memory6.svg', caption: 'A tiny reminder of a great moment.' },
  ],
  appreciationCards: [
    { title: 'Your kindness.', description: 'You make people feel comfortable and cared for.', icon: '♥' },
    { title: 'Your sense of humour.', description: 'Your laughter makes ordinary days feel lighter.', icon: '☻' },
    { title: 'The random conversations.', description: 'Little chats somehow become the best parts of the day.', icon: '✦' },
    { title: 'Your vibe.', description: 'You make even quiet moments feel special.', icon: '✧' },
    { title: 'Our memories.', description: 'The stories that stay in your head and make you smile.', icon: '★' },
    { title: 'Simply being yourself.', description: 'The realest, warmest version of you is genuinely lovely.', icon: '♡' },
  ],
  quizQuestions: [
    { question: 'Where did we first properly meet?', options: ['The cafe', 'Movie night', 'An evening walk'], answerIndex: 0 },
    { question: 'What vibe do I associate with you?', options: ['Warm and easygoing', 'Strict and serious', 'Mystery and silence'], answerIndex: 0 },
    { question: 'What is true about our friendship?', options: ['Random conversations', 'Silent treatment', 'Never talking'], answerIndex: 0 },
    { question: 'What do you bring into every room?', options: ['Good energy', 'Alarm bells', 'A complicated schedule'], answerIndex: 0 },
    { question: 'What would I say about you?', options: ['You make life brighter', 'You are a mystery box', 'You are a secret agent'], answerIndex: 0 },
  ],
  finalLetter: `I just wanted to make something a little different for your birthday.\n\nWe've shared so many random conversations, laughs, memories and moments, and I'm genuinely glad I got to know you.\n\nI hope this year brings you lots of happiness, good memories, success and countless reasons to smile.\n\nStay exactly the amazing person you are.\n\nHappy Birthday once again! 🎂❤️`,
};

export const routes = [
  { path: '/welcome', label: 'Secret Door' }, { path: '/choose', label: 'Character' },
  { path: '/gift', label: 'Gift' }, { path: '/memories', label: 'Memories' },
  { path: '/appreciation', label: 'Appreciation' }, { path: '/quiz', label: 'Quiz' },
  { path: '/letter', label: 'Letter' },
];

export const mediaConfig = { musicPath: '/audio/birthday-music.mp3', defaultVolume: 0.4 };
