// Mock data for the book summary app

export interface Author {
  id: string;
  name: string;
  avatar: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  readTime: number;
  listenTime: number;
  keyIdeas: number;
  categories: string[];
  description: string;
  publisher?: string;
  isSaved?: boolean;
  progress?: number;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  content: string;
  isLocked: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  subscription: 'free' | 'premium';
}

export const mockAuthors: Author[] = [
  { id: '1', name: 'Royryan Mercado', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { id: '2', name: 'Neil Gaiman', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { id: '3', name: 'Mark mcallister', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
  { id: '4', name: 'Michael Douglas jr.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face' },
  { id: '5', name: 'Roy Mercado', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face' },
];

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The good guy',
    author: 'Mark mcallister',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
    readTime: 5,
    listenTime: 8,
    keyIdeas: 6,
    categories: ['Fiction', 'Personal growth'],
    description: 'A story about a guy who was very good until the very end when...',
    isSaved: true,
    progress: 45,
  },
  {
    id: '2',
    title: 'Futurama',
    author: 'Michael Douglas jr.',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop',
    readTime: 12,
    listenTime: 9,
    keyIdeas: 6,
    categories: ['Culture & Society', 'Fiction'],
    description: 'Getting Along (2022) describes the importance of workplace interactions and their effects on productivity and creativity.',
    publisher: 'A FanklinConvey Title',
    isSaved: false,
    progress: 0,
  },
  {
    id: '3',
    title: 'Explore your creativity',
    author: 'Royryan Mercado',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
    readTime: 15,
    listenTime: 15,
    keyIdeas: 8,
    categories: ['Personal growth', 'Mind & Philosophy'],
    description: 'Unlock your creative potential with proven techniques...',
    isSaved: true,
    progress: 75,
  },
  {
    id: '4',
    title: 'Norse Mythology',
    author: 'Neil Gaiman',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
    readTime: 5,
    listenTime: 8,
    keyIdeas: 5,
    categories: ['Fiction', 'Culture & Society'],
    description: 'A story about a guy who was very good until the very end when...',
    isSaved: true,
    progress: 20,
  },
];

export const mockChapters: Chapter[] = [
  {
    id: '1',
    number: 1,
    title: 'Introducion',
    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n\nThe Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\'t listen.\n\nLittle Blind Text didn\'t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.\n\nBookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then',
    isLocked: false,
  },
  {
    id: '2',
    number: 2,
    title: 'Creating the',
    content: 'Subscribe to unlock all 2 key ideas fro...',
    isLocked: true,
  },
  {
    id: '3',
    number: 3,
    title: 'Introducion',
    content: 'Subscribe to unlock all 2 key ideas fro...',
    isLocked: true,
  },
];

export const mockCategories = [
  'Personal growth',
  'Culture & Society',
  'Fiction',
  'Mind & Philosophy',
  'Health & Fitness',
  'Biographies',
  'Education',
  'History',
  'Future',
  'Technology',
  'Life style',
];

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  subscription: 'free',
};

export const getTimeOfDay = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
};
