import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type CareerFormData = {
    fullName: string;
    email: string;
    phone: string;
    position: string;
    experience: string;
    location: string;
    linkedin: string;
    coverLetter: string;
};

type CareerFormErrors = Partial<Record<keyof CareerFormData | "resume", string>>;

const ACCEPTED_RESUME_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_RESUME_SIZE_MB = 5;

const positionOptions = [
    "Sales & Business Development",
    "Sourcing & Procurement",
    "Supply Chain & Logistics",
    "Quality & Compliance",
    "Operations",
    "Finance & Administration",
    "Other",
] as const;

export default function CareerForm() {
    const [formData, setFormData] = useState<CareerFormData>({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        location: "",
        linkedin: "",
        coverLetter: "",
    });
    const [resume, setResume] = useState<File | null>(null);
    const [resumeInputKey, setResumeInputKey] = useState(0);
    const [errors, setErrors] = useState<CareerFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));

        setErrors((current) => ({
            ...current,
            [name]: "",
        }));
    };

    const handleResumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;

        setResume(file);
        setErrors((current) => ({
            ...current,
            resume: "",
        }));
    };

    const validate = () => {
        const newErrors: CareerFormErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Please enter your full name.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email address.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Please enter your phone number.";
        }

        if (!formData.position.trim()) {
            newErrors.position = "Please select a position.";
        }

        if (!formData.experience.trim()) {
            newErrors.experience = "Please enter your years of experience.";
        }

        if (!formData.location.trim()) {
            newErrors.location = "Please enter your current location.";
        }

        if (!resume) {
            newErrors.resume = "Please upload your resume.";
        } else if (!ACCEPTED_RESUME_TYPES.includes(resume.type)) {
            newErrors.resume = "Resume must be a PDF, DOC, or DOCX file.";
        } else if (resume.size > MAX_RESUME_SIZE_MB * 1024 * 1024) {
            newErrors.resume = `Resume must be smaller than ${MAX_RESUME_SIZE_MB} MB.`;
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validate() || !resume) return;

        setIsSubmitting(true);

        const applicationSummary = [
            "Career Application",
            `Position: ${formData.position}`,
            `Experience: ${formData.experience} years`,
            `Location: ${formData.location}`,
            formData.linkedin ? `LinkedIn: ${formData.linkedin}` : "",
            `Resume: ${resume.name}`,
            formData.coverLetter ? `Cover Letter:\n${formData.coverLetter}` : "",
        ]
            .filter(Boolean)
            .join("\n");

        try {
            await fetch(
                "https://api.hsforms.com/submissions/v3/integration/submit/245281281/38ae65c9-9cf2-4a7a-b63b-f5cd65ffd5de",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        fields: [
                            { name: "firstname", value: formData.fullName },
                            { name: "lastname", value: formData.position },
                            { name: "email", value: formData.email },
                            { name: "phone", value: formData.phone },
                            { name: "product_of_interest", value: "Career Application" },
                            { name: "message", value: applicationSummary },
                        ],
                        context: {
                            pageUri: window.location.href,
                            pageName: document.title,
                        },
                    }),
                },
            );

            setIsSubmitted(true);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                position: "",
                experience: "",
                location: "",
                linkedin: "",
                coverLetter: "",
            });
            setResume(null);
            setResumeInputKey((current) => current + 1);
        } catch {
            setErrors({
                resume: "Something went wrong while submitting your application. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="pavanity-form-success" role="status">
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--pavanity-accent-strong)]">
                    Application Submitted
                </h3>
                <p className="mt-3 text-base md:text-lg text-title/80 leading-relaxed">
                    Thank you for applying to Kater International. Our team will review your profile and contact you if your experience matches an open opportunity.
                </p>
                <button
                    type="button"
                    className="pavanity-form-submit mt-6"
                    onClick={() => setIsSubmitted(false)}
                >
                    Submit Another Application
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="pavanity-form-grid">
            <div className="pavanity-form-field">
                <label className="pavanity-form-label" htmlFor="career-full-name">
                    Full Name <span className="pavanity-form-required">*</span>
                </label>
                <input
                    id="career-full-name"
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="pavanity-form-control"
                />
                {errors.fullName && <p className="pavanity-form-error">{errors.fullName}</p>}
            </div>

            <div className="pavanity-form-field">
                <label className="pavanity-form-label" htmlFor="career-email">
                    Email Address <span className="pavanity-form-required">*</span>
                </label>
                <input
                    id="career-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="pavanity-form-control"
                />
                {errors.email && <p className="pavanity-form-error">{errors.email}</p>}
            </div>

            <div className="pavanity-form-field">
                <label className="pavanity-form-label" htmlFor="career-phone">
                    Phone Number <span className="pavanity-form-required">*</span>
                </label>
                <PhoneInput
                    country="in"
                    enableSearch
                    searchPlaceholder="Search country..."
                    value={formData.phone}
                    onChange={(phone) => {
                        setFormData((current) => ({ ...current, phone }));
                        setErrors((current) => ({ ...current, phone: "" }));
                    }}
                    inputProps={{ id: "career-phone", name: "phone" }}
                    inputClass="pavanity-phone-field__input"
                    buttonClass="pavanity-phone-field__button"
                    containerClass="pavanity-phone-field"
                    dropdownClass="pavanity-phone-field__dropdown"
                    searchClass="pavanity-phone-field__search"
                />
                {errors.phone && <p className="pavanity-form-error">{errors.phone}</p>}
            </div>

            <div className="pavanity-form-field">
                <label className="pavanity-form-label" htmlFor="career-location">
                    Current Location <span className="pavanity-form-required">*</span>
                </label>
                <input
                    id="career-location"
                    type="text"
                    name="location"
                    placeholder="City, State / Country"
                    value={formData.location}
                    onChange={handleChange}
                    className="pavanity-form-control"
                />
                {errors.location && <p className="pavanity-form-error">{errors.location}</p>}
            </div>

            <div className="pavanity-form-field">
                <label className="pavanity-form-label" htmlFor="career-position">
                    Position Applied For <span className="pavanity-form-required">*</span>
                </label>
                <select
                    id="career-position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="pavanity-form-control"
                >
                    <option value="">Select a position</option>
                    {positionOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {errors.position && <p className="pavanity-form-error">{errors.position}</p>}
            </div>

            <div className="pavanity-form-field">
                <label className="pavanity-form-label" htmlFor="career-experience">
                    Years of Experience <span className="pavanity-form-required">*</span>
                </label>
                <input
                    id="career-experience"
                    type="number"
                    name="experience"
                    min="0"
                    max="50"
                    placeholder="e.g. 3"
                    value={formData.experience}
                    onChange={handleChange}
                    className="pavanity-form-control"
                />
                {errors.experience && <p className="pavanity-form-error">{errors.experience}</p>}
            </div>

            <div className="pavanity-form-field pavanity-form-field--full">
                <label className="pavanity-form-label" htmlFor="career-resume">
                    Resume / CV <span className="pavanity-form-required">*</span>
                </label>
                <input
                    key={resumeInputKey}
                    id="career-resume"
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleResumeChange}
                    className="pavanity-form-control pavanity-form-control--file"
                />
                <p className="pavanity-form-hint">
                    Upload PDF, DOC, or DOCX (max {MAX_RESUME_SIZE_MB} MB).
                    {resume ? ` Selected: ${resume.name}` : ""}
                </p>
                {errors.resume && <p className="pavanity-form-error">{errors.resume}</p>}
            </div>

            <div className="pavanity-form-field pavanity-form-field--full">
                <label className="pavanity-form-label" htmlFor="career-linkedin">
                    LinkedIn Profile
                </label>
                <input
                    id="career-linkedin"
                    type="url"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/your-profile"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="pavanity-form-control"
                />
            </div>

            <div className="pavanity-form-field pavanity-form-field--full">
                <label className="pavanity-form-label" htmlFor="career-cover-letter">
                    Cover Letter / Additional Information
                </label>
                <textarea
                    id="career-cover-letter"
                    name="coverLetter"
                    placeholder="Tell us about your experience, skills, and why you want to join Kater International."
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={5}
                    className="pavanity-form-control pavanity-form-control--textarea"
                />
            </div>

            <button
                type="submit"
                className="pavanity-form-submit pavanity-form-field--full"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
        </form>
    );
}
