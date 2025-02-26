import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-gray-200 to-gray-400 shadow-2xl rounded-2xl max-w-4xl mt-10"> 
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8 uppercase tracking-wide drop-shadow-lg">
        Return Policy
      </h1>

      <p className="text-lg text-gray-800 mb-10 text-center italic">
        We value your satisfaction! Please read our return policy carefully before proceeding.
      </p>

      <div className="space-y-8">
        {[
          { title: "Return Period", text: "Returns are accepted within 7 days from the date of delivery. We want you to be happy with your purchase." },
          { title: "Item Condition", text: "Items must be unused, unwashed, and in their original packaging to qualify for a return." },
          { title: "How to Initiate a Return", text: "To initiate a return, please contact our support team at support@srshine.com." },
          { title: "Return Shipping", text: "The shipping costs for returns are the responsibility of the customer. Please ensure the items are securely packaged." },
          { title: "Refund Process", text: "Once the return is approved, we will issue a refund to your original payment method within 7 business days." }
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <div className="flex-shrink-0">
                <span className="block text-2xl font-bold text-gray-900">{index + 1}. {item.title}</span>
              </div>
              <div className="flex-1 mt-2">
                <p className="text-gray-700 text-lg">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-900 font-semibold bg-white p-4 rounded-xl shadow-lg inline-block">
          Need help? Contact our support team anytime – we're here for you!
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
