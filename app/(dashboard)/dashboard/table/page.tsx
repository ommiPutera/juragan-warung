import DataTable from "~/components/data-table";

import { columns } from "~/app/(dashboard)/dashboard/table/columns";
import { gender, people } from "./data";

function useLoader() {
  const data = people;
  return data;
}

export default async function TablePage() {
  const data = useLoader();
  const toolbar = {
    facetedFilter: [
      {
        column: "gender",
        title: "Gender",
        options: gender,
      },
    ],
  };

  return (
    <main className="">
      <DataTable columns={columns} data={data} toolbar={toolbar} />
    </main>
  );
}
