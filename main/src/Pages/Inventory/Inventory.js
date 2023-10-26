import React from 'react';
import './Inven.css'
const Inventory = () => {
    return (
        <div className='class'>
            <div>
                <h2 className='text-center text-2xl text-yellow-500 text-bold mb-10'>Inventory:</h2>
            </div>









            <div className='text-yellow-500'>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead className='text-yellow-500'>
                            <tr>
                                <th>SL NO:</th>
                                <th>Restaurant Name</th>
                                <th>Contact</th>
                                <th>Bkash No:</th>
                                <th>Address</th>
                                <th>Opening Time</th>
                                {/* <th>Favorite Color</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                {/* <td>Blue</td> */}
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                {/* <td>Purple</td> */}
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Carroll Group</td>
                                <td>China</td>
                                <td>8/15/2020</td>
                                {/* <td>Red</td> */}
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Marjy Ferencz</td>
                                <td>Office Assistant I</td>
                                <td>Rowe-Schoen</td>
                                <td>Russia</td>
                                <td>3/25/2021</td>
                                {/* <td>Crimson</td> */}
                            </tr>
                            
                           
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>company</th>
                                <th>location</th>
                                <th>Last Login</th>
                                {/* <th>Favorite Color</th> */}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Inventory;