// import React, { useState } from "react";

// const Coupon = ({ code }) => {
//   const [copied, setCopied] = useState(false);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(code);
//     setCopied(true);
//     setTimeout(() => {
//       setCopied(false);
//     }, 2000);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {/* Coupon 1 */}
//       <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-white mb-4">Get 10% Off Your First Purchase!</h2>
//         <p className="text-lg text-white mb-6">Use code: {code}</p>
//         <button onClick={copyToClipboard} className="bg-white text-yellow-500 px-6 py-2 rounded-md font-semibold hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400">
//           {copied ? "Code Copied!" : "Copy Code"}
//         </button>
//       </div>
      
//       {/* Coupon 2 */}
//       <div className="bg-gradient-to-r from-blue-300 to-blue-500 p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-white mb-4">Limited Time Offer!</h2>
//         <p className="text-lg text-white mb-6">Use code: {code}</p>
//         <button onClick={copyToClipboard} className="bg-white text-blue-500 px-6 py-2 rounded-md font-semibold hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
//           {copied ? "Code Copied!" : "Copy Code"}
//         </button>
//       </div>
      
//       {/* Coupon 3 */}
//       <div className="bg-gradient-to-r from-green-300 to-green-500 p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-white mb-4">Flash Sale!</h2>
//         <p className="text-lg text-white mb-6">Use code: {code}</p>
//         <button onClick={copyToClipboard} className="bg-white text-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400">
//           {copied ? "Code Copied!" : "Copy Code"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Coupon;


import React, { useState } from "react";

const Coupon = () => {
  const [codes] = useState(["FIRST10", "SHIPFREE", "FLASHSALE"]);
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
      {codes.map((code, index) => (
        <div key={index} className={`bg-gradient-to-r from-${index === 0 ? "yellow" : index === 1 ? "blue" : "green"}-300 to-${index === 0 ? "yellow" : index === 1 ? "blue" : "green"}-500 p-8 rounded-lg shadow-md`}>
          <h2 className="text-2xl font-semibold text-white mb-4">{index === 0 ? "Get 10% Off Your First Purchase!" : index === 1 ? "Limited Time Offer!" : "Flash Sale!"}</h2>
          <p className="text-lg text-white mb-6">Use code: {code}</p>
          <button onClick={() => copyToClipboard(code)} className={`bg-white text-${index === 0 ? "yellow" : index === 1 ? "blue" : "green"}-500 px-6 py-2 rounded-md font-semibold hover:bg-${index === 0 ? "yellow" : index === 1 ? "blue" : "green"}-100 focus:outline-none focus:ring-2 focus:ring-${index === 0 ? "yellow" : index === 1 ? "blue" : "green"}-400`}>
            {copiedCode === code ? "Code Copied!" : "Copy Code"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Coupon;
