import React from "react";
import { assets } from "../assets/assets";

const JobCard = ({ job }) => {
  return (
    <div className="border p-6 shadow rounded">
      <div className="flex items-center justify-between ">
        <img className="h-8" src={assets.company_icon} alt="Company Icon" />
      </div>
      <h4 className="font-medium text-xl mt-2">{job.title}</h4>
      <div className="flex items-center gap-3 text-xs mt-2">
        <span className="bg-blue-50 border-blue-200 px-4 py-1.5 rounded">{job.location}</span>
        <span className="bg-red-50 border-red-200 px-4 py-1.5 rounded">{job.level}</span>
      </div>
      <p className="text-gray-500 text-sm mt-4 "
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>

      <div className="mt-4 flex gap-4 text-sm ">
        <button className="bg-slate-800 text-white px-4 py-2 rounded">Apply Now!</button>
        <button className="text-gray-500 border border-slate-400 px-4 py-2 rounded">Learn more</button>
      </div>
    </div>
  );
};

export default JobCard;
