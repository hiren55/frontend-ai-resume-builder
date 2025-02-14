import React from 'react'

function SummeryPreview({resumeInfo}) {
  return (
    <p className='text-xs'  style={{ fontFamily: resumeInfo?.fontFamily }}>
        {resumeInfo?.summery}
    </p>
  )
}

export default SummeryPreview