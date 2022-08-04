export interface Game {
  id: string;
  name: string;
  description: string;
  genreId: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
