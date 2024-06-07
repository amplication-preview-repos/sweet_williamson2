import { SortOrder } from "../../util/SortOrder";

export type FacilityOrderByInput = {
  bookingId?: SortOrder;
  capacity?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  partnerId?: SortOrder;
  updatedAt?: SortOrder;
};
