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
import { FacilityWhereInput } from "./FacilityWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FacilityListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FacilityWhereInput,
  })
  @ValidateNested()
  @Type(() => FacilityWhereInput)
  @IsOptional()
  @Field(() => FacilityWhereInput, {
    nullable: true,
  })
  every?: FacilityWhereInput;

  @ApiProperty({
    required: false,
    type: () => FacilityWhereInput,
  })
  @ValidateNested()
  @Type(() => FacilityWhereInput)
  @IsOptional()
  @Field(() => FacilityWhereInput, {
    nullable: true,
  })
  some?: FacilityWhereInput;

  @ApiProperty({
    required: false,
    type: () => FacilityWhereInput,
  })
  @ValidateNested()
  @Type(() => FacilityWhereInput)
  @IsOptional()
  @Field(() => FacilityWhereInput, {
    nullable: true,
  })
  none?: FacilityWhereInput;
}
export { FacilityListRelationFilter as FacilityListRelationFilter };
