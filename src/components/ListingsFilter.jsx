import { useState } from 'react';

export default function ListingFilter({ listings, residentialListings, commercialListings }) {
  const [filter, setFilter] = useState('all');

  const filteredListings = {
    all: listings,
    residential: residentialListings,
    commercial: commercialListings
  }[filter];

  const title = {
    all: 'All Listings',
    residential: 'Residential Listings',
    commercial: 'Commercial Listings'
  }[filter];

  const opacityAll = filter === 'all' ? 'opacity-80' : 'opacity-50';
  const opacityRes = filter === 'residential' ? 'opacity-80' : 'opacity-50';
  const opacityCom = filter === 'commercial' ? 'opacity-80' : 'opacity-50';

  // FUNCTION: Get details summary data and format
  const getDetailsSummaryFrom = (item) => {
    // Check if item has details
    if (item.details.length) {
      const details = [...item.details].shift();
      const list = {
        bedrooms: `${details.bedrooms} Bedroom`,
        fullBaths:
          details.full_baths !== "" ? ` | ${details.full_baths} Full Baths` : "",
        halfBaths:
          details.half_baths !== "" ? ` | ${details.half_baths} Half Baths` : "",
        sqft: details.square_feet !== "" ? ` | ${details.square_feet} sqft` : "",
      };
      return Object.values(list);
    }
  };

  return (
    <div>
      {/* TITLE AND BUTTONS */}
      <div
        className="list-header w-full flex justify-between text-grey-500
        px-4 md:px-8 lg:px-12 py-8 border-b border-golden-200 shadow-sm"
      >
        {/* <!-- Title --> */}
        <div className="title content-center uppercase font-extralight">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">{title}</h2>
        </div>
        {/* <!-- Filter Buttons --> */}
        <div className="filters content-center flex gap-1 md:gap-2 h-full ml-1">
          <button
            onClick={() => setFilter('all')}
            type="button"
            className={`border border-gray-500 font-medium ${opacityAll} rounded-lg
            text-xs md:text-sm px-4 md:px-10 py-1.5 md:py-2.5 focus:outline-none flex`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('residential')}
            type="button"
            className={`border border-gray-500 opacity-50 font-medium ${opacityRes} rounded-lg
            text-xs md:text-sm px-4 md:zpx-5 py-1.5 md:py-2.5 focus:outline-none flex`}
          >
            Residential
          </button>
          <button
            onClick={() => setFilter('commercial')}
            type="button"
            className={`border border-gray-500 opacity-50 font-medium ${opacityCom} rounded-lg
            text-xs md:text-sm px-4 md:px-5 py-1.5 md:py-2.5 focus:outline-none flex`}
          >
            Commercial
          </button>
        </div>
      </div>

      {/* Check if filteredListings is empty */}
      {filteredListings.length === 0 ? (
        <p className="text-3xl font-light text-center pt-12">No listings available for this filter.</p>
      ) : (
        // <!-- List -->
        <div className="grid gap-8 my-8 px-4 md:px-8">
          {filteredListings.map((listing) => (
            <div key={listing.id}>
              <div className="rounded-sm border border-golden-200 bg-white shadow-md p-6">
                <div className="grid grid-cols-6 gap-4 md:m-4">
                  <div className="card-image col-span-6 sm:col-span-3 lg:col-span-2">
                    <div className="min-h-72 h-full w-full rounded-md overflow-hidden">
                      <a href={listing.slug}>
                        <img 
                          src={listing.content.featured_media[0].image.filename} 
                          srcSet={`${listing.content.featured_media[0].image.filename} 540w, ${listing.content.featured_media[0].image.filename} 720w`}
                          sizes="(max-with: 720px) 540px, (max-width: 1024) 720px" 
                          alt={listing.content.featured_media[0].image.alt} 
                          width="1200" 
                          height="804" 
                          loading="lazy" 
                          decoding="async" 
                          className="flex object-cover h-full" 
                          ></img>
                      </a>
                    </div>
                  </div>
                  <div
                    className="card-details col-span-6 sm:col-span-3 lg:col-span-4 
                  grid grid-rows-3 px-4"
                  >
                    <div className="flex-col sm:flex sm:justify-between">
                      <div className="listing-name">
                        <h2 className="text-3xl">{listing.name}</h2>
                      </div>
                      <div className="status">
                        <button className="flex rounded-sm px-4 py-1 mt-1 mb-2 md:py-2 text-xs md:text-sm capitalize border border-golden-400 text-golden-400 opacity-75">
                          <p>{listing.content.details[0].category} | </p>
                          <span className="text-green-500 pl-1">
                            {listing.content.status}
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="listing-details text-2xl font-light pb-2 content-center">
                      <p>{getDetailsSummaryFrom(listing.content)}</p>
                    </div>
                    <div className="card-footer justify-between flex sm:flex-col lg:flex-row">
                      <p className="text-3xl place-self-end sm:max-lg:place-self-center mr-1 pb-2">
                        {listing.content.price[0].text}
                      </p>
                      <button
                        className="place-self-end sm:max-lg:place-self-center
                      px-6 py-1 mt-1 mb-2 md:py-2 lg:px-12
                      text-xs md:text-sm capitalize
                      border border-golden-400 text-golden-400 opacity-75 shadow-md"
                      >
                        <a
                          href={listing.slug}
                          className="text-xl uppercase font-semibold"
                        >
                          See Listing
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
