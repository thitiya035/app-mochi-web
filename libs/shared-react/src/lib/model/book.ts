export type Book = {
  id?: number;
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  description: string;
  addressImg?: string;
};

export type toggleViewBook = 'list' | 'module';
