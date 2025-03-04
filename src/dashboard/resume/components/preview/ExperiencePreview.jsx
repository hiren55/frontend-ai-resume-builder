import React from 'react'

function ExperiencePreview({ resumeInfo }) {
    const cleanResponse = (text) => {
        return text
            .replace(/"/g, '') // Remove double quotes
            .replace(/[[\]]/g, ''); // Remove square brackets
    };
    return (
        <div className='my-6'  style={{ fontFamily: resumeInfo?.fontFamily }}>
            <h2 className='text-center font-bold text-sm mb-2'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >Professional Experience</h2>
            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />

            {resumeInfo?.Experience?.map((experience, index) => (
                <div key={index} className='my-5'>
                    <h2 className='text-sm font-bold'
                        style={{
                            color: resumeInfo?.themeColor
                        }}>{experience?.title}</h2>
                    <h2 className='text-xs flex justify-between'>{experience?.companyName},
                        {experience?.city},
                        {experience?.state}
                        <span>{experience?.startDate} To {experience?.currentlyWorking ? 'Present' : experience.endDate} </span>
                    </h2>
                    {/* <p className='text-xs my-2'>
                    {experience.workSummery}
                </p> */}
                    <div className="text-sm mt-2 leading-relaxed text-gray-800"
                        dangerouslySetInnerHTML={{ __html: cleanResponse(experience?.workSummery) }}
                    />
                </div>
            ))}
        </div>
    )
}

export default ExperiencePreview