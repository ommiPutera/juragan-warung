import { IJsonSheet } from "json-as-xlsx";
import { people } from "~/fakeJSON/people";

export async function downloadToExcel() {
  let columns: IJsonSheet[] = [
    {
      sheet: "Persons",
      columns: [
        { label: "Person ID", value: "id" },
        { label: "First Name", value: "first_name" },
        { label: "Last Name", value: "last_name" },
        { label: "Email", value: "email" },
        { label: "Gender", value: "gender" },
        {
          label: "Date of Birth",
          value: (row) => row.date_of_birth,
        },
      ],
      content: people,
    },
  ];

  let settings = {
    fileName: "People Excel",
  };

  const xlsx = (await import("json-as-xlsx")).default;
  xlsx(columns, settings);
}
