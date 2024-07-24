// import React from 'react'
import EarningsChart from './EarningChart';

function EarningDetails() {
  return (
    <div>
        <div className="bg-gray-700 text-white rounded-lg border-2 w-96 border-gray-700 p-6 lg:w-5/12  cursor-pointer hover:scale-110 ease-in-out duration-500">
                <div className="font-bold underline underline-offset-4 text-center uppercase">
                        <h3>Earnings: 12,00,000</h3>
                </div>
                {/* EARNING CHART */}
                <EarningsChart />
            </div>
    </div>
  )
}

export default EarningDetails;