"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const cities = [
  "Bangalore",
  "Mumbai",
  "Hyderabad",
  "Thane",
  "Pune",
  "New Delhi",
  "Chennai",
  "Ahmedabad",
  "Kolkata",
  "Gurgaon",
  "Noida",
  "Navi Mumbai",
  "Others"
] as const;

type City = (typeof cities)[number];

type OptionGroup = {
  title: string;
  items: string[];
};

const bangaloreGroups: OptionGroup[] = [
  {
    title: "Flats",
    items: [
      "Flats in Bangalore",
      "Flats in Whitefield",
      "Flats in Sarjapur Road",
      "Flats in Electronic City",
      "Flats in Koramangala",
      "Flats in HSR Layout",
      "Flats in Marathahalli",
      "Flats in Hebbal",
      "Flats in Kanakapura Road",
      "Flats in Bellandur",
      "Flats in Varthur"
    ]
  },
  {
    title: "House for Sale",
    items: [
      "House for Sale in Bangalore",
      "House for Sale in Whitefield",
      "House for Sale in HSR Layout",
      "House for Sale in JP Nagar",
      "House for Sale in Koramangala",
      "House for Sale in Sarjapur Road",
      "House for Sale in Hebbal",
      "House for Sale in Yelahanka",
      "House for Sale in Electronic City",
      "House for Sale in Marathahalli",
      "House for Sale in Bellandur"
    ]
  },
  {
    title: "Property",
    items: [
      "Property in Bangalore",
      "Property in Whitefield",
      "Property in Sarjapur Road",
      "Property in Electronic City",
      "Property in Yelahanka",
      "Property in HSR Layout",
      "Property in Koramangala",
      "Property in Marathahalli",
      "Property in Hebbal",
      "Property in JP Nagar",
      "Property in Bellandur"
    ]
  },
  {
    title: "Plots",
    items: [
      "Plots in Bangalore",
      "Plots in Whitefield",
      "Plots in Sarjapur Road",
      "Plots in Yelahanka",
      "Plots in Electronic City",
      "Plots in HSR Layout",
      "Plots in Kanakapura Road",
      "Plots in Marathahalli",
      "Plots in JP Nagar",
      "Plots in Sarjapur",
      "Plots in Bellandur"
    ]
  }
];

function buildGenericGroups(city: City): OptionGroup[] {
  return [
    {
      title: "Flats",
      items: [
        `Flats in ${city}`,
        `2 BHK Flats in ${city}`,
        `3 BHK Flats in ${city}`,
        `Ready to Move Flats in ${city}`,
        `Luxury Flats in ${city}`,
        `Affordable Flats in ${city}`
      ]
    },
    {
      title: "House for Sale",
      items: [
        `House for Sale in ${city}`,
        `Independent House in ${city}`,
        `Villa in ${city}`,
        `Gated Community Homes in ${city}`,
        `Resale House in ${city}`,
        `New Launch Homes in ${city}`
      ]
    },
    {
      title: "Property",
      items: [
        `Property in ${city}`,
        `New Projects in ${city}`,
        `Apartments in ${city}`,
        `Commercial Property in ${city}`,
        `Investment Property in ${city}`,
        `Verified Listings in ${city}`
      ]
    },
    {
      title: "Plots",
      items: [
        `Plots in ${city}`,
        `Residential Plots in ${city}`,
        `Corner Plots in ${city}`,
        `Gated Plots in ${city}`,
        `Approved Plots in ${city}`,
        `Plots for Investment in ${city}`
      ]
    }
  ];
}

const cityGroups: Record<City, OptionGroup[]> = cities.reduce((acc, city) => {
  acc[city] = city === "Bangalore" ? bangaloreGroups : buildGenericGroups(city);
  return acc;
}, {} as Record<City, OptionGroup[]>);

function toSlug(city: City) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

export function PropertyCityTabsSection() {
  const [activeCity, setActiveCity] = useState<City>("Bangalore");
  const groups = cityGroups[activeCity];
  const activeSlug = toSlug(activeCity);

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="section-heading mb-4">
          <h2 className="mb-2 text-center">Property Options in Top Cities for Buy</h2>
          <div className="sec-line">
            <span className="sec-line1"></span>
            <span className="sec-line2"></span>
          </div>
          <p className="mb-0 text-center">Explore high-intent property searches across major Indian markets.</p>
        </div>

        <div className="overflow-x-auto border-bottom border-slate-200 pb-1">
          <div className="flex min-w-max items-end gap-1 md:justify-center" role="tablist" aria-label="Top cities for buying property">
            {cities.map((city) => {
              const citySlug = toSlug(city);
              const isActive = activeCity === city;

              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => setActiveCity(city)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`city-panel-${citySlug}`}
                  id={`city-tab-${citySlug}`}
                  className={cn(
                    "border-0 border-bottom border-2 bg-transparent px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "border-slate-900 text-slate-900"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"
                  )}
                >
                  {city}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="mt-4 border border-slate-200 bg-slate-50 p-4 md:p-6"
          role="tabpanel"
          id={`city-panel-${activeSlug}`}
          aria-labelledby={`city-tab-${activeSlug}`}
        >
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <h3 className="mb-1 text-xl font-semibold text-slate-900">{activeCity}</h3>
              <p className="mb-0 text-sm text-slate-600">Popular buy-side search combinations for {activeCity}.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title} className="border border-slate-200 bg-white p-4">
                <h4 className="mb-3 text-base font-semibold text-slate-900">{group.title}</h4>
                <ul className="m-0 list-unstyled space-y-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="javascript:void(0);" className="text-sm text-slate-700 hover:text-slate-900">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
