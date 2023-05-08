let products = {
    data: [{
            productName: "Electrical Engineering Author Name:D.T.Warne Published Date:08-05-2023",
            category: "Engineering",
            price: "Rs.250",
            image: "images/book1.jpg",
        },
        {
            productName: "Software Engineering Author Name: Dr.Amarjeet Singh Published Date:07-05-2023",
            category: "Engineering",
            price: "Rs.350",
            image: "images/book2.png",
        },
        {
            productName: "Aurdino Engineering Author Name:D.T.WARNE Published Date:06-05-2023",
            category: "Engineering",
            price: "Rs.350",
            image: "images/book3.jpg",
        },
        {
            productName: "Engineering Mechanics Author Name:Dr.D.S.Kumar Published Date:05-05-2023",
            category: "Engineering",
            price: "Rs.350",
            image: "images/book5.jpg",
        },
        {
            productName: "Aircrafts Structures Author Name:T.M.G Morgaon Published Date:04-05-2023",
            category: "Engineering",
            price: "Rs.350",
            image: "images/book6.jpg",
        },
        {
            productName: "Manufactuaring Engineering Author Name:J.Paulo Davim Published Date:03-05-2023",
            category: "Engineering",
            price: "Rs.350",
            image: "images/book7.jpg",
        },
        {
            productName: "Security Engineering Author Name:Russ Anderson Published Date:02-05-2023",
            category: "Engineering",
            price: "Rs.350",
            image: "images/book8.jpg",
        },

        {
            productName: "Civil Engineering Author Name: W.F.Chen Published Date:01-05-2023",
            category: "Engineering",
            price: "Rs.450",
            image: "images/book10.jpg",
        },
        {
            productName: "General Knowledge Author Name:Dr.Rahul Published Date:08-04-2023",
            category: "CompetitiveExams",
            price: "Rs.500",
            image: "images/book11.jpg",
        },
        {
            productName: "Quantitiy Apptitude Author Name:D.P.Gopika Published Date:08-03-2023",
            category: "CompetitiveExams",
            price: "Rs.500",
            image: "images/book12.jpg",
        },
        {
            productName: "Civil Service Exams Author Name:Dr.Mohan Published Date:08-02-2023",
            category: "CompetitiveExams",
            price: "Rs.500",
            image: "images/book13.jpg",
        },
        {
            productName: "OSSSC Author Name:D.Richard Published Date:08-01-2023",
            category: "CompetitiveExams",
            price: "Rs.500",
            image: "images/book14.jpg",
        },
        {
            productName: "General Knowledge Author Name:J.S.jane Published Date:08-05-2022",
            category: "CompetitiveExams",
            price: "Rs.500",
            image: "images/book15.jpg",
        },
        {
            productName: "Journal of Research in Reading Author Name:john Published Date:08-05-2021",
            category: "Journals",
            price: "Rs.500",
            image: "images/book16.jpg",
        },
        {
            productName: "AJGR Author Name:jane wake Published Date:08-05-2020",
            category: "Journals",
            price: "Rs.129",
            image: "images/book17.jpg",
        },
        {
            productName: "Medical BioChemistry Author Name:indian journal Published Date:08-05-2019",
            category: "Journals",
            price: "Rs.200",
            image: "images/book18.jpg",
        },
        {
            productName: "Animal Science Author Name:v.s.David Published Date:08-05-2018",
            category: "Journals",
            price: "Rs.250",
            image: "images/book19.jpg",
        },
        {
            productName: "Letters Author Name:john choas Published Date:08-05-2017",
            category: "Journals",
            price: "Rs.300",
            image: "images/book20.jpg",
        },
        {
            productName: "Humanities Dilmen Author Name:julie Published Date:08-05-2016",
            category: "Journals",
            price: "Rs.450",
            image: "images/book21.jpg",
        },
        {
            productName: "Agile Project Author Name:k.marking Published Date:08-05-2015",
            category: "Management",
            price: "Rs.500",
            image: "images/book23.jpg",
        },
        {
            productName: "Business Management Author Name:Dr.S.C.Sakesna Published Date:08-05-2014",
            category: "Management",
            price: "Rs.500",
            image: "images/book24.jpg",
        },
        {
            productName: "Project Management Author Name:Wiley Published Date:08-05-2013",
            category: "Management",
            price: "Rs.500",
            image: "images/book25.jpg",
        },
        {
            productName: "Time Management Author Name:peter l.gardner Published Date:08-05-2012",
            category: "Management",
            price: "Rs.500",
            image: "images/book26.jpg",
        },
        {
            productName: "Inventory Management Author Name:Max Muller Published Date:08-05-2011",
            category: "Management",
            price: "Rs.500",
            image: "images/book27.jpg",
        },
        {
            productName: "Human Resource Author Name:Cam caldwell Published Date:08-05-2010",
            category: "Management",
            price: "Rs.500",
            image: "images/book28.jpg",
        },
        {
            productName: "Warehouse Management Author Name:Richards Published Date:08-05-2009",
            category: "Management",
            price: "Rs.500",
            image: "images/book29.jpg",
        },
        {
            productName: "Marketing Management Author Name:indiane aswin Published Date:08-05-2008",
            category: "Management",
            price: "Rs.550",
            image: "images/book30.jpg",
        },
        {
            productName: "Marketing Management Author Name:Richard Newton Published Date:08-05-2006",
            category: "Management",
            price: "Rs.499",
            image: "images/book22.jpg",
        },
    ],
};

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};