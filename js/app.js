var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "assets/TJd5pkUO.jpeg",
    description: "image",
    link: "https://germanfica.xyz/",
    inventory: 100,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ]
  }
});
