import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileSchema } from './schema/profile.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfilesController } from './controller/profiles/profiles.controller';
import { ProfileService } from './service/profile/profile.service';

@Module({
imports: [
  // ConfigModule.forRoot({
  //   envFilePath: ['.env'],
  // }),
  MongooseModule.forRoot('mongodb://127.0.0.1:27017', { dbName: 'shadi' }),
  MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }]),
],
  controllers: [AppController, ProfilesController],
  providers: [AppService, ProfileService],
})
export class AppModule {}
