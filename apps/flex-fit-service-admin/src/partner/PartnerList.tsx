import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FACILITY_TITLE_FIELD } from "../facility/FacilityTitle";

export const PartnerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Partners"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="address" source="address" />
        <TextField label="contactEmail" source="contactEmail" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Facility"
          source="facility.id"
          reference="Facility"
        >
          <TextField source={FACILITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
