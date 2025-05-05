// import React, { useState } from 'react';
// import '../Style/Insurance.css'

// const Insurance = () => {
//   const [formData, setFormData] = useState({
//     registrationNo: '',
//     vehicleModel: '',
//     makeYear: '',
//     lastPolicyNo: '',
//     lastPolicyDoc: null,
//     name: '',
//     mobile: '',
//     email: '',
//     nomineeAge: '',
//     relation: ''
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'lastPolicyDoc') {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Backend API call ya form handling yahan karein
//     console.log(formData);
//   };

//   return (
//     <div className="insurance-form-container">
//       <h2 className="form-title">Renew Your Vehicle Insurance</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Vehicle Details */}
//         <fieldset>
//           <legend>Vehicle Details</legend>
//           <div className="form-row">
//             <input
//               type="text"
//               name="registrationNo"
//               placeholder="Add Registration No. (EX. GJ01-XX-XXXX)"
//               value={formData.registrationNo}
//               onChange={handleChange}
//             />
//             <select name="vehicleModel" value={formData.vehicleModel} onChange={handleChange}>
//               <option value="">Select Vehicle Model</option>
//               <option value="Activa 6G">Activa 6G</option>
//               <option value="Shine 125">Shine 125</option>
//               <option value="SP 125">SP 125</option>
//               {/* Add more as needed */}
//             </select>
//           </div>
//           <div className="form-row">
//             <select name="makeYear" value={formData.makeYear} onChange={handleChange}>
//               <option value="">Select Make Year</option>
//               {[...Array(20)].map((_, i) => {
//                 const year = new Date().getFullYear() - i;
//                 return <option key={year} value={year}>{year}</option>;
//               })}
//             </select>
//           </div>
//         </fieldset>

//         {/* Last Policy Details */}
//         <fieldset>
//           <legend>Last Policy Details</legend>
//           <div className="form-row">
//             <input
//               type="text"
//               name="lastPolicyNo"
//               placeholder="Last Policy No."
//               value={formData.lastPolicyNo}
//               onChange={handleChange}
//             />
//             <input
//               type="file"
//               name="lastPolicyDoc"
//               onChange={handleChange}
//             />
//           </div>
//         </fieldset>

//         {/* Insurer Details */}
//         <fieldset>
//           <legend>Insurer Details</legend>
//           <div className="form-row">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name: *"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="mobile"
//               placeholder="Mobile No.: *"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-row">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </fieldset>

//         {/* Nominee Details */}
//         <fieldset>
//           <legend>Nominee Details</legend>
//           <div className="form-row">
//             <input
//               type="text"
//               name="nomineeAge"
//               placeholder="Nominee Age"
//               value={formData.nomineeAge}
//               onChange={handleChange}
//             />
//             <select name="relation" value={formData.relation} onChange={handleChange}>
//               <option value="">Select Relation With You</option>
//               <option value="Father">Father</option>
//               <option value="Mother">Mother</option>
//               <option value="Wife">Wife</option>
//               <option value="Husband">Husband</option>
//               <option value="Son">Son</option>
//               <option value="Daughter">Daughter</option>
//               {/* Add more if needed */}
//             </select>
//           </div>
//         </fieldset>

//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Insurance;

import React, { useState } from "react";
import "../Style/Insurance.css";
import { FaCar, FaFileAlt, FaUser, FaUserFriends } from "react-icons/fa";

const Insurance = () => {
  const [formData, setFormData] = useState({
    registrationNo: "",
    vehicleModel: "",
    makeYear: "",
    lastPolicyNo: "",
    lastPolicyDoc: null,
    name: "",
    mobile: "",
    email: "",
    nomineeAge: "",
    relation: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="insurance-form">
        {/* Section 1: Vehicle */}
        <div className="form-section">
          <div className="section-header">
            <FaCar /> <span>Vehicle Details</span>
          </div>
          <div className="form-grid">
            <div className="form-control">
              <label>Registration No.</label>
              <input
                type="text"
                name="registrationNo"
                value={formData.registrationNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label>Vehicle Model</label>
              <select
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Activa 6G">Activa 6G</option>
                <option value="Shine 125">Shine 125</option>
              </select>
            </div>
            <div className="form-control">
              <label>Make Year</label>
              <select
                name="makeYear"
                value={formData.makeYear}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                {[...Array(20)].map((_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Policy */}
        <div className="form-section">
          <div className="section-header">
            <FaFileAlt /> <span>Last Policy</span>
          </div>
          <div className="form-grid">
            <div className="form-control">
              <label>Policy Number</label>
              <input
                type="text"
                name="lastPolicyNo"
                value={formData.lastPolicyNo}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label>Policy Document</label>
              <input type="file" name="lastPolicyDoc" onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* Section 3: User Info */}
        <div className="form-section">
          <div className="section-header">
            <FaUser /> <span>Your Details</span>
          </div>
          <div className="form-grid">
            <div className="form-control">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label>Mobile</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Section 4: Nominee */}
        <div className="form-section">
          <div className="section-header">
            <FaUserFriends /> <span>Nominee</span>
          </div>
          <div className="form-grid">
            <div className="form-control">
              <label>Age</label>
              <input
                type="text"
                name="nomineeAge"
                value={formData.nomineeAge}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label>Relation</label>
              <select
                name="relation"
                value={formData.relation}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Wife">Wife</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Insurance;
