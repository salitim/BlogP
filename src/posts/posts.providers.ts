import { Connection, Repository } from 'typeorm';
import { Post} from './post.entity';

export const postsProviders = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Post),
    inject: ['DATABASE_CONNECTION'],
  },
];