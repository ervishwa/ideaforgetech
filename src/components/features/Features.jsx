import React from 'react'
import { FeatureCard } from './FeatureCard'

export function Features() {
  return (
    <div className="features container-fluid bg-black text-light">
     <div className="row">
        <div className="col-md-8 mx-auto py-5">
            <div className="row">
             <div className="col-12">
                <h1 className='fs-1'>Features</h1>
                <p className='fs-5'>Our SWITCH UAVs have been designed to be able to handle all terrains and extreme temperature conditions.</p>
             </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <FeatureCard src="https://ideaforgetech.com/uploads/Image/Take-off.svg" heading="VTOL and Fixed Wing Hybrid UAV" desc="SWITCH UAV features advanced flight time, higher safety and simple operation with additional fail-safe redundancies."/>
                </div>
                <div className="col-md-4">
                <FeatureCard src="https://ideaforgetech.com/uploads/Image/Toolless%20Assembly.svg" heading="Toolless Assembly" desc="SWITCH UAV is designed to be assembled using unique snap fit mechanisms that do not require the use of specific tools."/>
                </div>
                <div className="col-md-4">
                <FeatureCard src="https://ideaforgetech.com/uploads/Image/Lightweight.svg" heading="Lightweight" desc="SWITCH UAV is designed to be easily packed and carried."/>
                </div>
            </div>
        </div>
     </div>

    </div>
  )
}

