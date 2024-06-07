import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { FacilityListRelationFilter } from "../facility/FacilityListRelationFilter";
import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PartnerWhereInput = {
  address?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  contactEmail?: StringNullableFilter;
  facilities?: FacilityListRelationFilter;
  facility?: FacilityWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
