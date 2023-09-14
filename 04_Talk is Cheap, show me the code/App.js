import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - RestaurantCard
 *      - Image
 *      - Name of Restaurant, Star Rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 *
 */

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt="swiggy-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const RestaurantCard = (props) => {
  const { resData } = props;
  /// we can pass the props on the fly eg. const RestaurantCard For eg. above const Restaurant = ({resName,cuisine})
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4 className="cuisine">{cuisines.join("  ,")}</h4>
      <h4>Rating {avgRating}</h4>
      {/* <h4>${resObj.info.costForTwo / 100} for two</h4> */}
      <h4>{resData.info.sla.deliveryTime} Minutes</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "117397",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "pft1dcdx8udfepmcnuty",
      locality: "Sion",
      areaName: "Sion",
      costForTwo: "₹550 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "117397",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7500,
      },
      parentId: "4961",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f8a5cd50-6b0d-45e8-98e6-83d3e5cb2de3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-sion-mumbai-117397",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "307571",
      name: "TRC - The Roll Company",
      cloudinaryImageId: "tlkm0l7fnnp9nc37v04z",
      locality: "Silver Croft",
      areaName: "Bandra West",
      costForTwo: "₹600 for two",
      cuisines: [
        "Fast Food",
        "Indian",
        "Kebabs",
        "Juices",
        "Waffle",
        "Parsi",
        "Desserts",
        "Beverages",
        "Bakery",
        "Ice Cream",
        "Snacks",
      ],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "307571",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7900,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7900,
      },
      parentId: "1029",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 8.6,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "8.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f8a5cd50-6b0d-45e8-98e6-83d3e5cb2de3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/trc-the-roll-company-silver-croft-bandra-west-mumbai-307571",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "527792",
      name: "Green Dot Pizza",
      cloudinaryImageId: "n5mxshallldewzztyqxy",
      locality: "Vijay Nagar",
      areaName: "Marol Sakinaka",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Beverages", "Desserts", "Italian"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "527792",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7500,
      },
      parentId: "301936",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f8a5cd50-6b0d-45e8-98e6-83d3e5cb2de3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/green-dot-pizza-vijay-nagar-marol-sakinaka-mumbai-527792",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "172786",
      name: "New York Waffles & Dinges",
      cloudinaryImageId: "r62jqt06iyo6ovidbo7n",
      locality: "Nandadham Industrial Estate",
      areaName: "Marol Sakinaka",
      costForTwo: "₹250 for two",
      cuisines: ["Waffle", "Beverages", "Desserts", "Bakery"],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: "172786",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7500,
      },
      parentId: "148410",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f8a5cd50-6b0d-45e8-98e6-83d3e5cb2de3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/new-york-waffles-and-dinges-nandadham-industrial-estate-marol-sakinaka-mumbai-172786",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "693759",
      name: "Ramashraya (Matunga)",
      cloudinaryImageId: "f1bc9ddf53de574cdc35ab2f717df234",
      locality: "Jamanadas Mansion",
      areaName: "Matunga",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Snacks", "Sweets", "Chaat"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "693759",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 9500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 9500,
      },
      parentId: "417026",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 7.6,
        serviceability: "SERVICEABLE",
        slaString: "37 mins",
        lastMileTravelString: "7.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f8a5cd50-6b0d-45e8-98e6-83d3e5cb2de3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/ramashraya-matunga-jamanadas-mansion-matunga-mumbai-693759",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "679696",
      name: "Call Me Noodles",
      cloudinaryImageId: "2268b1e3b198e7810435c598e1916bf6",
      locality: "Ambedkar Nagar",
      areaName: "Andheri East",
      costForTwo: "₹150 for two",
      cuisines: ["Fast Food", "Tibetan"],
      avgRating: 3,
      feeDetails: {
        restaurantId: "679696",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 9500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 9500,
      },
      parentId: "406270",
      avgRatingString: "3.0",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "50 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f8a5cd50-6b0d-45e8-98e6-83d3e5cb2de3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/call-me-noodles-ambedkar-nagar-andheri-east-mumbai-679696",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "394603",
      name: "Mad Momos",
      cloudinaryImageId: "socnebubliehguk0ed1s",
      locality: "Ambedkar Nagar",
      areaName: "Andheri East",
      costForTwo: "₹200 for two",
      cuisines: [
        "Chinese",
        "Tibetan",
        "Nepalese",
        "Pizzas",
        "Snacks",
        "Beverages",
      ],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "394603",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 9500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 9500,
      },
      parentId: "610",
      avgRatingString: "3.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "51 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f8a5cd50-6b0d-45e8-98e6-83d3e5cb2de3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mad-momos-ambedkar-nagar-andheri-east-mumbai-394603",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "605798",
      name: "Joyful Pizza",
      cloudinaryImageId: "vnxwraf9qffxvwuywjq9",
      locality: "Agni Shaman Dal Marg",
      areaName: "Marol Sakinaka",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "605798",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7500,
      },
      parentId: "360708",
      avgRatingString: "4.4",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "39 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f8a5cd50-6b0d-45e8-98e6-83d3e5cb2de3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/joyful-pizza-agni-shaman-dal-marg-marol-sakinaka-mumbai-605798",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "394922",
      name: "Chinese Bowl Company",
      cloudinaryImageId: "qmieuz78oxsv1tbxsmhq",
      locality: "Ambedkar Nagar",
      areaName: "Andheri East",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese"],
      avgRating: 3.3,
      feeDetails: {
        restaurantId: "394922",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 9500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 9500,
      },
      parentId: "22524",
      avgRatingString: "3.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "47 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-f8a5cd50-6b0d-45e8-98e6-83d3e5cb2de3",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/chinese-bowl-company-ambedkar-nagar-andheri-east-mumbai-394922",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },

  {
    info: {
      id: "96175",
      name: "Jumboking Indian Burger",
      cloudinaryImageId: "f7d08c14959643da32f92f634c1f2ff0",
      locality: "Tolani College, Sher-E-Punjab Mahakali Caves",
      areaName: "Andheri East",
      costForTwo: "₹250 for two",
      cuisines: ["American", "Mexican", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "96175",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 12500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 12500,
      },
      parentId: "515",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 9.1,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "9.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-12 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/jumboking-indian-burger-tolani-college-sher-e-punjab-mahakali-caves-andheri-east-mumbai-96175",
      type: "WEBLINK",
    },
  },

  {
    info: {
      id: "303060",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Saraswati Road",
      areaName: "Santacruz West",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "303060",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 9500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 9500,
      },
      parentId: "5588",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-saraswati-road-santacruz-west-mumbai-303060",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "248492",
      name: "Momo Guy",
      cloudinaryImageId: "ujk1kylsvqxcyhocs7nu",
      locality: "Nandadham Industrial Estate",
      areaName: "Marol Sakinaka",
      costForTwo: "₹200 for two",
      cuisines: ["Tibetan", "Asian", "Desserts", "Beverages"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "248492",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7500,
      },
      parentId: "10112",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "38 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/momo-guy-nandadham-industrial-estate-marol-sakinaka-mumbai-248492",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "190494",
      name: "Starboy Pizza & Shakes",
      cloudinaryImageId: "rrg6gaw1b8ll4rc1w9y9",
      locality: "Nandadham Industrial Estate",
      areaName: "Marol Sakinaka",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Italian",
        "Desserts",
        "Beverages",
        "Snacks",
        "Fast Food",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "190494",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7500,
      },
      parentId: "195514",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "38 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/starboy-pizza-and-shakes-nandadham-industrial-estate-marol-sakinaka-mumbai-190494",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "203641",
      name: "Wakka Makka Chinese",
      cloudinaryImageId: "dwk48ybfhoilp6jlxwpd",
      locality: "Nandadham Industrial Estate",
      areaName: "Marol",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Thai", "Beverages"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "203641",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7500,
      },
      parentId: "288250",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "38 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wakka-makka-chinese-nandadham-industrial-estate-marol-mumbai-203641",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "228188",
      name: "Wack Waffles & Brownies",
      cloudinaryImageId: "afniisy7ene3lmhgqjh3",
      locality: "Nandadham Industrial Estate",
      areaName: "Marol Sakinaka",
      costForTwo: "₹300 for two",
      cuisines: ["Waffle", "Desserts", "Bakery", "Beverages"],
      avgRating: 3.9,
      veg: true,
      feeDetails: {
        restaurantId: "228188",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7500,
      },
      parentId: "382937",
      avgRatingString: "3.9",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "42 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-11 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wack-waffles-and-brownies-nandadham-industrial-estate-marol-sakinaka-mumbai-228188",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "170916",
      name: "Chai Point",
      cloudinaryImageId: "ranxfy6pdyi8zzzrbisy",
      locality: "Andheri East-DH",
      areaName: "Andheri East",
      costForTwo: "₹150 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi",
        "Chaat",
        "Indian",
        "American",
        "North Indian",
        "Fast Food",
        "Desserts",
        "Cafe",
        "Healthy Food",
        "Home Food",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "170916",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 10900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 10900,
      },
      parentId: "1607",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "44 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chai-point-dh-andheri-east-mumbai-170916",
      type: "WEBLINK",
    },
  },
];

// not using keys (not acceptable) <<<<<index as key <<<<<<<<<<<<< unique id (best practise)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
