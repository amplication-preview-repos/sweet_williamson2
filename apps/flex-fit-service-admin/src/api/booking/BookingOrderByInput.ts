import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingTime?: SortOrder;
  createdAt?: SortOrder;
  facilityId?: SortOrder;
  id?: SortOrder;
  partnerId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
