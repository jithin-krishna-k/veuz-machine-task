const RegistrationSummary = () => {
  return (
    <div className="bg-white border border-[#579B29] rounded-lg w-full max-w-4xl mx-auto mt-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white px-6 py-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Registration Summary</h2>
      </div>

      {/* Summary Items */}
      <div className="p-6 space-y-4 text-sm md:text-base">
        <div className="flex justify-between">
          <p className="font-medium">PREMIUM TICKET x 2</p>
          <p className="text-right">EUR 40.19</p>
        </div>

        <div className="flex justify-between">
          <p>Student Ticket Access On Day 3 Only</p>
          <p className="text-right">EUR 50.40 SUBJECT TO APPROVAL Incl. 19%</p>
        </div>

        {/* Promo Code */}
        <div className="pt-4">
          <p className="text-[#299D3F] font-semibold">Have a promo code?</p>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Enter Promo code"
              className="flex-grow border border-[#299D3F] px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-gradient-to-r from-[#AB0202] to-[#240102] text-white px-4 rounded-r-md font-medium">
              APPLY
            </button>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between pt-4 border-t border-gray-300 mt-4 font-semibold">
          <p>Total:</p>
          <p>EUR 500 <span className="text-sm font-normal text-gray-500">Incl. VAT</span></p>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4 pt-6 text-xs md:text-sm">
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <p>
              I have read and accept the <span className="text-red-600 underline">terms and conditions</span>,{' '}
              <span className="text-red-600 underline">Privacy Policy</span>, and consent that attendees under the age
              of 21 will not be admitted, and admission to the exhibition is restricted to trade and business professionals only. Students above 16 and below 18 can attend only if accompanied by school or faculty member.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <p>
              I hereby consent the use of my data by the organizer, exhibitors and sponsors of DWTC & KAOUN International
              to delivering services and for marketing purposes. I am aware that I can object to the sending of newsletters at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSummary;
