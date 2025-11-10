export type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  description: string;
  addressImg: string;
};

export type toggleViewBook = 'list' | 'module';
