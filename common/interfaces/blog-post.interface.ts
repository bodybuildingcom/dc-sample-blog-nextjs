import AmplienceImage from './image.interface';
import Author from './author.interface';
import { AmplienceContent } from './content.type';

export default interface BlogPost {
  objectID: string;
  deliveryKey: string;
  title: string;
  date: string;
  description: string;
  authors: Author[];
  imagePath: string;
  urlSlug: string;
  tags: string[];
  readTime: number;
  content: AmplienceContent[];
}
