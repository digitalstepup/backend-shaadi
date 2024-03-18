import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileSchema } from './schema/profile.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfilesController } from './controller/profiles/profiles.controller';
import { ProfileService } from './service/profile/profile.service';
import { EnquiriesController } from './controller/enquiries/enquiries.controller';
import { EnquiryService } from './service/enquiry/enquiry.service';
import { EnquirySchema } from './schema/enquiry.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', { dbName: 'shadi' }),
    MongooseModule.forFeature([
      { name: 'Profile', schema: ProfileSchema },
      { name: 'Enquiry', schema: EnquirySchema },
    ]),
  ],
  controllers: [AppController, ProfilesController, EnquiriesController],
  providers: [AppService, ProfileService, EnquiryService],
})
export class AppModule {}
