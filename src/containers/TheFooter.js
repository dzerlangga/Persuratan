import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="@dzerangga">Kudan</a>
        <span className="ml-1">&copy; 2020 aegislabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Edited by</span>
        <a href="#" target="_blank" rel="noopener noreferrer">kudan</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
