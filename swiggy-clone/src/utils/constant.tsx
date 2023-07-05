export const swiggyApi = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2704628&lng=72.8709166&page_type=DESKTOP_WEB_LISTING';
export const menuApi = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2039884&lng=72.8737017&restaurantId=';

export const callApi = async () => {
    const data = await fetch(swiggyApi);
    const getJson = await data.json();
    const cards = getJson.data.cards[2].data.data.cards
    // console.log(getJson.data.cards[2].data.data.cards, 'getJson');
    return cards;
  }

 console.log(callApi, '....') 

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
 export const apiData = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "203017",
            "name": "Little King Grand",
            "uuid": "7c934afb-10dd-493f-8652-ad794174e2d3",
            "city": "5",
            "area": "Bhairav Residency",
            "totalRatingsString": 3,
            "cloudinaryImageId": "akwsjwmidscr8ijila0k",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Pizzas",
                "Desserts",
                "Biryani"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 3.700000047683716,
            "slugs": {
                "restaurant": "little-king-grand-mira-road-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "Bhairav Residency,Kanakia road, Opp. Laxmi Park,Mira road east,Thane",
            "locality": "Mira Road East",
            "parentId": 125496,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6733021~p=1~eid=00000188-7258-e278-0404-0e65004e0124",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3.7 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "203017",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 3.700000047683716,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "658584",
            "name": "Baba Falooda",
            "uuid": "3f00f98b-f433-486d-a26b-3604a819cf52",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 3,
            "cloudinaryImageId": "56fc63b2d9d8ee1b4a13b0d55cc9760f",
            "cuisines": [
                "Desserts"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 12,
            "minDeliveryTime": 12,
            "maxDeliveryTime": 12,
            "slaString": "12 MINS",
            "lastMileTravel": 0.800000011920929,
            "slugs": {
                "restaurant": "baba-falooda-mira-road-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "SHOP NO 11,12, GROUND FLOOR,  WINE-C, DELTA GARDEN PHASE-1,  DAHISAR CHECK NAKA MIDC ROAD,  MIRA ROAD EAST 401107",
            "locality": "Midc Road",
            "parentId": 21668,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "658584",
                "deliveryTime": 12,
                "minDeliveryTime": 12,
                "maxDeliveryTime": 12,
                "lastMileTravel": 0.800000011920929,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "518326",
            "name": "Punjab Depot",
            "uuid": "63da10ab-701d-4f77-ab29-0db07761d8c4",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 4,
            "cloudinaryImageId": "cuawohgbaer56ec6xcm0",
            "cuisines": [
                "North Indian",
                "Indian",
                "Biryani",
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 24900,
            "costForTwoString": "₹249 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 1.5,
            "slugs": {
                "restaurant": "punjab-depot-mira-road-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "Shop No, 07 Munshi Compound, Masjid Lane, Near Haji Chicken Shop,  Munshi Compound, Kashi Mira, Mira Road, Thane ,401107",
            "locality": "Kashi Mira",
            "parentId": 21861,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "518326",
                "deliveryTime": 30,
                "minDeliveryTime": 30,
                "maxDeliveryTime": 30,
                "lastMileTravel": 1.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "629403",
            "name": "99 Pancakes",
            "uuid": "8582b642-1c84-4734-9f93-71680b92f652",
            "city": "5",
            "area": "MiraRoad",
            "totalRatingsString": 2,
            "cloudinaryImageId": "onheqmfwwvdjfqs9g3k7",
            "cuisines": [
                "Bakery",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 15,
            "minDeliveryTime": 15,
            "maxDeliveryTime": 15,
            "slaString": "15 MINS",
            "lastMileTravel": 0.699999988079071,
            "slugs": {
                "restaurant": "99-cakes-mira-road-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "Shop No,22 Delta Vrindavan ,MIDC Rd, Mira Bhayandar, Maharathra.401107",
            "locality": "MIDC Rd",
            "parentId": 387975,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6659801~p=4~eid=00000188-7258-e278-0404-0e66004e0477",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "629403",
                "deliveryTime": 15,
                "minDeliveryTime": 15,
                "maxDeliveryTime": 15,
                "lastMileTravel": 0.699999988079071,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "354997",
            "name": "Pizza Hut",
            "uuid": "59494edf-bc78-4965-9ba4-d1d322d1954c",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 3.5,
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "cuisines": [
                "Pizzas"
            ],
            "tags": [],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "slaString": "21 MINS",
            "lastMileTravel": 0.800000011920929,
            "slugs": {
                "restaurant": "pizza-hut-delta-mira-raod-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "Pizza Hut, Delta Graden, Shop no.9 and 10, Ground Floor, Mahajanwadi, Mira road, near Mira MIDC estate, Thane, Mira Bhayander Municipal Corporation (Thane Zone-7), Maharashtra 401107",
            "locality": "Delta Graden",
            "parentId": 721,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "354997",
                "deliveryTime": 21,
                "minDeliveryTime": 21,
                "maxDeliveryTime": 21,
                "lastMileTravel": 0.800000011920929,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "28100",
            "name": "The Cake Factory",
            "uuid": "b7e5c928-d04f-4f8c-8da2-2949c04a44ad",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 4.1,
            "cloudinaryImageId": "dpyrqiacjqtf8vgayzya",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 15,
            "minDeliveryTime": 15,
            "maxDeliveryTime": 15,
            "slaString": "15 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
                "restaurant": "the-cake-factory-mira-road-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "Shop 13, Aakashganga, Jangid Circle, Near Sejal Jewellers, MTNL Road, Mira Road East, Mira Road, Mumbai",
            "locality": "MTNL Road",
            "parentId": 3734,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "28100",
                "deliveryTime": 15,
                "minDeliveryTime": 15,
                "maxDeliveryTime": 15,
                "lastMileTravel": 1.399999976158142,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "706179",
            "name": "Sai Chinese Point II",
            "uuid": "90ab0131-1a3c-4ae2-8f8d-ee0c0d70c470",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 1,
            "cloudinaryImageId": "7bb0e701185c86fdc9005fe798bd4bac",
            "cuisines": [
                "Indian",
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "sai-chinese-point-mira-road-mira-road-3",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "Shop No. A-5 OM Mani Tower CHS LTD, Near GCC Club, OPP VORA TOWER, HATKESH ROAD, MIRA ROAD EAST, ZONE 3",
            "locality": "GCC Club",
            "parentId": 174996,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6804244~p=7~eid=00000188-7258-e278-0404-0e67004e0706",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹749",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "706179",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "--",
            "totalRatings": 0,
            "new": true
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "95544",
            "name": "Balaji Pure Veg",
            "uuid": "7bd624f4-efba-4bcd-80ad-e5ff70df10ff",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 4,
            "cloudinaryImageId": "n6mwtb9ezxehsrsr5rim",
            "cuisines": [
                "Indian",
                "South Indian",
                "Chinese",
                "Italian"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 15,
            "minDeliveryTime": 15,
            "maxDeliveryTime": 15,
            "slaString": "15 MINS",
            "lastMileTravel": 0.8999999761581421,
            "slugs": {
                "restaurant": "balaji-pure-veg-mira-road-e-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "Green Avenue Plaza, Shanti Park, Near St Xavier School, Mira Road East, Mira Road, Mumbai",
            "locality": "Mira Road E",
            "parentId": 6522,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "95544",
                "deliveryTime": 15,
                "minDeliveryTime": 15,
                "maxDeliveryTime": 15,
                "lastMileTravel": 0.8999999761581421,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "84475",
            "name": "NIC Ice Creams",
            "uuid": "d3d9fe5a-08f5-4e5e-9002-b07a4fd7623f",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 4.1,
            "cloudinaryImageId": "d461cb7eac503656a2b4bb13e7c60b97",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "tags": [],
            "costForTwo": 12000,
            "costForTwoString": "₹120 FOR TWO",
            "deliveryTime": 13,
            "minDeliveryTime": 13,
            "maxDeliveryTime": 13,
            "slaString": "13 MINS",
            "lastMileTravel": 1.2999999523162842,
            "slugs": {
                "restaurant": "nic-natural-ice-cream-mira-road-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "Shop No-10, Building No-2, Ground Floor, Green Park, BLDG no-2 CHS Ltd. Shanti Park Layout, Mira Road East Thane-401107, Zone 4, Mira Bhayander Municipal Corporation (Thane Zone-7), Maharashtra-401107",
            "locality": "Gokul Village",
            "parentId": 6249,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹159",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "84475",
                "deliveryTime": 13,
                "minDeliveryTime": 13,
                "maxDeliveryTime": 13,
                "lastMileTravel": 1.2999999523162842,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.6",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "473690",
            "name": "Mumbai Menu",
            "uuid": "223977f5-d7e1-44bc-9d3f-9e892e80744f",
            "city": "5",
            "area": "Harsh Residency",
            "totalRatingsString": 2,
            "cloudinaryImageId": "mnfofhd4ivu3qlhhdq5s",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Chinese",
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 2.0999999046325684,
            "slugs": {
                "restaurant": "mumbai-menu-mira-road-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "Corporate Lounge, Harsh Residency, Mira Bhayandar Rd, near Axis Bank, Kashimira, Mira Road, Mumbai, Maharashtra 401107, India",
            "locality": "Mira Road",
            "parentId": 141501,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6830155~p=10~eid=00000188-7258-e278-0404-0e68004e0a11",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "473690",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 2.0999999046325684,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.5",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "381290",
            "name": "Shahi",
            "uuid": "1d7da61f-aabd-4e13-bc17-a7b4fcd65c5f",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 3.5,
            "cloudinaryImageId": "ktvfldqp749mlgcibnib",
            "cuisines": [
                "Tandoor",
                "Mughlai",
                "Punjabi",
                "Indian",
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 16,
            "minDeliveryTime": 16,
            "maxDeliveryTime": 16,
            "slaString": "16 MINS",
            "lastMileTravel": 1.7999999523162842,
            "slugs": {
                "restaurant": "shahi-mira-road-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "Shop no.03A, 04A, 06A, 07A, Shital Sai Building, Sheetal Nagar, Mira Road",
            "locality": "Sheetal Nagar",
            "parentId": 1679,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.7 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "381290",
                "deliveryTime": 16,
                "minDeliveryTime": 16,
                "maxDeliveryTime": 16,
                "lastMileTravel": 1.7999999523162842,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "401636",
            "name": "Meraki",
            "uuid": "a6c53397-9650-45a8-9ccf-0c9230bbfa6e",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 4,
            "cloudinaryImageId": "uo2na6wxkc1tb3kd4fi6",
            "cuisines": [
                "Burmese",
                "Chinese",
                "Thai"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "slaString": "21 MINS",
            "lastMileTravel": 1.5,
            "slugs": {
                "restaurant": "meraki-mira-road-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "SHOP NO 8, MUNSHI COMPOUND, NEAR KASHIMIRA, MIRA ROAD EAST, THANE,  Mira Bhayander Municipal Corporation (Thane Zone-7), Maharashtra- 401107",
            "locality": "Near Kashimira",
            "parentId": 2356,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6878970~p=13~eid=00000188-7258-e278-0404-0e69004e0d4e",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "1.5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "401636",
                "deliveryTime": 21,
                "minDeliveryTime": 21,
                "maxDeliveryTime": 21,
                "lastMileTravel": 1.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "200781",
            "name": "Nikku's Chinese",
            "uuid": "233419c5-5e23-41b1-b302-5b2018481f8b",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 4,
            "cloudinaryImageId": "fhvusbswtbspamgse0eq",
            "cuisines": [
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 15,
            "minDeliveryTime": 15,
            "maxDeliveryTime": 15,
            "slaString": "15 MINS",
            "lastMileTravel": 0.800000011920929,
            "slugs": {
                "restaurant": "nikku's-chinese-mira-road-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "Shp 49, Surya Shopping Center, Sector 5, Shristi Complex, Mira rd East, Zone 4",
            "locality": "Sector 5",
            "parentId": 148953,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "200781",
                "deliveryTime": 15,
                "minDeliveryTime": 15,
                "maxDeliveryTime": 15,
                "lastMileTravel": 0.800000011920929,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "59922",
            "name": "Fried Nation",
            "uuid": "bf173814-6a92-47cb-a7bf-3779e05c7fed",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 4.1,
            "cloudinaryImageId": "oszrk9l11hayutrcyguf",
            "cuisines": [
                "American"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "fried-nation-mira-road-east-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": " Shop no.1, Eden rose shopping center, Beverly park, Mira road East, Thane - 401107",
            "locality": "Sheetal nagar",
            "parentId": 4868,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "59922",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "192338",
            "name": "A-1 Chinese Corner",
            "uuid": "ea128657-2450-4eb8-bec2-79c3a275ba54",
            "city": "5",
            "area": "Mira Road",
            "totalRatingsString": 3,
            "cloudinaryImageId": "ay5dxu2zwgwqtjxtxr7s",
            "cuisines": [
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 2.799999952316284,
            "slugs": {
                "restaurant": "a-1-chinese-corner-mira-road-mira-road",
                "city": "mumbai"
            },
            "cityState": "5",
            "address": "SHOP NO.4,NARENDRA PARK D-1,NAYA NAGAR,OPP ST JOHNS HIGH SCHOOL,MIRA ROAD-E,DIST-THANE, District - Mira Bhayander Municipal Corporation (Thane Zone-7), STATE - Maharashtra",
            "locality": "Naya Nagar",
            "parentId": 25070,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6857655~p=16~eid=00000188-7258-e278-0404-0e6a004e1027",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.7 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "15% OFF",
                "subHeader": "UPTO ₹45",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "192338",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 2.799999952316284,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.7",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    }
]