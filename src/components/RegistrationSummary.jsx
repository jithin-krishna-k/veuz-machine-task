import { useState } from 'react';

const RegistrationSummary = () => {
  const [couponCode, setCouponCode] = useState('GITEXTS');
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleApplyCoupon = () => {
    if (couponCode.trim() === 'GITEXTS') {
      setIsCouponApplied(true);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    } else {
      alert('Invalid coupon code. Please try "GITEXTS"');
    }
  };

  const handleRemoveCoupon = () => {
    setIsCouponApplied(false);
    setCouponCode('');
  };

  const handleCouponInputChange = (e) => {
    setCouponCode(e.target.value);
  };

  return (
    <div className="bg-white border border-[#579B29] rounded-lg w-full max-w-4xl mx-auto mt-6">
      <div className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white px-6 py-4 rounded-t-lg">
        <h2 className="text-xl font-semibold font-alexandria">Registration Summary</h2>
      </div>

      <div className="p-6 space-y-4 text-sm md:text-base font-alexandria">
        <div
          className="flex justify-between items-center w-full"
          style={{
            height: '61px',
            padding: '10px',
            borderLeft: '3px solid #28A745',
            backgroundColor: '#f0f8f0'
          }}
        >
          <p className="font-medium text-black">PREMIUM TICKET x 2</p>
          <div className="flex items-center gap-2">
            {isCouponApplied ? (
              <>
                <p className="text-green-600 font-medium">FREE 0.16</p>
                <p className="text-gray-600">19% Incl. VAT</p>
              </>
            ) : (
              <p>EUR 40.19</p>
            )}
          </div>
        </div>

        <div className="w-full h-auto pt-[18px] pr-[12px] pb-[18px] pl-[12px] gap-[9px] rounded-[6px] border-[0.8px] border-dashed border-[#26903B] bg-[#F0FFF0] flex flex-col">
          <p className="text-[#299D3F] font-semibold">Have a promo code?</p>
          <div className="flex mt-2">
            <input
              type="text"
              value={couponCode}
              onChange={handleCouponInputChange}
              placeholder="Enter Promo code"
              className="flex-grow border border-[#299D3F] px-4 py-2 rounded-l-md focus:outline-none"
              disabled={isCouponApplied}
            />
            <button
              onClick={handleApplyCoupon}
              disabled={isCouponApplied}
              className={`px-4 rounded-r-md font-medium ${isCouponApplied
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#AB0202] to-[#240102] text-white hover:from-[#8B0000] hover:to-[#1A0000]'
                }`}
            >
              APPLY
            </button>
          </div>

          {showSuccessMessage && (
            <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-700 text-sm">
                Promo code 'GITEXTS' applied successfully! Applied to 2 lowest priced tickets!
              </p>
            </div>
          )}

          {isCouponApplied && (
            <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-md">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Promo code applied: GITEXTS</p>
                  <p className="text-sm text-gray-600">Promo code applied: 15% EUR 0.06 incl. VAT</p>
                  <p className="text-sm text-gray-600">Applied to: 2 lowest priced tickets</p>
                </div>
                <button
                  onClick={handleRemoveCoupon}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  REMOVE
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-start">
          <div>
            <p>Student Ticket Access On Day 3 Only</p>
            <div className="mt-2">
              <p className="font-semibold">Total</p>
              <p><span className="line-through">EUR 300</span> <span className="font-bold">EUR 150</span></p>
            </div>
          </div>
          <div className="text-right">
            {isCouponApplied ? (
              <>
                <p><span className="line-through">EUR 50</span> 40 SUBJECT TO APPROVAL</p>
                <p className="text-sm text-gray-600">Incl. 19%</p>
              </>
            ) : (
              <p>EUR 50.40 SUBJECT TO APPROVAL Incl. 19%</p>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="border border-gray-300 bg-white text-black px-6 py-2 rounded-md font-medium font-alexandria hover:bg-gray-50 transition-colors">
            BACK
          </button>
          <button className="bg-gradient-to-r from-[#27963D] to-[#134323] text-white px-6 py-2 rounded-md font-medium font-alexandria hover:from-[#1F7A2F] hover:to-[#0F2F1A] transition-colors">
            NEXT
          </button>
        </div>

        <div className="space-y-4 pt-6 text-xs md:text-sm">
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <p className="leading-relaxed">
              I have read and accept the <span className="text-red-600 underline">terms and conditions</span>,{' '}
              <span className="text-red-600 underline">Privacy Policy</span>, and consent that attendees under the age
              of 21 will not be admitted, and admission to the exhibition is restricted to trade and business professionals only, and students above 16 and below 18 can attend only if accompanied by school or faculty member <span className="text-red-600">*</span>
            </p>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1 flex-shrink-0" />
            <p className="leading-relaxed">
              I hereby consent the use of my data by the organiser, exhibitors and sponsors of DWTC & KAOUN International
              to delivering services and for marketing purposes. I am aware that I can object to the sending of newsletters at any time <span className="text-red-600">*</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSummary;
