/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import { ValidateNested, IsOptional, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";
import { BookingCreateNestedManyWithoutFacilitiesInput } from "./BookingCreateNestedManyWithoutFacilitiesInput";
import { PartnerWhereUniqueInput } from "../../partner/base/PartnerWhereUniqueInput";
import { PartnerCreateNestedManyWithoutFacilitiesInput } from "./PartnerCreateNestedManyWithoutFacilitiesInput";

@InputType()
class FacilityCreateInput {
  @ApiProperty({
    required: false,
    type: () => BookingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BookingWhereUniqueInput)
  @IsOptional()
  @Field(() => BookingWhereUniqueInput, {
    nullable: true,
  })
  booking?: BookingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => BookingCreateNestedManyWithoutFacilitiesInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutFacilitiesInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutFacilitiesInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutFacilitiesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PartnerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PartnerWhereUniqueInput)
  @IsOptional()
  @Field(() => PartnerWhereUniqueInput, {
    nullable: true,
  })
  partner?: PartnerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PartnerCreateNestedManyWithoutFacilitiesInput,
  })
  @ValidateNested()
  @Type(() => PartnerCreateNestedManyWithoutFacilitiesInput)
  @IsOptional()
  @Field(() => PartnerCreateNestedManyWithoutFacilitiesInput, {
    nullable: true,
  })
  partners?: PartnerCreateNestedManyWithoutFacilitiesInput;
}

export { FacilityCreateInput as FacilityCreateInput };