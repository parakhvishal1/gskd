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
                "bg-img": "/gsk/assets/images/png/brand.png"
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
                "download_url": "https://stats.govt.nz/assets/Uploads/Annual-enterprise-survey/Annual-enterprise-survey-2021-financial-year-provisional/Download-data/annual-enterprise-survey-2021-financial-year-provisional-csv.csv",
                "totalcheckout": "",
                "plan_progress": {
                    "title": "Plan Progress",
                    "last_date": "Jan 31, 22",
                    "brands": [
                        {
                            "name": "Augmentin",
                            "isSku": true,
                            "additional_discount": true,
                            "purchased": "125",
                            "selected": "0",
                            "max_limit": "260",
                            "sku": "GSK-BRAND-AUGMENTIN",
                            "on_invoice_range": [
                                { "discount": "5", "label": "85" },
                                { "discount": "10", "label": "85" },
                                { "discount": "15", "label": "90" },
                            ], 
                            "off_invoice_range": [
                                { "discount": "5" },
                                { "discount": "10" },
                                { "discount": "15" },
                            ], 
                            "total_invoice_range": [
                                { "discount": "10" },
                                { "discount": "11" },
                                { "discount": "12" },
                            ]
                        },
                        {
                            "name": "Ventolin",
                            "isSku": true,
                            "additional_discount": true,
                            "purchased": "45",
                            "selected": "0",
                            "max_limit": "200",
                            "sku": "GSK-BRAND-VENTOLIN",
                            "on_invoice_range": [
                                { "discount": "15", "label": "40" },
                                { "discount": "20", "label": "40" },
                                { "discount": "35", "label": "40" },
                                { "discount": "40", "label": "40" },
                                { "discount": "45", "label": "40"},
                            ],
                            "off_invoice_range": [
                                { "discount": "15" },
                                { "discount": "20" },
                                { "discount": "35" },
                                { "discount": "40" },
                                { "discount": "45" },
                            ],
                            "total_invoice_range": [
                                { "discount": "10" },
                                { "discount": "11" },
                                { "discount": "12" },
                                { "discount": "13" },
                                { "discount": "14" },
                            ]
                        },
                        {
                            "name": "Seretide",
                            "isSku": true,
                            "additional_discount": false,
                            "purchased": "75",
                            "selected": "0",
                            "max_limit": "400",
                            "sku": "GSK-BRAND-SERETIDE",
                            "on_invoice_range": [
                                { "discount": "15", "label": "80" },
                                { "discount": "20", "label": "80" },
                                { "discount": "35", "label": "80" },
                                { "discount": "40", "label": "80" },
                                { "discount": "45", "label": "80"},
                            ],
                            "off_invoice_range": [
                                { "discount": "15" },
                                { "discount": "20" },
                                { "discount": "35" },
                                { "discount": "40" },
                                { "discount": "45" },
                            ], 
                            "total_invoice_range": [
                                { "discount": "10" },
                                { "discount": "11" },
                                { "discount": "12" },
                                { "discount": "13" },
                                { "discount": "14" },
                            ]
                        }
                    ]
                },
                "available_orders": {
                    "orders": [
                        {
                            "account_no": "Wholesaler A - Accoount: A0001",
                            "order_no": "6921030003",
                            "sku": "GSK-ACCOUNT_NO-A0001",
                            "product_details": [
                                {
                                    "name": "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                                    "brand": "GSK-BRAND-AUGMENTIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-AUGMENTIN-A0001-2",
                                    "brand": "GSK-BRAND-AUGMENTIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Ventolin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-VENTOLIN-A0001-3",
                                    "brand": "GSK-BRAND-VENTOLIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Ventolin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-VENTOLIN-A0001-4",
                                    "brand": "GSK-BRAND-VENTOLIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Seretide 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-SERETIDE-A0001-5",
                                    "brand": "GSK-BRAND-SERETIDE",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Seretide 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-SERETIDE-A0001-6",
                                    "brand": "GSK-BRAND-SERETIDE",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "Wholesaler A - Accoount: A0002",
                            "order_no": "6921030003",
                            "sku": "GSK-ACCOUNT_NO-A0002",
                            "product_details": [
                                {
                                    "name": "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-AUGMENTIN-A0002-1",
                                    "brand": "GSK-BRAND-AUGMENTIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-AUGMENTIN-A0002-2",
                                    "brand": "GSK-BRAND-AUGMENTIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Ventolin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-VENTOLIN-A0002-3",
                                    "brand": "GSK-BRAND-VENTOLIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Ventolin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-VENTOLIN-A0002-4",
                                    "brand": "GSK-BRAND-VENTOLIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Seretide 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-SERETIDE-A0002-5",
                                    "brand": "GSK-BRAND-SERETIDE",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Seretide 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-SERETIDE-A0002-6",
                                    "brand": "GSK-BRAND-SERETIDE",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                }
                            ]
                        }
                    ]
                },
                "previous_orders": {
                    "orders": [
                        {
                            "account_no": "Wholesaler A - Accoount: A0001",
                            "order_no": "6921030003",
                            "status": "Cancelled",
                            "delivery_date": "May 30 22",
                            "ordered_date": "Jan 01, 22",
                            "sku": "GSK-ACCOUNT_NO-A0001",
                            "product_details": [
                                {
                                    "name": "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-AUGMENTIN-A0001-1",
                                    "brand": "GSK-BRAND-AUGMENTIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-AUGMENTIN-A0001-2",
                                    "brand": "GSK-BRAND-AUGMENTIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Ventolin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-VENTOLIN-A0001-3",
                                    "brand": "GSK-BRAND-VENTOLIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Ventolin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-VENTOLIN-A0001-4",
                                    "brand": "GSK-BRAND-VENTOLIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Seretide 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-SERETIDE-A0001-5",
                                    "brand": "GSK-BRAND-SERETIDE",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Seretide 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-SERETIDE-A0001-6",
                                    "brand": "GSK-BRAND-SERETIDE",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "Wholesaler A - Accoount: A0002",
                            "order_no": "6921030003",
                            "status": "Invoiced",
                            "delivery_date": "May 30 22",
                            "ordered_date": "Jan 01, 22",
                            "sku": "GSK-ACCOUNT_NO-A0002",
                            "product_details": [
                                {
                                    "name": "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-AUGMENTIN-A0002-1",
                                    "brand": "GSK-BRAND-AUGMENTIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-AUGMENTIN-A0002-2",
                                    "brand": "GSK-BRAND-AUGMENTIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Ventolin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-VENTOLIN-A0002-3",
                                    "brand": "GSK-BRAND-VENTOLIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Ventolin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-VENTOLIN-A0002-4",
                                    "brand": "GSK-BRAND-VENTOLIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Seretide 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-SERETIDE-A0002-5",
                                    "brand": "GSK-BRAND-SERETIDE",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Seretide 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-SERETIDE-A0002-6",
                                    "brand": "GSK-BRAND-SERETIDE",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                }
                            ]
                        },
                        
                    ]
                },
                "rebates_orders": {
                    "orders": [
                        {
                            "account_no": "Period Eligible / Rebates",
                            "order_no": "6921030003",
                            "sku": "GSK-REBATES-A0001",
                            "ordered_date": "Jan 01, 22",
                            "product_details": [
                                {
                                    "name": "Augmentin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-1",
                                    "brand": "GSK-BRAND-AUGMENTIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Augmentin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-2",
                                    "brand": "GSK-BRAND-AUGMENTIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Ventolin 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-3",
                                    "brand": "GSK-BRAND-VENTOLIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Ventolin 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-4",
                                    "brand": "GSK-BRAND-VENTOLIN",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Seretide 25mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-5",
                                    "brand": "GSK-BRAND-SERETIDE",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
                                },
                                {
                                    "name": "Seretide 50mcg Tabs",
                                    "price": "4.01",
                                    "units": "0",
                                    "free_goods": "2",
                                    "discount": "40",
                                    "payterm": "30",
                                    "sku": "GSK-PRODUCT-A0001-6",
                                    "brand": "GSK-BRAND-SERETIDE",
                                    "additional_discount": true,
                                    "free_goods_range": {
                                        "limit": "40",
                                        "eligible_goods": "4"
                                    }
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
        default:
            break;
    }
}