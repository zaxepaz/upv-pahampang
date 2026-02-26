import React from "react";

export default function OrgDetailsCard({ acadOrgAbb, acadOrgLogo}) {
  return (
   
    <div className="flex items-center gap-3">
        <span className="text-sm font-bold min-w-[70px] text-center">{acadOrgAbb}</span>
        <div className="size-8 shrink-0 rounded-full bg-slate-100 p-1">
            <img alt="UPVTC" className="w-full h-full object-contain" src= {acadOrgLogo}/>
        </div>
    </div>
                                    
  );
}