import React from "react";
import { DropdownSelect } from "../../reuse-components/dropdown-select/DropdownSelect";

const classnameRoot = "main-filter";
const filterValues = [
  {
    filterOption: "N of people",
    filterValues: ["1", "2-4", "5-8", ">9"],
  },
  {
    filterOption: "time",
    filterValues: ["1", "2-4", "5-8", ">9"],
  },
];

interface IMainFilterProps {}

export const MainFilter: React.FC<IMainFilterProps> = () => (
  <div className={`${classnameRoot}__wrapper`}>
    <div className={`${classnameRoot}__dropdown`}>
      {filterValues.map((item) => (
        <DropdownSelect
          inputName={item.filterOption}
          inputValues={item.filterValues}
        />
      ))}
    </div>
  </div>
);
