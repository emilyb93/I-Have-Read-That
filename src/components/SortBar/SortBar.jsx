import React, { useState } from "react";

function SortBar({ setSelectedSort }) {
  const [selectedSortLabel, setSelectedSortLabel] = useState("Most Recent");
  const handleSort = (e) => {
    const sortObj = possibleSorts.find((x) => x.label === e.target.value);

    setSelectedSort(sortObj.value);
    setSelectedSortLabel(sortObj.label);
  };

  const possibleSorts = [
    { label: "Most Recent", value: { sort_by: "date", order: "desc" } },
    { label: "Oldest First", value: { sort_by: "date", order: "asc" } },

    { label: "Most Popular", value: { sort_by: "votes", order: "desc" } },
    { label: "Least Popular", value: { sort_by: "votes", order: "asc" } },
  ];
  return (
    <form>
      <select value={selectedSortLabel} onChange={handleSort}>
        {possibleSorts.map(({ label }) => {
          return (
            <option key={label} value={label}>
              {label}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default SortBar;
