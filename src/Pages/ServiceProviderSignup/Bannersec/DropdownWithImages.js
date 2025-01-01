import React, { useState } from "react";
import Select from "react-select";

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
    }),
    singleValue: (provided) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
    }),
    multiValue: (provided) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
        padding: "5px",
    }),
};

const DropdownWithImages = ({ serviceList, setFieldValue, selectedOptions }) => {
    const customSingleValue = (selected) => (
        <div style={{ display: "flex", alignItems: "center" }}>
            <img
                src={selected.image}
                alt={selected.label}
                style={{ width: 20, height: 20, marginRight: 10 }}
            />
            {selected.label}
        </div>
    );

    const customOption = (props) => {
        const { data, innerRef, innerProps } = props;
        return (
            <div
                ref={innerRef}
                {...innerProps}
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    cursor: "pointer",
                }}
            >
                <img
                    src={data.image}
                    alt={data.label}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                />
                {data.label}
            </div>
        );
    };

    return (
        <Select
            options={serviceList}
            styles={customStyles}
            onChange={(selected) => setFieldValue('serviceId', selected)}
            value={selectedOptions}
            isMulti
            getOptionLabel={(e) => customSingleValue(e)}
            components={{ Option: customOption }}
        />
    );
};

export default DropdownWithImages;
