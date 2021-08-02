import dynamic from "next/dynamic";
import React, {useState, useEffect} from "react";
import GSheetReader from "g-sheets-api";
import dpgaLogo from "../public/logo.svg";
import developmentPolygons from "../public/polygons-developments.geojson";
import deploymentPolygons from "../public/polygons-deployments.geojson";

const alpha3 = {
  Aruba: "ABW",
  Afghanistan: "AFG",
  Angola: "AGO",
  Anguilla: "AIA",
  "Åland Islands": "ALA",
  Albania: "ALB",
  Andorra: "AND",
  "Netherlands Antilles": "ANT",
  "United Arab Emirates": "ARE",
  Argentina: "ARG",
  Armenia: "ARM",
  "American Samoa": "ASM",
  Antarctica: "ATA",
  "French Southern Territories": "ATF",
  "Antigua and Barbuda": "ATG",
  Australia: "AUS",
  Austria: "AUT",
  Azerbaijan: "AZE",
  Burundi: "BDI",
  Belgium: "BEL",
  Benin: "BEN",
  "Burkina Faso": "BFA",
  Bangladesh: "BGD",
  Bulgaria: "BGR",
  Bahrain: "BHR",
  Bahamas: "BHS",
  "Bosnia and Herzegovina": "BIH",
  "Saint Barthélemy": "BLM",
  Belarus: "BLR",
  Belize: "BLZ",
  Bermuda: "BMU",
  Bolivia: "BOL",
  Brazil: "BRA",
  Barbados: "BRB",
  "Brunei Darussalam": "BRN",
  Bhutan: "BTN",
  "Bouvet Island": "BVT",
  Botswana: "BWA",
  "Central African Republic": "CAF",
  Canada: "CAN",
  "Cocos (Keeling) Islands": "CCK",
  Switzerland: "CHE",
  Chile: "CHL",
  China: "CHN",
  "Côte d'Ivoire": "CIV",
  Cameroon: "CMR",
  "Congo, DRC": "COD",
  Congo: "COG",
  "Cook Islands": "COK",
  Colombia: "COL",
  Comoros: "COM",
  "Cape Verde": "CPV",
  "Costa Rica": "CRI",
  Cuba: "CUB",
  "Christmas Island": "CXR",
  "Cayman Islands": "CYM",
  Cyprus: "CYP",
  "Czech Republic": "CZE",
  Czechia: "CZE",
  Germany: "DEU",
  Djibouti: "DJI",
  Dominica: "DMA",
  Denmark: "DNK",
  "Dominican Republic": "DOM",
  Algeria: "DZA",
  Ecuador: "ECU",
  Egypt: "EGY",
  Eritrea: "ERI",
  "Western Sahara": "ESH",
  Spain: "ESP",
  Estonia: "EST",
  Ethiopia: "ETH",
  Finland: "FIN",
  Fiji: "FJI",
  "Falkland Islands (Malvinas)": "FLK",
  France: "FRA",
  "Faroe Islands": "FRO",
  "Micronesia, Federated States of": "FSM",
  Gabon: "GAB",
  "United Kingdom": "GBR",
  Georgia: "GEO",
  Guernsey: "GGY",
  Ghana: "GHA",
  Gibraltar: "GIB",
  Guinea: "GIN",
  Guadeloupe: "GLP",
  Gambia: "GMB",
  "Guinea-Bissau": "GNB",
  "Equatorial Guinea": "GNQ",
  Greece: "GRC",
  Grenada: "GRD",
  Greenland: "GRL",
  Guatemala: "GTM",
  "French Guiana": "GUF",
  Guam: "GUM",
  Guyana: "GUY",
  "Hong Kong": "HKG",
  "Heard Island and McDonald Islands": "HMD",
  Honduras: "HND",
  Croatia: "HRV",
  Haiti: "HTI",
  Hungary: "HUN",
  Indonesia: "IDN",
  "Isle of Man": "IMN",
  India: "IND",
  "British Indian Ocean Territory": "IOT",
  Ireland: "IRL",
  "Iran, Islamic Republic of": "IRN",
  Iran: "IRN",
  Iraq: "IRQ",
  Iceland: "ISL",
  Israel: "ISR",
  Italy: "ITA",
  Jamaica: "JAM",
  Jersey: "JEY",
  Jordan: "JOR",
  Japan: "JPN",
  Kazakhstan: "KAZ",
  Kenya: "KEN",
  Kyrgyzstan: "KGZ",
  Cambodia: "KHM",
  Kiribati: "KIR",
  "Saint Kitts and Nevis": "KNA",
  "Korea, Republic of": "KOR",
  Kuwait: "KWT",
  "Lao People's Democratic Republic": "LAO",
  Lebanon: "LBN",
  Liberia: "LBR",
  "Libyan Arab Jamahiriya": "LBY",
  "Saint Lucia": "LCA",
  Liechtenstein: "LIE",
  "Sri Lanka": "LKA",
  Lesotho: "LSO",
  Lithuania: "LTU",
  Luxembourg: "LUX",
  Latvia: "LVA",
  Macao: "MAC",
  "Saint Martin (French part)": "MAF",
  Morocco: "MAR",
  Monaco: "MCO",
  "Moldova, Republic of": "MDA",
  Madagascar: "MDG",
  Maldives: "MDV",
  Mexico: "MEX",
  "Marshall Islands": "MHL",
  "Macedonia, the former Yugoslav Republic of": "MKD",
  Mali: "MLI",
  Malta: "MLT",
  Myanmar: "MMR",
  Montenegro: "MNE",
  Mongolia: "MNG",
  "Northern Mariana Islands": "MNP",
  Mozambique: "MOZ",
  Mauritania: "MRT",
  Montserrat: "MSR",
  Martinique: "MTQ",
  Mauritius: "MUS",
  Malawi: "MWI",
  Malaysia: "MYS",
  Mayotte: "MYT",
  Namibia: "NAM",
  "New Caledonia": "NCL",
  Niger: "NER",
  "Norfolk Island": "NFK",
  Nigeria: "NGA",
  Nicaragua: "NIC",
  Niue: "NIU",
  Netherlands: "NLD",
  Norway: "NOR",
  Nepal: "NPL",
  Nauru: "NRU",
  "New Zealand": "NZL",
  Oman: "OMN",
  Pakistan: "PAK",
  Panama: "PAN",
  Pitcairn: "PCN",
  Peru: "PER",
  Philippines: "PHL",
  Palau: "PLW",
  "Papua New Guinea": "PNG",
  Poland: "POL",
  "Puerto Rico": "PRI",
  "Korea, Democratic People's Republic of": "PRK",
  Portugal: "PRT",
  Paraguay: "PRY",
  Palestine: "PSE",
  "French Polynesia": "PYF",
  Qatar: "QAT",
  Réunion: "REU",
  Romania: "ROU",
  "Russian Federation": "RUS",
  Rwanda: "RWA",
  "Saudi Arabia": "SAU",
  Sudan: "SDN",
  Senegal: "SEN",
  Singapore: "SGP",
  "South Georgia and the South Sandwich Islands": "SGS",
  "Saint Helena, Ascension and Tristan da Cunha": "SHN",
  "Svalbard and Jan Mayen": "SJM",
  "Solomon Islands": "SLB",
  "Sierra Leone": "SLE",
  "El Salvador": "SLV",
  "San Marino": "SMR",
  Somalia: "SOM",
  "Saint Pierre and Miquelon": "SPM",
  Serbia: "SRB",
  "Sao Tome and Principe": "STP",
  Suriname: "SUR",
  Slovakia: "SVK",
  Slovenia: "SVN",
  Sweden: "SWE",
  Swaziland: "SWZ",
  Seychelles: "SYC",
  Syria: "SYR",
  "Turks and Caicos Islands": "TCA",
  Chad: "TCD",
  Togo: "TGO",
  Thailand: "THA",
  Tajikistan: "TJK",
  Tokelau: "TKL",
  Turkmenistan: "TKM",
  "Timor-Leste": "TLS",
  Tonga: "TON",
  "Trinidad and Tobago": "TTO",
  Tunisia: "TUN",
  Turkey: "TUR",
  Tuvalu: "TUV",
  "Taiwan, Province of China": "TWN",
  Taiwan: "TWN",
  Tanzania: "TZA",
  Uganda: "UGA",
  Ukraine: "UKR",
  "United States Minor Outlying Islands": "UMI",
  Uruguay: "URY",
  "United States": "USA",
  USA: "USA",
  Uzbekistan: "UZB",
  "Holy See (Vatican City State)": "VAT",
  "Saint Vincent and the Grenadines": "VCT",
  "Venezuela, Bolivarian Republic of": "VEN",
  "Virgin Islands, British": "VGB",
  "Virgin Islands, U.S.": "VIR",
  Vietnam: "VNM",
  Vanuatu: "VUT",
  "Wallis and Futuna": "WLF",
  Samoa: "WSM",
  Yemen: "YEM",
  "South Africa": "ZAF",
  Zambia: "ZMB",
  Zimbabwe: "ZWE",
};

export default function Home() {
  const [countries, setCountries] = useState({});
  const [digitalGoods, setDigitalGoods] = useState([]);
  const [pathfinder, setPathfinder] = useState([]);
  const [pathfinderImplemented, setPathfinderImplemented] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [story, setStory] = useState([]);
  const [devPolygons, setDevPolygons] = useState({});
  const [depPolygons, setDepPolygons] = useState({});


  const options = {
    sheetId: process.env.NEXT_PUBLIC_SHEET,
    sheetNumber: 1,
    returnAllResults: true,
  };

  const addCountries = async (results, label) => {
    let l = [];
    let z = [];
    let c = countries;
    for (let i = 0; i < results.length; i++) {
      if (!alpha3[results[i].country]) {
        // console.log("Mismatched " + results[i].country);
      } else {
        if (!Object.keys(c).find((e) => e == alpha3[results[i].country])) {
          c[alpha3[results[i].country]] = {};
        }
        c[alpha3[results[i].country]][label] = results[i];

        results[i].status == "Confirmed"
          ? (z[alpha3[results[i].country]] = results[i])
          : (l[alpha3[results[i].country]] = results[i]);
      }
    }
    setCountries(c);
    setPathfinder(l);
    setPathfinderImplemented(z);
  };

  const addStory = (results) => {
    // replace all //n //r, FALSE before setStory
    for (let i = 0; i < results.length; i++) {
      results[i].text = results[i].text.replace(/[\r\n]+/gm, " ");
      results[i].image = results[i].image.replace("FALSE", false);
      results[i].image = results[i].image.replace("TRUE", true);
    }
    setStory(results);
  };

  const addGoodsCountries = (good, maxGoods, nomineeData) => {
    // need to refactor
    let deployGoods = {};
    let developmentGoods = {};
    let c = countries;
    good.locations.deploymentCountries.map((country) => {
      if (!alpha3[country]) {
        // console.log("Mismatched good" + country);
      } else {
        if (!Object.keys(c).find((e) => e == alpha3[country])) {
          c[alpha3[country]] = {};
        }
        let code = alpha3[country];
        deployGoods[code] = country;
        c[code].deployGoods
          ? c[code].deployGoods.push(good.name)
          : (c[code].deployGoods = [good.name]);
      }
    });
    good.locations.deploymentCountries = deployGoods;

    good.locations.developmentCountries.forEach((country) => {
      if (!alpha3[country]) {
        // console.log("Mismatched good" + country);
      } else {
        if (!Object.keys(c).find((e) => e == alpha3[country])) {
          c[alpha3[country]] = {};
        }
        let code = alpha3[country];
        developmentGoods[code] = country;
        c[code].devGoods
          ? c[code].devGoods.push(good.name)
          : (c[code].devGoods = [good.name]);
      }
    });
    good.locations.developmentCountries = developmentGoods;
    setCountries(c);

    //merge arrays
    good = {...good, ...nomineeData};

    setDigitalGoods((digitalGoods) => {
      if ([...digitalGoods, good].length == maxGoods) {
        setLoaded(true);
        // set development polygons based on amount of goods developed in each country
        developmentPolygons["features"].map((el) => {
          el.properties["text-field"] = [...digitalGoods, good].filter((good) =>
            Object.keys(good.locations.developmentCountries).includes(el.properties.iso)
          ).length.toString();
          el.properties["height"] = parseFloat(el.properties["text-field"]) * 10000;
          el.properties["base"] = el.properties["height"] == 0 ? 999999999999 : 0;
          el.properties["height"] += el.properties["height"] == 0 ? 999999999999 : 0;
        });
        setDevPolygons(developmentPolygons);
        // set deployment polygons based on amount of goods deployed in each country
        deploymentPolygons["features"].map((el) => {
          el.properties["text-field"] = [...digitalGoods, good].filter((good) =>
            Object.keys(good.locations.deploymentCountries).includes(el.properties.iso)
          ).length.toString();
          el.properties["height"] = parseFloat(el.properties["text-field"]) * 10000;
          el.properties["base"] = el.properties["height"] == 0 ? 999999999999 : 0;
          el.properties["height"] += el.properties["height"] == 0 ? 999999999999 : 0;
        });
        setDepPolygons(deploymentPolygons);
      }
      return [...digitalGoods, good];
    });
  };

  const getDigitalGoods = async (name, loop, nameHandler, maxGoods) => {
    var nomineeData;
    await getNomineeData(name).then((res) => (nomineeData = res));
    fetch(
      "https://raw.githubusercontent.com/unicef/publicgoods-candidates/master/digitalpublicgoods/" +
        name
    )
      .then((response) => response.text())
      .then(async (text) => {
        try {
          let data = JSON.parse(text);
          if (nameHandler) {
            data.name = nameHandler;
            await getNomineeData(nameHandler + ".json").then(
              (res) => (nomineeData = res)
            );
          }
          addGoodsCountries(data, maxGoods, nomineeData);
        } catch (error) {
          // handle linked json
          if (loop >= 2) return;
          getDigitalGoods(text, loop + 1, name.replace(".json", ""), maxGoods); // add loop variable to avoid recursion and delete .json extension from name
        }
      });
  };
  const getNomineeData = (name) => {
    return fetch(
      "https://raw.githubusercontent.com/unicef/publicgoods-candidates/master/nominees/" +
        name
    )
      .then((response) => response.json())
      .then((response) => response);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://api.github.com/search/code?q=repo:unicef/publicgoods-candidates+path:digitalpublicgoods+filename:.json"
      ).then(function (response) {
        return response.json();
      });
      await result.items.map((data) => {
        getDigitalGoods(data.name, 0, null, result.items.length);
      });
      GSheetReader(options, (results) => {
        addCountries(results, "pathfinder");
      });
      let options2 = options;
      options2.sheetNumber = 3;
      GSheetReader(options2, (results) => {
        addStory(results);
      });
    };
    fetchData();
  }, []);

  const MapComponent = dynamic(import("../components/mapComponent"), {
    ssr: false,
  });

  return (
    <div className="main">
      {!loaded && <img className="loader" src={dpgaLogo}></img>}
      {/* {loaded && story.length && <ScrollyComp story={story}/>} */}
      {loaded && (
        <MapComponent
          lon="-14"
          lat="24.5"
          countries={countries}
          pathfinderCountries={pathfinder}
          pathfinderImplemented={pathfinderImplemented}
          digitalGoods={digitalGoods}
          story={story}
          devPolygons={devPolygons}
          depPolygons={depPolygons}
        />
      )}
    </div>
  );
}
