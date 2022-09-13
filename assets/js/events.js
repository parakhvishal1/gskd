function CallScreen(caseNum) {
    switch (String(caseNum)) {
        case "1":
            ToApp("user-login", {
                isLoggedIn: true,
                name: "Valentin Buteler",
                email: "valentinbuteler@gmail.com",
                phone: "4455668899"
            });
            break;
        case "2":
            ToApp("welcome-screen", {
                "title": "Welcome to gsk",
                "sub-title": "Find more benefits for your pharmacy inside",
                "tnc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.`,
                "bg-img": "/assets/images/png/brand.png"
            });
            break;
        case "3":
            ToApp("termsui-screen", {
                "heading": "TERMS OF USE",
                "termsofuse": [
                    {
                        "title": "Privacy Policy",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui offiserunt mollitia animi.`
                    },
                    {
                        "title": "Authorization",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                        laboret.`
                    },
                    {
                        "title": "Collection And Use Of Information",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui.`
                    },
                    {
                        "title": "Privacy Policy",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in culpa qui offiserunt mollitia animi.`
                    },
                    {
                        "title": "Use Of Your Personal Data",
                        "desc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum.`
                    }
                ],
                "accept": "Accept the terms",
                "decline": "Decline"
            });
            break;
        case "4":
            ToApp("userwelcome-screen", {
                "start_date": "Jan 01, 22",
                "last_date": "Jan 31, 22",
                "isSku": true,
                "download_url": "https://stats.govt.nz/assets/Uploads/Annual-enterprise-survey/Annual-enterprise-survey-2021-financial-year-provisional/Download-data/annual-enterprise-survey-2021-financial-year-provisional-csv.csv",
                "plan_progress": {
                    "title": "Plan Progress",
                    "last_date": "Jan 31, 22",
                    "brands": [
                        {
                            "name": "Augmentin",
                            "purchased" : "125",
                            "selected": "0",
                            "max_limit": "300",
                            "sku": "GSK-BRAND-1",
                            "discount_range": [
                                {"discount": "5"},
                                {"discount": "10"},
                                {"discount": "15"},
                                {"discount": "20"},
                                {"discount": "25"},
                            ]
                        },
                        {
                            "name": "Ventolin",
                            "purchased" : "45",
                            "selected": "0",
                            "max_limit": "200",
                            "sku": "GSK-BRAND-2",
                            "discount_range": [
                                {"discount": "15"},
                                {"discount": "20"},
                                {"discount": "35"},
                                {"discount": "40"},
                                {"discount": "45"},
                            ]
                        },
                        {
                            "name": "Seretide",
                            "purchased" : "75",
                            "selected": "0",
                            "max_limit": "400",
                            "sku": "GSK-BRAND-3",
                            "discount_range": [
                                {"discount": "5"},
                                {"discount": "15"},
                                {"discount": "25"},
                                {"discount": "35"},
                                {"discount": "45"},
                            ]
                        }
                    ]
                },
                "available_orders": {
                    "orders": [
                        {
                            "account_no": "Wholesaler A - Accoount: A0001",
                            "order_no": "Order No: 6921030003",
                            "sku": "GSK-ACCOUNT_NO-A0001",
                            "product_details" : [
                                {
                                    "name" : "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-1"
                                },
                                {
                                    "name" : "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-2"
                                },
                                {
                                    "name" : "Augmentin 75mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-3"
                                },
                                {
                                    "name" : "Augmentin 100mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-4"
                                },
                                {
                                    "name" : "Augmentin 125mcg Tabs-5",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-5"
                                }
                            ]
                        },
                        {
                            "account_no": "Wholesaler A - Accoount: A0002",
                            "order_no": "Order No: 6921030003",
                            "sku": "GSK-ACCOUNT_NO-A0002",
                            "product_details" : [
                                {
                                    "name" : "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0002-1"
                                },
                                {
                                    "name" : "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0002-2"
                                },
                                {
                                    "name" : "Augmentin 75mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0002-3"
                                },
                                {
                                    "name" : "Augmentin 100mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0002-4"
                                },
                                {
                                    "name" : "Augmentin 125mcg Tabs-5",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0002-5"
                                }
                            ]
                        },
                        {
                            "account_no": "Wholesaler A - Accoount: A0003",
                            "order_no": "Order No: 6921030003",
                            "sku": "GSK-ACCOUNT_NO-A0003",
                            "product_details" : [
                                {
                                    "name" : "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0003-1"
                                },
                                {
                                    "name" : "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0003-2"
                                },
                                {
                                    "name" : "Augmentin 75mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0003-3"
                                },
                                {
                                    "name" : "Augmentin 100mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0003-4"
                                },
                                {
                                    "name" : "Augmentin 125mcg Tabs-5",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0003-5"
                                }
                            ]
                        }
                    ]
                },
                "previous_orders": {
                    "orders": [
                        {
                            "account_no": "Wholesaler A - Accoount: A0001",
                            "order_no": "Order No: 6921030003",
                            "status": "Cancelled",
                            "delivery_date": "May 30 22",
                            "sku": "GSK-ACCOUNT_NO-A0001",
                            "product_details" : [
                                {
                                    "name" : "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-1"
                                },
                                {
                                    "name" : "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-2"
                                },
                                {
                                    "name" : "Augmentin 75mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-3"
                                },
                                {
                                    "name" : "Augmentin 100mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-4"
                                },
                                {
                                    "name" : "Augmentin 125mcg Tabs-5",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-5"
                                }
                            ]
                        },
                        {
                            "account_no": "Wholesaler A - Accoount: A0002",
                            "order_no": "Order No: 6921030003",
                            "status": "Sent",
                            "delivery_date": "May 30 22",
                            "sku": "GSK-ACCOUNT_NO-A0002",
                            "product_details" : [
                                {
                                    "name" : "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0002-1"
                                },
                                {
                                    "name" : "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0002-2"
                                },
                                {
                                    "name" : "Augmentin 75mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0002-3"
                                },
                                {
                                    "name" : "Augmentin 100mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0002-4"
                                },
                                {
                                    "name" : "Augmentin 125mcg Tabs-5",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0002-5"
                                }
                            ]
                        },
                        {
                            "account_no": "Wholesaler A - Accoount: A0003",
                            "order_no": "Order No: 6921030003",
                            "status": "Invoiced",
                            "delivery_date": "May 30 22",
                            "sku": "GSK-ACCOUNT_NO-A0003",
                            "product_details" : [
                                {
                                    "name" : "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0003-1"
                                },
                                {
                                    "name" : "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0003-2"
                                },
                                {
                                    "name" : "Augmentin 75mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0003-3"
                                },
                                {
                                    "name" : "Augmentin 100mcg Tabs",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0003-4"
                                },
                                {
                                    "name" : "Augmentin 125mcg Tabs-5",
                                    "price": "4.01",
                                    "units": "25",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0003-5"
                                }
                            ]
                        }
                    ]
                }
            });
            break;
        case "5":
            ToApp("clientlist-screen", {
                "title": "Client List",
                "clients": [
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                    {
                        "name": "Valentin Buteler"
                    },
                ],
            });
            break;
        case "6":

            break;
        case "7":

            break;
        case "8":

            break;
        case "9":

            break;
        case "10":

            break;
        case "11":

            break;
        case "12":

            break;
        default:
            break;
    }
}