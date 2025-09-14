import React from "react";

const CollegeFormNavbar = () => {
    return (
        <>
            <header className="bg-indigo-900 text-white py-4 shadow">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
                    <div className="flex items-center space-x-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Rajasthan_Technical_University_logo.png/200px-Rajasthan_Technical_University_logo.png" className="h-12" alt="University Logo" />
                        <h1 className="text-2xl font-bold">University / DTE College Registration</h1>
                    </div>
                    <div className="text-sm">
                        Date: <span id="todayDate"></span>
                    </div>
                </div>
            </header>
        </>
    )
}

export {CollegeFormNavbar}