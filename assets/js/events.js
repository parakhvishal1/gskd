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
                "tncHeading": "Legal Terms & Conditions",
                "tnc": `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.&nbsp;<a href="#">hey there</a>`,
                "bg-img": "/gskd/assets/images/png/brand.png"
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
                "last_date": "Jan 31, 23",
                "locale": {
                    "labels": {
                        "title": "Plan Progress",
                        "lastOrder": "Last Order",
                        "orderHistory": "Order History",
                        "startDate": "Start Date",
                        "endDate": "End Date",
                        "start": "Start",
                        "end": "End",
                        "estPrice": "Est. Price",
                        "units": "Units",
                        "freeGoods": "Free Goods",
                        "payTerm": "Pay Term",
                        "pickDate": "Pick Date",
                        "offInvoice": "Off Invoice",
                        "onInvoice": "On Invoice",
                        "offInvoiceDiscount": "Off Invoice Discount",
                        "onInvoiceDiscount": "On Invoice Discount",
                        "discAbbr": "Disc",
                        "discount": "Discount",
                        "value": "Value",
                        "additionalDiscount": "Additional Discount",
                        "orderDetails": "Order Details",
                        "products": "PRODUCTS",
                        "rebates": "Period Eligible / Rebates",
                        "orderNo": "Order No",
                        "status": "Status",
                        "orderDate": "Order Date",
                        "orderedOn": "Ordered On",
                        "statusDate": "Status Date",
                        "periodTotal": "Period Total",
                        "deliveryOn": "Delivery On",
                        "yes": "Yes",
                        "no": "No",
                        "logOutPopupTitle": "Are you sure you want to log-off?",
                        "downloadOrderHistory": "Download Order History",
                        "chooseBrands": "Choose Brands",
                        "profileDetails": "Profile Details",
                        "associatedAccounts": "Associated Accounts",
                        "notification": "Notification"
                    },
                    "buttons": {
                        "back": "Back",
                        "cancel": "Cancel",
                        "confirm": "Confirm",
                        "continue": "Continue",
                        "placeNewOrder": "Place New Order",
                        "logOut": "Logout",
                        "chooseBrands": "Choose Brands",
                        "checkout": "Checkout",
                        "addAnotherAccount": "Add Another Account or Deferral Date",
                        "accept": "Accept the terms",
                        "decline": "Decline",
                    },
                    "snackbars": {
                        "exceedMaxLimit": "Value exceeding the max limit.",
                        "selectDate": "Please select date!!!",
                        "maxReached": "Maximum reached!!!",
                        "accountSelected": "All Acc Selected!!!",
                    }
                },
                "download_url": `LOC,Period,Order Date,Order Type,Internal Order Status,Internal Order Number,External Order Number,External Order Status,External Order Date,Wholesaler Code,Account Code,Legal Id Code,Brand #,Brand,EAN,SKU#,SKU,Requested Volume,Invoiced Volume,On Invoice Discount,On Invoice Free Goods,On Invoice Payment Terms,Off Invoice Discount,Off Invoice Free Goods,Offer Type,User Identifier,Order Id,Delete Record(YES/NO)
                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,S_BRD_010,SKU Brand New 10,10042,S_BRD_010_SKU_001,Medicine SKU 10,104,104,,,,,,SEGMENT,51,2212000003,
                Master,alpha,2022-12-09,ORDER,OPEN,,,IN_PROCESS,,ABC001,LBS004,BLSL004,BRD_001,Brand New 1,10003,BRD_001_SKU_001,Brand New 250Mg,200,200,4.0,0,0,,,PREDEFINED,51,2212000001,
                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,BRD_002,Brand New 2,10006,BRD_002_SKU_001,Brand New 250Mg,75,75,,,,,,PREDEFINED,51,2212000003,
                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,BRD_002,Brand New 2,10007,BRD_002_SKU_002,Brand New 650Mg,75,75,,,,,,PREDEFINED,51,2212000003,
                Master,alpha,2022-12-09,ORDER,OPEN,,,NOT_CONFIRMED,,ABC001,LBS004,BLSL004,S_BRD_010,SKU Brand New 10,10043,S_BRD_010_SKU_002,TABLET SKU 10,201,201,,,,,,SEGMENT,51,2212000003,
                `,
                "totalcheckout": "",
                "selected_brand": "GSK-BRAND-AUGMENTIN",
                "plan_progress": {
                    "title": "Plan Progress",
                    "last_date": "Jan 31, 22",
                    "brands": [
                        {
                            "name": "Augmentin",
                            "isSku": false,
                            "additional_discount": true,
                            "purchased": "125",
                            "selected": "0",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-AUGMENTIN",
                            "on_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "off_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "total_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ]
                        },
                        {
                            "name": "Ventolin",
                            "isSku": false,
                            "additional_discount": true,
                            "purchased": "45",
                            "selected": "0",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-VENTOLIN",
                            "on_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "off_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "total_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ]
                        },
                        {
                            "name": "Seretide",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "75",
                            "selected": "0",
                            "max_limit": "500",
                            "sku": "GSK-BRAND-SERETIDE",
                            "on_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "off_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
                            ],
                            "total_invoice_range": [
                                { "discount": "0", "label": "100" },
                                { "discount": "10", "label": "200" },
                                { "discount": "20", "label": "300" },
                                { "discount": "30", "label": "400" },
                                { "discount": "40", "label": "500" },
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
                                    },
                                    "discounts": {
                                        "name": "Augmentin",
                                        "isSku": !true,
                                        "additional_discount": true,
                                        "purchased": "125",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-AUGMENTIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                                    },
                                    "discounts": {
                                        "name": "Augmentin",
                                        "isSku": !true,
                                        "additional_discount": true,
                                        "purchased": "125",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-AUGMENTIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                                    },
                                    "discounts": {
                                        "name": "Ventolin",
                                        "isSku": true,
                                        "additional_discount": true,
                                        "purchased": "45",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-VENTOLIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                                    },
                                    "discounts": {
                                        "name": "Ventolin",
                                        "isSku": true,
                                        "additional_discount": true,
                                        "purchased": "45",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-VENTOLIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                                    },
                                    "discounts": {
                                        "name": "Seretide",
                                        "isSku": true,
                                        "additional_discount": false,
                                        "purchased": "75",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-SERETIDE",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                                    },
                                    "discounts": {
                                        "name": "Seretide",
                                        "isSku": true,
                                        "additional_discount": false,
                                        "purchased": "75",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-SERETIDE",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                                    },
                                    "discounts": {
                                        "name": "Augmentin",
                                        "isSku": !true,
                                        "additional_discount": true,
                                        "purchased": "125",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-AUGMENTIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                                    },
                                    "discounts": {
                                        "name": "Augmentin",
                                        "isSku": !true,
                                        "additional_discount": true,
                                        "purchased": "125",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-AUGMENTIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                                    },
                                    "discounts": {
                                        "name": "Ventolin",
                                        "isSku": true,
                                        "additional_discount": true,
                                        "purchased": "45",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-VENTOLIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                                    },
                                    "discounts": {
                                        "name": "Ventolin",
                                        "isSku": true,
                                        "additional_discount": true,
                                        "purchased": "45",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-VENTOLIN",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                                    },
                                    "discounts": {
                                        "name": "Seretide",
                                        "isSku": true,
                                        "additional_discount": false,
                                        "purchased": "75",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-SERETIDE",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                                    },
                                    "discounts": {
                                        "name": "Seretide",
                                        "isSku": true,
                                        "additional_discount": false,
                                        "purchased": "75",
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "GSK-BRAND-SERETIDE",
                                        "on_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "off_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ],
                                        "total_invoice_range": [
                                            { "discount": "0", "label": "100" },
                                            { "discount": "10", "label": "200" },
                                            { "discount": "20", "label": "300" },
                                            { "discount": "30", "label": "400" },
                                            { "discount": "40", "label": "500" },
                                        ]
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
                            "on_invoice": false,
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
                            "on_invoice": false,
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
                            "account_no": "Wholesaler A - Accoount: A0001",
                            "order_no": "6921030003",
                            "sku": "GSK-REBATES-A0001",
                            "ordered_date": "Dec 01, 22",
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
                        },
                        {
                            "account_no": "Wholesaler A - Accoount: A0002",
                            "order_no": "6921030003",
                            "sku": "GSK-REBATES-A0002",
                            "ordered_date": "Dec 01, 22",
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
                },
                "profileDetails": {
                    "firstName": "Ashish",
                    "lastName": "Bhardwaj",
                    "phoneNumber": "9639417178",
                    "email": ""
                },
                "associatedAccounts": [
                    {
                        "wholeSalerName": "ABC1",
                        "wholeSalerStatus": "ACTIVE",
                        "accounts": [
                            {
                                "accountNumber": "A00000001",
                                "legalIdCode": "12345",
                                "invoice": "https://www.google-analytics.com/analytics.js",
                                "accountStatus": "ACTIVE"
                            },
                            {
                                "accountNumber": "A00000001",
                                "legalIdCode": "12345",
                                "invoice": "https://www.google-analytics.com/analytics.js",
                                "accountStatus": "ACTIVE"
                            }
                        ]
                    },
                    {
                        "wholeSalerName": "ABC2",
                        "wholeSalerStatus": "Active/Inactive",
                        "accounts": [
                            {
                                "accountNumber": "A00000001",
                                "legalIdCode": "12345",
                                "invoice": "https://www.google-analytics.com/analytics.js",
                                "accountStatus": "Active"
                            },
                            {
                                "accountNumber": "A00000001",
                                "legalIdCode": "12345",
                                "invoice": "https://www.google-analytics.com/analytics.js",
                                "accountStatus": "Active"
                            }
                        ]
                    }
                ],
                "notifications": "yes"
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
            ToApp("userwelcome-screen", {
                "start_date": "2022-09-09",
                "last_date": "2023-12-31",
                "download_url": "https://stats.govt.nz/assets/Uploads/Annual-enterprise-survey/Annual-enterprise-survey-2021-financial-year-provisional/Download-data/annual-enterprise-survey-2021-financial-year-provisional-csv.csv",
                "totalcheckout": "",
                "plan_progress": {
                    "title": "Plan Progress",
                    "last_date": "Thu Dec 08 2022",
                    "brands": [
                        {
                            "name": "Brand New 1",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "30",
                            "selected": "0",
                            "max_limit": "1500",
                            "sku": "BRD_001",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 150
                                },
                                {
                                    "discount": "3.0",
                                    "label": 300
                                },
                                {
                                    "discount": "4.0",
                                    "label": 450
                                },
                                {
                                    "discount": "5.0",
                                    "label": 600
                                },
                                {
                                    "discount": "6.0",
                                    "label": 900
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1500
                                }
                            ],
                            "onInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "Brand New 2",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "54",
                            "max_limit": "1500",
                            "sku": "BRD_002",
                            "on_invoice_range": [
                                {
                                    "discount": "2.0",
                                    "label": 150
                                },
                                {
                                    "discount": "3.0",
                                    "label": 300
                                },
                                {
                                    "discount": "4.0",
                                    "label": 450
                                },
                                {
                                    "discount": "5.0",
                                    "label": 600
                                },
                                {
                                    "discount": "6.0",
                                    "label": 750
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1500
                                }
                            ],
                            "onInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "Brand New 5",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "40",
                            "selected": "0",
                            "max_limit": "300",
                            "sku": "BRD_005",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 30
                                },
                                {
                                    "discount": "2.0",
                                    "label": 60
                                },
                                {
                                    "discount": "3.0",
                                    "label": 90
                                },
                                {
                                    "discount": "4.0",
                                    "label": 120
                                },
                                {
                                    "discount": "5.0",
                                    "label": 150
                                },
                                {
                                    "discount": "6.0",
                                    "label": 300
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 30
                                },
                                {
                                    "discount": "3.0",
                                    "label": 60
                                },
                                {
                                    "discount": "4.0",
                                    "label": 90
                                },
                                {
                                    "discount": "5.0",
                                    "label": 120
                                },
                                {
                                    "discount": "6.0",
                                    "label": 150
                                },
                                {
                                    "discount": "7.0",
                                    "label": 300
                                }
                            ],
                            "offInvoice_discount_execution": "FINANCIAL",
                            "onInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "Brand New 6",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "2000",
                            "sku": "BRD_006",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 200
                                },
                                {
                                    "discount": "1.0",
                                    "label": 400
                                },
                                {
                                    "discount": "2.0",
                                    "label": 600
                                },
                                {
                                    "discount": "3.0",
                                    "label": 800
                                },
                                {
                                    "discount": "4.0",
                                    "label": 1000
                                },
                                {
                                    "discount": "5.0",
                                    "label": 2000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 200
                                },
                                {
                                    "discount": "2.0",
                                    "label": 400
                                },
                                {
                                    "discount": "3.0",
                                    "label": 600
                                },
                                {
                                    "discount": "4.0",
                                    "label": 800
                                },
                                {
                                    "discount": "5.0",
                                    "label": 1000
                                },
                                {
                                    "discount": "6.0",
                                    "label": 2000
                                }
                            ],
                            "offInvoice_discount_execution": "FINANCIAL",
                            "onInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "Brand New 3",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "200",
                            "sku": "BRD_003",
                            "off_invoice_range": [
                                {
                                    "discount": "2.0",
                                    "label": 20
                                },
                                {
                                    "discount": "3.0",
                                    "label": 40
                                },
                                {
                                    "discount": "4.0",
                                    "label": 60
                                },
                                {
                                    "discount": "5.0",
                                    "label": 80
                                },
                                {
                                    "discount": "6.0",
                                    "label": 100
                                },
                                {
                                    "discount": "7.0",
                                    "label": 200
                                }
                            ],
                            "offInvoice_discount_execution": null
                        },
                        {
                            "name": "Brand New 4",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "600",
                            "sku": "BRD_004",
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 600
                                }
                            ],
                            "offInvoice_discount_execution": null
                        },
                        {
                            "name": "Brand New 8",
                            "isSku": false,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "max_limit": "20000",
                            "sku": "BRD_008",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 2000
                                },
                                {
                                    "discount": "10.0",
                                    "label": 4000
                                },
                                {
                                    "discount": "20.0",
                                    "label": 6000
                                },
                                {
                                    "discount": "30.0",
                                    "label": 8000
                                },
                                {
                                    "discount": "40.0",
                                    "label": 10000
                                },
                                {
                                    "discount": "50.0",
                                    "label": 20000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 2000
                                },
                                {
                                    "discount": "10.0",
                                    "label": 4000
                                },
                                {
                                    "discount": "20.0",
                                    "label": 6000
                                },
                                {
                                    "discount": "30.0",
                                    "label": 8000
                                },
                                {
                                    "discount": "40.0",
                                    "label": 10000
                                },
                                {
                                    "discount": "50.0",
                                    "label": 20000
                                }
                            ],
                            "offInvoice_discount_execution": "FINANCIAL",
                            "onInvoice_discount_execution": "FINANCIAL"
                        },
                        {
                            "name": "SKU Brand New 6",
                            "isSku": true,
                            "onInvoice_discount_execution": "FREE_GOODS",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "S_BRD_006",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 40000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 40000
                                }
                            ],
                            "max_limit": "40000"
                        },
                        {
                            "name": "SKU Brand New 3",
                            "isSku": true,
                            "onInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "S_BRD_003",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 2400
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 2400
                                }
                            ],
                            "max_limit": "2400"
                        },
                        {
                            "name": "SKU Brand New 9",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "25",
                            "selected": "25",
                            "sku": "S_BRD_009",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1200
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1200
                                }
                            ],
                            "max_limit": "1200"
                        },
                        {
                            "name": "SKU Brand New 5",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "S_BRD_005",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 4400
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 4400
                                }
                            ],
                            "max_limit": "4400"
                        },
                        {
                            "name": "SKU Brand New 2",
                            "isSku": true,
                            "onInvoice_discount_execution": "FREE_GOODS",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "S_BRD_002",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 2400
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 2400
                                }
                            ],
                            "max_limit": "2400"
                        },
                        {
                            "name": "SKU Brand New 10",
                            "isSku": true,
                            "onInvoice_discount_execution": "FREE_GOODS",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "S_BRD_010",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1200
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1200
                                }
                            ],
                            "max_limit": "1200"
                        },
                        {
                            "name": "SKU Brand New 1",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "S_BRD_001",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1050
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1050
                                }
                            ],
                            "max_limit": "1050"
                        },
                        {
                            "name": "SKU Brand New 4",
                            "isSku": true,
                            "onInvoice_discount_execution": null,
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "S_BRD_004",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1200
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 1200
                                }
                            ],
                            "max_limit": "1200"
                        },
                        {
                            "name": "SKU Brand New 7",
                            "isSku": true,
                            "onInvoice_discount_execution": "FREE_GOODS",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "S_BRD_007",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 12000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 12000
                                }
                            ],
                            "max_limit": "12000"
                        },
                        {
                            "name": "SKU Brand New 8",
                            "isSku": true,
                            "onInvoice_discount_execution": "FINANCIAL",
                            "additional_discount": false,
                            "purchased": "0",
                            "selected": "0",
                            "sku": "S_BRD_008",
                            "on_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 6000
                                }
                            ],
                            "off_invoice_range": [
                                {
                                    "discount": "0.0",
                                    "label": 100
                                },
                                {
                                    "discount": "3.0",
                                    "label": 200
                                },
                                {
                                    "discount": "4.0",
                                    "label": 300
                                },
                                {
                                    "discount": "5.0",
                                    "label": 400
                                },
                                {
                                    "discount": "6.0",
                                    "label": 500
                                },
                                {
                                    "discount": "7.0",
                                    "label": 6000
                                }
                            ],
                            "max_limit": "6000"
                        }
                    ]
                },
                "available_orders": {
                    "orders": [
                        {
                            "account_no": "ABC Pharmacy   -  LBS004",
                            "order_no": null,
                            "sku": "LBS004",
                            "product_details": [
                                {
                                    "name": "Brand New 250Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_001",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001",
                                        "purchased": "30"
                                    }
                                },
                                {
                                    "name": "Brand New 450Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_002",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001"
                                    }
                                },
                                {
                                    "name": "Brand New 5000Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_003",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001"
                                    }
                                },
                                {
                                    "name": "Brand New 250Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_002_SKU_001",
                                    "brand": "BRD_002",
                                    "brandName": "Brand New 2",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 2",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "250",
                                        "sku": "BRD_002"
                                    }
                                },
                                {
                                    "name": "Brand New 650Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_002_SKU_002",
                                    "brand": "BRD_002",
                                    "brandName": "Brand New 2",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 2",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "250",
                                        "sku": "BRD_002"
                                    }
                                },
                                {
                                    "name": "Brand New 150Mg",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_003_SKU_001",
                                    "brand": "BRD_003",
                                    "brandName": "Brand New 3",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 3",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_003"
                                    }
                                },
                                {
                                    "name": "Brand New 750Mg",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_003_SKU_002",
                                    "brand": "BRD_003",
                                    "brandName": "Brand New 3",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 3",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_003"
                                    }
                                },
                                {
                                    "name": "Brand Pain Killer",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_004_SKU_001",
                                    "brand": "BRD_004",
                                    "brandName": "Brand New 4",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 4",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "BRD_004"
                                    }
                                },
                                {
                                    "name": "Brand SYRUB",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_004_SKU_002",
                                    "brand": "BRD_004",
                                    "brandName": "Brand New 4",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 4",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "BRD_004"
                                    }
                                },
                                {
                                    "name": "med brand",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_005_SKU_002",
                                    "brand": "BRD_005",
                                    "brandName": "Brand New 5",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 5",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_005"
                                    }
                                },
                                {
                                    "name": "S_Brand New 250Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_001",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 450Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_002",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 5000Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_003",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_operation equipment",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_007_SKU_001",
                                    "brand": "S_BRD_007",
                                    "brandName": "SKU Brand New 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "3000",
                                        "sku": "S_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "30",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "270",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "480",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "750",
                                                "label": 6000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "50",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "200",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "450",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "800",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "1250",
                                                "label": 6000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "New medi 100",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_006_SKU_001",
                                    "brand": "BRD_006",
                                    "brandName": "Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 6",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1000",
                                        "sku": "BRD_006"
                                    }
                                },
                                {
                                    "name": "New medi 200",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_006_SKU_002",
                                    "brand": "BRD_006",
                                    "brandName": "Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 6",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1000",
                                        "sku": "BRD_006"
                                    }
                                },
                                {
                                    "name": "S_Mask",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_007_SKU_002",
                                    "brand": "S_BRD_007",
                                    "brandName": "SKU Brand New 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "3000",
                                        "sku": "S_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "30",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "270",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "480",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "750",
                                                "label": 6000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "50",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "200",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "450",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "800",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "1250",
                                                "label": 6000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 250Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_002_SKU_001",
                                    "brand": "S_BRD_002",
                                    "brandName": "SKU Brand New 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_002",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 650Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_002_SKU_002",
                                    "brand": "S_BRD_002",
                                    "brandName": "SKU Brand New 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_002",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "30",
                                                "label": 400
                                            },
                                            {
                                                "discount": "80",
                                                "label": 600
                                            },
                                            {
                                                "discount": "150",
                                                "label": 800
                                            },
                                            {
                                                "discount": "240",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "350",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 150Mg",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_003_SKU_001",
                                    "brand": "S_BRD_003",
                                    "brandName": "SKU Brand New 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_003",
                                        "off_invoice_range": [
                                            {
                                                "discount": "1.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 800
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 750Mg",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_003_SKU_002",
                                    "brand": "S_BRD_003",
                                    "brandName": "SKU Brand New 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_003",
                                        "off_invoice_range": [
                                            {
                                                "discount": "1.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 800
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "dolo 500MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_008_SKU_001",
                                    "brand": "BRD_008",
                                    "brandName": "Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 8",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "5000",
                                        "sku": "BRD_008"
                                    }
                                },
                                {
                                    "name": "Phara 350 MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_008_SKU_002",
                                    "brand": "BRD_008",
                                    "brandName": "Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 8",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "5000",
                                        "sku": "BRD_008"
                                    }
                                },
                                {
                                    "name": "S_Brand SYRUB",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_004_SKU_002",
                                    "brand": "S_BRD_004",
                                    "brandName": "SKU Brand New 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_004",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "10",
                                                "label": 200
                                            },
                                            {
                                                "discount": "40",
                                                "label": 300
                                            },
                                            {
                                                "discount": "90",
                                                "label": 400
                                            },
                                            {
                                                "discount": "160",
                                                "label": 500
                                            },
                                            {
                                                "discount": "250",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand Pain Killer",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_004_SKU_001",
                                    "brand": "S_BRD_004",
                                    "brandName": "SKU Brand New 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_004",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "10",
                                                "label": 200
                                            },
                                            {
                                                "discount": "40",
                                                "label": 300
                                            },
                                            {
                                                "discount": "90",
                                                "label": 400
                                            },
                                            {
                                                "discount": "160",
                                                "label": 500
                                            },
                                            {
                                                "discount": "250",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_med brand",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_005_SKU_002",
                                    "brand": "S_BRD_005",
                                    "brandName": "SKU Brand New 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1100",
                                        "sku": "S_BRD_005",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "40.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "50.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "60.0",
                                                "label": 2200
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "16.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "32.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "64.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "70.0",
                                                "label": 2200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_New medi 100",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_006_SKU_001",
                                    "brand": "S_BRD_006",
                                    "brandName": "SKU Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "10000",
                                        "sku": "S_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "540",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "960",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "1500",
                                                "label": 20000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "900",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "1600",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "2500",
                                                "label": 20000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_New medi 200",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_006_SKU_002",
                                    "brand": "S_BRD_006",
                                    "brandName": "SKU Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "10000",
                                        "sku": "S_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "540",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "960",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "1500",
                                                "label": 20000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "900",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "1600",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "2500",
                                                "label": 20000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_dolo 500MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_008_SKU_001",
                                    "brand": "S_BRD_008",
                                    "brandName": "SKU Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 8",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1500",
                                        "sku": "S_BRD_008",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "15",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "135",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "375",
                                                "label": 3000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "25",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "225",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "625",
                                                "label": 3000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Phara 350 MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_008_SKU_002",
                                    "brand": "S_BRD_008",
                                    "brandName": "SKU Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 8",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1500",
                                        "sku": "S_BRD_008",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "15",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "135",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "375",
                                                "label": 3000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "25",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "225",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "625",
                                                "label": 3000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Medicine SKU 9",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_009_SKU_001",
                                    "brand": "S_BRD_009",
                                    "brandName": "SKU Brand New 9",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 9",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 600
                                            }
                                        ],
                                        "purchased": "25"
                                    }
                                },
                                {
                                    "name": "TABLET SKU 9",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_009_SKU_002",
                                    "brand": "S_BRD_009",
                                    "brandName": "SKU Brand New 9",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 9",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Medicine SKU 10",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_010_SKU_001",
                                    "brand": "S_BRD_010",
                                    "brandName": "SKU Brand New 10",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 10",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6",
                                                "label": 300
                                            },
                                            {
                                                "discount": "12",
                                                "label": 400
                                            },
                                            {
                                                "discount": "20",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "TABLET SKU 10",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_010_SKU_002",
                                    "brand": "S_BRD_010",
                                    "brandName": "SKU Brand New 10",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 10",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6",
                                                "label": 300
                                            },
                                            {
                                                "discount": "12",
                                                "label": 400
                                            },
                                            {
                                                "discount": "20",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand med",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_005_SKU_001",
                                    "brand": "S_BRD_005",
                                    "brandName": "SKU Brand New 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1100",
                                        "sku": "S_BRD_005",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "40.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "50.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "60.0",
                                                "label": 2200
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "16.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "32.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "64.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "70.0",
                                                "label": 2200
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "Proforma   -  LBS001",
                            "order_no": null,
                            "sku": "LBS001",
                            "product_details": [
                                {
                                    "name": "Brand New 250Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_001",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001",
                                        "purchased": "30"
                                    }
                                },
                                {
                                    "name": "Brand New 450Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_002",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001"
                                    }
                                },
                                {
                                    "name": "Brand New 5000Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_003",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001"
                                    }
                                },
                                {
                                    "name": "Brand New 250Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_002_SKU_001",
                                    "brand": "BRD_002",
                                    "brandName": "Brand New 2",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 2",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "250",
                                        "sku": "BRD_002"
                                    }
                                },
                                {
                                    "name": "Brand New 650Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_002_SKU_002",
                                    "brand": "BRD_002",
                                    "brandName": "Brand New 2",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 2",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "250",
                                        "sku": "BRD_002"
                                    }
                                },
                                {
                                    "name": "Brand New 150Mg",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_003_SKU_001",
                                    "brand": "BRD_003",
                                    "brandName": "Brand New 3",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 3",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_003"
                                    }
                                },
                                {
                                    "name": "Brand New 750Mg",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_003_SKU_002",
                                    "brand": "BRD_003",
                                    "brandName": "Brand New 3",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 3",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_003"
                                    }
                                },
                                {
                                    "name": "Brand Pain Killer",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_004_SKU_001",
                                    "brand": "BRD_004",
                                    "brandName": "Brand New 4",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 4",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "BRD_004"
                                    }
                                },
                                {
                                    "name": "Brand SYRUB",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_004_SKU_002",
                                    "brand": "BRD_004",
                                    "brandName": "Brand New 4",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 4",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "BRD_004"
                                    }
                                },
                                {
                                    "name": "med brand",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_005_SKU_002",
                                    "brand": "BRD_005",
                                    "brandName": "Brand New 5",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 5",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_005"
                                    }
                                },
                                {
                                    "name": "S_Brand New 250Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_001",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 450Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_002",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 5000Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_003",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_operation equipment",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_007_SKU_001",
                                    "brand": "S_BRD_007",
                                    "brandName": "SKU Brand New 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "3000",
                                        "sku": "S_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "30",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "270",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "480",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "750",
                                                "label": 6000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "50",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "200",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "450",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "800",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "1250",
                                                "label": 6000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "New medi 100",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_006_SKU_001",
                                    "brand": "BRD_006",
                                    "brandName": "Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 6",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1000",
                                        "sku": "BRD_006"
                                    }
                                },
                                {
                                    "name": "New medi 200",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_006_SKU_002",
                                    "brand": "BRD_006",
                                    "brandName": "Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 6",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1000",
                                        "sku": "BRD_006"
                                    }
                                },
                                {
                                    "name": "S_Mask",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_007_SKU_002",
                                    "brand": "S_BRD_007",
                                    "brandName": "SKU Brand New 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "3000",
                                        "sku": "S_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "30",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "270",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "480",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "750",
                                                "label": 6000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "50",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "200",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "450",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "800",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "1250",
                                                "label": 6000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 250Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_002_SKU_001",
                                    "brand": "S_BRD_002",
                                    "brandName": "SKU Brand New 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_002",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 650Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_002_SKU_002",
                                    "brand": "S_BRD_002",
                                    "brandName": "SKU Brand New 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_002",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "30",
                                                "label": 400
                                            },
                                            {
                                                "discount": "80",
                                                "label": 600
                                            },
                                            {
                                                "discount": "150",
                                                "label": 800
                                            },
                                            {
                                                "discount": "240",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "350",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 150Mg",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_003_SKU_001",
                                    "brand": "S_BRD_003",
                                    "brandName": "SKU Brand New 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_003",
                                        "off_invoice_range": [
                                            {
                                                "discount": "1.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 800
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 750Mg",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_003_SKU_002",
                                    "brand": "S_BRD_003",
                                    "brandName": "SKU Brand New 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_003",
                                        "off_invoice_range": [
                                            {
                                                "discount": "1.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 800
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "dolo 500MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_008_SKU_001",
                                    "brand": "BRD_008",
                                    "brandName": "Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 8",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "5000",
                                        "sku": "BRD_008"
                                    }
                                },
                                {
                                    "name": "Phara 350 MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_008_SKU_002",
                                    "brand": "BRD_008",
                                    "brandName": "Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 8",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "5000",
                                        "sku": "BRD_008"
                                    }
                                },
                                {
                                    "name": "S_Brand SYRUB",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_004_SKU_002",
                                    "brand": "S_BRD_004",
                                    "brandName": "SKU Brand New 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_004",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "10",
                                                "label": 200
                                            },
                                            {
                                                "discount": "40",
                                                "label": 300
                                            },
                                            {
                                                "discount": "90",
                                                "label": 400
                                            },
                                            {
                                                "discount": "160",
                                                "label": 500
                                            },
                                            {
                                                "discount": "250",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand Pain Killer",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_004_SKU_001",
                                    "brand": "S_BRD_004",
                                    "brandName": "SKU Brand New 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_004",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "10",
                                                "label": 200
                                            },
                                            {
                                                "discount": "40",
                                                "label": 300
                                            },
                                            {
                                                "discount": "90",
                                                "label": 400
                                            },
                                            {
                                                "discount": "160",
                                                "label": 500
                                            },
                                            {
                                                "discount": "250",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_med brand",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_005_SKU_002",
                                    "brand": "S_BRD_005",
                                    "brandName": "SKU Brand New 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1100",
                                        "sku": "S_BRD_005",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "40.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "50.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "60.0",
                                                "label": 2200
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "16.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "32.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "64.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "70.0",
                                                "label": 2200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_New medi 100",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_006_SKU_001",
                                    "brand": "S_BRD_006",
                                    "brandName": "SKU Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "10000",
                                        "sku": "S_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "540",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "960",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "1500",
                                                "label": 20000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "900",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "1600",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "2500",
                                                "label": 20000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_New medi 200",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_006_SKU_002",
                                    "brand": "S_BRD_006",
                                    "brandName": "SKU Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "10000",
                                        "sku": "S_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "540",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "960",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "1500",
                                                "label": 20000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "900",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "1600",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "2500",
                                                "label": 20000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_dolo 500MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_008_SKU_001",
                                    "brand": "S_BRD_008",
                                    "brandName": "SKU Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 8",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1500",
                                        "sku": "S_BRD_008",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "15",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "135",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "375",
                                                "label": 3000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "25",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "225",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "625",
                                                "label": 3000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Phara 350 MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_008_SKU_002",
                                    "brand": "S_BRD_008",
                                    "brandName": "SKU Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 8",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1500",
                                        "sku": "S_BRD_008",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "15",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "135",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "375",
                                                "label": 3000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "25",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "225",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "625",
                                                "label": 3000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Medicine SKU 9",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_009_SKU_001",
                                    "brand": "S_BRD_009",
                                    "brandName": "SKU Brand New 9",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 9",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 600
                                            }
                                        ],
                                        "purchased": "25"
                                    }
                                },
                                {
                                    "name": "TABLET SKU 9",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_009_SKU_002",
                                    "brand": "S_BRD_009",
                                    "brandName": "SKU Brand New 9",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 9",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Medicine SKU 10",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_010_SKU_001",
                                    "brand": "S_BRD_010",
                                    "brandName": "SKU Brand New 10",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 10",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6",
                                                "label": 300
                                            },
                                            {
                                                "discount": "12",
                                                "label": 400
                                            },
                                            {
                                                "discount": "20",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "TABLET SKU 10",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_010_SKU_002",
                                    "brand": "S_BRD_010",
                                    "brandName": "SKU Brand New 10",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 10",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6",
                                                "label": 300
                                            },
                                            {
                                                "discount": "12",
                                                "label": 400
                                            },
                                            {
                                                "discount": "20",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand med",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_005_SKU_001",
                                    "brand": "S_BRD_005",
                                    "brandName": "SKU Brand New 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1100",
                                        "sku": "S_BRD_005",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "40.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "50.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "60.0",
                                                "label": 2200
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "16.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "32.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "64.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "70.0",
                                                "label": 2200
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "Proforma   -  LBS002",
                            "order_no": null,
                            "sku": "LBS002",
                            "product_details": [
                                {
                                    "name": "Brand New 250Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_001",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001",
                                        "purchased": "30"
                                    }
                                },
                                {
                                    "name": "Brand New 450Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_002",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001"
                                    }
                                },
                                {
                                    "name": "Brand New 5000Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_003",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001"
                                    }
                                },
                                {
                                    "name": "Brand New 250Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_002_SKU_001",
                                    "brand": "BRD_002",
                                    "brandName": "Brand New 2",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 2",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "250",
                                        "sku": "BRD_002"
                                    }
                                },
                                {
                                    "name": "Brand New 650Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_002_SKU_002",
                                    "brand": "BRD_002",
                                    "brandName": "Brand New 2",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 2",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "250",
                                        "sku": "BRD_002"
                                    }
                                },
                                {
                                    "name": "Brand New 150Mg",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_003_SKU_001",
                                    "brand": "BRD_003",
                                    "brandName": "Brand New 3",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 3",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_003"
                                    }
                                },
                                {
                                    "name": "Brand New 750Mg",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_003_SKU_002",
                                    "brand": "BRD_003",
                                    "brandName": "Brand New 3",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 3",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_003"
                                    }
                                },
                                {
                                    "name": "Brand Pain Killer",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_004_SKU_001",
                                    "brand": "BRD_004",
                                    "brandName": "Brand New 4",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 4",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "BRD_004"
                                    }
                                },
                                {
                                    "name": "Brand SYRUB",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_004_SKU_002",
                                    "brand": "BRD_004",
                                    "brandName": "Brand New 4",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 4",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "BRD_004"
                                    }
                                },
                                {
                                    "name": "med brand",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_005_SKU_002",
                                    "brand": "BRD_005",
                                    "brandName": "Brand New 5",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 5",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_005"
                                    }
                                },
                                {
                                    "name": "S_Brand New 250Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_001",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 450Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_002",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 5000Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_003",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_operation equipment",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_007_SKU_001",
                                    "brand": "S_BRD_007",
                                    "brandName": "SKU Brand New 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "3000",
                                        "sku": "S_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "30",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "270",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "480",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "750",
                                                "label": 6000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "50",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "200",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "450",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "800",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "1250",
                                                "label": 6000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "New medi 100",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_006_SKU_001",
                                    "brand": "BRD_006",
                                    "brandName": "Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 6",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1000",
                                        "sku": "BRD_006"
                                    }
                                },
                                {
                                    "name": "New medi 200",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_006_SKU_002",
                                    "brand": "BRD_006",
                                    "brandName": "Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 6",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1000",
                                        "sku": "BRD_006"
                                    }
                                },
                                {
                                    "name": "S_Mask",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_007_SKU_002",
                                    "brand": "S_BRD_007",
                                    "brandName": "SKU Brand New 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "3000",
                                        "sku": "S_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "30",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "270",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "480",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "750",
                                                "label": 6000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "50",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "200",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "450",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "800",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "1250",
                                                "label": 6000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 250Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_002_SKU_001",
                                    "brand": "S_BRD_002",
                                    "brandName": "SKU Brand New 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_002",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 650Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_002_SKU_002",
                                    "brand": "S_BRD_002",
                                    "brandName": "SKU Brand New 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_002",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "30",
                                                "label": 400
                                            },
                                            {
                                                "discount": "80",
                                                "label": 600
                                            },
                                            {
                                                "discount": "150",
                                                "label": 800
                                            },
                                            {
                                                "discount": "240",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "350",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 150Mg",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_003_SKU_001",
                                    "brand": "S_BRD_003",
                                    "brandName": "SKU Brand New 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_003",
                                        "off_invoice_range": [
                                            {
                                                "discount": "1.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 800
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 750Mg",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_003_SKU_002",
                                    "brand": "S_BRD_003",
                                    "brandName": "SKU Brand New 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_003",
                                        "off_invoice_range": [
                                            {
                                                "discount": "1.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 800
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "dolo 500MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_008_SKU_001",
                                    "brand": "BRD_008",
                                    "brandName": "Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 8",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "5000",
                                        "sku": "BRD_008"
                                    }
                                },
                                {
                                    "name": "Phara 350 MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_008_SKU_002",
                                    "brand": "BRD_008",
                                    "brandName": "Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 8",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "5000",
                                        "sku": "BRD_008"
                                    }
                                },
                                {
                                    "name": "S_Brand SYRUB",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_004_SKU_002",
                                    "brand": "S_BRD_004",
                                    "brandName": "SKU Brand New 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_004",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "10",
                                                "label": 200
                                            },
                                            {
                                                "discount": "40",
                                                "label": 300
                                            },
                                            {
                                                "discount": "90",
                                                "label": 400
                                            },
                                            {
                                                "discount": "160",
                                                "label": 500
                                            },
                                            {
                                                "discount": "250",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand Pain Killer",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_004_SKU_001",
                                    "brand": "S_BRD_004",
                                    "brandName": "SKU Brand New 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_004",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "10",
                                                "label": 200
                                            },
                                            {
                                                "discount": "40",
                                                "label": 300
                                            },
                                            {
                                                "discount": "90",
                                                "label": 400
                                            },
                                            {
                                                "discount": "160",
                                                "label": 500
                                            },
                                            {
                                                "discount": "250",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_med brand",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_005_SKU_002",
                                    "brand": "S_BRD_005",
                                    "brandName": "SKU Brand New 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1100",
                                        "sku": "S_BRD_005",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "40.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "50.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "60.0",
                                                "label": 2200
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "16.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "32.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "64.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "70.0",
                                                "label": 2200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_New medi 100",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_006_SKU_001",
                                    "brand": "S_BRD_006",
                                    "brandName": "SKU Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "10000",
                                        "sku": "S_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "540",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "960",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "1500",
                                                "label": 20000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "900",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "1600",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "2500",
                                                "label": 20000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_New medi 200",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_006_SKU_002",
                                    "brand": "S_BRD_006",
                                    "brandName": "SKU Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "10000",
                                        "sku": "S_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "540",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "960",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "1500",
                                                "label": 20000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "900",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "1600",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "2500",
                                                "label": 20000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_dolo 500MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_008_SKU_001",
                                    "brand": "S_BRD_008",
                                    "brandName": "SKU Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 8",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1500",
                                        "sku": "S_BRD_008",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "15",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "135",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "375",
                                                "label": 3000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "25",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "225",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "625",
                                                "label": 3000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Phara 350 MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_008_SKU_002",
                                    "brand": "S_BRD_008",
                                    "brandName": "SKU Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 8",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1500",
                                        "sku": "S_BRD_008",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "15",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "135",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "375",
                                                "label": 3000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "25",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "225",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "625",
                                                "label": 3000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Medicine SKU 9",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_009_SKU_001",
                                    "brand": "S_BRD_009",
                                    "brandName": "SKU Brand New 9",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 9",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 600
                                            }
                                        ],
                                        "purchased": "25"
                                    }
                                },
                                {
                                    "name": "TABLET SKU 9",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_009_SKU_002",
                                    "brand": "S_BRD_009",
                                    "brandName": "SKU Brand New 9",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 9",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Medicine SKU 10",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_010_SKU_001",
                                    "brand": "S_BRD_010",
                                    "brandName": "SKU Brand New 10",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 10",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6",
                                                "label": 300
                                            },
                                            {
                                                "discount": "12",
                                                "label": 400
                                            },
                                            {
                                                "discount": "20",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "TABLET SKU 10",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_010_SKU_002",
                                    "brand": "S_BRD_010",
                                    "brandName": "SKU Brand New 10",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 10",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6",
                                                "label": 300
                                            },
                                            {
                                                "discount": "12",
                                                "label": 400
                                            },
                                            {
                                                "discount": "20",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand med",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_005_SKU_001",
                                    "brand": "S_BRD_005",
                                    "brandName": "SKU Brand New 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1100",
                                        "sku": "S_BRD_005",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "40.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "50.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "60.0",
                                                "label": 2200
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "16.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "32.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "64.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "70.0",
                                                "label": 2200
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "ABC Pharmacy   -  LBS003",
                            "order_no": null,
                            "sku": "LBS003",
                            "product_details": [
                                {
                                    "name": "Brand New 250Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_001",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001",
                                        "purchased": "30"
                                    }
                                },
                                {
                                    "name": "Brand New 450Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_002",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001"
                                    }
                                },
                                {
                                    "name": "Brand New 5000Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_001_SKU_003",
                                    "brand": "BRD_001",
                                    "brandName": "Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 1",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "500",
                                        "sku": "BRD_001"
                                    }
                                },
                                {
                                    "name": "Brand New 250Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_002_SKU_001",
                                    "brand": "BRD_002",
                                    "brandName": "Brand New 2",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 2",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "250",
                                        "sku": "BRD_002"
                                    }
                                },
                                {
                                    "name": "Brand New 650Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_002_SKU_002",
                                    "brand": "BRD_002",
                                    "brandName": "Brand New 2",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 2",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "250",
                                        "sku": "BRD_002"
                                    }
                                },
                                {
                                    "name": "Brand New 150Mg",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_003_SKU_001",
                                    "brand": "BRD_003",
                                    "brandName": "Brand New 3",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 3",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_003"
                                    }
                                },
                                {
                                    "name": "Brand New 750Mg",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_003_SKU_002",
                                    "brand": "BRD_003",
                                    "brandName": "Brand New 3",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 3",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_003"
                                    }
                                },
                                {
                                    "name": "Brand Pain Killer",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_004_SKU_001",
                                    "brand": "BRD_004",
                                    "brandName": "Brand New 4",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 4",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "BRD_004"
                                    }
                                },
                                {
                                    "name": "Brand SYRUB",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_004_SKU_002",
                                    "brand": "BRD_004",
                                    "brandName": "Brand New 4",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 4",
                                        "isSku": false,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "BRD_004"
                                    }
                                },
                                {
                                    "name": "med brand",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_005_SKU_002",
                                    "brand": "BRD_005",
                                    "brandName": "Brand New 5",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 5",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "100",
                                        "sku": "BRD_005"
                                    }
                                },
                                {
                                    "name": "S_Brand New 250Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_001",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 450Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_002",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 5000Mg",
                                    "price": "20",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_001_SKU_003",
                                    "brand": "S_BRD_001",
                                    "brandName": "SKU Brand New 1",
                                    "offerType": "PREDEFINED",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 1",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "350",
                                        "sku": "S_BRD_001",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_operation equipment",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_007_SKU_001",
                                    "brand": "S_BRD_007",
                                    "brandName": "SKU Brand New 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "3000",
                                        "sku": "S_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "30",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "270",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "480",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "750",
                                                "label": 6000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "50",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "200",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "450",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "800",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "1250",
                                                "label": 6000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "New medi 100",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_006_SKU_001",
                                    "brand": "BRD_006",
                                    "brandName": "Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 6",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1000",
                                        "sku": "BRD_006"
                                    }
                                },
                                {
                                    "name": "New medi 200",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_006_SKU_002",
                                    "brand": "BRD_006",
                                    "brandName": "Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 6",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1000",
                                        "sku": "BRD_006"
                                    }
                                },
                                {
                                    "name": "S_Mask",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_007_SKU_002",
                                    "brand": "S_BRD_007",
                                    "brandName": "SKU Brand New 7",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 7",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "3000",
                                        "sku": "S_BRD_007",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "30",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "120",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "270",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "480",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "750",
                                                "label": 6000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "50",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "200",
                                                "label": 3000
                                            },
                                            {
                                                "discount": "450",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "800",
                                                "label": 5000
                                            },
                                            {
                                                "discount": "1250",
                                                "label": 6000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 250Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_002_SKU_001",
                                    "brand": "S_BRD_002",
                                    "brandName": "SKU Brand New 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_002",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 50
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 150
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 350
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 650Mg",
                                    "price": "15",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_002_SKU_002",
                                    "brand": "S_BRD_002",
                                    "brandName": "SKU Brand New 2",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 2",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_002",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "30",
                                                "label": 400
                                            },
                                            {
                                                "discount": "80",
                                                "label": 600
                                            },
                                            {
                                                "discount": "150",
                                                "label": 800
                                            },
                                            {
                                                "discount": "240",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "350",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 150Mg",
                                    "price": "10",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_003_SKU_001",
                                    "brand": "S_BRD_003",
                                    "brandName": "SKU Brand New 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_003",
                                        "off_invoice_range": [
                                            {
                                                "discount": "1.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 800
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "7.0",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand New 750Mg",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_003_SKU_002",
                                    "brand": "S_BRD_003",
                                    "brandName": "SKU Brand New 3",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 3",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "600",
                                        "sku": "S_BRD_003",
                                        "off_invoice_range": [
                                            {
                                                "discount": "1.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 800
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 1200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "dolo 500MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_008_SKU_001",
                                    "brand": "BRD_008",
                                    "brandName": "Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 8",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "5000",
                                        "sku": "BRD_008"
                                    }
                                },
                                {
                                    "name": "Phara 350 MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "BRD_008_SKU_002",
                                    "brand": "BRD_008",
                                    "brandName": "Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "Brand New 8",
                                        "isSku": false,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "5000",
                                        "sku": "BRD_008"
                                    }
                                },
                                {
                                    "name": "S_Brand SYRUB",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_004_SKU_002",
                                    "brand": "S_BRD_004",
                                    "brandName": "SKU Brand New 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_004",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "10",
                                                "label": 200
                                            },
                                            {
                                                "discount": "40",
                                                "label": 300
                                            },
                                            {
                                                "discount": "90",
                                                "label": 400
                                            },
                                            {
                                                "discount": "160",
                                                "label": 500
                                            },
                                            {
                                                "discount": "250",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand Pain Killer",
                                    "price": "30",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_004_SKU_001",
                                    "brand": "S_BRD_004",
                                    "brandName": "SKU Brand New 4",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 4",
                                        "isSku": true,
                                        "onInvoice_discount_execution": null,
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_004",
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "10",
                                                "label": 200
                                            },
                                            {
                                                "discount": "40",
                                                "label": 300
                                            },
                                            {
                                                "discount": "90",
                                                "label": 400
                                            },
                                            {
                                                "discount": "160",
                                                "label": 500
                                            },
                                            {
                                                "discount": "250",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_med brand",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_005_SKU_002",
                                    "brand": "S_BRD_005",
                                    "brandName": "SKU Brand New 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1100",
                                        "sku": "S_BRD_005",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "40.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "50.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "60.0",
                                                "label": 2200
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "16.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "32.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "64.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "70.0",
                                                "label": 2200
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_New medi 100",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_006_SKU_001",
                                    "brand": "S_BRD_006",
                                    "brandName": "SKU Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "10000",
                                        "sku": "S_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "540",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "960",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "1500",
                                                "label": 20000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "900",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "1600",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "2500",
                                                "label": 20000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_New medi 200",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_006_SKU_002",
                                    "brand": "S_BRD_006",
                                    "brandName": "SKU Brand New 6",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 6",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "10000",
                                        "sku": "S_BRD_006",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "540",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "960",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "1500",
                                                "label": 20000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 4000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 6000
                                            },
                                            {
                                                "discount": "900",
                                                "label": 8000
                                            },
                                            {
                                                "discount": "1600",
                                                "label": 10000
                                            },
                                            {
                                                "discount": "2500",
                                                "label": 20000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_dolo 500MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_008_SKU_001",
                                    "brand": "S_BRD_008",
                                    "brandName": "SKU Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 8",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1500",
                                        "sku": "S_BRD_008",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "15",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "135",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "375",
                                                "label": 3000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "25",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "225",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "625",
                                                "label": 3000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Phara 350 MG",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_008_SKU_002",
                                    "brand": "S_BRD_008",
                                    "brandName": "SKU Brand New 8",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 8",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1500",
                                        "sku": "S_BRD_008",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "15",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "60",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "135",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "240",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "375",
                                                "label": 3000
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "25",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "100",
                                                "label": 1500
                                            },
                                            {
                                                "discount": "225",
                                                "label": 2000
                                            },
                                            {
                                                "discount": "400",
                                                "label": 2500
                                            },
                                            {
                                                "discount": "625",
                                                "label": 3000
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Medicine SKU 9",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_009_SKU_001",
                                    "brand": "S_BRD_009",
                                    "brandName": "SKU Brand New 9",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 9",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 600
                                            }
                                        ],
                                        "purchased": "25"
                                    }
                                },
                                {
                                    "name": "TABLET SKU 9",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_009_SKU_002",
                                    "brand": "S_BRD_009",
                                    "brandName": "SKU Brand New 9",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 9",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_009",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "3.0",
                                                "label": 300
                                            },
                                            {
                                                "discount": "4.0",
                                                "label": 400
                                            },
                                            {
                                                "discount": "5.0",
                                                "label": 500
                                            },
                                            {
                                                "discount": "6.0",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "Medicine SKU 10",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_010_SKU_001",
                                    "brand": "S_BRD_010",
                                    "brandName": "SKU Brand New 10",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 10",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6",
                                                "label": 300
                                            },
                                            {
                                                "discount": "12",
                                                "label": 400
                                            },
                                            {
                                                "discount": "20",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "TABLET SKU 10",
                                    "price": "2",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_010_SKU_002",
                                    "brand": "S_BRD_010",
                                    "brandName": "SKU Brand New 10",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 10",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FREE_GOODS",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "300",
                                        "sku": "S_BRD_010",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0",
                                                "label": 100
                                            },
                                            {
                                                "discount": "2",
                                                "label": 200
                                            },
                                            {
                                                "discount": "6",
                                                "label": 300
                                            },
                                            {
                                                "discount": "12",
                                                "label": 400
                                            },
                                            {
                                                "discount": "20",
                                                "label": 500
                                            },
                                            {
                                                "discount": "30",
                                                "label": 600
                                            }
                                        ]
                                    }
                                },
                                {
                                    "name": "S_Brand med",
                                    "price": "50",
                                    "units": "0",
                                    "free_goods": "",
                                    "discount": "",
                                    "payterm": "30",
                                    "sku": "S_BRD_005_SKU_001",
                                    "brand": "S_BRD_005",
                                    "brandName": "SKU Brand New 5",
                                    "offerType": "SEGMENT",
                                    "additional_discount": false,
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    },
                                    "discounts": {
                                        "name": "SKU Brand New 5",
                                        "isSku": true,
                                        "onInvoice_discount_execution": "FINANCIAL",
                                        "additional_discount": false,
                                        "selected": "0",
                                        "max_limit": "1100",
                                        "sku": "S_BRD_005",
                                        "on_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "20.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "30.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "40.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "50.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "60.0",
                                                "label": 2200
                                            }
                                        ],
                                        "off_invoice_range": [
                                            {
                                                "discount": "0.0",
                                                "label": 200
                                            },
                                            {
                                                "discount": "8.0",
                                                "label": 600
                                            },
                                            {
                                                "discount": "16.0",
                                                "label": 1000
                                            },
                                            {
                                                "discount": "32.0",
                                                "label": 1400
                                            },
                                            {
                                                "discount": "64.0",
                                                "label": 1800
                                            },
                                            {
                                                "discount": "70.0",
                                                "label": 2200
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                "previous_orders": {
                    "orders": [
                        {
                            "account_no": "ABC001 - Account: LBS004",
                            "order_no": "2212000001",
                            "status": "IN_PROCESS",
                            "delivery_date": "",
                            "ordered_date": "2022-12-08",
                            "sku": "LBS004",
                            "on_invoice": false,
                            "product_details": [
                                {
                                    "name": "Brand New 250Mg",
                                    "price": "20",
                                    "units": "30",
                                    "free_goods": "0",
                                    "discount": "0",
                                    "payterm": "null",
                                    "sku": "BRD_001_SKU_001",
                                    "brand": "BRD_001",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "PRO123 - Account: LBS002",
                            "order_no": "2212000002",
                            "status": "CONDITIONAL",
                            "delivery_date": "",
                            "ordered_date": "2022-12-16",
                            "sku": "LBS002",
                            "on_invoice": false,
                            "product_details": [
                                {
                                    "name": "Medicine SKU 9",
                                    "price": "2",
                                    "units": "25",
                                    "free_goods": "0",
                                    "discount": "0",
                                    "payterm": "null",
                                    "sku": "S_BRD_009_SKU_001",
                                    "brand": "S_BRD_009",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "PRO123 - Account: LBS002",
                            "order_no": "2212000003",
                            "status": "NOT_CONFIRMED",
                            "delivery_date": "",
                            "ordered_date": "2022-12-16",
                            "sku": "LBS002",
                            "on_invoice": false,
                            "product_details": [
                                {
                                    "name": "Medicine SKU 9",
                                    "price": "2",
                                    "units": "25",
                                    "free_goods": " ",
                                    "discount": " ",
                                    "payterm": "null",
                                    "sku": "S_BRD_009_SKU_001",
                                    "brand": "S_BRD_009",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "ABC001 - Account: LBS003",
                            "order_no": "2212000004",
                            "status": "NOT_CONFIRMED",
                            "delivery_date": "",
                            "ordered_date": "2022-12-08",
                            "sku": "LBS003",
                            "on_invoice": false,
                            "product_details": [
                                {
                                    "name": "Brand New 250Mg",
                                    "price": "15",
                                    "units": "34",
                                    "free_goods": " ",
                                    "discount": " ",
                                    "payterm": "null",
                                    "sku": "BRD_002_SKU_001",
                                    "brand": "BRD_002",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "ABC001 - Account: LBS004",
                            "order_no": "2212000005",
                            "status": "NOT_CONFIRMED",
                            "delivery_date": "",
                            "ordered_date": "2022-12-12",
                            "sku": "LBS004",
                            "on_invoice": false,
                            "product_details": [
                                {
                                    "name": "med brand",
                                    "price": "50",
                                    "units": "23",
                                    "free_goods": " ",
                                    "discount": " ",
                                    "payterm": "null",
                                    "sku": "BRD_005_SKU_002",
                                    "brand": "BRD_005",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    }
                                }
                            ]
                        },
                        {
                            "account_no": "ABC001 - Account: LBS004",
                            "order_no": "2212000007",
                            "status": "NOT_CONFIRMED",
                            "delivery_date": "",
                            "ordered_date": "2022-12-09",
                            "sku": "LBS004",
                            "on_invoice": false,
                            "product_details": [
                                {
                                    "name": "Brand New 250Mg",
                                    "price": "15",
                                    "units": "10",
                                    "free_goods": " ",
                                    "discount": " ",
                                    "payterm": "null",
                                    "sku": "BRD_002_SKU_001",
                                    "brand": "BRD_002",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    }
                                },
                                {
                                    "name": "Brand New 650Mg",
                                    "price": "15",
                                    "units": "10",
                                    "free_goods": " ",
                                    "discount": " ",
                                    "payterm": "null",
                                    "sku": "BRD_002_SKU_002",
                                    "brand": "BRD_002",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    }
                                },
                                {
                                    "name": "med brand",
                                    "price": "50",
                                    "units": "20",
                                    "free_goods": " ",
                                    "discount": " ",
                                    "payterm": "null",
                                    "sku": "BRD_005_SKU_002",
                                    "brand": "BRD_005",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    }
                                }
                            ]
                        }
                    ]
                },
                "rebates_orders": {
                    "orders": [
                        {
                            "account_no": "LBS004",
                            "order_no": 2212000006,
                            "ordered_date": "2022-12-12",
                            "sku": "",
                            "product_details": [
                                {
                                    "name": "med brand",
                                    "price": "50",
                                    "units": "43",
                                    "free_goods": "",
                                    "discount": "",
                                    "brand": "BRD_005",
                                    "free_goods_range": {
                                        "limit": null,
                                        "eligible_goods": null
                                    }
                                }
                            ]
                        }
                    ]
                },
                "selected_brand": "BRD_005",
                "new_orders": {
                    "orders": []
                }
            });
            break;
        default:
            break;
    }
}