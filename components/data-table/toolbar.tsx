"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DataTableFacetedFilter,
  DataTableFacetedFilterProps,
} from "./faceted-filter";
import { DataTableViewOptions } from "./view-options";
import React from "react";

export type ToolbarProps<TData, TValue> = {
  facetedFilter: {
    column: string;
    title: string;
    options: DataTableFacetedFilterProps<TData, TValue>["options"];
  }[];
};

export type DataTableToolbarProps<TData, TValue> = {
  table: Table<TData>;
  toolbar: ToolbarProps<TData, TValue>;
};

export function DataTableToolbar<TData, TValue>({
  table,
  toolbar,
}: DataTableToolbarProps<TData, TValue>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const { facetedFilter } = toolbar;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={
            (table.getColumn("first_name")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("first_name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {facetedFilter.map((filter) => {
          const { title, column, options } = filter;
          return (
            table.getColumn(column) && (
              <DataTableFacetedFilter
                key={column}
                column={table.getColumn(column)}
                title={title}
                options={options}
              />
            )
          );
        })}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
