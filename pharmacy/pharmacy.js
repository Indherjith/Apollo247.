        
        
                //--SHOP BY HEALTH CONDITIONS---//

                var  healthData = [
                    {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
                    name:"COVID Care"
                    },
                    {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png",
                    name:"Covid Protection"
                    },
                    {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png",
                    name:"Diabetes Care"
                    },
                    {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg",
                    name:"Mind Care"
                    },
                    {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg",
                    name:"Liver Care"
                    },
                    {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png",
                    name:"Cardiac"
                    },
                ]
        
            healthData.map(function(elem){
                        
                var maindiv1=document.createElement("div")
            
                var achorTag=document.createElement("a")
                achorTag.setAttribute("href","covidEssentialViewall.html")
                achorTag.setAttribute("class","achorTag")

                var innerDiv=document.createElement("div")
                innerDiv.setAttribute("id","innerDiv")

            var childDiv1=document.createElement("div")
            var image= document.createElement("img")
                image.setAttribute("src",elem. image);
                image.setAttribute("id", "shopByHelthConditionImg")
                childDiv1.append(image)


            var childDiv2=document.createElement("div")
                var name=document.createElement("p");
                name.innerText=elem.name
                childDiv2.append(name)

                innerDiv.append(childDiv1,childDiv2)

                achorTag.append(innerDiv)

                maindiv1.append(achorTag)

            document.querySelector("#container").append(maindiv1)
            

            })
            


            // POST COVID ESSENTIALS Js ---//

            var postCovidEssentialsData=[
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/_/c.jpg",
                    name:"Zincovi Tablet 15s",
                    mrp:"MRP  Rs.",
                    stickedOff:106,
                    cost:"RS.",
                    rs:110,
                    discount:"₹ 6 discount back",
                    addcart:"ADD TO CART",
                    productNo:1,
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/m/img_20210108_163844__front__biotin_tablets_60_s.jpg",
                    name:"Apollo Life Biotin 5000 mcg, 60 Tablets",
                    productNo:2,
                    mrp:"MRP  Rs.",
                    stickedOff:523,
                    cost:"RS.",
                    rs:475,
                    discount:"₹ 48 extra cashback",
                    addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/h/o/hor0160_1_2.jpg",
                    name:"Horlicks Protein+ Vanilla Flavoured Health and...",
                    productNo:3,
                    mrp:"MRP  Rs.",
                    stickedOff:519,
                    cost:"RS.",
                    rs:490,
                    discount:"₹ 29 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/i/lim0003.jpg",
                    name:"Limcee Vitamin C 500 mg Orange Flavour....",
                    productNo:4,
                    mrp:"MRP  Rs.",
                    stickedOff:21.09,
                    cost:"RS.",
                    rs:20.09,
                    discount:"₹ 1 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/h/e/hea0485_1_.jpg",
                    name:"Healthvit Melatonin 10 mg, 60 Tablets",
                    productNo:5,
                    mrp:"MRP  Rs.",
                    stickedOff:382,
                    cost:"RS.",
                    rs:360,
                    discount:"₹ 22 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/h/n/hnb0014.jpg",
                    name:"Holland &amp; Barrett Vitamin D3 10 ug..",
                    productNo:6,
                    mrp:"MRP  Rs.",
                    stickedOff:758.43,
                    cost:"RS.",
                    rs:715.5,
                    discount:"₹ 43 extra cashback",
                addcart:"ADD TO CART"
                },

            ]

                var cartData= JSON.parse(localStorage.getItem("cartData")) || []
            postCovidEssentialsData.map(function(elem){
                main1=document.createElement("div");
                main1.setAttribute("id","main1")

                mainImage=document.createElement("img");
                mainImage.setAttribute("src",elem.image)
                mainImage.setAttribute("id","mainImage")

                nameDiv=document.createElement("div");
                nameDiv.setAttribute("id","nameDiv")
                nameDiv.innerText=elem.name

                hrDiv=document.createElement("div");
                hrDiv.setAttribute("id","hrDiv")
                hr=document.createElement("hr");
                hrDiv.append(hr)

                priceDiv3=document.createElement("div");
                priceDiv3.setAttribute("id","priceDiv3")

                    mrpCostParaDiv=document.createElement("div");
                    mrpCostParaDiv.setAttribute("id","mrpCostParaDiv")
                        var  mrpPara=document.createElement("h3");
                        mrpPara.innerText=elem.mrp
                        var strickedPara=document.createElement("h3");
                        strickedPara.setAttribute("id","strickedParastyle")
                        strickedPara.innerText=elem.stickedOff
                    mrpCostParaDiv.append( mrpPara,strickedPara)
                        
        
                        costDiv=document.createElement("div");
                        costDiv.setAttribute("id","costDiv")
                            var cost=document.createElement("h3");
                            cost.innerText=elem.cost
                            var rs=document.createElement("h3");
                            rs.innerText=elem.rs
                        costDiv.append(cost,rs)
        
                    priceDiv3.append( mrpCostParaDiv,costDiv)

                discountDiv=document.createElement("div");
                discountDiv.setAttribute("id","discountDiv")
                discountDiv.innerText=elem. discount
                    
                buttonDiv=document.createElement("div")
                buttonDiv.setAttribute("id","buttonDiv")
                    button=document.createElement("button");
                    button.setAttribute("id","button")
                    button.innerText=elem.addcart
                    button.addEventListener("click",function(){ 

                       
                        if(cartData.length>0)
                        {   var flag=false
                            var productNumbers=elem.productNo
                           
                                cartData.map(function(elm){
                                    if( productNumbers==elm.productNo)
                                    {   elm.qty++
                                        flag=true;
                                    
                                    }
                                })
        
                                    if(flag==false)
                                    {
                                        elem.qty=1;
                                        cartData.push(elem)
                                    }
                                
                        }
                        else{
                            elem.qty=1;
                            cartData.push(elem)
                        }
                       

                        localStorage.setItem("cartData",JSON.stringify(cartData))

                        alert("Product added to Cart")
                    })
                    
                    buttonDiv.append(button)

                main1.append(mainImage,nameDiv,hrDiv, priceDiv3,discountDiv,buttonDiv)
                document.querySelector("#container2").append(main1)
            })

            localStorage.setItem("postCovidEssentialsData",JSON.stringify(postCovidEssentialsData))

                //
               


            // SKIN CARE js

            var skinCareData=[
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/1/2/12757_h-8901030722202.jpg",
                    name:"Ponds Men Energy Bright Facewash, 100 gm",
                    productNo:7,
                    mrp:"MRP  Rs.",
                    stickedOff:152.5,
                    cost:"RS.",
                    rs:143.5,
                    discount:"₹ 9 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/e/cet0236.jpg",
                    name:"Cetaphil Restoraderm Moisturising Lotion...",
                    productNo:8,
                    mrp:"MRP  Rs.",
                    stickedOff:2078,
                    cost:"RS.",
                    rs:1960,            
                    discount:"₹ 118 extra cashback",
                     addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/a/las0139.jpg",
                    name:"La Shield Sunscreen Gel SPF 50 PA+++ UVA..",
                    productNo:9,
                    mrp:"MRP  Rs.",
                    stickedOff:237,
                    cost:"RS.",
                    rs:224,             
                    discount:"₹ 13 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0040_2.jpg",
                    name:"Sebamed Clear Face Cleansing Foam, 150 ml",
                    productNo:10,
                    mrp:"MRP  Rs.",
                    stickedOff:615,
                    cost:"RS.",
                    rs:580,             
                    discount:"₹ 35 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/a/h/aha0006.jpg",
                    name:"Ahaglow Skin Rejuvenating Gel Face...",
                    productNo:11,
                    mrp:"MRP  Rs.",
                    stickedOff:505,
                    cost:"RS.",
                    rs:477,              
                    discount:"₹ 29 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/p/h/pho0052.jpg",
                    name:"Photostable Sunscreen Emulgel SPF 40+ PA+",
                    productNo:12,
                    mrp:"MRP  Rs.",
                    stickedOff:716,
                    cost:"RS.",
                    rs:675,              
                    discount:"₹ 41 extra cashback",
                addcart:"ADD TO CART"
                },

            ]


            skinCareData.map(function(elem){
                main1=document.createElement("div");
                main1.setAttribute("id","main1")

                mainImage=document.createElement("img");
                mainImage.setAttribute("src",elem.image)
                mainImage.setAttribute("id","mainImage")

                nameDiv=document.createElement("div");
                nameDiv.setAttribute("id","nameDiv")
                nameDiv.innerText=elem.name

                hrDiv=document.createElement("div");
                hrDiv.setAttribute("id","hrDiv")
                hr=document.createElement("hr");
                hrDiv.append(hr)

                priceDiv3=document.createElement("div");
                priceDiv3.setAttribute("id","priceDiv3")
    
                    mrpCostParaDiv=document.createElement("div");
                    mrpCostParaDiv.setAttribute("id","mrpCostParaDiv")
                        var  mrpPara=document.createElement("h3");
                        mrpPara.innerText=elem.mrp
                        var strickedPara=document.createElement("h3");
                        strickedPara.setAttribute("id","strickedParastyle")
                        strickedPara.innerText=elem.stickedOff
                    mrpCostParaDiv.append( mrpPara,strickedPara)
                        
        
                        costDiv=document.createElement("div");
                        costDiv.setAttribute("id","costDiv")
                            var cost=document.createElement("h3");
                            cost.innerText=elem.cost
                            var rs=document.createElement("h3");
                            rs.innerText=elem.rs
                        costDiv.append(cost,rs)
        
                    priceDiv3.append( mrpCostParaDiv,costDiv)

                discountDiv=document.createElement("div");
                discountDiv.setAttribute("id","discountDiv")
                discountDiv.innerText=elem. discount
                    
                buttonDiv=document.createElement("div")
                buttonDiv.setAttribute("id","buttonDiv")
                    button=document.createElement("button");
                    button.setAttribute("id","button")
                    button.addEventListener("click",function(){ 
                       

                        
                        if(cartData.length>0)
                        {   var flag=false
                            var productNumbers=elem.productNo
                           
                                cartData.map(function(elm){
                                    if( productNumbers==elm.productNo)
                                    {   elm.qty++
                                        flag=true;
                                    
                                    }
                                })
        
                                    if(flag==false)
                                    {
                                        elem.qty=1;
                                        cartData.push(elem)
                                    }
                                
                        }
                        else{
                            elem.qty=1;
                            cartData.push(elem)
                        }

                        localStorage.setItem("cartData",JSON.stringify(cartData))

                        alert("Product added to Cart")
                    })
                    button.innerText=elem.addcart
                    buttonDiv.append(button)

                main1.append(mainImage,nameDiv,hrDiv, priceDiv3,discountDiv,buttonDiv)
                document.querySelector("#container3").append(main1)
            })

            localStorage.setItem("skinCareData",JSON.stringify(skinCareData))

            // HEALTH DEVICES js

            var healthDevicesData=[
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/a/c/acc0005_3.jpg",
                    name:"Accu-Chek Active Blood Glucose Monitoring...",
                    productNo:13,
                    mrp:"MRP  Rs.",
                    stickedOff:1356,
                    cost:"RS.",
                    rs:1279,              
                    discount:"₹ 77 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/b/p/bpm0063_1_1.jpg",
                    name:"Omron Blood Pressure Monitor HEM-7121J...",
                    productNo:14,
                    mrp:"MRP  Rs.",
                    stickedOff:1988,
                    cost:"RS.",
                    rs:1875,             
                    discount:"₹ 113 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/o/n/one0174_-_sps_amazon_imgs1.jpg",
                    name:"OneTouch Select Plus Simple Glucometer ...",
                    productNo:15,
                    mrp:"MRP  Rs.",
                    stickedOff:928,
                    cost:"RS.",
                    rs:875,             
                    discount:"₹ 53 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/a/c/acc0008.jpg",
                    name:"Accu-Chek Active Test Strips, 50 Count",
                    productNo:16,
                    mrp:"MRP  Rs.",
                    stickedOff:868,
                    cost:"RS.",
                    rs:819,             
                    discount:"₹ 49 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/m/img_20210116_122912__front__digital_thermometer_flexible.jpg",
                    name:"Apollo Pharmacy Digital Flexible Thermometer",
                    productNo:17,
                    mrp:"MRP  Rs.",
                    stickedOff:90,
                    cost:"RS.",
                    rs:100,              
                    discount:"₹ 10 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/m/img_20210115_170438__front__pulse_oximeter.jpg",
                    name:"Apollo Pharmacy Pulse Oximeter ZM-700-01",
                    productNo:18, 
                    mrp:"MRP  Rs.",
                    stickedOff:825,
                    cost:"RS.",
                    rs:750,             
                    discount:"₹ 75 extra cashback",
                addcart:"ADD TO CART"
                },

            ]


            healthDevicesData.map(function(elem){
                main1=document.createElement("div");
                main1.setAttribute("id","main1")

                mainImage=document.createElement("img");
                mainImage.setAttribute("src",elem.image)
                mainImage.setAttribute("id","mainImage")

                nameDiv=document.createElement("div");
                nameDiv.setAttribute("id","nameDiv")
                nameDiv.innerText=elem.name

                hrDiv=document.createElement("div");
                hrDiv.setAttribute("id","hrDiv")
                hr=document.createElement("hr");
                hrDiv.append(hr)

                priceDiv3=document.createElement("div");
                priceDiv3.setAttribute("id","priceDiv3")
    
                    mrpCostParaDiv=document.createElement("div");
                    mrpCostParaDiv.setAttribute("id","mrpCostParaDiv")
                        var  mrpPara=document.createElement("h3");
                        mrpPara.innerText=elem.mrp
                        var strickedPara=document.createElement("h3");
                        strickedPara.setAttribute("id","strickedParastyle")
                        strickedPara.innerText=elem.stickedOff
                    mrpCostParaDiv.append( mrpPara,strickedPara)
                        
        
                        costDiv=document.createElement("div");
                        costDiv.setAttribute("id","costDiv")
                            var cost=document.createElement("h3");
                            cost.innerText=elem.cost
                            var rs=document.createElement("h3");
                            rs.innerText=elem.rs
                        costDiv.append(cost,rs)
        
                    priceDiv3.append( mrpCostParaDiv,costDiv)

                discountDiv=document.createElement("div");
                discountDiv.setAttribute("id","discountDiv")
                discountDiv.innerText=elem. discount
                    
                buttonDiv=document.createElement("div")
                buttonDiv.setAttribute("id","buttonDiv")
                    button=document.createElement("button");
                    button.setAttribute("id","button")
                    button.addEventListener("click",function(){ 
                       
                        
                        if(cartData.length>0)
                        {   var flag=false
                            var productNumbers=elem.productNo
                           
                                cartData.map(function(elm){
                                    if( productNumbers==elm.productNo)
                                    {   elm.qty++
                                        flag=true;
                                    
                                    }
                                })
        
                                    if(flag==false)
                                    {
                                        elem.qty=1;
                                        cartData.push(elem)
                                    }
                                
                        }
                        else{
                            elem.qty=1;
                            cartData.push(elem)
                        }


                        localStorage.setItem("cartData",JSON.stringify(cartData))

                        alert("Product added to Cart")
                    })
                    button.innerText=elem.addcart
                    buttonDiv.append(button)

                main1.append(mainImage,nameDiv,hrDiv, priceDiv3,discountDiv,buttonDiv)
                document.querySelector("#container4").append(main1)
            })

            localStorage.setItem("healthDevicesData",JSON.stringify(healthDevicesData))


            // HOT SELLERS js

            var  hotSellersData=[
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/w/swa0093_2.jpg",
                    name:"Swadeshi Ayush Kadha, 50 gm",
                    productNo:19,
                    mrp:"MRP  Rs.",
                    stickedOff:41.5,
                    cost:"RS.",
                    rs:39.5,               
                    discount:"₹ 2 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/f/r/friends_underpads_classic_1.png",
                    name:"Friends Classic Underpads Large...",
                    productNo:20,
                    mrp:"MRP  Rs.",
                    stickedOff:337.5,
                    cost:"RS.",
                    rs:318.5,              
                    discount:"₹ 19 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/e/cet0347_2.jpg",
                    name:"Cetaphil Baby Daily lotion With Shea Butter...",
                    productNo:21,
                    mrp:"MRP  Rs.",
                    stickedOff:705,
                    cost:"RS.",
                    rs:665,              
                    discount:"₹ 40 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/z/a/zan0027.jpg",
                    name:"Zandu Pancharistha Ayurvedic Digestive Tonic",
                    productNo:22,
                    mrp:"MRP  Rs.",
                    stickedOff:138,
                    cost:"RS.",
                    rs:126,              
                    discount:"₹ 8 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/p/a/pam0314_1.jpg",
                    name:"Pampers Premium Care Diaper Pants XL...",
                    productNo:23,
                    mrp:"MRP  Rs.",
                    stickedOff:1706,
                    cost:"RS.",
                    rs:1609,              
                    discount:"₹ 97 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/b/p/bpm0063_1_1.jpg",
                    name:"Omron Blood Pressure Monitor HEM-7121J...",
                    productNo:24,
                    mrp:"MRP  Rs.",
                    stickedOff:1988,
                    cost:"RS.",
                    rs:1875,              
                    discount:"₹ 113 extra cashback",
                addcart:"ADD TO CART"
                },

            ]


            hotSellersData.map(function(elem){
                main1=document.createElement("div");
                main1.setAttribute("id","main1")

                mainImage=document.createElement("img");
                mainImage.setAttribute("src",elem.image)
                mainImage.setAttribute("id","mainImage")

                nameDiv=document.createElement("div");
                nameDiv.setAttribute("id","nameDiv")
                nameDiv.innerText=elem.name

                hrDiv=document.createElement("div");
                hrDiv.setAttribute("id","hrDiv")
                hr=document.createElement("hr");
                hrDiv.append(hr)

                priceDiv3=document.createElement("div");
                priceDiv3.setAttribute("id","priceDiv3")
    
                    mrpCostParaDiv=document.createElement("div");
                    mrpCostParaDiv.setAttribute("id","mrpCostParaDiv")
                        var  mrpPara=document.createElement("h3");
                        mrpPara.innerText=elem.mrp
                        var strickedPara=document.createElement("h3");
                        strickedPara.setAttribute("id","strickedParastyle")
                        strickedPara.innerText=elem.stickedOff
                    mrpCostParaDiv.append( mrpPara,strickedPara)
                        
        
                        costDiv=document.createElement("div");
                        costDiv.setAttribute("id","costDiv")
                            var cost=document.createElement("h3");
                            cost.innerText=elem.cost
                            var rs=document.createElement("h3");
                            rs.innerText=elem.rs
                        costDiv.append(cost,rs)
        
                    priceDiv3.append( mrpCostParaDiv,costDiv)

                discountDiv=document.createElement("div");
                discountDiv.setAttribute("id","discountDiv")
                discountDiv.innerText=elem. discount
                    
                buttonDiv=document.createElement("div")
                buttonDiv.setAttribute("id","buttonDiv")
                    button=document.createElement("button");
                    button.setAttribute("id","button")
                    button.addEventListener("click",function(){ 
                       
                        
                        if(cartData.length>0)
                        {   var flag=false
                            var productNumbers=elem.productNo
                           
                                cartData.map(function(elm){
                                    if( productNumbers==elm.productNo)
                                    {   elm.qty++
                                        flag=true;
                                    
                                    }
                                })
        
                                    if(flag==false)
                                    {
                                        elem.qty=1;
                                        cartData.push(elem)
                                    }
                                
                        }
                        else{
                            elem.qty=1;
                            cartData.push(elem)
                        }


                        localStorage.setItem("cartData",JSON.stringify(cartData))

                        alert("Product added to Cart")
                    })
                    button.innerText=elem.addcart
                    buttonDiv.append(button)

                main1.append(mainImage,nameDiv,hrDiv, priceDiv3,discountDiv,buttonDiv)
                document.querySelector("#container5").append(main1)
            })

            localStorage.setItem("hotSellersData",JSON.stringify(hotSellersData))

            // SHOP BY CATEGORY js

            var   shopByCatagoryData = [
                {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
                name:"Covid Essentials"
                },
                {image:"https://newassets.apollo247.com/pub/media/catalog/category/otc.png",
                name:"Health Condition"
                },
                {image:"https://newassets.apollo247.com/pub/media/catalog/category/ayurveda.jpg",
                name:"Ayurveda"
                },
                {image:"https://newassets.apollo247.com/pub/media/catalog/category/health_devices_22oct.png",
                name:"Health Devices"
                },
                {image:"https://newassets.apollo247.com/pub/media/catalog/category/baby_care_22oct.png",
                name:"Baby Care"
                },
                {image:"https://newassets.apollo247.com/pub/media/catalog/category/elderly_care.png",
                name:"Adult Diapers"
                },
        
    ]
    
        shopByCatagoryData.map(function(elem){
                    
            var maindiv1=document.createElement("div")
        
            var achorTag=document.createElement("a")
            achorTag.setAttribute("href","covidEssentialViewall.html")
            achorTag.setAttribute("class","achorTag")

            var innerDiv=document.createElement("div")
            innerDiv.setAttribute("id","innerDiv")

        var childDiv1=document.createElement("div")
        var image= document.createElement("img")
            image.setAttribute("src",elem. image);
            image.setAttribute("id", "shopByHelthConditionImg")
            childDiv1.append(image)


        var childDiv2=document.createElement("div")
            var name=document.createElement("p");
            name.innerText=elem.name
            childDiv2.append(name)

            innerDiv.append(childDiv1,childDiv2)

            achorTag.append(innerDiv)

            maindiv1.append(achorTag)

        document.querySelector("#container6").append(maindiv1)
        

        })


        // EXPLORE - POPULAR PRODUCTS js 

        var exploreMoreProductsData=[
            {
                image:"https://newassets.apollo247.com/pub/media/wysiwyg/home/healthvit_dod1_247.jpg"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/wysiwyg/home/247_baby_diapers_dod2.jpg"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/wysiwyg/home/ND_dod3_247.jpg"
            }
        ];

        exploreMoreProductsData.map(function(elem){

            var diplayImage=document.createElement("img");
            diplayImage.setAttribute("id","diplayImage")
            diplayImage.setAttribute("src",elem.image)

            document.querySelector("#container7").append( diplayImage)
        })


            // HALF PRICE STORE JS

        var  halfPriceData=[
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/0/1/01_5_2.jpg",
                    name:"Parachute Advansed Deep Nourish Body...",
                    productNo:25,
                    mrp:"MRP  Rs.",
                    stickedOff:131,
                    cost:"RS.",
                    rs:124,              
                    discount:"₹ 7 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/e/m/ema0083_1.jpg",
                    name:"Fair &amp; Handsome Instant Radiance Face..",
                    productNo:26,
                    mrp:"MRP  Rs.",
                    stickedOff:90,
                    cost:"RS.",
                    rs:85,              
                    discount:"₹ 5 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/n/inl0099-1.jpg",
                    name:"Inlife Chocolate Flavored Sugar Free...",
                    productNo:27,
                    mrp:"MRP  Rs.",
                    stickedOff:755,
                    cost:"RS.",
                    rs:712,              
                    discount:"₹ 43 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/3/j/3j1a9854.jpg",
                    name:"dr Organic Aloe Vera Skin Lotion, 200 ml",
                    productNo:28,
                    mrp:"MRP  Rs.",
                    stickedOff:428.5,
                    cost:"RS.",
                    rs:404.5,              
                    discount:"₹ 24 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/h/e/hea0494_1_.jpg",
                    name:"Healthvit Vitamin D3 20000 IU, 60 Tablets",
                    productNo:30,
                    mrp:"MRP  Rs.",
                    stickedOff:530,
                    cost:"RS.",
                    rs:500,              
                    discount:"₹ 30 extra cashback",
                addcart:"ADD TO CART"
                },
                {
                    image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/i/lit0170_3.jpg",
                    name:"Littles Soft Cleansing Baby Wipes, 80 Count",
                    productNo:31,
                    mrp:"MRP  Rs.",
                    stickedOff:101,
                    cost:"RS.",
                    rs:95,              
                    discount:"₹ 6 extra cashback",
                addcart:"ADD TO CART"
                },

            ]


            halfPriceData.map(function(elem){
                main1=document.createElement("div");
                main1.setAttribute("id","main1")

                mainImage=document.createElement("img");
                mainImage.setAttribute("src",elem.image)
                mainImage.setAttribute("id","mainImage")

                nameDiv=document.createElement("div");
                nameDiv.setAttribute("id","nameDiv")
                nameDiv.innerText=elem.name

                hrDiv=document.createElement("div");
                hrDiv.setAttribute("id","hrDiv")
                hr=document.createElement("hr");
                hrDiv.append(hr)

                priceDiv3=document.createElement("div");
                priceDiv3.setAttribute("id","priceDiv3")
    
                    mrpCostParaDiv=document.createElement("div");
                    mrpCostParaDiv.setAttribute("id","mrpCostParaDiv")
                        var  mrpPara=document.createElement("h3");
                        mrpPara.innerText=elem.mrp
                        var strickedPara=document.createElement("h3");
                        strickedPara.setAttribute("id","strickedParastyle")
                        strickedPara.innerText=elem.stickedOff
                    mrpCostParaDiv.append( mrpPara,strickedPara)
                        
        
                        costDiv=document.createElement("div");
                        costDiv.setAttribute("id","costDiv")
                            var cost=document.createElement("h3");
                            cost.innerText=elem.cost
                            var rs=document.createElement("h3");
                            rs.innerText=elem.rs
                        costDiv.append(cost,rs)
        
                    priceDiv3.append( mrpCostParaDiv,costDiv)

                discountDiv=document.createElement("div");
                discountDiv.setAttribute("id","discountDiv")
                discountDiv.innerText=elem. discount
                    
                buttonDiv=document.createElement("div")
                buttonDiv.setAttribute("id","buttonDiv")
                    button=document.createElement("button");
                    button.setAttribute("id","button")
                    button.addEventListener("click",function(){ 
                        
                        
                        if(cartData.length>0)
                        {   var flag=false
                            var productNumbers=elem.productNo
                           
                                cartData.map(function(elm){
                                    if( productNumbers==elm.productNo)
                                    {   elm.qty++
                                        flag=true;
                                    
                                    }
                                })
        
                                    if(flag==false)
                                    {
                                        elem.qty=1;
                                        cartData.push(elem)
                                    }
                                
                        }
                        else{
                            elem.qty=1;
                            cartData.push(elem)
                        }


                        localStorage.setItem("cartData",JSON.stringify(cartData))

                        alert("Product added to Cart")
                    })
                    button.innerText=elem.addcart
                    buttonDiv.append(button)

                main1.append(mainImage,nameDiv,hrDiv, priceDiv3,discountDiv,buttonDiv)
                document.querySelector("#container9").append(main1)
            })

            localStorage.setItem("halfPriceData",JSON.stringify(halfPriceData))

            // SHOP BY BRAND JS
            

            var   shopByBrandData = [
                {image:"	https://newassets.apollo247.com/pub/media/ves/brand/dabur_21oct.png"
                },
                {image:"https://newassets.apollo247.com/pub/media/ves/brand/himalaya120.jpg"
                },
                {image:"https://newassets.apollo247.com/pub/media/ves/brand/accu_check.jpg"
                },
                {image:"https://newassets.apollo247.com/pub/media/ves/brand/zandu_13.jpg"
                },
                {image:"https://newassets.apollo247.com/pub/media/ves/brand/nivea_21oct.png"
                },
                {image:"https://newassets.apollo247.com/pub/media/ves/brand/huggieslogo.jpg",
                }
        
    ]
    
    shopByBrandData.map(function(elem){
                    
        var maindiv1=document.createElement("div")

        var achorTag=document.createElement("a")
        achorTag.setAttribute("href","covidEssentialViewall.html")
        achorTag.setAttribute("class","achorTag")

        var innerDiv=document.createElement("div")
        innerDiv.setAttribute("id","brandDiv")

    
    var image= document.createElement("img")
        image.setAttribute("src",elem. image);
        image.setAttribute("id", "brandImage")

        innerDiv.append(image)

        achorTag.append(innerDiv)

        maindiv1.append(achorTag)

    document.querySelector("#container10").append(maindiv1)
    

    })


            // CONTENT PARAGRAPH Js // AND // FAQ'S Js

            var acc = document.getElementsByClassName("question");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }


            // MOUSE ENTER FUNCTIONS

        // document.querySelector("buttonDiv").addEventListener("mouseenter",mouseenter)

        // function mouseenter()
        // {
        //     buttonDiv.style.backgroundColor="red"
        // }
        
        // // Mouse leave
        // document.querySelector("buttonDiv").addEventListener("mouseleave",mouseleave)
        
        // function mouseleave()
        // {
        //     buttonDiv.style.backgroundColor="red"
        // }
