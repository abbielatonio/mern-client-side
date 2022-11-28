import React from "react";

const EnquirySubmit = ({ data }) => {
  return (
    <div>
      <h1>Thank you {data?.name} for sending an enquiry.</h1>
      <h3>
        The practitioner will try to reach you through the contact information
        you provided below.
      </h3>
      <p>Email Address: {data?.email}</p>
      <p>Contact Number: {data?.contactnumber}</p>
    </div>
  );
};

export default EnquirySubmit;