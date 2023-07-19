import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./MenuList.css";

const menulist = [
  {
    id: 1,
    name: "Cold Brew",
    categories: "Brewed Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "110.00",
    img: "menu1.jpg",
  },
  {
    id: 2,
    name: "Dark Caramel sCold Brew",
    categories: "Brewed Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "120.00",
    img: "menu2.jpg",
  },
  {
    id: 3,
    name: "Salted Caramel sCold Brew",
    categories: "Brewed Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "120.00",
    img: "menu3.jpg",
  },
  {
    id: 4,
    name: "Vanilla Sweet Cream sCold Brew",
    categories: "Brewed Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "125.00",
    img: "menu4.jpg",
  },
  {
    id: 5,
    name: "Espresso",
    categories: "Hot Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "120.00",
    img: "menu5.jpg",
  },
  {
    id: 6,
    name: "Espresso Macchiato",
    categories: "Hot Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "130.00",
    img: "menu6.jpg",
  },
  {
    id: 7,
    name: "Hot Brew",
    categories: "Hot Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "110.00",
    img: "menu7.jpg",
  },
  {
    id: 8,
    name: "Hot Chocolate",
    categories: "Hot Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "120.00",
    img: "menu8.jpg",
  },
  {
    id: 9,
    name: "Hot White Chocolate",
    categories: "Hot Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "120.00",
    img: "menu9.jpg",
  },
  {
    id: 10,
    name: "Hazelnut Iced Coffee",
    categories: "Iced Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "135.00",
    img: "menu10.jpg",
  },
  {
    id: 11,
    name: "Iced Americano",
    categories: "Iced Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "130.00",
    img: "menu11.jpg",
  },
  {
    id: 12,
    name: "Iced Cafe Latte",
    categories: "Iced Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "130.00",
    img: "menu12.jpg",
  },
  {
    id: 13,
    name: "Iced Cappuccino",
    categories: "Iced Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "130.00",
    img: "menu13.jpg",
  },
  {
    id: 14,
    name: "Iced Caramel Macchiato",
    categories: "Iced Coffee",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "135.00",
    img: "menu14.jpg",
  },
  {
    id: 15,
    name: "Caramel Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "140.00",
    img: "menu15.jpg",
  },
  {
    id: 16,
    name: "Coffee Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "140.00",
    img: "menu16.jpg",
  },
  {
    id: 17,
    name: "Coffee Jelly Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "140.00",
    img: "menu17.jpg",
  },
  {
    id: 18,
    name: "Dark Caramel Coffee Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "140.00",
    img: "menu18.jpg",
  },
  {
    id: 19,
    name: "Espresso Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "135.00",
    img: "menu19.jpg",
  },
  {
    id: 20,
    name: "Mocha Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "135.00",
    img: "menu20.jpg",
  },
  {
    id: 21,
    name: "Triple Mocha Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "140.00",
    img: "menu21.jpg",
  },
  {
    id: 22,
    name: "White Mocha Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "140.00",
    img: "menu22.jpg",
  },
  {
    id: 23,
    name: "Caramel Cream Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "140.00",
    img: "menu23.jpg",
  },
  {
    id: 24,
    name: "Green Tea Cream Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "140.00",
    img: "menu24.jpg",
  },
  {
    id: 25,
    name: "Strawberries and Cream Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "145.00",
    img: "menu25.jpg",
  },
  {
    id: 26,
    name: "Vanilla Cream Frappuccino",
    categories: "Frappe",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "135.00",
    img: "menu26.jpg",
  },
  {
    id: 27,
    name: "Chocolate Float",
    categories: "Specials",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "135.00",
    img: "menu27.jpg",
  },
  {
    id: 28,
    name: "Iced Classic Chocolate",
    categories: "Specials",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "120.00",
    img: "menu28.jpg",
  },
  {
    id: 29,
    name: "Cold Foam Iced Cappuccino",
    categories: "Specials",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "135.00",
    img: "menu29.jpg",
  },
  {
    id: 30,
    name: "Jasmine Tea Matcha",
    categories: "Specials",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "125.00",
    img: "menu30.jpg",
  },
  {
    id: 31,
    name: "Strawberry Milk Tea",
    categories: "Specials",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "125.00",
    img: "menu31.jpg",
  },
  {
    id: 32,
    name: "Bacon Belgian Waffle",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "115.00",
    img: "menu32.jpg",
  },
  {
    id: 33,
    name: "Banana Bread",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "95.00",
    img: "menu33.jpg",
  },
  {
    id: 34,
    name: "Original Belgian Waffle",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "110.00",
    img: "menu34.jpg",
  },
  {
    id: 35,
    name: "Blue Berry Cheesecake",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "120.00",
    img: "menu35.jpg",
  },
  {
    id: 36,
    name: "Cheesecake",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "115.00",
    img: "menu36.jpg",
  },
  {
    id: 37,
    name: "Chocolate Cake",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "115.00",
    img: "menu37.jpg",
  },
  {
    id: 38,
    name: "Original Chocolate Doughnut",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "75.00",
    img: "menu38.jpg",
  },
  {
    id: 39,
    name: "Chocolate Macademia",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "75.00",
    img: "menu39.jpg",
  },
  {
    id: 40,
    name: "Cinnamon Bread",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "80.00",
    img: "menu40.jpg",
  },
  {
    id: 41,
    name: "Croissant",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "80.00",
    img: "menu41.jpg",
  },
  {
    id: 42,
    name: "Dark Mocha Cake",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "120.00",
    img: "menu42.jpg",
  },
  {
    id: 43,
    name: "Special Ensaymada",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "85.00",
    img: "menu43.jpg",
  },
  {
    id: 44,
    name: "french Toast with Maple Syrup",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "85.00",
    img: "menu44.jpg",
  },
  {
    id: 45,
    name: "Glazed Doughnut",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "75.00",
    img: "menu45.jpg",
  },
  {
    id: 46,
    name: "Mango Float Cake",
    categories: "Desserts",
    description:
      "ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.",
    price: "120.00",
    img: "menu46.jpg",
  },
];

const categories = [
  "Brewed Coffee",
  "Hot Coffee",
  "Iced Coffee",
  "Frappe",
  "Specials",
  "Desserts",
];

function MenuList() {
  return (
    <section>
      {categories.map((cat) => {
        return (
          <Container>
            <div className="text-center">
              <span className="fs-3 fw-bold"> {cat} </span>
            </div>
            <Row>
              {menulist.map((list) => {
                if (cat === list.categories) {
                  return (
                    <Col
                      className="shadow p-3 border border-1"
                      sm={6}
                      md={4}
                      lg={3}
                      xl={3}
                    >
                      <img
                        className="menuImage"
                        src={`./assets/menu/${list.img}`}
                      />
                      <p>{list.name}</p>
                      <p>&#8369;{list.price}</p>
                    </Col>
                  );
                }
              })}
            </Row>
          </Container>
        );
      })}
    </section>
  );
}

export default MenuList;
