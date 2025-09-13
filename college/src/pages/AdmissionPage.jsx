import React, { useState } from "react";
import { useForm } from "react-hook-form";

const steps = ["Student Info", "Contact & Address", "Academics & Docs", "Course & Options"];

const AdmissionPage= () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onTouched" });

  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted! Check console for data.");
  };

  // Validate current step fields before moving next
  const validateStep = async () => {
    let fieldsToValidate = [];

    if (step === 1) {
      fieldsToValidate = ["name", "DOB", "fatherName", "motherName"];
    } else if (step === 2) {
      fieldsToValidate = [
        "studentEmail",
        "parentEmail",
        "studentContact",
        "parentContact",
        "Paddress",
        "Caddress",
      ];
    } else if (step === 3) {
      fieldsToValidate = [
        "ScoreOf10th",
        "ScoreOf12th",
        "markesheet10th",
        "markesheet12th",
        "aadharCardNo",
        "aadharCardFile",
        "TC",
        "photo",
        "signature",
      ];
    } else if (step === 4) {
      fieldsToValidate = ["appliedCourse", "fatherOccupation", "Hostel", "Transport"];
    }

    const valid = await trigger(fieldsToValidate);
    if (valid) setStep((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Student Admission Form</h1>

        {/* Progress bar */}
        <div className="flex justify-between mb-8">
          {steps.map((label, index) => (
            <div
              key={index}
              className={`flex-1 text-center text-sm font-medium ${
                step === index + 1 ? "text-blue-600" : step > index + 1 ? "text-green-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
                  step === index + 1 ? "bg-blue-600 text-white" : step > index + 1 ? "bg-green-500 text-white" : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              {label}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  {...register("name", { required: "Full Name is required" })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Date of Birth</label>
                <input
                  type="date"
                  {...register("DOB", { required: "Date of Birth is required" })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.DOB && <p className="text-red-500 mt-1">{errors.DOB.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Father’s Name</label>
                <input
                  {...register("fatherName", { required: "Father's Name is required" })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.fatherName && <p className="text-red-500 mt-1">{errors.fatherName.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Mother’s Name</label>
                <input
                  {...register("motherName", { required: "Mother's Name is required" })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.motherName && <p className="text-red-500 mt-1">{errors.motherName.message}</p>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">Student Email</label>
                <input
                  type="email"
                  {...register("studentEmail", {
                    required: "Student Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                  })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.studentEmail && <p className="text-red-500 mt-1">{errors.studentEmail.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Parent Email</label>
                <input
                  type="email"
                  {...register("parentEmail", {
                    required: "Parent Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                  })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.parentEmail && <p className="text-red-500 mt-1">{errors.parentEmail.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Student Contact</label>
                <input
                  type="tel"
                  {...register("studentContact", {
                    required: "Student Contact is required",
                    pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" },
                  })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.studentContact && <p className="text-red-500 mt-1">{errors.studentContact.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Parent Contact</label>
                <input
                  type="tel"
                  {...register("parentContact", {
                    required: "Parent Contact is required",
                    pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number" },
                  })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.parentContact && <p className="text-red-500 mt-1">{errors.parentContact.message}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1">Permanent Address</label>
                <textarea
                  {...register("Paddress", { required: "Permanent Address is required" })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.Paddress && <p className="text-red-500 mt-1">{errors.Paddress.message}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1">Current Address</label>
                <textarea
                  {...register("Caddress", { required: "Current Address is required" })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.Caddress && <p className="text-red-500 mt-1">{errors.Caddress.message}</p>}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">10th Score (%)</label>
                <input
                  type="number"
                  {...register("ScoreOf10th", {
                    required: "10th Score is required",
                    min: { value: 0, message: "Score can't be negative" },
                    max: { value: 100, message: "Score can't be more than 100" },
                  })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.ScoreOf10th && <p className="text-red-500 mt-1">{errors.ScoreOf10th.message}</p>}
              </div>
              <div>
                <label className="block mb-1">12th Score (%)</label>
                <input
                  type="number"
                  {...register("ScoreOf12th", {
                    required: "12th Score is required",
                    min: { value: 0, message: "Score can't be negative" },
                    max: { value: 100, message: "Score can't be more than 100" },
                  })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.ScoreOf12th && <p className="text-red-500 mt-1">{errors.ScoreOf12th.message}</p>}
              </div>
              <div>
                <label className="block mb-1">10th Marksheet</label>
                <input
                  type="file"
                  {...register("markesheet10th", { required: "10th Marksheet is required" })}
                  className="w-full p-2 border rounded-lg"
                />
                {errors.markesheet10th && <p className="text-red-500 mt-1">{errors.markesheet10th.message}</p>}
              </div>
              <div>
                <label className="block mb-1">12th Marksheet</label>
                <input
                  type="file"
                  {...register("markesheet12th", { required: "12th Marksheet is required" })}
                  className="w-full p-2 border rounded-lg"
                />
                {errors.markesheet12th && <p className="text-red-500 mt-1">{errors.markesheet12th.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Aadhar Card No.</label>
                <input
                  {...register("aadharCardNo", {
                    required: "Aadhar Card No. is required",
                    pattern: { value: /^[0-9]{12}$/, message: "Aadhar Card No. must be 12 digits" },
                  })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.aadharCardNo && <p className="text-red-500 mt-1">{errors.aadharCardNo.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Upload Aadhar</label>
                <input
                  type="file"
                  {...register("aadharCardFile", { required: "Aadhar upload is required" })}
                  className="w-full p-2 border rounded-lg"
                />
                {errors.aadharCardFile && <p className="text-red-500 mt-1">{errors.aadharCardFile.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Transfer Certificate (TC)</label>
                <input
                  type="file"
                  {...register("TC", { required: "Transfer Certificate is required" })}
                  className="w-full p-2 border rounded-lg"
                />
                {errors.TC && <p className="text-red-500 mt-1">{errors.TC.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Upload Photo</label>
                <input
                  type="file"
                  {...register("photo", { required: "Photo upload is required" })}
                  className="w-full p-2 border rounded-lg"
                />
                {errors.photo && <p className="text-red-500 mt-1">{errors.photo.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Upload Signature</label>
                <input
                  type="file"
                  {...register("signature", { required: "Signature upload is required" })}
                  className="w-full p-2 border rounded-lg"
                />
                {errors.signature && <p className="text-red-500 mt-1">{errors.signature.message}</p>}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">Course Applied</label>
                <input
                  {...register("appliedCourse", { required: "Course Applied is required" })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.appliedCourse && <p className="text-red-500 mt-1">{errors.appliedCourse.message}</p>}
              </div>
              <div>
                <label className="block mb-1">Father’s Occupation</label>
                <input
                  {...register("fatherOccupation", { required: "Father’s Occupation is required" })}
                  className="w-full p-3 border rounded-lg"
                />
                {errors.fatherOccupation && <p className="text-red-500 mt-1">{errors.fatherOccupation.message}</p>}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("Hostel", { required: "Please specify if hostel is required" })}
                  className="w-5 h-5"
                />
                <label>Require Hostel?</label>
                {errors.Hostel && <p className="text-red-500 mt-1">{errors.Hostel.message}</p>}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("Transport", { required: "Please specify if transport is required" })}
                  className="w-5 h-5"
                />
                <label>Require Transport?</label>
                {errors.Transport && <p className="text-red-500 mt-1">{errors.Transport.message}</p>}
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                type="button"
                className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Previous
              </button>
            )}

            {step < 4 && (
              <button
                onClick={validateStep}
                type="button"
                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
            )}

            {step === 4 && (
              <button
                type="submit"
                className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionPage;