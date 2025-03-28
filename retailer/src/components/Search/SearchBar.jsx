import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import Select from "react-select";

const SearchBar = ({
  isDisplayfilterStatus = true,
  filerStatus = [],
  isFilterCategory = true,
  filerCategory = [],
  data = [],
  onFilterData,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("ENABLE");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterData = () => {
    const filteredData = data.filter((item) => {
      const matchesSearch = item.productName
        ? item.productName.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      const matchesStatus = selectedStatus
        ? item.status === selectedStatus
        : true;
      const matchesCategory = selectedCategory
        ? Array.isArray(item.categories) &&
          item.categories.some((cat) => cat.categoryName === selectedCategory)
        : true;
      return matchesSearch && matchesStatus && matchesCategory;
    });

    onFilterData(filteredData);
  };

  useEffect(() => {
    filterData();
  }, [searchTerm, selectedStatus, selectedCategory, data]);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const statusOptions = [
    { value: "", label: "Tất cả trạng thái" },
    ...filerStatus.map((status) => ({
      value: status.status,
      label: status.statusName,
    })),
  ];

  const categoryOptions = [
    { value: "", label: "Tất cả danh mục" },
    ...filerCategory.map((category) => ({
      value: category.name || category.categoryName,
      label: category.name || category.categoryName,
    })),
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "none",
      border: "1px solid #16a34a",
      "&:hover": {
        borderColor: "#4b5563",
        color: "#16a34a",
      },
      fontWeight: "600",
      padding: "0 0.5rem",
      lineHeight: "1.5rem",
      backgroundColor: "white",
      outline: "none",
      boxShadow: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      borderRadius: "none",
      backgroundColor: state.isFocused ? "#00A63E" : "white",
      color: state.isFocused ? "white" : "black",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#16a34a",
      padding: "0",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <div className="flex  gap-2 bg-gray-200 shadow p-2 flex-col-reverse sm:flex-row sm:items-center sm:justify-between sm:gap-2">
      {/* Dropdown filters */}
      <div className="flex flex-row gap-2 w-full sm:w-auto">
        {isDisplayfilterStatus && filerStatus.length > 0 && (
          <Select
            value={statusOptions.find((option) => option.value === selectedStatus)}
            onChange={(option) => setSelectedStatus(option.value)}
            options={statusOptions}
            styles={customStyles}
            className="w-2/5 sm:w-40"
            classNamePrefix="react-select"
            isSearchable={false}
          />
        )}

        {isFilterCategory && filerCategory.length > 0 && (
          <Select
            value={categoryOptions.find((option) => option.value === selectedCategory)}
            onChange={(option) => setSelectedCategory(option.value)}
            options={categoryOptions}
            styles={customStyles}
            className="w-3/5 sm:w-60"
            classNamePrefix="react-select"
            isSearchable={false}
          />
        )}
      </div>
      {/* Search bar */}
      <div className="flex items-center w-full sm:w-auto sm:ml-auto">
        <label htmlFor="search" className=" font-medium mr-2 uppercase">
          Tìm kiếm:
        </label>
        <div className="relative  sm:w-50 group">
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="border-none outline-none px-2 py-1 rounded w-full bg-transparent focus:border-b-2 focus:border-transparent"
            placeholder="Nhập từ khóa tìm kiếm..."
          />
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 ease-in-out group-focus-within:w-full" />
        </div>
        <button
          className="text-green-500 p-2 px-8 cursor-pointer"
          onClick={filterData}
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
