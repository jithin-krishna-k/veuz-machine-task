const ThankYou = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4">
      <div className="bg-white shadow-md rounded-md p-8 max-w-xl w-full text-center border-t-4 border-green-600">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">THANK YOU!</h1>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Your registration has been submitted successfully.
        </p>
        <p className="text-gray-600 text-sm mb-6">
          A confirmation email with your event details will be sent to you shortly. Please check your inbox (and spam folder).
        </p>
        <button
          onClick={() => {}}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Return To Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
