if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let a = Promise.resolve();
      return (
        s[e] ||
          (a = new Promise(async (a) => {
            if ("document" in self) {
              const s = document.createElement("script");
              (s.src = e), document.head.appendChild(s), (s.onload = a);
            } else importScripts(e), a();
          })),
        a.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
          return s[e];
        })
      );
    },
    a = (a, s) => {
      Promise.all(a.map(e)).then((e) => s(1 === e.length ? e[0] : e));
    },
    s = { require: Promise.resolve(a) };
  self.define = (a, i, c) => {
    s[a] ||
      (s[a] = Promise.resolve().then(() => {
        let s = {};
        const n = { uri: location.origin + a.slice(1) };
        return Promise.all(
          i.map((a) => {
            switch (a) {
              case "exports":
                return s;
              case "module":
                return n;
              default:
                return e(a);
            }
          })
        ).then((e) => {
          const a = c(...e);
          return s.default || (s.default = a), s;
        });
      }));
  };
}
define("./sw.js", ["./workbox-7288c796"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/0c4fd1c2-c21dade7ae78744afd65.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/1199-a9dac1f69aac238b26aa.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/127-39b4f7d2bc5446469f71.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/1388-1b9e83e417403749a7f6.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/1655-8ab4075050969d649aca.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/1941-c137d857f37a9fec4674.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/1c2031c8-703871dd5a32c2db140c.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/2498-178591211a44bb5a3a61.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/2652-eccd23720abc814ddae4.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/2662.80fd983c356bd596eeba.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/2710-0313cfc2192becd8db73.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/277-5e24baeaf125e3b7c6fe.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/2f450247-6ff245b6599582f32f12.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/3083-83242671785a330e1289.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/3110.93bb29fbe098eb449d97.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/3176-8deef57e647b61e5c16f.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/3394.5d11bd697e788a9d6c3e.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/3512.1dbd9019a95cc2943df1.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/3704.84efddec7c55b48895fe.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/393.ec597c401de35d757e70.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/4106-802909e545b19828b936.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/423-f23bb9e26df5ecc91e16.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/4433.62b99f7a81f87e930a60.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/449.9eed6b8b403f8ea38fd7.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/4632.972f565c5e9caf0ecb40.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/4752.de0d17fa17f1bb4bfd18.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/4893.22e05246144c486bb517.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/505-8746ab24bc1406efa6fd.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/5132.45ca2c08fc3ad6e4ee30.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/5186-12dfe797097bfdb17fa1.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/5302.850c762cfdff1e0080cc.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/5338.d59ba0533a4256e3edc4.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/5377-439027f311574a09c789.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/5409-187488990464fe0b6547.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/5604-6812be57298ec43719d7.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/5704-91ea9917dc1d39572523.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/5980-f931dff1f4f60e606d18.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/6100-c2cc2629e58b2d937b7b.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/6247.ec1acc8d9e85b3634000.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/6356-c0fb99f9dd3143a267a1.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/6407-011193ac74eb6aac6bc9.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/6657-fd7a21f17664fa4b9cb7.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/6759.f76b5e1e4534ecd5af30.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/6836-1eb55a09a46fd536cf69.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/6948-be3e5768528712fb26ef.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/6973-0d897afda283aa16456e.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/7153-4923157806b6fe668280.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/7305-7a37ea5ffe0d8717614d.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/7751-8eba5f721107e1b59964.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/8061-1b7e6879eb9bca35dfeb.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/8111.324f8b7921d33f71ddf1.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/8126.260a106bc3f8db228386.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/8339.2d4885402d488b35a3c6.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/8378.42d6937b7f250aa1e40e.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/8433.2c0ba7727f8b8d45522a.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/8511.2e59e24010ea76963ab1.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/8606.81fd1d67740ea2c72cc4.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/8619-89cf143591c4264391fc.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/8922.efdfe94e06be4b253e62.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/8943-f4626b1b614400a1ebcd.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/9170-112909db92ce270bc224.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/9485-04513ba25c1af81df23d.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/9550-9d0878d4ad49d3e168f9.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/9586-3850089e4b6217f207f1.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/9761-f4f736bb7bce09705bd3.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/979de361-ad91cd5c4fded7b78a95.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/9adb6eba.91b6d9dadfc31ae02097.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/a99a189f-b466bf8ae024bfff4e29.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/baf3f3cb-e97d4275a2735d4cbb59.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/framework-d7fd52c1409590d03a16.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/main-226a241d303b75d7acfb.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D-a88282fb64cba9ac6098.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/attributes-4f0b5425e6cb55fc023f.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/attributes/%5BattributeId%5D/edit-c188be8713e91b10efa9.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/attributes/create-b7ef8813a74f947eb15b.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/edit-6433f5ba69d8feed60e3.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/orders-84318cca806122b51983.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/orders/%5BorderId%5D-0921ecf7e3d8db189716.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/products-96f9d4a536a62aa14c62.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/products/%5BproductId%5D/edit-9a571569af706675c65b.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/products/create-a3b71c1860de8ed86b52.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/staffs-b991e0f4e0c9d5b49f88.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/staffs/create-d5177352264d4e8139f6.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/withdraws-5cd87573623e04aa68bb.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/%5Bshop%5D/withdraws/create-8c0949d71eeadc37e7ad.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/_app-86151d984a424e251200.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/_error-82418558f0d55b148c99.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/attributes-8348cf654ef2bc601504.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/attributes/%5BattributeId%5D/edit-f343853ca65404619c85.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/brands-f33a394c016220492589.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/brands/%5Bbrandid%5D/edit-cdfd641894246ce30f9c.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/brands/create-b779238abc40bdf201a0.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/categories-146ef999f11838e0beb8.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/categories/create-0fc7f4452ca7243ec6cf.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/categories/edit/%5Bid%5D-2f6073287157de834e25.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/coupons-0cb28e88746c3358c61b.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/coupons/create-37cbadcbd981cd161950.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/coupons/edit/%5Bid%5D-8fbdc93d1687f6af30a3.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/forgot-password-2a1e870acf3ed07196f8.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/index-7c0e44dc673fd198caa8.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/invoice-8ccc2137ae8b9f22afa7.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/login-902dcc957d7fe81f3192.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/logout-3d3078827501fd99b112.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/my-shops-b3b9d33d4455e802ea14.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/order-status-d13a0a28bf45e65d2068.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/order-status/create-b16ea96c8782c0a34e38.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/order-status/edit/%5Bid%5D-e2af26b9d6da084caae6.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/orders-26dde1c9e60473b88eb7.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/orders/%5BorderId%5D-59a18ffcb11eed58bb5c.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/products-199b16dcdcec7dd65202.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/products/%5BproductId%5D/edit-b4a8ac81bea384c48bea.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/profile-update-8d0485e878f504576cc3.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/register-a218b68fc785a00abc93.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/settings-4f300db307c98eae063b.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/shippings-4bd7b9c4123981a7beec.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/shippings/create-761307e0cb9996080e29.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/shippings/edit/%5Bid%5D-eba7a9ab2876891c9c5f.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/shops-07881a1e8421ba1dc741.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/shops/create-a9dbddbfb9964c348932.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/tags-80f8a79540ecc20b6dfe.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/tags/%5BtagId%5D/edit-b4b332260b383ee1b686.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/tags/create-74f1e3d0146ed1f5ec83.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/taxes-9bfc44b2f0e5f97530c3.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/taxes/create-5f0dc19b79f3a827e2b0.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/taxes/edit/%5Bid%5D-54e4655d44426f8ec0ff.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/users-3f46dfd7ce37e4880f05.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/users/create-27f51c725e3f454cb4db.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/withdraws-bd4c509ffb64ea18258f.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/pages/withdraws/%5BwithdrawId%5D-da57d526b977b3031e73.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/chunks/webpack-46a0c7c73443dfe38cae.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/css/0c2f6a45dd67f132c351.css",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/css/1a470820d4d2b73b63e7.css",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/css/382f55618634eb5a970f.css",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/css/3eb25869cdaf75b3f5c7.css",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/css/468253784da82591fa19.css",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/css/56716011242c173ce449.css",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/css/6b3d2abe8d3e8223e197.css",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/css/9b975b0db1025791705c.css",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/css/cb3d1116b05e5adb2b76.css",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/css/cc5feb4b03be4a241fe9.css",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/image/public/no-shop.71395c3cd974643af114369d68a82e88.svg",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-all-400-normal.3ad2fdabf53442ab007908cdd4f3ef99.woff",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-all-600-normal.0d7179ed7d377a7c29ae5a7da7571801.woff",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-all-700-normal.99b622aedbb77ec9a82f8fc5896a956d.woff",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-cyrillic-400-normal.915eeba2b3a6fb0238947a507de022b4.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-cyrillic-600-normal.998b3b17e1d13a38e7477569b8d25190.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-cyrillic-700-normal.19e7625fc87f61987e040893fdfe528a.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-cyrillic-ext-400-normal.fd5b41f2c6471bf872fdc7c05405526e.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-cyrillic-ext-600-normal.cd496a14eb8fc22df51d59ef29009a14.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-cyrillic-ext-700-normal.523bbf1dbb496059485159c4cf198182.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-greek-400-normal.918b9fbabefd839518b82b9b3ffdcd67.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-greek-600-normal.702d859f184ab2c794f256ccbd3809f9.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-greek-700-normal.90feae9751ba133933b0f02c3a16c5a8.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-greek-ext-400-normal.889c7e7a6ffef334dfab27f9a4fa50b8.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-greek-ext-600-normal.8be7692284d819d09ca8ebfa37190be9.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-greek-ext-700-normal.75941649ffe057ef81efe3b9cbd6725a.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-hebrew-400-normal.7c1f4dc60d0c9ea194f2926479bbca9b.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-hebrew-600-normal.7b2e89c82800dcb985e27607e28d45e6.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-hebrew-700-normal.5fb36491b9b6b04ea8aa1d44eeb6c0ed.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-latin-400-normal.36a546a98dbdb166cdce9a4f41078c3b.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-latin-600-normal.b921b5774885cba269a52f56c071c27d.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-latin-700-normal.05e19c4acc0834e67a3becda1d6340cb.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-latin-ext-400-normal.8e997721e23c4a12c54cd8d6e4ed8a46.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-latin-ext-600-normal.3b42b2d0808ea78796d1d8430a7ec9e4.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-latin-ext-700-normal.2551d6a4ed70dea966dae1a70c269036.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-vietnamese-400-normal.aeac061af415b846221b3f2c950a32ea.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-vietnamese-600-normal.f9ded67ff31030d5a61fd7fdefdf1445.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/media/open-sans-vietnamese-700-normal.451910361d04010bda15e252ae497a6e.woff2",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/xO2-M7jj7FRCax__2g7Oi/_buildManifest.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/_next/static/xO2-M7jj7FRCax__2g7Oi/_ssgManifest.js",
          revision: "xO2-M7jj7FRCax__2g7Oi",
        },
        {
          url: "/access-denied.svg",
          revision: "cbef9e3ed2353c751fe2bc0fb2e18636",
        },
        {
          url: "/arrow-next.svg",
          revision: "c83b96b9c3af5d7d29bf0822b970287b",
        },
        {
          url: "/arrow-previous.svg",
          revision: "368bfc0612ce03d432495edc17c5b77f",
        },
        {
          url: "/avatar-placeholder.svg",
          revision: "4f5628d48244291a5613c63171ba4168",
        },
        { url: "/favicon.ico", revision: "27e8ee9cbb715425f9c359ea429d1da3" },
        {
          url: "/icons/apple-icon-180.png",
          revision: "987058abfbea9bf108212a8371354cd7",
        },
        {
          url: "/icons/manifest-icon-192.png",
          revision: "579f68eb102bdf231af0b4fed435a614",
        },
        {
          url: "/icons/manifest-icon-512.png",
          revision: "86cde7e171259b2a19104bc042458200",
        },
        {
          url: "/image/card-argon.png",
          revision: "3870fde74e6242af243ffa92bcaeef0d",
        },
        {
          url: "/image/card-helium.png",
          revision: "c960dd64e795307c42c48e8f244b7ce5",
        },
        {
          url: "/image/card-krypton.png",
          revision: "173ad5241fb5525926a681f775ab04c4",
        },
        {
          url: "/image/card-neon.png",
          revision: "3165c5e257f5f5d3f1a61cd4571ef624",
        },
        {
          url: "/image/card-xenon.png",
          revision: "3d0b5eb11a9ac071a293d54dfcf09634",
        },
        {
          url: "/image/layout-classic.png",
          revision: "3466c03af75c85989d1aae9b6092d452",
        },
        {
          url: "/image/layout-minimal.png",
          revision: "6c1970d290749c6e8a1e67b2a682dab9",
        },
        {
          url: "/image/layout-modern.png",
          revision: "f524fd6d77a95490dea9683845c0a854",
        },
        {
          url: "/image/layout-standard.png",
          revision: "3a38c5b45aeca63400bbc50454c66a5d",
        },
        {
          url: "/locales/ar/banner.json",
          revision: "5e685b1ef80295e6c826e324caaa9a68",
        },
        {
          url: "/locales/ar/common.json",
          revision: "a97111f478af883c70806296b1f6f609",
        },
        {
          url: "/locales/ar/form.json",
          revision: "e576f02e1dbdc64795acbcb80df9e604",
        },
        {
          url: "/locales/ar/table.json",
          revision: "fabb51da67d395aebef878c027d0ad45",
        },
        {
          url: "/locales/ar/widgets.json",
          revision: "953a384792cc5207c53399334a98c42c",
        },
        {
          url: "/locales/HSLine/ar/banner.json",
          revision: "5e685b1ef80295e6c826e324caaa9a68",
        },
        {
          url: "/locales/HSLine/ar/common.json",
          revision: "a97111f478af883c70806296b1f6f609",
        },
        {
          url: "/locales/HSLine/ar/form.json",
          revision: "a5db22e3083ed77ebe0e5c247cf31a77",
        },
        {
          url: "/locales/HSLine/ar/table.json",
          revision: "03aeded0ed3a75b3a6f260be9668b548",
        },
        {
          url: "/locales/HSLine/ar/widgets.json",
          revision: "953a384792cc5207c53399334a98c42c",
        },
        {
          url: "/locales/HSLine/de/banner.json",
          revision: "6341bd5cabf7a96ad27bea2c757bec94",
        },
        {
          url: "/locales/HSLine/de/common.json",
          revision: "c6640a38d237200d2de6272b918cea05",
        },
        {
          url: "/locales/HSLine/de/form.json",
          revision: "894f5abefc2b08b884690cba11c6026d",
        },
        {
          url: "/locales/HSLine/de/table.json",
          revision: "15b7e73fb63d83226415d208ff4790c1",
        },
        {
          url: "/locales/HSLine/de/widgets.json",
          revision: "3c71034cd74b11ddd8ef3de6cc7cf387",
        },
        {
          url: "/locales/HSLine/en/banner.json",
          revision: "c0064c757fc9489d809c0e3e7ff532d2",
        },
        {
          url: "/locales/HSLine/en/common.json",
          revision: "da540bf7f5e963e7cc6bd7be7bc6b872",
        },
        {
          url: "/locales/HSLine/en/form.json",
          revision: "bbae44efc78dd13fe35c0b0197970e08",
        },
        {
          url: "/locales/HSLine/en/table.json",
          revision: "d29dd7282dffa4784f3b1661bf583cb9",
        },
        {
          url: "/locales/HSLine/en/widgets.json",
          revision: "420276e458d72f42c9485de38207bb09",
        },
        {
          url: "/locales/HSLine/es/banner.json",
          revision: "9f88efaa3fdc64755c8d4347245318ff",
        },
        {
          url: "/locales/HSLine/es/common.json",
          revision: "4c1b3a32268461e0140d249b596398d4",
        },
        {
          url: "/locales/HSLine/es/form.json",
          revision: "719894961cd46b143587b09c700e3fe1",
        },
        {
          url: "/locales/HSLine/es/table.json",
          revision: "1ceaeb9f5bea5f2bde823f511964e298",
        },
        {
          url: "/locales/HSLine/es/widgets.json",
          revision: "1cf07a0a41c801e2f537c2488ee3cc3c",
        },
        {
          url: "/locales/HSLine/he/banner.json",
          revision: "05cec967d316a61d683ddc241921182b",
        },
        {
          url: "/locales/HSLine/he/common.json",
          revision: "7637bb3e587e29ecc4f8998f86dfb62a",
        },
        {
          url: "/locales/HSLine/he/form.json",
          revision: "0a7c74e228481f016b4a9e2a31f22b5a",
        },
        {
          url: "/locales/HSLine/he/table.json",
          revision: "eace2b86c286e516b63c507a5f913d0b",
        },
        {
          url: "/locales/HSLine/he/widgets.json",
          revision: "9094afc471718b27bc0d39b96d478eba",
        },
        {
          url: "/locales/HSLine/zh/banner.json",
          revision: "eadceea361eb79e4ac7a28a4cd4bd600",
        },
        {
          url: "/locales/HSLine/zh/common.json",
          revision: "833734464030c2c1176fefa060c9646b",
        },
        {
          url: "/locales/HSLine/zh/form.json",
          revision: "3e42b48cab8afd94acc86d289cefce5e",
        },
        {
          url: "/locales/HSLine/zh/table.json",
          revision: "78463d3f78ce89b28dffc040969a2ef1",
        },
        {
          url: "/locales/HSLine/zh/widgets.json",
          revision: "d630533b0f9f279498676871bfbb761e",
        },
        {
          url: "/locales/de/banner.json",
          revision: "6341bd5cabf7a96ad27bea2c757bec94",
        },
        {
          url: "/locales/de/common.json",
          revision: "c6640a38d237200d2de6272b918cea05",
        },
        {
          url: "/locales/de/form.json",
          revision: "a92dae8312b0ec2672d6a01e5364219e",
        },
        {
          url: "/locales/de/table.json",
          revision: "558d740bc6d584ec4225c1618ac2b801",
        },
        {
          url: "/locales/de/widgets.json",
          revision: "3c71034cd74b11ddd8ef3de6cc7cf387",
        },
        {
          url: "/locales/en/banner.json",
          revision: "c0064c757fc9489d809c0e3e7ff532d2",
        },
        {
          url: "/locales/en/common.json",
          revision: "fb79ac06abfbaadfa757e3f20903f586",
        },
        {
          url: "/locales/en/form.json",
          revision: "fe4d3cb978f57ed0d8c72e6971f7ba18",
        },
        {
          url: "/locales/en/table.json",
          revision: "1f360cdd62f7d654a5155c52c27880f1",
        },
        {
          url: "/locales/en/widgets.json",
          revision: "420276e458d72f42c9485de38207bb09",
        },
        {
          url: "/locales/es/banner.json",
          revision: "9f88efaa3fdc64755c8d4347245318ff",
        },
        {
          url: "/locales/es/common.json",
          revision: "4c1b3a32268461e0140d249b596398d4",
        },
        {
          url: "/locales/es/form.json",
          revision: "c157de90fa38edcf479a562d9a1caa9b",
        },
        {
          url: "/locales/es/table.json",
          revision: "da5450a9a298e0f47f688384c4417541",
        },
        {
          url: "/locales/es/widgets.json",
          revision: "1cf07a0a41c801e2f537c2488ee3cc3c",
        },
        {
          url: "/locales/he/banner.json",
          revision: "05cec967d316a61d683ddc241921182b",
        },
        {
          url: "/locales/he/common.json",
          revision: "7637bb3e587e29ecc4f8998f86dfb62a",
        },
        {
          url: "/locales/he/form.json",
          revision: "4aa76b8363444dc00678a0c1fc0928de",
        },
        {
          url: "/locales/he/table.json",
          revision: "84ec76a952bb0c2decf5037494d3b21f",
        },
        {
          url: "/locales/he/widgets.json",
          revision: "9094afc471718b27bc0d39b96d478eba",
        },
        {
          url: "/locales/zh/banner.json",
          revision: "eadceea361eb79e4ac7a28a4cd4bd600",
        },
        {
          url: "/locales/zh/common.json",
          revision: "833734464030c2c1176fefa060c9646b",
        },
        {
          url: "/locales/zh/form.json",
          revision: "fb6e1ae77835dfd7e6610a4c5c4f641c",
        },
        {
          url: "/locales/zh/table.json",
          revision: "6ff8c23abd3b68f0d7cb75a672dfcd7a",
        },
        {
          url: "/locales/zh/widgets.json",
          revision: "d630533b0f9f279498676871bfbb761e",
        },
        { url: "/logo.svg", revision: "763d6765924f2d26ffb637d97aa48358" },
        { url: "/manifest.json", revision: "b9861153f733d9d2d29c431a0f35fdbb" },
        { url: "/no-shop.svg", revision: "9813c5d70739486eec6129bfddaad122" },
        {
          url: "/product-placeholder-borderless.svg",
          revision: "497c5bb692fe3f0aa7c58582b42ced0b",
        },
        {
          url: "/product-placeholder.svg",
          revision: "e0d6a0d9a99a72a2fed058f714cd160d",
        },
        {
          url: "/user-avatar.jpeg",
          revision: "ab54530285f8d825148761756880f66f",
        },
        { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: s,
              state: i,
            }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: "OK",
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
