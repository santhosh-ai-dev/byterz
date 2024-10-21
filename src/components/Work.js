import Image from "next/image";

const WorkCard = ({ num, title, details, duration, certificate, instruction, offerLetterInfo, buttonLabel, buttonLink }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left p-5 border border-blue-200 rounded-lg shadow-lg min-h-[350px]">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-200 bg-rose-700 rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      <p className="leading-loose">{details}</p>
      {instruction && <p className="text-sm text-gray-400 leading-loose">{instruction}</p>}
      {offerLetterInfo && <p className="text-sm text-gray-400 leading-loose">{offerLetterInfo}</p>}
      {buttonLabel && (
        <div className="mt-4">
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-rose-600 text-white font-semibold py-2 px-4 rounded hover:bg-rose-500">
              {buttonLabel}
            </button>
          </a>
        </div>
      )}
      {duration && (
        <p className="font-semibold">
          <strong>Duration:</strong> {duration}
        </p>
      )}
      {certificate && (
        <p className="font-semibold">
          <strong>Certificate:</strong> {certificate}
        </p>
      )}
    </div>
  );
};

const Work = () => {
  return (
    <section className="w-full bg-black text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center ">
            Join Byterz Tech as an Intern
          </h2>
          <p className="text-center text-rose-200">
            Explore our internship program designed to help you grow professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
          <div className="relative">
            <WorkCard
              num="01"
              title="REGISTER & OFFER LETTER"
              details="Complete your internship program application by using the button below."
              instruction="Please ensure all fields are filled out correctly."
              
              buttonLabel="View Registration Form"
              buttonLink="https://forms.gle/osFrC5p1zf9pNB5S6" // Link to the registration form
            />
          </div>

          <div className="relative">
            <WorkCard
              num="02"
              title="TASK ASSIGNMENT"
              details="In our WhatsApp group, we will provide you with five different tasks. You can choose any three to complete."
              instruction="Receive tasks that you can follow and complete at your own pace."
              buttonLabel="Join Whatsapp"
              buttonLink="https://chat.whatsapp.com/DG0u28mlCAdFjsnHLA68pO"
            />
          </div>

          <div className="relative">
            <WorkCard
              num="03"
              title="SUBMISSION & CERTIFICATION"
              details="Submit your completed tasks for review and receive your certificate."
              duration="1 Month" // Added duration only to this card
              certificate="Certificate provided within 1 week"
            />
          </div>
        </div>

        {/* Button Section */}
        
      </div>
    </section>
  );
};

export default Work;