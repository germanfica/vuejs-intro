var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "assets/TJd5pkUO.jpeg",
    description: "image",
    link: "https://germanfica.xyz/",
    inventory: 15,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "assets/TJd5pkUO.jpeg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "assets/Mf2vKfhN.jpeg"
      }
    ],
    cart: 0,
    buttonBgColor: "background-color: #1e95ea;",
    enableColor: "background-color: #1e95ea;",
    disableColor: "background-color: #A9A9A9;"
  },
  methods: {
    addToCart: function() {
      if (this.inventory > 0) {
        this.cart++;
        this.inventory--;
      }
    },
    updateProduct: function(variantImage) {
      this.image = variantImage;
    },
    deleteToCart: function() {
      if(this.cart>0) {
        this.cart--;
        this.inventory++;
      }
    }
  }
});
