import dynamic from "next/dynamic";
import React from "react";
import {promises as fs} from "fs";
import path from "path";

export default function Home(props) {
  const MapComponent = dynamic(import("../components/mapComponent"), {
    ssr: false,
  });
  return (
    <div className="main">
      <MapComponent
        lon="-14"
        lat="24.5"
        countries={props.data.countries}
        pathfinderExploratory={props.data.pathfinders.exploratory}
        pathfinderConfirmed={props.data.pathfinders.confirmed}
        digitalGoods={props.data.digitalGoods}
        story={props.data.story}
        devPolygons={props.data.polygons[1]}
        depPolygons={props.data.polygons[0]}
      />
    </div>
  );
}

export async function getStaticProps() {
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
  const fetchData = async () => {
    var countries = {};

    const result = await fetch(
      "https://api.github.com/search/code?q=repo:unicef/publicgoods-candidates+path:digitalpublicgoods+filename:.json"
    );
    const goodsFileNames = await result.json();
    const handleCountries = (data) => {
      let deployGoods = {};
      let developmentGoods = {};
      let c = countries;
      data.locations.deploymentCountries.map((country) => {
        if (!alpha3[country]) {
          // console.log("Mismatched good" + country);
        } else {
          if (!Object.keys(c).find((e) => e == alpha3[country])) {
            c[alpha3[country]] = {};
          }
          let code = alpha3[country];
          deployGoods[code] = country;
          c[code].deployGoods
            ? c[code].deployGoods.push(data.name)
            : (c[code].deployGoods = [data.name]);
        }
      });
      data.locations.deploymentCountries = deployGoods;
      data.locations.developmentCountries.forEach((country) => {
        if (!alpha3[country]) {
          // console.log("Mismatched good" + country);
        } else {
          if (!Object.keys(c).find((e) => e == alpha3[country])) {
            c[alpha3[country]] = {};
          }
          let code = alpha3[country];
          developmentGoods[code] = country;
          c[code].devGoods
            ? c[code].devGoods.push(data.name)
            : (c[code].devGoods = [data.name]);
        }
      });
      data.locations.developmentCountries = developmentGoods;

      countries = c;
      return data;
    };
    const digitalGoodsData = await goodsFileNames.items.map(async (filename) => {
      const res = await fetch(
        "https://raw.githubusercontent.com/unicef/publicgoods-candidates/master/digitalpublicgoods/" +
          filename.name
      );
      const fileContents = await res.text();
      const nomineeRes = await fetch(
        "https://raw.githubusercontent.com/unicef/publicgoods-candidates/master/nominees/" +
          filename.name
      );
      const nomineeFileContents = await nomineeRes.text();
      try {
        let goodsData = JSON.parse(fileContents);

        let nomineeData = JSON.parse(nomineeFileContents);
        return {...handleCountries(goodsData), ...nomineeData};
      } catch (error) {
        // handle linked json
        const res = await fetch(
          "https://raw.githubusercontent.com/unicef/publicgoods-candidates/master/digitalpublicgoods/" +
            fileContents
        );
        const nestedFileContent = await res.text();
        const nnomineeRes = await fetch(
          "https://raw.githubusercontent.com/unicef/publicgoods-candidates/master/nominees/" +
            filename.name
        );
        const nestedNomineeFileContents = await nnomineeRes.text();
        let ngoodsData = JSON.parse(nestedFileContent);
        ngoodsData.name = filename.name.replace(".json", "");
        let nnomineeData = JSON.parse(nestedNomineeFileContents);
        return {...handleCountries(ngoodsData), ...nnomineeData};
      }
    });
    var digitalGoodsArr = await Promise.all(digitalGoodsData);
    // slightly changed function from g-sheets-api https://github.com/bpk68/g-sheets-api/blob/master/src/gsheetsprocessor.js
    async function processGSheetResults(JSONResponse) {
      const data = JSONResponse.feed.entry;
      const startRow = 2; // skip the header row(1), don't need it

      let processedResults = [{}];
      let colNames = {};

      for (let item of data) {
        const cell = item["gs$cell"]; // gets cell data
        const val = cell["$t"]; // gets cell value
        const columnNum = cell["col"]; // gets the col number
        const thisRow = cell["row"]; // gets the row number

        const colNameToAdd = colNames[columnNum]; // careful, this will be undefined if we hit it on the first pass

        // don't add this row to the return data, but add it to list of column names
        if (thisRow < startRow) {
          colNames[columnNum] = val;
          continue; // skip the header row
        }

        if (typeof processedResults[thisRow] === "undefined") {
          processedResults[thisRow] = {};
        }

        if (typeof colNameToAdd !== "undefined" && colNameToAdd.length > 0) {
          processedResults[thisRow][colNameToAdd] = val;
        }
      }

      // make sure we're only returning valid, filled data items
      processedResults = processedResults.filter((result) => Object.keys(result).length);

      // account for cells with empty data
      processedResults = processedResults.map((obj) => {
        const row = {};
        if (obj !== undefined && Object.keys(obj).length > 0) {
          Object.values(colNames).forEach((colName) => {
            row[colName] = obj[colName] || null;
          });
          return row;
        }
        return;
      });

      return processedResults;
    }
    const addStory = (results) => {
      // replace all //n //r, FALSE
      for (let i = 0; i < results.length; i++) {
        results[i].text = results[i].text.replace(/[\r\n]+/gm, " ");
        results[i].image = results[i].image.replace("FALSE", false);
        results[i].image = results[i].image.replace("TRUE", true);
      }
      return results;
    };
    const loadGsheet = async (sheetId, sheetNumber) => {
      let sheetResponse = await fetch(
        `https://spreadsheets.google.com/feeds/cells/${sheetId}/${sheetNumber}/public/values?alt=json-in-script`
      );
      let resultText = await sheetResponse.text();
      let formattedText = resultText
        .replace("gdata.io.handleScriptLoaded(", "")
        .slice(0, -2);
      return await JSON.parse(formattedText);
    };
    const storyGData = await loadGsheet(process.env.NEXT_PUBLIC_SHEET, 3);
    const storyData = addStory(await processGSheetResults(storyGData));

    const addCountries = async (results, label) => {
      let s = {};
      let l = {};
      let c = countries;
      results.forEach((el, i) => {
        if (!alpha3[el.Country]) {
          console.log("Mismatched " + el.country);
        } else {
          if (!Object.keys(c).find((e) => e == alpha3[el.Country])) {
            c[alpha3[el.Country]] = {};
          }
          c[alpha3[el.Country]][label] = el;

          el.Status == "Confirmed"
            ? (s[alpha3[el.Country]] = el)
            : (l[alpha3[el.Country]] = el);
        }
      });
      countries = c;
      return {confirmed: s, exploratory: l};
    };
    const pathfinderData = await loadGsheet(process.env.NEXT_PUBLIC_SHEET, 1);
    const pathfinders = await addCountries(
      await processGSheetResults(pathfinderData),
      "pathfinder"
    );

    const polygonsDirectory = path.join(process.cwd(), "public");
    const filenames = await fs.readdir(polygonsDirectory);
    const polygons = filenames
      .filter((el) =>
        ["polygons-deployments.geojson", "polygons-developments.geojson"].includes(el)
      )
      .map(async (filename, index) => {
        const filePath = path.join(polygonsDirectory, filename);
        const fileContents = await fs.readFile(filePath, "utf8");
        const polygon = JSON.parse(fileContents);

        if (index == 1) {
          polygon["features"].map((el) => {
            el.properties["text-field"] = digitalGoodsArr
              .filter((good) =>
                Object.keys(good.locations.developmentCountries).includes(
                  el.properties.iso
                )
              )
              .length.toString();
            el.properties["height"] = parseFloat(el.properties["text-field"]) * 10000;
            el.properties["base"] = el.properties["height"] == 0 ? 999999999999 : 0;
            el.properties["height"] += el.properties["height"] == 0 ? 999999999999 : 0;
          });
        } else {
          polygon["features"].map((el) => {
            el.properties["text-field"] = digitalGoodsArr
              .filter((good) =>
                Object.keys(good.locations.deploymentCountries).includes(
                  el.properties.iso
                )
              )
              .length.toString();
            el.properties["height"] = parseFloat(el.properties["text-field"]) * 10000;
            el.properties["base"] = el.properties["height"] == 0 ? 999999999999 : 0;
            el.properties["height"] += el.properties["height"] == 0 ? 999999999999 : 0;
          });
        }
        return polygon;
      });

    return {
      countries: countries,
      digitalGoods: digitalGoodsArr,
      pathfinders: pathfinders,
      polygons: await Promise.all(polygons),
      story: storyData,
    };
  };
  return {
    props: {
      data: await fetchData(),
    },
    revalidate: 60,
  };
}
