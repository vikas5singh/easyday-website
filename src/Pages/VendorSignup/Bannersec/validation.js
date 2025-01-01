import * as yup from "yup";
import phone from "phone";

export function stepOneSchema() {
  return yup.object().shape({
    name: yup.string().required("Name is required"),
    storeTypeId: yup.string().required("Store Id is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Minimum Password length is 8.")
      .max(16, "Maximum Password length is 16")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain atleast a capital letter, a lowercase letter, a number and a special character."
      )
      .required("Password is required."),
    mobileNumber: yup
      .number()
      .required("Mobile number is required")
      .test(
        "phone",
        "Number is not valid phone number",
        (val) => phone("+" + val).isValid
      ),
    address: yup.string().required("Address is required"),
    profileImage: yup.mixed().required("Image is required"),
  });
}
