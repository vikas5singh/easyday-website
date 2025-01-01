// List previous year list
// const GET_YEARS_FN = () => {
//   const currentYear = new Date().getFullYear();
//   const sec = currentYear - 50;
//   const step = -1;
//   const Yrs = Array.from(
//     { length: (sec - currentYear) / step + 1 },
//     (_, i) => currentYear + i * step
//   );
//   return ["", ...Yrs].map((y) => ({ name: y, value: y }));
// };

// Check fileds are empty or Not
// export const checkValidations = (state) => {
//   let newState = {};
//   let noTrim = ["undefined", "object", "boolean", "number"];
//   let error = "";
//   for (let [key, value] of Object.entries(state)) {
//     if (!noTrim.includes(typeof value)) {
//       value = value.trim();
//       if (value === "") {
//         key = key.charAt(0).toUpperCase() + key.slice(1);
//         error += `${key},`;
//       }
//       newState[key] = value;
//     } else {
//       newState[key] = value;
//     }
//   }
//   if (error !== "") {
//     error = error.substring(0, error.length - 1);
//     error += " is required!";
//   } else {
//     error = false;
//   }
//   delete newState["errors"];
//   return { data: newState, error: error };
// };

// Check errors
// export const checkError = (errors) => {
//   let err = "<ul>";
//   let disabled = false;
//   for (var key of Object.keys(errors)) {
//     if (errors[key] && errors[key].length > 0) {
//       err += `<li>${key} ${errors[key]}<li>`;
//       disabled = true;
//     }
//   }
//   err += "</ul>";
//   return { error: err, disabled };
// };

// export const GET_YEARS = GET_YEARS_FN();

// export const PRICE_WITH_CURRENCY = (value) => {
//   let price = Number(value || 0);
//   price = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
//   return `$ ${price || 0}`;
// };
