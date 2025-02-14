import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';
import FromSection from '../../components/FromSection';

function EditResume() {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState();
  useEffect(() => {
    console.log(useParams.resumeId)
    GetResumeInfo();
    // setResumeInfo();
  }, [])

  const GetResumeInfo=()=>{
    GlobalApi.GetResumeById(resumeId).then(response=>{
      console.log(response.data.data);
      setResumeInfo(response.data.data);
    })
  }


  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        <FromSection />

       <ResumePreview/>
      </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume