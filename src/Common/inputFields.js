import React, { useState, useEffect, Fragment } from "react";

export const SearchSelectInput = (props) => {
  const { onChange, name, value, data, isError, errors, className } = props;

  const [inputvalue, Setinputvalue] = useState(value);

  useEffect(() => {
    Setinputvalue(value);
  }, [value]);

  const HandleChange = (e) => {
    Setinputvalue(e.target.value);
    const exect = data.findIndex((r) => r.value === e.target.value);
    if (exect > 0) {
      onChange(e);
    }
  };

  return (
    <Fragment>
      <input
        list="countryCode"
        placeholder="CC"
        value={inputvalue}
        name={name}
        onChange={HandleChange}
        className={className}
        id="browser"
      />

      <span className="error" style={{ color: "red", display: isError }}>
        {/* {errors[name]} */}
      </span>
      <datalist id="countryCode">
        {data.map((keys, index) => {
          return <option value={keys.value} />;
        })}
      </datalist>
    </Fragment>
  );
};
