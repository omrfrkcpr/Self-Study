import React from 'react'

import AnaUser from './AnaUser'


const Isimler = () => {

   
  return (
    <div>
        {/* diziden 4 kişinin ismini bastir */}
        {[].slice(0,4).map((i)=>(<div style={{textAlign:"center",background:"pink"}}>
            {i.login}
        </div>))}

        <AnaUser />

    </div>
  )
}

export default Isimler