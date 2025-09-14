import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CollegeFormNavbar } from "./FormNavbar";

const CollegeRegistrationForm = () => {
    const [step, setStep] = useState(1);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("✅ Registration Submitted Successfully!");
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <>
            <CollegeFormNavbar />
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
                {/* Stepper */}
                <div className="flex justify-between items-center mb-10">
                    {[
                        "College Info",
                        "Trust Details",
                        "Approvals",
                        "Infrastructure",
                        "Academics",
                        "Faculty",
                        "Financial",
                        "Facilities",
                        "Compliance",
                        "Documents",
                    ].map((label, i) => (
                        <div key={i} className="flex-1 text-center">
                            <div
                                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${step > i ? "bg-indigo-900 text-white" : "bg-gray-300 text-gray-600"
                                    }`}
                            >
                                {i + 1}
                            </div>
                            <p className="mt-2 text-sm font-medium">{label}</p>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* STEP 1 - College Info */}
                    {step === 1 && (
                        <div>
                            <h2 className="text-xl font-bold text-indigo-900 mb-4">🏫 College Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input {...register("collegeName")} placeholder="College Name" className="border p-2 rounded" />
                                <select {...register("collegeType")} className="border p-2 rounded">
                                    <option>Engineering</option>
                                    <option>Polytechnic</option>
                                    <option>Management</option>
                                    <option>Pharmacy</option>
                                    <option>Other</option>
                                </select>
                                <select {...register("ownershipType")} className="border p-2 rounded">
                                    <option>Government</option>
                                    <option>Private</option>
                                    <option>Aided</option>
                                    <option>Deemed</option>
                                </select>
                                <input {...register("establishmentYear")} type="number" placeholder="Year of Establishment" className="border p-2 rounded" />
                                <textarea {...register("address")} placeholder="Full Address" className="border p-2 rounded col-span-2"></textarea>
                            </div>
                            <div className="text-right mt-6">
                                <button type="button" onClick={nextStep} className="bg-indigo-900 text-white px-6 py-2 rounded">
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 2 - Trust Details */}
                    {step === 2 && (
                        <div>
                            <h2 className="text-xl font-bold text-indigo-900 mb-4">🤝 Trust / Society Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input {...register("trustName")} placeholder="Trust/Society Name" className="border p-2 rounded" />
                                <input {...register("trustRegNo")} placeholder="Registration No." className="border p-2 rounded" />
                                <input {...register("trustAddress")} placeholder="Trust Address" className="border p-2 rounded col-span-2" />
                            </div>
                            <div className="flex justify-between mt-6">
                                <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded">
                                    ← Back
                                </button>
                                <button type="button" onClick={nextStep} className="bg-indigo-900 text-white px-6 py-2 rounded">
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 - Approvals */}
                    {step === 3 && (
                        <div>
                            <h2 className="text-xl font-bold text-indigo-900 mb-4">📑 Approvals</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input {...register("approvalNo")} placeholder="AICTE / PCI / COA Approval No." className="border p-2 rounded" />
                                <input {...register("approvalDate")} type="date" className="border p-2 rounded" />
                                <input {...register("affiliatedUniversity")} placeholder="University for Affiliation" className="border p-2 rounded" />
                            </div>
                            <div className="flex justify-between mt-6">
                                <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded">
                                    ← Back
                                </button>
                                <button type="button" onClick={nextStep} className="bg-indigo-900 text-white px-6 py-2 rounded">
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 4 - Infrastructure */}
                    {step === 4 && (
                        <div>
                            <h2 className="text-xl font-bold text-indigo-900 mb-4">🏗️ Infrastructure</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input {...register("landArea")} placeholder="Land Area (in acres)" className="border p-2 rounded" />
                                <input {...register("builtUpArea")} placeholder="Built-up Area (sq.ft)" className="border p-2 rounded" />
                                <input {...register("classrooms")} type="number" placeholder="No. of Classrooms" className="border p-2 rounded" />
                                <input {...register("labs")} type="number" placeholder="No. of Labs" className="border p-2 rounded" />
                            </div>
                            <div className="flex justify-between mt-6">
                                <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded">
                                    ← Back
                                </button>
                                <button type="button" onClick={nextStep} className="bg-indigo-900 text-white px-6 py-2 rounded">
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 5 - Academics */}
                    {step === 5 && (
                        <div>
                            <h2 className="text-xl font-bold text-indigo-900 mb-4">📚 Academics</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input {...register("departments")} placeholder="Departments (CSE, ECE...)" className="border p-2 rounded" />
                                <input {...register("courses")} placeholder="Courses Offered" className="border p-2 rounded" />
                                <input {...register("intakeCapacity")} placeholder="Intake Capacity" className="border p-2 rounded" />
                                <input {...register("facultyStrength")} type="number" placeholder="Total Faculty Strength" className="border p-2 rounded" />
                            </div>
                            <div className="flex justify-between mt-6">
                                <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded">
                                    ← Back
                                </button>
                                <button type="button" onClick={nextStep} className="bg-indigo-900 text-white px-6 py-2 rounded">
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 6 - Faculty */}
                    {step === 6 && (
                        <div>
                            <h2 className="text-xl font-bold text-indigo-900 mb-4">👨‍🏫 Faculty Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input {...register("principalName")} placeholder="Principal's Name" className="border p-2 rounded" />
                                <input {...register("facultyPhD")} type="number" placeholder="No. of PhD Faculty" className="border p-2 rounded" />
                                <input {...register("facultyPG")} type="number" placeholder="No. of PG Faculty" className="border p-2 rounded" />
                                <input {...register("facultyUG")} type="number" placeholder="No. of UG Faculty" className="border p-2 rounded" />
                            </div>
                            <div className="flex justify-between mt-6">
                                <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded">
                                    ← Back
                                </button>
                                <button type="button" onClick={nextStep} className="bg-indigo-900 text-white px-6 py-2 rounded">
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 7 - Financial */}
                    {step === 7 && (
                        <div>
                            <h2 className="text-xl font-bold text-indigo-900 mb-4">💰 Financial Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input {...register("annualBudget")} placeholder="Annual Budget (in ₹)" className="border p-2 rounded" />
                                <input {...register("fundingSource")} placeholder="Funding Sources" className="border p-2 rounded" />
                                <input {...register("auditReport")} type="file" className="border p-2 rounded col-span-2" />
                            </div>
                            <div className="flex justify-between mt-6">
                                <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded">
                                    ← Back
                                </button>
                                <button type="button" onClick={nextStep} className="bg-indigo-900 text-white px-6 py-2 rounded">
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 8 - Facilities */}
                    {step === 8 && (
                        <div>
                            <h2 className="text-xl font-bold text-indigo-900 mb-4">🏢 Facilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input {...register("hostel")} placeholder="Hostel Details" className="border p-2 rounded" />
                                <input {...register("library")} placeholder="Library Details" className="border p-2 rounded" />
                                <input {...register("transport")} placeholder="Transport Facilities" className="border p-2 rounded" />
                                <input {...register("sports")} placeholder="Sports Facilities" className="border p-2 rounded" />
                            </div>
                            <div className="flex justify-between mt-6">
                                <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded">
                                    ← Back
                                </button>
                                <button type="button" onClick={nextStep} className="bg-indigo-900 text-white px-6 py-2 rounded">
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 9 - Compliance */}
                    {step === 9 && (
                        <div>
                            <h2 className="text-xl font-bold text-indigo-900 mb-4">✅ Compliance</h2>
                            <div className="space-y-4">
                                <label className="flex items-center">
                                    <input type="checkbox" {...register("fireSafety")} className="mr-2" /> Fire Safety Certificate Available
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" {...register("buildingSafety")} className="mr-2" /> Building Safety Certificate Available
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" {...register("antiRagging")} className="mr-2" /> Anti-Ragging Measures in Place
                                </label>
                            </div>
                            <div className="flex justify-between mt-6">
                                <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded">
                                    ← Back
                                </button>
                                <button type="button" onClick={nextStep} className="bg-indigo-900 text-white px-6 py-2 rounded">
                                    Next →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 10 - Documents */}
                    {step === 10 && (
                        <div>
                            <h2 className="text-xl font-bold text-indigo-900 mb-4">📂 Upload Documents</h2>
                            <div className="space-y-4">
                                <input type="file" {...register("trustCertificate")} className="border p-2 rounded w-full" />
                                <input type="file" {...register("approvalLetter")} className="border p-2 rounded w-full" />
                                <input type="file" {...register("safetyCertificate")} className="border p-2 rounded w-full" />
                                <input type="file" {...register("fireCertificate")} className="border p-2 rounded w-full" />
                            </div>
                            <div className="flex justify-between mt-6">
                                <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-6 py-2 rounded">
                                    ← Back
                                </button>
                                <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
                                    ✅ Submit Registration
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </>
    );
};

export default CollegeRegistrationForm;
