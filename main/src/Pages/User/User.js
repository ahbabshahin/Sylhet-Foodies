import React from 'react';
import '../Inventory/Inven.css'

const User = () => {
    return (
        <div className='class'>
            <div>
                <h2 className='text-center text-2xl text-yellow-500 text-bold mb-10'> All users</h2>
            </div>



            <div className='text-yellow-500'>
                <div className="overflow-x-auto">
                    <table className="table text-yellow-500">
                        {/* head */}
                        <thead className='text-yellow-500'>
                            <tr>
                                <th>SL NO</th>
                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Address</th>
                                <th>Transaction Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className='hover'>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr className='hover'>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;