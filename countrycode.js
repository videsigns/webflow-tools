// will get either country / countrycode
const dropdownList = document.querySelectorAll(`[data-dropdown]`)

var link = document.createElement("link");
link.href = "https://dropdown.nadaafarook.repl.co/style.css";
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);



function getCountryFlag(cc) {
  if (cc.length !== 2)
    return cc;

  function risl(chr) {
    return String.fromCodePoint(0x1F1E6 - 65 + chr.toUpperCase().charCodeAt(0));
  }
  return risl(cc[0]) + risl(cc[1]);
}

async function render() {
  const res = [
    {
      "name": "Afghanistan",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "AF",
      "alpha3Code": "AFG",
      "dial_code": "+93"
    },
    {
      "name": "Åland Islands",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "AX",
      "alpha3Code": "ALA",
      "dial_code": "+358"
    },
    {
      "name": "Albania",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "AL",
      "alpha3Code": "ALB",
      "dial_code": "+355"
    },
    {
      "name": "Algeria",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "DZ",
      "alpha3Code": "DZA",
      "dial_code": "+213"
    },
    {
      "name": "American Samoa",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "AS",
      "alpha3Code": "ASM",
      "dial_code": "+1684"
    },
    {
      "name": "Andorra",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "AD",
      "alpha3Code": "AND",
      "dial_code": "+376"
    },
    {
      "name": "Angola",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "AO",
      "alpha3Code": "AGO",
      "dial_code": "+244"
    },
    {
      "name": "Anguilla",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "AI",
      "alpha3Code": "AIA",
      "dial_code": "+1264"
    },
    {
      "name": "Antarctica",
      "region": "Polar",
      "subregion": "Antarctica",
      "alpha2Code": "AQ",
      "alpha3Code": "ATA",
      "dial_code": "+672"
    },
    {
      "name": "Antigua and Barbuda",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "AG",
      "alpha3Code": "ATG",
      "dial_code": "+1268"
    },
    {
      "name": "Argentina",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "AR",
      "alpha3Code": "ARG",
      "dial_code": "+54"
    },
    {
      "name": "Armenia",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "AM",
      "alpha3Code": "ARM",
      "dial_code": "+374"
    },
    {
      "name": "Aruba",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "AW",
      "alpha3Code": "ABW",
      "dial_code": "+297"
    },
    {
      "name": "Australia",
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "alpha2Code": "AU",
      "alpha3Code": "AUS",
      "dial_code": "+61"
    },
    {
      "name": "Austria",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "AT",
      "alpha3Code": "AUT",
      "dial_code": "+43"
    },
    {
      "name": "Azerbaijan",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "AZ",
      "alpha3Code": "AZE",
      "dial_code": "+994"
    },
    {
      "name": "Bahamas",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "BS",
      "alpha3Code": "BHS",
      "dial_code": "+1242"
    },
    {
      "name": "Bahrain",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "BH",
      "alpha3Code": "BHR",
      "dial_code": "+973"
    },
    {
      "name": "Bangladesh",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "BD",
      "alpha3Code": "BGD",
      "dial_code": "+880"
    },
    {
      "name": "Barbados",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "BB",
      "alpha3Code": "BRB",
      "dial_code": "+1246"
    },
    {
      "name": "Belarus",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "BY",
      "alpha3Code": "BLR",
      "dial_code": "+375"
    },
    {
      "name": "Belgium",
      "region": "Europe",
      "subregion": "Western Europe",
      "alpha2Code": "BE",
      "alpha3Code": "BEL",
      "dial_code": "+32"
    },
    {
      "name": "Belize",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "BZ",
      "alpha3Code": "BLZ",
      "dial_code": "+501"
    },
    {
      "name": "Benin",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "BJ",
      "alpha3Code": "BEN",
      "dial_code": "+229"
    },
    {
      "name": "Bermuda",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "BM",
      "alpha3Code": "BMU",
      "dial_code": "+1441"
    },
    {
      "name": "Bhutan",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "BT",
      "alpha3Code": "BTN",
      "dial_code": "+975"
    },
    {
      "name": "Bolivia (Plurinational State of)",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "BO",
      "alpha3Code": "BOL",
      "dial_code": "+591"
    },
    {
      "name": "Bonaire, Sint Eustatius and Saba",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "BQ",
      "alpha3Code": "BES",
      "dial_code": "+599"
    },
    {
      "name": "Bosnia and Herzegovina",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "BA",
      "alpha3Code": "BIH",
      "dial_code": "+387"
    },
    {
      "name": "Botswana",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "BW",
      "alpha3Code": "BWA",
      "dial_code": "+267"
    },
    {
      "name": "Bouvet Island",
      "region": "Antarctic Ocean",
      "subregion": "South Antarctic Ocean",
      "alpha2Code": "BV",
      "alpha3Code": "BVT",
      "dial_code": "+47"
    },
    {
      "name": "Brazil",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "BR",
      "alpha3Code": "BRA",
      "dial_code": "+55"
    },
    {
      "name": "British Indian Ocean Territory",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "IO",
      "alpha3Code": "IOT",
      "dial_code": "+246"
    },
    {
      "name": "United States Minor Outlying Islands",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "UM",
      "alpha3Code": "UMI",
      "dial_code": "+011"
    },
    {
      "name": "Virgin Islands (British)",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "VG",
      "alpha3Code": "VGB",
      "dial_code": "+1284"
    },
    {
      "name": "Virgin Islands (U.S.)",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "VI",
      "alpha3Code": "VIR",
      "dial_code": "+1340"
    },
    {
      "name": "Brunei Darussalam",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "BN",
      "alpha3Code": "BRN",
      "dial_code": "+673"
    },
    {
      "name": "Bulgaria",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "BG",
      "alpha3Code": "BGR",
      "dial_code": "+359"
    },
    {
      "name": "Burkina Faso",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "BF",
      "alpha3Code": "BFA",
      "dial_code": "+226"
    },
    {
      "name": "Burundi",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "BI",
      "alpha3Code": "BDI",
      "dial_code": "+257"
    },
    {
      "name": "Cambodia",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "KH",
      "alpha3Code": "KHM",
      "dial_code": "+855"
    },
    {
      "name": "Cameroon",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "CM",
      "alpha3Code": "CMR",
      "dial_code": "+237"
    },
    {
      "name": "Canada",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "CA",
      "alpha3Code": "CAN",
      "dial_code": "+1"
    },
    {
      "name": "Cabo Verde",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "CV",
      "alpha3Code": "CPV",
      "dial_code": "+238"
    },
    {
      "name": "Cayman Islands",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "KY",
      "alpha3Code": "CYM",
      "dial_code": "+ 345"
    },
    {
      "name": "Central African Republic",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "CF",
      "alpha3Code": "CAF",
      "dial_code": "+236"
    },
    {
      "name": "Chad",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "TD",
      "alpha3Code": "TCD",
      "dial_code": "+235"
    },
    {
      "name": "Chile",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "CL",
      "alpha3Code": "CHL",
      "dial_code": "+56"
    },
    {
      "name": "China",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "CN",
      "alpha3Code": "CHN",
      "dial_code": "+86"
    },
    {
      "name": "Christmas Island",
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "alpha2Code": "CX",
      "alpha3Code": "CXR",
      "dial_code": "+61"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "alpha2Code": "CC",
      "alpha3Code": "CCK",
      "dial_code": "+61"
    },
    {
      "name": "Colombia",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "CO",
      "alpha3Code": "COL",
      "dial_code": "+57"
    },
    {
      "name": "Comoros",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "KM",
      "alpha3Code": "COM",
      "dial_code": "+269"
    },
    {
      "name": "Congo",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "CG",
      "alpha3Code": "COG",
      "dial_code": "+242"
    },
    {
      "name": "Congo (Democratic Republic of the)",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "CD",
      "alpha3Code": "COD",
      "dial_code": "+243"
    },
    {
      "name": "Cook Islands",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "CK",
      "alpha3Code": "COK",
      "dial_code": "+682"
    },
    {
      "name": "Costa Rica",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "CR",
      "alpha3Code": "CRI",
      "dial_code": "+506"
    },
    {
      "name": "Croatia",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "HR",
      "alpha3Code": "HRV",
      "dial_code": "+385"
    },
    {
      "name": "Cuba",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "CU",
      "alpha3Code": "CUB",
      "dial_code": "+53"
    },
    {
      "name": "Curaçao",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "CW",
      "alpha3Code": "CUW",
      "dial_code": "+599"
    },
    {
      "name": "Cyprus",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "CY",
      "alpha3Code": "CYP",
      "dial_code": "+357"
    },
    {
      "name": "Czech Republic",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "CZ",
      "alpha3Code": "CZE",
      "dial_code": "+420"
    },
    {
      "name": "Denmark",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "DK",
      "alpha3Code": "DNK",
      "dial_code": "+45"
    },
    {
      "name": "Djibouti",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "DJ",
      "alpha3Code": "DJI",
      "dial_code": "+253"
    },
    {
      "name": "Dominica",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "DM",
      "alpha3Code": "DMA",
      "dial_code": "+1767"
    },
    {
      "name": "Dominican Republic",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "DO",
      "alpha3Code": "DOM",
      "dial_code": "+1849"
    },
    {
      "name": "Ecuador",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "EC",
      "alpha3Code": "ECU",
      "dial_code": "+593"
    },
    {
      "name": "Egypt",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "EG",
      "alpha3Code": "EGY",
      "dial_code": "+20"
    },
    {
      "name": "El Salvador",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "SV",
      "alpha3Code": "SLV",
      "dial_code": "+503"
    },
    {
      "name": "Equatorial Guinea",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "GQ",
      "alpha3Code": "GNQ",
      "dial_code": "+240"
    },
    {
      "name": "Eritrea",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "ER",
      "alpha3Code": "ERI",
      "dial_code": "+291"
    },
    {
      "name": "Estonia",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "EE",
      "alpha3Code": "EST",
      "dial_code": "+372"
    },
    {
      "name": "Ethiopia",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "ET",
      "alpha3Code": "ETH",
      "dial_code": "+251"
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "FK",
      "alpha3Code": "FLK",
      "dial_code": "+500"
    },
    {
      "name": "Faroe Islands",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "FO",
      "alpha3Code": "FRO",
      "dial_code": "+298"
    },
    {
      "name": "Fiji",
      "region": "Oceania",
      "subregion": "Melanesia",
      "alpha2Code": "FJ",
      "alpha3Code": "FJI",
      "dial_code": "+679"
    },
    {
      "name": "Finland",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "FI",
      "alpha3Code": "FIN",
      "dial_code": "+358"
    },
    {
      "name": "France",
      "region": "Europe",
      "subregion": "Western Europe",
      "alpha2Code": "FR",
      "alpha3Code": "FRA",
      "dial_code": "+33"
    },
    {
      "name": "French Guiana",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "GF",
      "alpha3Code": "GUF",
      "dial_code": "+594"
    },
    {
      "name": "French Polynesia",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "PF",
      "alpha3Code": "PYF",
      "dial_code": "+689"
    },
    {
      "name": "French Southern Territories",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "TF",
      "alpha3Code": "ATF",
      "dial_code": "+262"
    },
    {
      "name": "Gabon",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "GA",
      "alpha3Code": "GAB",
      "dial_code": "+241"
    },
    {
      "name": "Gambia",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "GM",
      "alpha3Code": "GMB",
      "dial_code": "+220"
    },
    {
      "name": "Georgia",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "GE",
      "alpha3Code": "GEO",
      "dial_code": "+995"
    },
    {
      "name": "Germany",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "DE",
      "alpha3Code": "DEU",
      "dial_code": "+49"
    },
    {
      "name": "Ghana",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "GH",
      "alpha3Code": "GHA",
      "dial_code": "+233"
    },
    {
      "name": "Gibraltar",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "GI",
      "alpha3Code": "GIB",
      "dial_code": "+350"
    },
    {
      "name": "Greece",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "GR",
      "alpha3Code": "GRC",
      "dial_code": "+30"
    },
    {
      "name": "Greenland",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "GL",
      "alpha3Code": "GRL",
      "dial_code": "+299"
    },
    {
      "name": "Grenada",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "GD",
      "alpha3Code": "GRD",
      "dial_code": "+1473"
    },
    {
      "name": "Guadeloupe",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "GP",
      "alpha3Code": "GLP",
      "dial_code": "+590"
    },
    {
      "name": "Guam",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "GU",
      "alpha3Code": "GUM",
      "dial_code": "+1671"
    },
    {
      "name": "Guatemala",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "GT",
      "alpha3Code": "GTM",
      "dial_code": "+502"
    },
    {
      "name": "Guernsey",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "GG",
      "alpha3Code": "GGY",
      "dial_code": "+44"
    },
    {
      "name": "Guinea",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "GN",
      "alpha3Code": "GIN",
      "dial_code": "+224"
    },
    {
      "name": "Guinea-Bissau",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "GW",
      "alpha3Code": "GNB",
      "dial_code": "+245"
    },
    {
      "name": "Guyana",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "GY",
      "alpha3Code": "GUY",
      "dial_code": "+595"
    },
    {
      "name": "Haiti",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "HT",
      "alpha3Code": "HTI",
      "dial_code": "+509"
    },
    {
      "name": "Heard Island and McDonald Islands",
      "region": "Antarctic",
      "subregion": "Antarctic",
      "alpha2Code": "HM",
      "alpha3Code": "HMD",
      "dial_code": "+672"
    },
    {
      "name": "Vatican City",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "VA",
      "alpha3Code": "VAT",
      "dial_code": "+379"
    },
    {
      "name": "Honduras",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "HN",
      "alpha3Code": "HND",
      "dial_code": "+504"
    },
    {
      "name": "Hungary",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "HU",
      "alpha3Code": "HUN",
      "dial_code": "+36"
    },
    {
      "name": "Hong Kong",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "HK",
      "alpha3Code": "HKG",
      "dial_code": "+852"
    },
    {
      "name": "Iceland",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "IS",
      "alpha3Code": "ISL",
      "dial_code": "+354"
    },
    {
      "name": "India",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "IN",
      "alpha3Code": "IND",
      "dial_code": "+91"
    },
    {
      "name": "Indonesia",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "ID",
      "alpha3Code": "IDN",
      "dial_code": "+62"
    },
    {
      "name": "Ivory Coast",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "CI",
      "alpha3Code": "CIV",
      "dial_code": "+225"
    },
    {
      "name": "Iran (Islamic Republic of)",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "IR",
      "alpha3Code": "IRN",
      "dial_code": "+98"
    },
    {
      "name": "Iraq",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "IQ",
      "alpha3Code": "IRQ",
      "dial_code": "+964"
    },
    {
      "name": "Ireland",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "IE",
      "alpha3Code": "IRL",
      "dial_code": "+353"
    },
    {
      "name": "Isle of Man",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "IM",
      "alpha3Code": "IMN",
      "dial_code": "+44"
    },
    {
      "name": "Israel",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "IL",
      "alpha3Code": "ISR",
      "dial_code": "+972"
    },
    {
      "name": "Italy",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "IT",
      "alpha3Code": "ITA",
      "dial_code": "+39"
    },
    {
      "name": "Jamaica",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "JM",
      "alpha3Code": "JAM",
      "dial_code": "+1876"
    },
    {
      "name": "Japan",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "JP",
      "alpha3Code": "JPN",
      "dial_code": "+81"
    },
    {
      "name": "Jersey",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "JE",
      "alpha3Code": "JEY",
      "dial_code": "+44"
    },
    {
      "name": "Jordan",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "JO",
      "alpha3Code": "JOR",
      "dial_code": "+962"
    },
    {
      "name": "Kazakhstan",
      "region": "Asia",
      "subregion": "Central Asia",
      "alpha2Code": "KZ",
      "alpha3Code": "KAZ",
      "dial_code": "+77"
    },
    {
      "name": "Kenya",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "KE",
      "alpha3Code": "KEN",
      "dial_code": "+254"
    },
    {
      "name": "Kiribati",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "KI",
      "alpha3Code": "KIR",
      "dial_code": "+686"
    },
    {
      "name": "Kuwait",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "KW",
      "alpha3Code": "KWT",
      "dial_code": "+965"
    },
    {
      "name": "Kyrgyzstan",
      "region": "Asia",
      "subregion": "Central Asia",
      "alpha2Code": "KG",
      "alpha3Code": "KGZ",
      "dial_code": "+996"
    },
    {
      "name": "Lao People's Democratic Republic",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "LA",
      "alpha3Code": "LAO",
      "dial_code": "+856"
    },
    {
      "name": "Latvia",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "LV",
      "alpha3Code": "LVA",
      "dial_code": "+371"
    },
    {
      "name": "Lebanon",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "LB",
      "alpha3Code": "LBN",
      "dial_code": "+961"
    },
    {
      "name": "Lesotho",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "LS",
      "alpha3Code": "LSO",
      "dial_code": "+266"
    },
    {
      "name": "Liberia",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "LR",
      "alpha3Code": "LBR",
      "dial_code": "+231"
    },
    {
      "name": "Libya",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "LY",
      "alpha3Code": "LBY",
      "dial_code": "+218"
    },
    {
      "name": "Liechtenstein",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "LI",
      "alpha3Code": "LIE",
      "dial_code": "+423"
    },
    {
      "name": "Lithuania",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "LT",
      "alpha3Code": "LTU",
      "dial_code": "+370"
    },
    {
      "name": "Luxembourg",
      "region": "Europe",
      "subregion": "Western Europe",
      "alpha2Code": "LU",
      "alpha3Code": "LUX",
      "dial_code": "+352"
    },
    {
      "name": "Macao",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "MO",
      "alpha3Code": "MAC",
      "dial_code": "+853"
    },
    {
      "name": "North Macedonia",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "MK",
      "alpha3Code": "MKD",
      "dial_code": "+389"
    },
    {
      "name": "Madagascar",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "MG",
      "alpha3Code": "MDG",
      "dial_code": "+261"
    },
    {
      "name": "Malawi",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "MW",
      "alpha3Code": "MWI",
      "dial_code": "+265"
    },
    {
      "name": "Malaysia",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "MY",
      "alpha3Code": "MYS",
      "dial_code": "+60"
    },
    {
      "name": "Maldives",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "MV",
      "alpha3Code": "MDV",
      "dial_code": "+960"
    },
    {
      "name": "Mali",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "ML",
      "alpha3Code": "MLI",
      "dial_code": "+223"
    },
    {
      "name": "Malta",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "MT",
      "alpha3Code": "MLT",
      "dial_code": "+356"
    },
    {
      "name": "Marshall Islands",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "MH",
      "alpha3Code": "MHL",
      "dial_code": "+692"
    },
    {
      "name": "Martinique",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "MQ",
      "alpha3Code": "MTQ",
      "dial_code": "+596"
    },
    {
      "name": "Mauritania",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "MR",
      "alpha3Code": "MRT",
      "dial_code": "+222"
    },
    {
      "name": "Mauritius",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "MU",
      "alpha3Code": "MUS",
      "dial_code": "+230"
    },
    {
      "name": "Mayotte",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "YT",
      "alpha3Code": "MYT",
      "dial_code": "+262"
    },
    {
      "name": "Mexico",
      "region": "Americas",
      "subregion": "North America",
      "alpha2Code": "MX",
      "alpha3Code": "MEX",
      "dial_code": "+52"
    },
    {
      "name": "Micronesia (Federated States of)",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "FM",
      "alpha3Code": "FSM",
      "dial_code": "+691"
    },
    {
      "name": "Moldova (Republic of)",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "MD",
      "alpha3Code": "MDA",
      "dial_code": "+373"
    },
    {
      "name": "Monaco",
      "region": "Europe",
      "subregion": "Western Europe",
      "alpha2Code": "MC",
      "alpha3Code": "MCO",
      "dial_code": "+377"
    },
    {
      "name": "Mongolia",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "MN",
      "alpha3Code": "MNG",
      "dial_code": "+976"
    },
    {
      "name": "Montenegro",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "ME",
      "alpha3Code": "MNE",
      "dial_code": "+382"
    },
    {
      "name": "Montserrat",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "MS",
      "alpha3Code": "MSR",
      "dial_code": "+1664"
    },
    {
      "name": "Morocco",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "MA",
      "alpha3Code": "MAR",
      "dial_code": "+212"
    },
    {
      "name": "Mozambique",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "MZ",
      "alpha3Code": "MOZ",
      "dial_code": "+258"
    },
    {
      "name": "Myanmar",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "MM",
      "alpha3Code": "MMR",
      "dial_code": "+95"
    },
    {
      "name": "Namibia",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "NA",
      "alpha3Code": "NAM",
      "dial_code": "+264"
    },
    {
      "name": "Nauru",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "NR",
      "alpha3Code": "NRU",
      "dial_code": "+674"
    },
    {
      "name": "Nepal",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "NP",
      "alpha3Code": "NPL",
      "dial_code": "+977"
    },
    {
      "name": "Netherlands",
      "region": "Europe",
      "subregion": "Western Europe",
      "alpha2Code": "NL",
      "alpha3Code": "NLD",
      "dial_code": "+31"
    },
    {
      "name": "New Caledonia",
      "region": "Oceania",
      "subregion": "Melanesia",
      "alpha2Code": "NC",
      "alpha3Code": "NCL",
      "dial_code": "+687"
    },
    {
      "name": "New Zealand",
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "alpha2Code": "NZ",
      "alpha3Code": "NZL",
      "dial_code": "+64"
    },
    {
      "name": "Nicaragua",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "NI",
      "alpha3Code": "NIC",
      "dial_code": "+505"
    },
    {
      "name": "Niger",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "NE",
      "alpha3Code": "NER",
      "dial_code": "+227"
    },
    {
      "name": "Nigeria",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "NG",
      "alpha3Code": "NGA",
      "dial_code": "+234"
    },
    {
      "name": "Niue",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "NU",
      "alpha3Code": "NIU",
      "dial_code": "+683"
    },
    {
      "name": "Norfolk Island",
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "alpha2Code": "NF",
      "alpha3Code": "NFK",
      "dial_code": "+672"
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "KP",
      "alpha3Code": "PRK",
      "dial_code": "+850"
    },
    {
      "name": "Northern Mariana Islands",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "MP",
      "alpha3Code": "MNP",
      "dial_code": "+1670"
    },
    {
      "name": "Norway",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "NO",
      "alpha3Code": "NOR",
      "dial_code": "+47"
    },
    {
      "name": "Oman",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "OM",
      "alpha3Code": "OMN",
      "dial_code": "+968"
    },
    {
      "name": "Pakistan",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "PK",
      "alpha3Code": "PAK",
      "dial_code": "+92"
    },
    {
      "name": "Palau",
      "region": "Oceania",
      "subregion": "Micronesia",
      "alpha2Code": "PW",
      "alpha3Code": "PLW",
      "dial_code": "+680"
    },
    {
      "name": "Palestine, State of",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "PS",
      "alpha3Code": "PSE",
      "dial_code": "+970"
    },
    {
      "name": "Panama",
      "region": "Americas",
      "subregion": "Central America",
      "alpha2Code": "PA",
      "alpha3Code": "PAN",
      "dial_code": "+507"
    },
    {
      "name": "Papua New Guinea",
      "region": "Oceania",
      "subregion": "Melanesia",
      "alpha2Code": "PG",
      "alpha3Code": "PNG",
      "dial_code": "+675"
    },
    {
      "name": "Paraguay",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "PY",
      "alpha3Code": "PRY",
      "dial_code": "+595"
    },
    {
      "name": "Peru",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "PE",
      "alpha3Code": "PER",
      "dial_code": "+51"
    },
    {
      "name": "Philippines",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "PH",
      "alpha3Code": "PHL",
      "dial_code": "+63"
    },
    {
      "name": "Pitcairn",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "PN",
      "alpha3Code": "PCN",
      "dial_code": "+872"
    },
    {
      "name": "Poland",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "PL",
      "alpha3Code": "POL",
      "dial_code": "+48"
    },
    {
      "name": "Portugal",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "PT",
      "alpha3Code": "PRT",
      "dial_code": "+351"
    },
    {
      "name": "Puerto Rico",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "PR",
      "alpha3Code": "PRI",
      "dial_code": "+1939"
    },
    {
      "name": "Qatar",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "QA",
      "alpha3Code": "QAT",
      "dial_code": "+974"
    },
    {
      "name": "Republic of Kosovo",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "XK",
      "alpha3Code": "UNK",
      "dial_code": "+383"
    },
    {
      "name": "Réunion",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "RE",
      "alpha3Code": "REU",
      "dial_code": "+262"
    },
    {
      "name": "Romania",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "RO",
      "alpha3Code": "ROU",
      "dial_code": "+40"
    },
    {
      "name": "Russian Federation",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "RU",
      "alpha3Code": "RUS",
      "dial_code": "+7"
    },
    {
      "name": "Rwanda",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "RW",
      "alpha3Code": "RWA",
      "dial_code": "+250"
    },
    {
      "name": "Saint Barthélemy",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "BL",
      "alpha3Code": "BLM",
      "dial_code": "+590"
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "SH",
      "alpha3Code": "SHN",
      "dial_code": "+290"
    },
    {
      "name": "Saint Kitts and Nevis",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "KN",
      "alpha3Code": "KNA",
      "dial_code": "+1869"
    },
    {
      "name": "Saint Lucia",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "LC",
      "alpha3Code": "LCA",
      "dial_code": "+1758"
    },
    {
      "name": "Saint Martin (French part)",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "MF",
      "alpha3Code": "MAF",
      "dial_code": "+590"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "PM",
      "alpha3Code": "SPM",
      "dial_code": "+508"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "VC",
      "alpha3Code": "VCT",
      "dial_code": "+1784"
    },
    {
      "name": "Samoa",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "WS",
      "alpha3Code": "WSM",
      "dial_code": "+685"
    },
    {
      "name": "San Marino",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "SM",
      "alpha3Code": "SMR",
      "dial_code": "+378"
    },
    {
      "name": "Sao Tome and Principe",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "ST",
      "alpha3Code": "STP",
      "dial_code": "+239"
    },
    {
      "name": "Saudi Arabia",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "SA",
      "alpha3Code": "SAU",
      "dial_code": "+966"
    },
    {
      "name": "Senegal",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "SN",
      "alpha3Code": "SEN",
      "dial_code": "+221"
    },
    {
      "name": "Serbia",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "RS",
      "alpha3Code": "SRB",
      "dial_code": "+381"
    },
    {
      "name": "Seychelles",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "SC",
      "alpha3Code": "SYC",
      "dial_code": "+248"
    },
    {
      "name": "Sierra Leone",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "SL",
      "alpha3Code": "SLE",
      "dial_code": "+232"
    },
    {
      "name": "Singapore",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "SG",
      "alpha3Code": "SGP",
      "dial_code": "+65"
    },
    {
      "name": "Sint Maarten (Dutch part)",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "SX",
      "alpha3Code": "SXM",
      "dial_code": "+599"
    },
    {
      "name": "Slovakia",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "SK",
      "alpha3Code": "SVK",
      "dial_code": "+421"
    },
    {
      "name": "Slovenia",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "SI",
      "alpha3Code": "SVN",
      "dial_code": "+386"
    },
    {
      "name": "Solomon Islands",
      "region": "Oceania",
      "subregion": "Melanesia",
      "alpha2Code": "SB",
      "alpha3Code": "SLB",
      "dial_code": "+677"
    },
    {
      "name": "Somalia",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "SO",
      "alpha3Code": "SOM",
      "dial_code": "+252"
    },
    {
      "name": "South Africa",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "ZA",
      "alpha3Code": "ZAF",
      "dial_code": "+27"
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "GS",
      "alpha3Code": "SGS",
      "dial_code": "+500"
    },
    {
      "name": "Korea (Republic of)",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "KR",
      "alpha3Code": "KOR",
      "dial_code": "+82"
    },
    {
      "name": "Spain",
      "region": "Europe",
      "subregion": "Southern Europe",
      "alpha2Code": "ES",
      "alpha3Code": "ESP",
      "dial_code": "+34"
    },
    {
      "name": "Sri Lanka",
      "region": "Asia",
      "subregion": "Southern Asia",
      "alpha2Code": "LK",
      "alpha3Code": "LKA",
      "dial_code": "+94"
    },
    {
      "name": "Sudan",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "SD",
      "alpha3Code": "SDN",
      "dial_code": "+249"
    },
    {
      "name": "South Sudan",
      "region": "Africa",
      "subregion": "Middle Africa",
      "alpha2Code": "SS",
      "alpha3Code": "SSD",
      "dial_code": "+211"
    },
    {
      "name": "Suriname",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "SR",
      "alpha3Code": "SUR",
      "dial_code": "+597"
    },
    {
      "name": "Svalbard and Jan Mayen",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "SJ",
      "alpha3Code": "SJM",
      "dial_code": "+47"
    },
    {
      "name": "Swaziland",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "SZ",
      "alpha3Code": "SWZ",
      "dial_code": "+268"
    },
    {
      "name": "Sweden",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "SE",
      "alpha3Code": "SWE",
      "dial_code": "+46"
    },
    {
      "name": "Switzerland",
      "region": "Europe",
      "subregion": "Central Europe",
      "alpha2Code": "CH",
      "alpha3Code": "CHE",
      "dial_code": "+41"
    },
    {
      "name": "Syrian Arab Republic",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "SY",
      "alpha3Code": "SYR",
      "dial_code": "+963"
    },
    {
      "name": "Taiwan",
      "region": "Asia",
      "subregion": "Eastern Asia",
      "alpha2Code": "TW",
      "alpha3Code": "TWN",
      "dial_code": "+886"
    },
    {
      "name": "Tajikistan",
      "region": "Asia",
      "subregion": "Central Asia",
      "alpha2Code": "TJ",
      "alpha3Code": "TJK",
      "dial_code": "+992"
    },
    {
      "name": "Tanzania, United Republic of",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "TZ",
      "alpha3Code": "TZA",
      "dial_code": "+255"
    },
    {
      "name": "Thailand",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "TH",
      "alpha3Code": "THA",
      "dial_code": "+66"
    },
    {
      "name": "Timor-Leste",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "TL",
      "alpha3Code": "TLS",
      "dial_code": "+670"
    },
    {
      "name": "Togo",
      "region": "Africa",
      "subregion": "Western Africa",
      "alpha2Code": "TG",
      "alpha3Code": "TGO",
      "dial_code": "+228"
    },
    {
      "name": "Tokelau",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "TK",
      "alpha3Code": "TKL",
      "dial_code": "+690"
    },
    {
      "name": "Tonga",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "TO",
      "alpha3Code": "TON",
      "dial_code": "+676"
    },
    {
      "name": "Trinidad and Tobago",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "TT",
      "alpha3Code": "TTO",
      "dial_code": "+1868"
    },
    {
      "name": "Tunisia",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "TN",
      "alpha3Code": "TUN",
      "dial_code": "+216"
    },
    {
      "name": "Turkey",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "TR",
      "alpha3Code": "TUR",
      "dial_code": "+90"
    },
    {
      "name": "Turkmenistan",
      "region": "Asia",
      "subregion": "Central Asia",
      "alpha2Code": "TM",
      "alpha3Code": "TKM",
      "dial_code": "+993"
    },
    {
      "name": "Turks and Caicos Islands",
      "region": "Americas",
      "subregion": "Caribbean",
      "alpha2Code": "TC",
      "alpha3Code": "TCA",
      "dial_code": "+1649"
    },
    {
      "name": "Tuvalu",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "TV",
      "alpha3Code": "TUV",
      "dial_code": "+688"
    },
    {
      "name": "Uganda",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "UG",
      "alpha3Code": "UGA",
      "dial_code": "+256"
    },
    {
      "name": "Ukraine",
      "region": "Europe",
      "subregion": "Eastern Europe",
      "alpha2Code": "UA",
      "alpha3Code": "UKR",
      "dial_code": "+380"
    },
    {
      "name": "United Arab Emirates",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "AE",
      "alpha3Code": "ARE",
      "dial_code": "+971"
    },
    {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "region": "Europe",
      "subregion": "Northern Europe",
      "alpha2Code": "GB",
      "alpha3Code": "GBR",
      "dial_code": "+44"
    },
    {
      "name": "United States of America",
      "region": "Americas",
      "subregion": "Northern America",
      "alpha2Code": "US",
      "alpha3Code": "USA",
      "dial_code": "+1"
    },
    {
      "name": "Uruguay",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "UY",
      "alpha3Code": "URY",
      "dial_code": "+598"
    },
    {
      "name": "Uzbekistan",
      "region": "Asia",
      "subregion": "Central Asia",
      "alpha2Code": "UZ",
      "alpha3Code": "UZB",
      "dial_code": "+998"
    },
    {
      "name": "Vanuatu",
      "region": "Oceania",
      "subregion": "Melanesia",
      "alpha2Code": "VU",
      "alpha3Code": "VUT",
      "dial_code": "+678"
    },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "region": "Americas",
      "subregion": "South America",
      "alpha2Code": "VE",
      "alpha3Code": "VEN",
      "dial_code": "+58"
    },
    {
      "name": "Vietnam",
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "alpha2Code": "VN",
      "alpha3Code": "VNM",
      "dial_code": "+84"
    },
    {
      "name": "Wallis and Futuna",
      "region": "Oceania",
      "subregion": "Polynesia",
      "alpha2Code": "WF",
      "alpha3Code": "WLF",
      "dial_code": "+681"
    },
    {
      "name": "Western Sahara",
      "region": "Africa",
      "subregion": "Northern Africa",
      "alpha2Code": "EH",
      "alpha3Code": "ESH",
      "dial_code": "+212"
    },
    {
      "name": "Yemen",
      "region": "Asia",
      "subregion": "Western Asia",
      "alpha2Code": "YE",
      "alpha3Code": "YEM",
      "dial_code": "+967"
    },
    {
      "name": "Zambia",
      "region": "Africa",
      "subregion": "Eastern Africa",
      "alpha2Code": "ZM",
      "alpha3Code": "ZMB",
      "dial_code": "+260"
    },
    {
      "name": "Zimbabwe",
      "region": "Africa",
      "subregion": "Southern Africa",
      "alpha2Code": "ZW",
      "alpha3Code": "ZWE",
      "dial_code": "+263"
    }


  ]

  const country = res


  const continents = [...new Set(res.map(e => e.region))].map(e => res.filter(f => f.region == e))



  dropdownList.forEach(dropdown => {
    if (dropdown.attributes['data-arrow']) {
      console.log(dropdown.attributes['data-arrow'], 1)
      const arrowImg = dropdown.getAttribute('data-arrow')
      const css = {
"-moz-appearance": "none", /* for Firefox */
	"-webkit-appearance": "none", /* for Chrome */
        "background-image": "url(https://freepikpsd.com/file/2020/01/Down-Arrow-PNG-HD.png)",
        "background-position": "right 16px bottom 50%",
        "background-size": "12px",
        "background-repeat": "no-repeat",
        display: "block",
        color: "inherit"
      }

      Object.assign(dropdown.style, css);
    }

    const dropdownChild = dropdown.children[0]
    
    function getInnerText(item) {
      let innerText;

      switch (dropdown.getAttribute('data-dropdown')) {
        case 'country':
          innerText = dropdown.attributes['data-emoji'] ? `${item.name} ${getCountryFlag(item.alpha2Code)}` : item.name;
          break;

        case 'country-code':
          innerText = item.dial_code
          break;

        case 'country-code-shortname':
          innerText = `${item.dial_code} (${item.alpha2Code})`
          break;

        case 'country-code-fullname':
          innerText = `${item.dial_code} (${item.name})`
          break;

        case 'country-code-emoji':
          innerText = `${item.dial_code} (${getCountryFlag(item.alpha2Code)})`
          break;
      }
      return innerText
    }

    dropdown.attributes['data-dropdown-sorted'] ?
      continents.forEach(continent => {
        const optGroup = document.createElement("optgroup");
        optGroup.label = continent[0].region
        continent.forEach(item => {
          const clonedSelect = dropdownChild.cloneNode()
          clonedSelect.innerText = getInnerText(item)
          clonedSelect.value = item.name

          
          optGroup.append(clonedSelect)
          dropdown.append(optGroup)
        })
      })
      :
      country.forEach(item => {
        const clonedSelect = dropdownChild.cloneNode()
        clonedSelect.innerText = getInnerText(item)
        clonedSelect.value = item.name
        dropdown.append(clonedSelect)
      })



    dropdown.attributes['data-dropdown-search'] &&
      new TomSelect(dropdown, {
        create: true,
	sortField: {
		field: "text",
		direction: "asc"
	},
        // render: {
        //   optgroup_header: function(data, escape) {
        //     return `<div class="optgroup-header"> <bold> ${escape(data.label)} </bold> </div> `;
        //   }
        // }
      })
    dropdownChild.disabled="true"
    dropdownChild.selected="true"
  });

}
render()
