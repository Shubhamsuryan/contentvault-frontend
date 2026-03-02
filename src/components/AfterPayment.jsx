const AfterPayment = () => {
  return (
    <section className="bg-[#0B0B0F] py-20 border-t border-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Happens <span className="text-[#FFD700]">After You Pay?</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-left">

          <div className="bg-[#15151A] p-6 rounded-xl">
            <h3 className="font-bold text-[#FFD700] mb-2">1. Secure Payment</h3>
            <p className="text-gray-400 text-sm">
              Complete checkout safely via Razorpay (UPI, Card, Netbanking).
            </p>
          </div>

          <div className="bg-[#15151A] p-6 rounded-xl">
            <h3 className="font-bold text-[#FFD700] mb-2">2. Instant Confirmation</h3>
            <p className="text-gray-400 text-sm">
              You receive confirmation immediately after successful payment.
            </p>
          </div>

          <div className="bg-[#15151A] p-6 rounded-xl">
            <h3 className="font-bold text-[#FFD700] mb-2">3. Access Granted</h3>
            <p className="text-gray-400 text-sm">
              Google Drive access is granted to your registered email.
            </p>
          </div>

          <div className="bg-[#15151A] p-6 rounded-xl">
            <h3 className="font-bold text-[#FFD700] mb-2">4. Start Downloading</h3>
            <p className="text-gray-400 text-sm">
              Download and start using or reselling immediately.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AfterPayment;