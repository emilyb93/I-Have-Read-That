import React, { useState } from "react";

const styles = {
  sortBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: "5px",
    paddingLeft: "15px",
    marginTop: "10px",
  },
  selectBar: {
    borderRadius: "30px",
    backgroundColor: "#6EDEFA",
    height: "2rem",
    marginTop: "1rem",
    padding: "7px",
  },
};

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
    <form style={styles.sortBar}>
      <select
        style={styles.selectBar}
        value={selectedSortLabel}
        onChange={handleSort}
      >
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
