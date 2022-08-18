import { DataSource } from 'typeorm';
import { CreateCourseTable1660063716421 } from './migrations/1660063716421-CreateCourseTable';
import { CreateTagsTable1660064248082 } from './migrations/1660064248082-CreateTagsTable';
import { CreateCoursesTagsTable1660069424270 } from './migrations/1660069424270-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1660072608241 } from './migrations/1660072608241-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToTagsCoursesTable1660133832297 } from './migrations/1660133832297-AddTagsIdToTagsCoursesTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'coursenestjs',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'coursenestjs',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    CreateCourseTable1660063716421,
    CreateTagsTable1660064248082,
    CreateCoursesTagsTable1660069424270,
    AddCoursesIdToCoursesTagsTable1660072608241,
    AddTagsIdToTagsCoursesTable1660133832297,
  ],
});
