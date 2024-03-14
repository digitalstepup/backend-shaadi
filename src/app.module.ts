import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://vijayparmar1531:zuugbxRjzp6RsR0v@cluster0.ogm0zyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
