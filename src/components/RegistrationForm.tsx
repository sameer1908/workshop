import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
}

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "phone") {
            // Allow only digits and max 10 characters
            if (!/^\d*$/.test(value) || value.length > 10) {
                return;
            }
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://server-phi-three-33.vercel.app/api/enquiry",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data: ApiResponse = await response.json();

            alert(data.message);

            setFormData({
                name: "",
                email: "",
                phone: "",
            });
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    };

    return (
        <section className="section" id="register">
            <h2>Register Now</h2>

            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <div style={{display:'flex',justifyContent:'center'}}>
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

export default RegistrationForm;
