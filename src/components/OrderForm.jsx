// import React from 'react';

// const OrderForm = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default OrderForm;








import React from 'react';
import  "../styles/OrderForm.css";
const OrderForm = () => {
    return (
        <div>
            <div class="card1">
                <h3>Sign Copy Order</h3>
                <form method="POST" enctype="multipart/form-data">
                 
                    <div class="mb-3">
                        <select class="form-select" id="signature-option" name="signature-option" disabled>
                            <option value="nid">সাইন কপি -
                                100 টাকা
                            </option>
                        </select>
                    </div>

              
                    <div class="mb-3">
                        <label for="typeSelect" class="form-label">Select Type</label>
                        <select class="form-select" id="typeSelect" name="typeSelect" required="" onchange="updateInputFields()">
                            <option value="default">সিলেক্ট টাইপ</option>
                            <option value="FORM_NO">এন,আই,ডি নাম্বার</option>
                            <option value="NID_NO">ফরম নাম্বার</option>
                            <option value="VOTER_NO">ভোটার নাম্বার</option>
                            <option value="BIRTH_NO">জন্ম নিবন্ধন নাম্বার</option>
                        </select>
                    </div>

           
                    <div id="new-input-fields"><div class="mb-3">

                        <input type="text" class="form-control" id="input1" name="input1" placeholder="নাম লিখুন (যদি থাকে)" required=""/>
                    </div><div class="mb-3">

                            <input type="text" class="form-control" id="input2" name="input2" placeholder="আইডি/ভোটার/ফর্ম নাম্বার" required=""/>
                        </div><div class="mb-3">
                            <textarea class="form-control" id="input3" name="input3" placeholder="অন্যর সবর্স্বে বিত্তির লিখুন(যদি কিছু বলা থাকে)" rows="4" required=""></textarea>
                        </div></div>

            
                    <div class="note-text">
                        <h5>Note: You will be charged
                            100                                        tk for Sign Copy Order!
                        </h5>
                    </div>
                    
                    <div class="d-flex justify-content-center">

                        <button type="submit" class="btn btn-primary" id="submit-button" name="submit">
                            Save &amp; Download
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;














// import React from 'react';
// import  "../styles/OrderForm.css";
// const OrderForm = () => {
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <div className="bg-white shadow-lg rounded-2xl p-6 w-[400px]">
//           <h3 className='text-center'>
//             Sign Copy Order
//           </h3>
          
//           <select className="w-full p-2 border rounded-md mb-3 bg-gray-200">
//             <option>সাইন কপি - 100 টাকা</option>
//           </select>
          
//           <p className="text-center font-semibold mb-2">Select Type</p>
          
//           <select className="w-full p-2 border rounded-md mb-3">
//             <option>ফরম নাম্বার</option>
//           </select>
          
//           <input
//             type="text"
//             placeholder="নাম লিখুন (যদি থাকে)"
//             className="w-full p-2 border rounded-md mb-3 bg-gray-100"
//           />
          
//           <input
//             type="text"
//             placeholder="আইডি/ভোটার/ফরম নাম্বার"
//             className="w-full p-2 border rounded-md mb-3 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
          
//           <textarea
//             placeholder="অন্যান্য সবর্স্থ বিস্তারিত লিখুন(যদি কিছু বলা থাকে)"
//             className="w-full p-2 border rounded-md bg-gray-100"
//           />
          
//           <p className="text-green-600 text-center mt-3">
//             Note: You will be charged 100 tk for Sign Copy Order!
//           </p>
          
//           <button className="w-full mt-4 bg-purple-500 text-white p-2 rounded-md font-semibold hover:bg-purple-600">
//             Save & Download
//           </button>
//         </div>
//       </div>
//     );
// };

// export default OrderForm;