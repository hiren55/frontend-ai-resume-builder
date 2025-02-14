import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "./../../service/GlobalApi";
import ResumeCardItem from "./components/ResumeCardItem";
import { FileText } from "lucide-react";

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]); // ✅ Ensure it's always an array

  useEffect(() => {
    if (user) GetResumesList();
  }, [user]);

  /**
   * Used to Get Users Resume List
   */
  const GetResumesList = () => {
    if (!user?.primaryEmailAddress?.emailAddress) return; // ✅ Ensure user email exists

    GlobalApi.GetUserResumes(user.primaryEmailAddress.emailAddress)
      .then((resp) => {
        const data = resp?.data?.data || []; // ✅ Handle missing data safely
        console.log(data);
        setResumeList(data);
      })
      .catch((error) => {
        console.error("Error fetching resumes:", error);
        setResumeList([]); // ✅ Prevent errors by resetting list
      });
  };

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-2">
          <FileText className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            My Resumes
          </h2>
        </div>
        <p className="text-gray-600">
          Create AI-powered resumes tailored to your dream job roles
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
        <AddResume />
        {resumeList.length > 0 ? (
          resumeList.map((resume, index) => (
            <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
          ))
        ) : (
          [1, 2, 3, 4].map((_, index) => (
            <div key={index} className="h-[280px] rounded-lg bg-slate-200 animate-pulse"></div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
