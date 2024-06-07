import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FacilityListRelationFilter } from "../facility/FacilityListRelationFilter";
import { FacilityWhereUniqueInput } from "../facility/FacilityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  bookingTime?: DateTimeNullableFilter;
  facilities?: FacilityListRelationFilter;
  facility?: FacilityWhereUniqueInput;
  id?: StringFilter;
  partner?: PartnerWhereUniqueInput;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
