import * as yup from "yup";
import phone from "phone";

export function stepOneSchema() {
    return yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email is required"),
        education: yup.string().required("Education is required"),
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

// export function stepTwoSchema() {
//   return yup.object().shape({
//     vehicleName: yup.string().required("Name is required"),
//     vehicleType: yup.string().required("Type is required"),
//     vehicleModel: yup.string().required("Model is required"),
//     vehicleMake: yup.string().required("Make is required"),
//     plateNumber: yup.string().required("Number is required"),
//     vehicleYear: yup
//       .number()
//       .typeError("Only numbers are allowed.")
//       .required("Year is required.")
//       .positive("Negative numbers are not allowed.")
//       .integer("Number can't contain a decimal.")
//       .min(1000, "Minimum 4 digits are required.")
//       .max(9999, "Maximum 4 digits are allowed."),
//     vehicleColor: yup.string().required("Color is required"),
//     licenseNumber: yup.string().required("License Number is required"),
//     licenseExpiryDate: yup.string().required("License Expiry is required"),
//     vehicleImage: yup.mixed().required("Vehicle Image is required"),
//     licenseImage: yup.mixed().required("License Image is required"),
//     insuranceImage: yup.mixed().required("Insurance Image is required"),
//   });
// }
