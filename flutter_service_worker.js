'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5cb4869557573ecc6edb7643f3f92f55",
"index.html": "4a298f302f90d3a6ef506c1d66cf59e3",
"/": "4a298f302f90d3a6ef506c1d66cf59e3",
"main.dart.js": "bbb7a855fe88daeaffbba7ed2daa8e77",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "415cd8cb67ccd1b1fe1d295e4a3440e2",
"icons/Icon-192.png": "1fccd32120bcc675ff84a59542e304e0",
"icons/Icon-maskable-192.png": "1fccd32120bcc675ff84a59542e304e0",
"icons/Icon-maskable-512.png": "9b160e5c85bf8fbf91a0acdd5748c712",
"icons/Icon-512.png": "9b160e5c85bf8fbf91a0acdd5748c712",
"manifest.json": "d30d83dcf23db03fd62b963ac0baa4aa",
"assets/AssetManifest.json": "61489be3b6886d422da291dc61efbdb0",
"assets/NOTICES": "9aa754664add180452a2e8d30d71193f",
"assets/FontManifest.json": "0ba824addf8f10e491f3cdb1c7e4a02e",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_mastercard.png": "1e1ab358b3e037eae2c5d9c96da86848",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_discover_template.png": "9abb6962134c2aa3a06d81a5d2f7da32",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_applepay.png": "05067cfeec9033daefbd52c0e884ff91",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_form_front.png": "39f2eaf58fc1742c2a875c093d036385",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_mastercard.png": "1fb00de154cdabe0f748107a861601ff",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_discover_template.png": "176ab4d2eff41f4885e6118275f85e38",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_applepay.png": "b02a16e08c5cb16451f9120a2d2a136b",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_form_front.png": "213549c844689a276f9d3330cf2f2a89",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_amex_template.png": "6894ce47c3dfd599abef864fcff790bc",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_amex.png": "8b72ddfc1d7c098bbbc5153c24f41ffc",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_form_amex_cvc.png": "4987dcdf507b85f2afaded82ee89efc9",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_discover.png": "2cf459ae148cb954a7cabbe07bb44dc0",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_cvc.png": "2c379d10d6bc1afe0f75a82f865b4a43",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_unionpay_zh.png": "75c05f4471f601b7191f9a975bb35af3",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_diners_template.png": "415f3cace69a2b9ed362728736857088",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_jcb_template.png": "bca2f5e105b1d34c1baa3ddcdc519e74",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_cvc_amex.png": "0a5db9e09f6ef71666783f87add99061",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_diners.png": "064f39a6de91139b6737a88f9be2a3cd",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_unknown.png": "a0aee8f7bdf1e7b66dc2c8ea622496ae",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_unionpay_template_zh.png": "0ccbe72f8f49c93470f1c48cf7d97fa7",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_error.png": "0d1a84dabc85284bee6b3bfd52519b6a",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_mastercard_template.png": "a8fb1fe325d287e1b8374c0cf6946de7",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_error_amex.png": "f032831c4feaaed27286943e0834de7e",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_visa_template.png": "9fd7930e5ccd5cba36b8e71e1950fedd",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_visa.png": "427c85cfdce26480ff4cf0e0d50d2a2a",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_unionpay_template_en.png": "3ecef939e2889248e1be484ef14cbbb1",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_unionpay_en.png": "c4276597fe8506e258db5e5a0b6690b3",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_jcb.png": "2c4393aec6737712936afcaa1ea45555",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/2.0x/stp_card_form_back.png": "93fa854451ae5966f9ee856c938d83f8",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_amex_template.png": "c22505f14222d003bfe0077ab5ea7ae2",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_amex.png": "3e9ab9b0a5af2f43525da6bd0165229a",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_form_amex_cvc.png": "2d48fa8bdedfd0057affae2d05289417",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_discover.png": "363173f285cb350c102d8bfa1e287457",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_mastercard.png": "548722299d7d2781eb8ed434b9053fc4",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_discover_template.png": "01342361d485b953cecf3121dfa7e4aa",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_applepay.png": "9680b1d435866b7936bae04668e58bc8",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_form_front.png": "7aa3eb240fb940be953bdc7e2118aa3f",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_amex_template.png": "04f0cc1f02518b745af981b7d4727f8e",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_amex.png": "f3e326387d8914b8ed13ff8edfc1869a",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_form_amex_cvc.png": "4dca85628c0dba85b1ea09d2694e09b0",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_discover.png": "2a0ef9b3c96775b795faf7a7288b800d",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_cvc.png": "33906ac8ff73a1cf4c465104fa4271a7",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_unionpay_zh.png": "f5d8a6a472a9d454ad4134d0b3cdf4eb",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_diners_template.png": "6db8fdd7abbbba05d0170f93d90d10e9",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_jcb_template.png": "94ff32a0be2f527500050b810e34b649",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_cvc_amex.png": "2c16854b76b2221bc456a628aba6686e",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_diners.png": "fe804cc0527509574479a21a7677746e",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_unknown.png": "cc98e491239f93255984fd940a1536ad",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_unionpay_template_zh.png": "4da3dc5bed9994af4fde2bd28b6422cc",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_error.png": "0c19e73859953d1a17e688d4444f325d",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_mastercard_template.png": "31623fc197e02f87eb85d92fe8e754c0",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_error_amex.png": "6df3d3e2d908c21623cdf13341873c28",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_visa_template.png": "7b6c3dfe95c6f5f4a9f99e9d32861c29",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_visa.png": "0fc44b46d208e476773d0d3b9cec53cc",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_unionpay_template_en.png": "ff4306b017bb06fba5e8a4b5614bef20",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_unionpay_en.png": "e531a11a959ce42c3087d9a63b040a79",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_jcb.png": "f0363257f4081063e56b257a82d8866e",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/3.0x/stp_card_form_back.png": "18b94b5baacdc1ceca9136505fad85a3",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_cvc.png": "fe09363bdb2fbd2339cb4b2c47c4447d",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_unionpay_zh.png": "e15e55b7a26f17304b12d30b1dbc60cc",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_diners_template.png": "4973a4646fec6c70062c58e4e276ef84",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_jcb_template.png": "4702c00723f48572abe53cc809098b28",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_cvc_amex.png": "edc86390eb85cb3b9d5f43f163c1775b",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_diners.png": "86718819ad7047ae033d8172c9bcc154",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_unknown.png": "584be93d686affe308e5d8ada72a3ac7",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_unionpay_template_zh.png": "7777ddf1165c0d86e7d9c740c069dc0f",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_error.png": "a25b531db3bd2d5eff546d1d0ebac9b5",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_mastercard_template.png": "1869b859b91070ed52b3f11095dea59b",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_error_amex.png": "e4234c244d702ffd21f19cd181089904",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_visa_template.png": "00bbcf9c770488b2e8f6bcc0982b29fd",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_visa.png": "ebdfb87438c44b34effeff0c84020500",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_unionpay_template_en.png": "55088726f02125958145372729aa55af",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_unionpay_en.png": "ad984ddd13390094246fae700a3cdef5",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_jcb.png": "0560b48e7ee5ba5b77f086cae9345de8",
"assets/packages/flutter_payments_stripe_sdk/lib/assets/images/stp_card_form_back.png": "6252ea37f1a32f35ae8fd3ed83c732da",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_esc_pos_utils/resources/capabilities.json": "eef87d282ff8e3aac35c6080d66eae82",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/svg/pdf_export.svg": "e98f4e1b3fe28f91034dc8e3048cfea9",
"assets/assets/images/svg/receipt.svg": "4ae36bb713596e15270f87162e0b3d5d",
"assets/assets/images/svg/list.svg": "24b6908f881032860b721b5c8bad9f71",
"assets/assets/images/svg/car-map.svg": "fa176a6891077b74bc1c9109119f0c41",
"assets/assets/images/svg/dinner.svg": "21e21141bc8b2baeb82e4a5a0a0f999f",
"assets/assets/images/svg/chart.svg": "b89d604fee83a99624f3c8fd4b71f310",
"assets/assets/images/svg/dining.svg": "58b568fe3594f6d525f9d1c3a5dcf32f",
"assets/assets/images/svg/visa.svg": "bd6871616c0fbbc600bb4e75209bd2d2",
"assets/assets/images/svg/ot-caller-id.svg": "1e4d8300dea945c5570730de6b2ffc94",
"assets/assets/images/svg/americanexpress.svg": "1799f7d9a6e5fc92c2c8fc55c9b2501a",
"assets/assets/images/svg/shrink.svg": "9334c0bc280124dd7eca8ce6f0762567",
"assets/assets/images/svg/interface.svg": "148cc662e089a36285df845e54343ba4",
"assets/assets/images/svg/kitchen-display-system.svg": "b1831b04f11ac61b39e79f6216ffbacd",
"assets/assets/images/svg/delivery.svg": "9de708d54513ac4f68c2cfe37505805d",
"assets/assets/images/svg/ban.svg": "cdbdda7fc651dd1571a1a3f7e301edfe",
"assets/assets/images/svg/appstore-lrg.svg": "1cfd5dba4a9210bcf77f5dbe48ec2e66",
"assets/assets/images/svg/caller-id.svg": "ec8a977c1597f35b0cf1871053325810",
"assets/assets/images/svg/stopwatch.svg": "929aabdc4d37b8c8546a86dcc5152c16",
"assets/assets/images/svg/expand.svg": "d91c7ad5918301c962d3f319c8ac775f",
"assets/assets/images/svg/sum-sign.svg": "876be487c0fa28a7fe54f0c8fe6a9997",
"assets/assets/images/svg/price-tag.svg": "802daf62b9571dd359c4203dec592807",
"assets/assets/images/svg/category.svg": "cef309ee4fe2ff4bef78d8cac4f79541",
"assets/assets/images/svg/team.svg": "9efdf0f3d04903af1b2b9cdd089650d2",
"assets/assets/images/svg/padlock.svg": "c8e468e5028e2f7d25285b6e749cc3a5",
"assets/assets/images/svg/csv.svg": "9c2d64b21ac41916a6feb4ce56a8712d",
"assets/assets/images/svg/paypal.svg": "f3e24db27736030c70accbf2f2c852e4",
"assets/assets/images/svg/sumup_logo.svg": "41ab6cb6979c241c8ba1ad37645f6b52",
"assets/assets/images/svg/table.svg": "17be5787af06775c5afef50a5d5b7f2b",
"assets/assets/images/svg/coin-stack.svg": "ccfaca0947b9c297d2067f4db753d4ef",
"assets/assets/images/svg/printer.svg": "5d467c2a67f4acb8c68ab9c329b5b80c",
"assets/assets/images/svg/mastercard.svg": "90ffa928693c5414d287ecc53b0eced2",
"assets/assets/images/svg/menu/cash-register.svg": "4718ce099f3b8016c5e882bb04a0dc62",
"assets/assets/images/svg/menu/package-settings.svg": "86ee52ca28047576f6a8ac851f7946bc",
"assets/assets/images/svg/menu/shift.svg": "e3d296053d5a8b407c0be24cec9d9933",
"assets/assets/images/svg/menu/logout.svg": "3a0cc56d5b882ff786400c1a45105954",
"assets/assets/images/svg/menu/cancel_shopping_card.svg": "33fb82fe1e9ba2d4b01498dab6cee592",
"assets/assets/images/svg/menu/user_pie_chart.svg": "63523b6cd4bcd3ca9b5698676dc103ed",
"assets/assets/images/svg/menu/reports.svg": "6e55a240b795a6bdb9112ac36ef20272",
"assets/assets/images/svg/menu/menu_card.svg": "e574d06fef0214148d9c64791ffd3c02",
"assets/assets/images/svg/menu/settings.svg": "6abc66109001a4c753471569f68266f2",
"assets/assets/images/svg/menu/dashboard.svg": "c7aa8d0c5f3adf44de31adc9baa74e5c",
"assets/assets/images/svg/menu/opening-hours.svg": "0574c23d547f557a7276309d599f3340",
"assets/assets/images/svg/menu/customer_chart.svg": "1e4e1195d9c54302f925d175cc65f6b1",
"assets/assets/images/svg/menu/table_chart.svg": "4c4faa68f2b00d1e1719887c5c9f6e58",
"assets/assets/images/svg/menu/payment-settings.svg": "d6896c4df1ca5e4e52ae1d741850931a",
"assets/assets/images/svg/menu/waiter-ordering.svg": "df40182b5adacdd16570118df14294ea",
"assets/assets/images/svg/menu/chat.svg": "ba8d26a5c81ec9c5fc0bf396f7ba7f1c",
"assets/assets/images/svg/menu/table.svg": "8bd97b0d771824e7f0176f41a94935dd",
"assets/assets/images/svg/menu/printer.svg": "21e46024bed58dc05ed8dee0f6d231a5",
"assets/assets/images/svg/menu/kds.svg": "d296c3136dae43c6fb0b388baa6ae208",
"assets/assets/images/svg/menu/cash-book.svg": "d38a02a5ff9aa27487c8d7c169bf6b3c",
"assets/assets/images/svg/menu/profile.svg": "8fcbd7a36dbee5b6a129a24dbf2305b3",
"assets/assets/images/svg/menu/reservation.svg": "503fda18b061580009985e5b0df4c85d",
"assets/assets/images/svg/menu/close-day.svg": "68838a1d9b27559af616fc3bcb5bb043",
"assets/assets/images/svg/menu/dashboard2.svg": "4c813e1cb4665b20c09bebc343a6ad06",
"assets/assets/images/svg/menu/group_persons.svg": "1125b5fa16f0ac88e4f71b07f3dcf414",
"assets/assets/images/svg/menu/employee.svg": "baab0bc6ee0bd672ab182c7924d50f39",
"assets/assets/images/svg/menu/statistics.svg": "e5e60d9042166a637bc155fbbd1e9a72",
"assets/assets/images/svg/menu/master-data.svg": "4fb4040400c82f95de45f2a39dcc89a3",
"assets/assets/images/svg/secure-payment.svg": "25a4d899e54d958a42aa243a3a28c36a",
"assets/assets/images/svg/credit-card.svg": "e79795c386c2d0ebac6ceb0f19b42fde",
"assets/assets/images/svg/man-with-bag.svg": "c91e506c023a836489d5f802dcc391cf",
"assets/assets/images/svg/printer_simple.svg": "f64a650f1b91eba66f00701f3e00c518",
"assets/assets/images/svg/money.svg": "65b355aaf09996b67954a25a3c0d7ad7",
"assets/assets/images/svg/sepa.svg": "aeef29f6ac8b54fff0d074a1fded46bb",
"assets/assets/images/svg/route.svg": "5613b21977e511e61273a8f7c408186a",
"assets/assets/images/svg/excel.svg": "13333be5ac3295dfcd54fb668427aa90",
"assets/assets/images/svg/menu.svg": "a174e7a9762beed0ddf46523e5d17e82",
"assets/assets/images/svg/gift-card.svg": "313b2ddfe2f3920519e143e6f37a514f",
"assets/assets/images/receipt.svg": "4ae36bb713596e15270f87162e0b3d5d",
"assets/assets/images/car-map.svg": "9e214b3df662ecb3187e216626619348",
"assets/assets/images/izettle-logo.png": "222808b3f80df5508d9fe313a8217bb4",
"assets/assets/images/owner.png": "db5ce00527ee23c4561dedf73f46d487",
"assets/assets/images/phone-order.png": "a2bea3135883c716f336c47fd9e28d2c",
"assets/assets/images/courier.png": "8f4e21fdf0c0ec2782b0383fd33bb50d",
"assets/assets/images/tse.png": "7e485f2563a0f6fa1ff056a958d42cbe",
"assets/assets/images/IMG_2716.jpg": "6ea2b0b1db040aabe4099afcf659ec60",
"assets/assets/images/restaurant.png": "c06511d85cc39ca42fd23a3b19a386f3",
"assets/assets/images/status/served.png": "c9ce4b72d0cf9dddbbdfcb8de8880440",
"assets/assets/images/status/question.png": "83b5c40ee4e53355af6a699b162b8060",
"assets/assets/images/status/ready.png": "9c5f57de8df3d85b338b977b53084cd5",
"assets/assets/images/status/delivery.png": "fd9c98b1d17140e1e4b8b8131f02c79c",
"assets/assets/images/status/neworder.png": "69f4bd905aa975cba52f9ba7be78112a",
"assets/assets/images/status/cooking.png": "8564d1399f76efa912d1a8de66a8e472",
"assets/assets/images/status/waiting.png": "9c8274c67167e4795f756d2c0b196e69",
"assets/assets/images/status/denied.png": "62e67b61e61da212ee978872b6be1334",
"assets/assets/images/sumup-logo.png": "1862c2bf0e4b79ea256758db350a2ba9",
"assets/assets/images/car-map.png": "8dbfc1c69dd5d01b4b3a036abeae0442",
"assets/assets/images/cook.png": "a7656cfd0b98765fe87297bd501c31bf",
"assets/assets/images/waiter.png": "103729be9537c30a6099ac2c2f8c152e",
"assets/assets/images/video_preview.png": "13d192b1b67744fc3db82762ca06f725",
"assets/assets/images/quick.png": "69fdc51b3146e7f6a89f8bf62ebfe9d0",
"assets/assets/images/logo/logo_animated.png": "029093b2e5e7117877e1f84e29e72582",
"assets/assets/images/logo/3x/logo.png": "061c65b8f033d7ec6dcaec62327f6c56",
"assets/assets/images/logo/lieferando-logo.png": "87972ff11335d5fb01960fda23f7934e",
"assets/assets/images/logo/phone-call.gif": "c251b81347c29b8d83f5ca21d13d9815",
"assets/assets/images/logo/phone-call_.gif": "02e15bcc0f1b0477233ddf77b3082a39",
"assets/assets/images/logo/logo_animated.gif": "d88a901520da563890b3c0892e2d595c",
"assets/assets/images/logo/logo.png": "ad178c2bce2eb5811b6ab44adfd6e6f5",
"assets/assets/images/logo/2x/logo.png": "061c65b8f033d7ec6dcaec62327f6c56",
"assets/assets/images/haus.png": "231e54540c63dac5fbb10622f557c5e0",
"assets/assets/images/lieferando.png": "b36e89d63928d60fca92c6703c256d4c",
"assets/assets/images/delivery/default_background.jpeg": "d8740587a89ea2da6b570e8110872709",
"assets/assets/images/salad.jpg": "2b5fb7ccb6805c50f847ee190c3d890b",
"assets/assets/images/card_bg.png": "9b5cd474f849beb2c6b5aaf71a145ca6",
"assets/assets/images/woman.png": "54835b797df7bfceb89c312b36f972fd",
"assets/assets/images/customer-map.png": "747a75c35717f631d5d26c262da0c547",
"assets/assets/images/plate.png": "5d0b2ad93e403614a10288a05ea998a9",
"assets/assets/images/table.png": "e89a4aaad21117897a7a79edb0bf5f3b",
"assets/assets/images/lieferando_white.png": "986fc866948821fd14efc789e67d2528",
"assets/assets/fonts/jetbrains/JetBrainsMono-Bold.ttf": "698f8ca26625b648102dec007096ff29",
"assets/assets/fonts/jetbrains/JetBrainsMono-Regular.ttf": "6664e867457f3dc3d7ee961775261e80",
"assets/assets/fonts/jetbrains/JetBrainsMono-Medium.ttf": "be376d16abf45d56c5aa59f5ecd87c4e",
"assets/assets/fonts/gilroy/Gilroy-Medium.ttf": "d8ee4539e9ba9211a8b532e325075577",
"assets/assets/fonts/gilroy/Gilroy-Regular.ttf": "22d25e11ebe6b43e5a9bc87d0a0ccb61",
"assets/assets/fonts/gilroy/Gilroy-Light.ttf": "25e5ce9784cf3324af89cfd13fa59517",
"assets/assets/fonts/gilroy/Gilroy-Bold.ttf": "889a4b5ce3a780faedb74390fc49a07a",
"assets/assets/fonts/gilroy/Gilroy-Heavy.ttf": "2b57bf6ef2611353b4890d83fe3973c6",
"assets/assets/sound/waiter-notification.mp3": "bb29177b9e35da62879933a8b0864aae",
"assets/assets/sound/notification.mp3": "5262cdec12d5776496e93f1ee69607c1",
"assets/assets/sound/error.mp3": "efb72e912e502296d124c3bd4ed2aa66",
"assets/assets/sound/short-success.mp3": "80d3761837374e0fc31ab244e8332ca8",
"assets/assets/sound/cancelled.mp3": "5602d617d72dc41cc550b3bddf092ac3",
"assets/assets/sound/beep.mp3": "708ee0c1ffc853e7170b57e700a482bf",
"assets/assets/sound/delivery/Ton5.mp3": "f19cf73397e50d1a6e4327be9e1afc40",
"assets/assets/sound/delivery/Ton4.mp3": "e9c004f29aaa90226b4551cd4c17f498",
"assets/assets/sound/delivery/Ton6.mp3": "e10fb2df41fc12e50443c5e81c409d41",
"assets/assets/sound/delivery/Ton7.mp3": "d425ec9bd504f896b9133334bf0a202d",
"assets/assets/sound/delivery/Ton3.mp3": "e5d373cf992da7be3da221bb8ab5bc60",
"assets/assets/sound/delivery/Ton2.mp3": "827898bbcfa9f283783c340e26b93d0b",
"assets/assets/sound/delivery/Ton1.mp3": "dd5a24e81be455cfcf13153b165f6b76",
"assets/assets/sound/elevator-bell.mp3": "112180f853f3e59dccac3f0b623e50b3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
