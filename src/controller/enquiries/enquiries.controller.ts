import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { CreateEnquiryDto } from 'src/dto/enquiry/create-enquiry.dto';
import { EnquiryService } from 'src/service/enquiry/enquiry.service';

@ApiTags('Enquiries')
@Controller('enquiries')
export class EnquiriesController {
  constructor(private readonly enquiryService: EnquiryService) {}
  @Post()
  async createEnquiry(
    @Res() response,
    @Body() createEnquiryDto: CreateEnquiryDto,
  ) {
    try {
      const newEnquiry =
        await this.enquiryService.createEnquiry(createEnquiryDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Enquiry has been created successfully',
        newEnquiry,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Enquiry not created!',
        error: 'Bad Request',
      });
    }
  }
  
  @Get()
  async getEnquiries(@Res() response) {
    try {
      const enquiryData = await this.enquiryService.getAllEnquiries();
      return response.status(HttpStatus.OK).json({
        message: 'All enquiries data found successfully',
        enquiryData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getEnquiry(@Res() response, @Param('id') enquiryId: string){
    try{
      const existingEnquiry = await this.enquiryService.getEnquiry(enquiryId);
    }
    catch(err){
      return response.status(err.status).json(err.response);
    }
  }
  
}
