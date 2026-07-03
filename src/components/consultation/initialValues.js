/**
 * initialValues.js — default state for the entire consultation form.
 */

const initialValues = {
  /* Step 1 — Personal */
  personal: {
    firstName: "",
    lastName:  "",
    email:     "",
    phone:     "",
    city:      "",
    state:     "",
    country:   "India",
  },

  /* Step 2 — Plot */
  plot: {
    plotSizeValue:         "",
    plotSizeUnit:          "sqft",
    startDate:             "",
    plotPosition:          "",
    plotFacing:            "",
    vastu:                 "",
    roadWidthValue:        "",
    roadWidthUnit:         "feet",
    constructionAreaValue: "",
    constructionAreaUnit:  "sqft",
    setbackFront:          "",
    setbackRear:           "",
    setbackLeft:           "",
    setbackRight:          "",
    setbackUnit:           "meters",
  },

  /* Step 3 — Project */
  project: {
    budgetAmount: 1000000,  // raw rupees — default: ₹10 Lakh
    designStyle:  "",
    floorLevels:  "",
    floorCustom:  "",
  },

  /* Step 4 — Family */
  family: {
    familyMembers:   1,
    bedrooms:        2,
    bathtub:         "",
    informalSitting: 1,
    formalSitting:   1,
    diningSitting:   4,
    parking:         1,
  },

  /* Step 5 — Amenities */
  amenities: {
    kitchenLayout:     "",
    servantRoom:       "",
    waterTank:         "",
    undergroundTank:   "",
    septicTank:        "",
    selectedAmenities: [],
  },

  /* Step 6 — Brief */
  brief: {
    designBrief:     "",
    files:           [],
    consentContact:  false,
    consentAccuracy: false,
  },
};

export default initialValues;
