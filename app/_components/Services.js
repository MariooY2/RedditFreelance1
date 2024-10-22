function FeatureSection1() {
  return (
    <div className="flex flex-wrap items-stretch bg-gray-100 h-auto">
      <div className="w-full md:w-1/2 h-96 ">
        <img
          src="https://via.placeholder.com/850"
          alt="Descriptive Alt Text"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        <div className="max-w-md mx-auto mt-12">
          <h2 className="text-xl font-bold mb-5">Feature Title</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diamLorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam.
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureSection2() {
  return (
    <>
      <div className="flex flex-row-reverse flex-wrap items-stretch bg-gray-100 h-auto">
      <div className="w-full md:w-1/2 h-96 ">
        <img
          src="https://via.placeholder.com/850"
          alt="Descriptive Alt Text"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        <div className="max-w-md mx-auto mt-12">
          <h2 className="text-xl font-bold mb-5">Feature Title</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diamLorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

function Services() {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-4xl">Our Services</h1>
      </div>
      <FeatureSection1 />
      <FeatureSection2 />
    </div>
  );
}

export default Services;
