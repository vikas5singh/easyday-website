import React, { useState } from "react";
import { Button } from "reactstrap";
import { getInTouch } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { use } from "react";

const GetInTouchForm = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        msg: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" }); // Clear error if field is updated
        }
    };

    const validateForm = () => {
        let validationErrors = {};
        if (!formData.name.trim()) validationErrors.name = "Name is required.";
        if (!formData.email.trim()) validationErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Invalid email format.";
        if (!formData.mobileNumber.trim()) validationErrors.mobileNumber = "Mobile number is required.";
        if (!formData.msg.trim()) validationErrors.msg = "Message is required.";
        return validationErrors;
    };

    const handleSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsLoading(false)
            return;
        }
        e.preventDefault();
        const callBack = (res) => {
            setIsLoading(false)
            setFormData({
                name: "",
                email: "",
                mobileNumber: "",
                msg: "",
            });
        };
        dispatch(getInTouch(formData, callBack));
    };

    return (
        <div className="get-in-touch-form py-4 px-3 rounded" style={styles.container}>
            <h2 className="text-center mb-3" style={styles.title}>Get in Touch</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div className="mb-3">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        // id="mobile"
                        name="mobileNumber"
                        className="form-control"
                        placeholder="Enter your mobile number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                    />
                    {errors.mobileNumber && <small className="text-danger">{errors.mobileNumber}</small>}
                </div>
                <div className="mb-3">
                    <textarea
                        id="message"
                        name="msg"
                        className="form-control"
                        placeholder="Enter your message"
                        value={formData.msg}
                        onChange={handleChange}
                        rows="4"
                    ></textarea>
                    {errors.msg && <small className="text-danger">{errors.msg}</small>}
                </div>
                <Button className="save-btn" type="submit" disabled={isLoading}>
                    {isLoading ? "loading..." : "Submit"}
                </Button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        maxWidth: "500px",
        margin: "0 auto",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
    },
    form: {
        padding: "20px",
    },
};

export default GetInTouchForm;
