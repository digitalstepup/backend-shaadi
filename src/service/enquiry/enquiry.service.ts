import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEnquiryDto } from 'src/dto/enquiry/create-enquiry.dto';
import { IEnquiry } from 'src/interface/enquiry.interface';

@Injectable()
export class EnquiryService {
  constructor(@InjectModel('Enquiry') private enquiryModel: Model<IEnquiry>) {}
  async createEnquiry(CreateEnquiryDto: CreateEnquiryDto): Promise<IEnquiry> {
    const newEnquiry = await new this.enquiryModel(CreateEnquiryDto);
    return newEnquiry.save();
  }

  async getAllEnquiries(): Promise<IEnquiry[]>{
    const enquiryData = await this.enquiryModel.find();
    if(enquiryData || enquiryData.length == 0){
      throw new NotFoundException("Enquiry data not found.");
    }
    return enquiryData;
  }

  async getEnquiry(enquiryId: string): Promise<IEnquiry>{
    const existingEnquiry = await this.enquiryModel.findById(enquiryId).exec();
    if(!existingEnquiry){
      throw new NotFoundException(`Enquiry #${enquiryId} not found`);
    }
    return existingEnquiry;
  }
  
}
