/*<![CDATA[*/
const submitForm = (id1, id2) => {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "store.getneocharge.com",
      storefrontAccessToken: "97a5514de4bf9ed601b2d8ca9008a6ff",
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: `${id1}`,
        node: document.getElementById(`${id2}`),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            iframe: false,
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              title: {
                "font-family": "Montserrat, sans-serif",
                color: "#202222",
              },
              button: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                ":hover": {
                  "background-color": "#363a3a",
                },
                "background-color": "#202222",
                ":focus": {
                  "background-color": "#363a3a",
                },
                "border-radius": "5px",
                "padding-left": "45px",
                "padding-right": "45px",
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
              price: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                color: "#202222",
              },
              compareAt: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                color: "#202222",
              },
              unitPrice: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                color: "#202222",
              },
              description: {
                "font-family": "Montserrat, sans-serif",
                "font-size": "16px",
                color: "#202222",
              },
            },
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Add To Cart",
            },
            googleFonts: ["Montserrat"],
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                ":hover": {
                  "background-color": "#363a3a",
                },
                "background-color": "#202222",
                ":focus": {
                  "background-color": "#363a3a",
                },
                "border-radius": "5px",
                "padding-left": "45px",
                "padding-right": "45px",
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
              title: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "bold",
                "font-size": "26px",
                color: "#4c4c4c",
              },
              price: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                color: "#4c4c4c",
              },
              compareAt: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                color: "#4c4c4c",
              },
              unitPrice: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                color: "#4c4c4c",
              },
              description: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "14px",
                color: "#4c4c4c",
              },
            },
            googleFonts: ["Montserrat"],
            text: {
              button: "Add to cart",
            },
          },
          option: {
            styles: {
              label: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
              },
              select: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
              },
            },
            googleFonts: ["Montserrat"],
          },
          cart: {
            styles: {
              button: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                ":hover": {
                  "background-color": "#363a3a",
                },
                "background-color": "#202222",
                ":focus": {
                  "background-color": "#363a3a",
                },
                "border-radius": "5px",
              },
              title: {
                color: "#202222",
              },
              header: {
                color: "#202222",
              },
              lineItems: {
                color: "#202222",
              },
              subtotalText: {
                color: "#202222",
              },
              subtotal: {
                color: "#202222",
              },
              notice: {
                color: "#202222",
              },
              currency: {
                color: "#202222",
              },
              close: {
                color: "#202222",
                ":hover": {
                  color: "#202222",
                },
              },
              empty: {
                color: "#202222",
              },
              noteDescription: {
                color: "#202222",
              },
              discountText: {
                color: "#202222",
              },
              discountIcon: {
                fill: "#202222",
              },
              discountAmount: {
                color: "#202222",
              },
              cart: {
                "background-color": "#f5f5f5",
              },
              footer: {
                "background-color": "#f5f5f5",
              },
            },
            text: {
              title: "My Cart",
              total: "Subtotal",
              empty: "There's nothing here!",
              button: "Checkout",
            },
            popup: false,
            googleFonts: ["Montserrat"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                "background-color": "#202222",
                ":hover": {
                  "background-color": "#363a3a",
                },
                ":focus": {
                  "background-color": "#363a3a",
                },
              },
              count: {
                "font-size": "13px",
              },
            },
            googleFonts: ["Montserrat"],
          },
          lineItem: {
            styles: {
              variantTitle: {
                color: "#202222",
              },
              title: {
                color: "#202222",
              },
              price: {
                color: "#202222",
              },
              fullPrice: {
                color: "#202222",
              },
              discount: {
                color: "#202222",
              },
              discountIcon: {
                fill: "#202222",
              },
              quantity: {
                color: "#202222",
              },
              quantityIncrement: {
                color: "#202222",
                "border-color": "#202222",
              },
              quantityDecrement: {
                color: "#202222",
                "border-color": "#202222",
              },
              quantityInput: {
                color: "#202222",
                "border-color": "#202222",
              },
            },
          },
        },
      });
    });
  }
};

submitForm();
/*]]>*/
