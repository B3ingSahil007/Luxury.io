import React from 'react'

const InfoPannel = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row rounded-lg border border-white bg-gradient-to-r from-gray-800 to-gray-700 text-white mt-4">
                <div className="flex-1 sm:border-r-2 border-gray-400 flex flex-col justify-center items-center py-3">
                    <h3 className="text-lg font-bold">120</h3>
                    <p className="text-sm">Active Users</p>
                </div><hr />
                <div className="flex-1 sm:border-r-2 border-gray-400 flex flex-col justify-center items-center py-3">
                    <h3 className="text-lg font-bold">50</h3>
                    <p className="text-sm">Products Listed</p>
                </div><hr />
                <div className="flex-1 flex flex-col justify-center items-center py-3">
                    <h3 className="text-lg font-bold">25</h3>
                    <p className="text-sm">Pending Orders</p>
                </div>
            </div>
        </>
    )
}

export default InfoPannel
