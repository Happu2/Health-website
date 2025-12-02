export default function Newsletter() {
  return (
    <section className="bg-[#2E63C6] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl font-semibold text-white mb-2">
            Let's Grow Together
          </h2>
          <p className="text-white/90 text-lg">
            We’ll keep it simple. Only the news and updates you need.
          </p>
        </div>

        {/* RIGHT FORM */}
        <form className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Please Enter Your Email"
            className="px-6 py-4 text-white placeholder-white/90 
                       bg-[#2E63C6] border border-white border-r-0 
                       w-full md:w-96 
                       focus:outline-none"
          />
          <button
            className="bg-white text-[#2E63C6] px-10 py-4 font-semibold 
                       border border-white
                       hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </form>

      </div>
    </section>
  );
}
