'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/videorodas.png": "64472dee4e42be638d1024e5e6c921b2",
"assets/assets/monza.jpg": "5bec69e68f62edcd19aa4173be2f97cd",
"assets/assets/bitacora.png": "f3b6d53687418cf4e2821660648be3c2",
"assets/assets/videofranco.png": "c2256e40d49116f9ba86f6e4f310f186",
"assets/assets/fondofinal.jpg": "145c4445bf6dcf11df2153e85de1f43e",
"assets/assets/strenj.png": "fc1107b37f4c86a2c1edf75ac517fae7",
"assets/assets/armonico.jpg": "4ebb6b2c08fdb3e4cfeb7e3c15282853",
"assets/assets/infografianewton.png": "2e5eb17650e35997833d2cdb5281ea81",
"assets/assets/movement.png": "ccbd7689ad119d08a4df7ade460eef9b",
"assets/assets/videodaniel.png": "1d7b26c5b51447b7628603075eec92bf",
"assets/assets/infografianewton.jpg": "2e0e81705250a780a9161cc17d309185",
"assets/assets/mapamental.jpg": "37f9076471f6dc3f91a661acdea41e85",
"assets/assets/fuerzas/conceptualfuerzas.png": "7e7a61d27af8a628b5b56ec28e1d8e2e",
"assets/assets/fuerzas/headerImage.png": "a68be39354373e29d00c1d9b4bbdf358",
"assets/assets/circularuniforme.jpg": "a4390226c7bd3ae34595ab6b536bc557",
"assets/assets/rectiejemplo.jpg": "631e850479455ba459a3888d5fc64847",
"assets/assets/pendulo.jpg": "0e1b6d1037166caae18237502f66622f",
"assets/assets/rectilineo.jpg": "5133a9e87c55acb4295e5cac5646a8bc",
"assets/assets/conceptual.png": "a78e02633c1e04637b2f297d1b356a11",
"assets/assets/pdffile.jpg": "f412187e392b97b47c2bc717afefb7af",
"assets/assets/manzana.png": "24a221555d117b71b66aaf1188a41b43",
"assets/assets/pdffile.png": "9a85752042ae270b88114895b82da2c1",
"assets/assets/curved-arrow.png": "ea0c98db0fbb2ba3308150c668c84909",
"assets/assets/koala.png": "106df59e5d52d5cc77cfcc8c52256379",
"assets/assets/cronograma.png": "51f452492c9322ea24915d1e9275b2cb",
"assets/assets/fonts/staatliches/Staatliches-Regular.ttf": "d5746e3b20453d6cee99ab27a0bdf949",
"assets/assets/fonts/roboto/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/fonts/roboto/Roboto-Italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/assets/fonts/roboto/RobotoSlab-Regular.ttf": "2e935203e7200edebf345ee19a80f435",
"assets/assets/fonts/roboto/RobotoSlab-Bold.ttf": "b3954db228ca7701bf36469cf6c31c57",
"assets/assets/fonts/lato/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/assets/fonts/lato/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/lato/Lato-Italic.ttf": "7582e823ef0d702969ea0cce9afb326d",
"assets/assets/fonts/lato/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/mukta/Mukta-Regular.ttf": "6f5fbe33e286ecbaee1a2933d0de25a0",
"assets/assets/fonts/mukta/Mukta-Bold.ttf": "c05522505c7067b1e97910b5a67a26be",
"assets/assets/newton.png": "8fe17082abd33d86985274a24b8c04e9",
"assets/assets/parabolica.jpg": "f7f0d4c7cb161d9255dbec4c5f6c96bf",
"assets/assets/uniforme.jpg": "ee91ca0dd11ae386af99ae44f8eab03c",
"assets/assets/clasificacion.pdf": "15aed9748d48f5461f220ba2c17304e4",
"assets/NOTICES": "28d3adb7444596b3b8031a449ddaf403",
"assets/FontManifest.json": "381aeeca74c856af46d5827b90be5825",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/AssetManifest.json": "bdf2d1ac65a90d2fd6d3e603815629d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"index.html": "f04970d96bbe452b14bb574d025051d7",
"/": "f04970d96bbe452b14bb574d025051d7",
"main.dart.js": "55f87f58f466b935aff1e5b1c02b372c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b110bfc489bfa74ed3d5b2b62ede35ef",
"favicon.png": "c7b2b662060baeda02816332b39ac817",
".git/FETCH_HEAD": "2dfd41deaa6236ddae663c3025d41e76",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/COMMIT_EDITMSG": "ccd496bac97a5be88c6c062e7d38f7ee",
".git/refs/remotes/origin/master": "9d836eba29e6067a860d4f172fd1bd69",
".git/refs/heads/master": "9d836eba29e6067a860d4f172fd1bd69",
".git/index": "fa07de4a90448837e6dbc24dc44ffedd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "940c854c5766702cc77f3d782c0c8d54",
".git/logs/refs/remotes/origin/master": "faeeea61e0abd62d1d40632a55483169",
".git/logs/refs/heads/master": "940c854c5766702cc77f3d782c0c8d54",
".git/config": "492d74cd96b92fe3f1f59826c0695461",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "7807189a743a8dfd956afe5b0c51884c",
".git/objects/a5/8b15037584c7d0f840522e824abd07bb8675e1": "1149ec54ba1a144ab1d2866b67298b58",
".git/objects/b7/5c3ffeda3324e6973e1aa39270ded27da5ae9b": "06204e374d041e4b6bf1490c3c4394b4",
".git/objects/2c/e9fa99feaf7c4a07e621e63ded0a98edf05a13": "6f4c8d05aef6b0298945f7cf2d4f3bb0",
".git/objects/22/0db37a1edce9859cad24c992af98dce7113308": "e13ea4f5ae99d9cde29baac8cbe5f916",
".git/objects/22/d0f7fc73ffa807746e54e0a722ca1077b4a781": "eea858ac32f031c573936659b07ac4b5",
".git/objects/22/0c2d56a55943e085960edb7d802c9066ece775": "1fb6c3f630cc131232b9d8d0c43410cb",
".git/objects/0b/4d385125232ea88eac39594c75eb3bb283769e": "0f5ac1c2a26221d98e37b8cb5aa42034",
".git/objects/0b/f2ea63cedad71102423b200ca2e76fcbcaebc7": "a0e0f4b7efa2e2ed949f35e81ddaa9de",
".git/objects/f3/89c4cbd42492d1f99ca574e9fc07dc6ec7cc18": "b0702fdae1ea2f0007aeac2f7116fd57",
".git/objects/02/b6d4aca6613bb7a8bd9ec4efd554d1ffd58911": "8d1e9dd5534a5a14bf1555e0e8b1d9eb",
".git/objects/a2/a2a9a0f6b14c5748c33aeeb874b71f88d4d450": "87fdf70aefcb99af4e03ea89749432e4",
".git/objects/15/95d1bb1e19336666b013ba8c22eac018125d3c": "5f3782570f05fbbd7506589d8f1ac86a",
".git/objects/15/f3fe89a4145e08244dcb077b70c6847483de37": "7433635c7bc5f466cb0b9f264778db80",
".git/objects/d2/66c224d759457e6aab15af267e43a60d812b1e": "e88d4e4c2becdc23745c1a681da1d591",
".git/objects/13/b39713ea875195c5a6566e0cec20e58bf6d908": "954bde9472a1b697a951765f43a279f2",
".git/objects/03/10174bfd69c0e0c3388063a58c8178f0000282": "2782c9fc27eed65aa45bf912a9bbac66",
".git/objects/42/2d70be6ca32c1dcf6c3e45e6fdb68d5e181eb0": "3906a6820e357ec65ec8683102f78f64",
".git/objects/42/e90a1d78c48e27140accaaa91433516ec2ea02": "91e05e9eda08488a52961c3d1faefa33",
".git/objects/9c/1c1dfa60c38a841b154fc35dc4bb370d818b59": "fdb10b5e77b427e945b7bc2b7a3ccc3f",
".git/objects/de/0de42b6e6d97d854db663f77e3e5492cc8be2b": "2c7c3e5bee31f5d9f9a13ec6a41f6ba8",
".git/objects/3a/2f8a6b98181284612a492ddc02d05017c457c0": "637139d07e8d763970af3c2697974f69",
".git/objects/3a/134aa85e5b297a4eea43fa351aea87386307d0": "742a3694712872d32c04c9a73e8d435a",
".git/objects/53/4690feea87874942512f313907ecbd33d5ca14": "414113fe781d50153c3f115b1549c7a7",
".git/objects/ce/eb953090c156f92dbdfad076fd795daa7f58cb": "04a32a9f03d137b901f265c6e0f37c2a",
".git/objects/11/20e63f3914a21cbd8424b33224ec5dae233f19": "43bdd7bc782d205ab675cbee12704dd6",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/2d/0eab740517b581285bffb3e35838538f8593c3": "651399bff0fd641727b2350817e0d147",
".git/objects/c0/a303108bb65cda28cace9466c20ebcb43ed3ed": "f44685f9d31608e8288b8dcf6d06f7f5",
".git/objects/ec/506d76c7267648c489303bd92d5228bdc08dc9": "165f5fd63bb5f9075904d5aca42552b7",
".git/objects/ec/14eb9666793730fa96759f78a691111ec8f372": "cffa32c3f5d2335580765cb01011fed1",
".git/objects/cd/22eb27313df5aea5031a944f4f89b31d41d6ad": "2f4526fc51d4d04eda7749de027dcef3",
".git/objects/3b/26fa6a49dd7217dfd4a45dcb7a9f9ddc7718da": "8df713dc48c4a5e93ce6878ec0498b4f",
".git/objects/3b/643ab146bc6327a2245b6f702bf9bf421dd4e6": "e1f257cb29e44d8dad163788d37ce8a4",
".git/objects/3b/101d17230b84261a6bfe8b491e75210b5d7457": "2a31a253137d0e81a309bb93ae9048fa",
".git/objects/ad/cf1dd9126b0ba9760f88ce1a4420606d6e4c57": "1ba69ffc80425e96fef32eaf4baabc7b",
".git/objects/ad/2ca7ca52daa35e6a7bd517cf9e083d3be0da5a": "cedfab5cc11f6bda1536f4f98b036478",
".git/objects/ad/8e00131a048bbb9b43903362f762233af97887": "9ef15739dfdff61ce68e6b1ff425a22f",
".git/objects/77/42c649ab55122eb90a7a212e6dd4a51a58b925": "05bb25cb5f98ba76292ebf974799b523",
".git/objects/49/201eef368cb553fa43bcd6e21fb39126dee3e6": "871232a1a2c77087713795c248e21e3b",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/d0/fcfe0c4a1cebb957f136d1f20fdbb593a89c01": "550be600b2ca1ec1045a35d7fb6caf5e",
".git/objects/39/6df94d6e03d4d940fcf419398b7c0e735de481": "9ea785675cdfaa352947b54e4ba7b1d6",
".git/objects/ab/41da140f787ee9773581c2028d6a0577f9064f": "4d08d31f08f89f3b1187d1efcc7a57c4",
".git/objects/ab/979b2d080044ccf3dd1558a7795decdaaab68c": "5015147ef591e6f913cd29b509a33273",
".git/objects/ab/e495e98759ab2c21613ab797a7c0ce2fd37995": "8ef02468629cccfa3423b5c01fd26964",
".git/objects/1f/e40d62bb1ea8d7ee165d0f616e72b425aa55f2": "e42f9f4e1899935d0bff78bcd2627147",
".git/objects/7f/61e0e8f1f5399fb058430b43d7a89ff8a8be3f": "a9acc27141c77c89e81618f5b76f35b2",
".git/objects/9e/d50e698d50ff5c5dffc464f67fb1843f781299": "a4735f22ff64bb19aa3d5100bc9d6003",
".git/objects/51/235b2df53d6d99cfca7dbf49c2e3921a8a0e1d": "fdb996bf1cdb50daa7a481b5a82587a8",
".git/objects/51/67cf4df8ceb56fe5d13e14ed9fc18c38591931": "b66cc7857dfa6520c14358565df9c346",
".git/objects/f5/02b439f41e1acdc6715431f86ee9bd93752280": "f9584aa1ae686d6509013dc0ccf64dc5",
".git/objects/01/eba221856974ba9ba502efbe9e893a19e9f51f": "937602bcd4222f2a5c446285a1836471",
".git/objects/7a/c1a5a5bae6fb0fa03a35690b3113031a9ba32c": "43c45e534eff7cb83ea1ed829f0454c3",
".git/objects/7a/25afcf1b76d1164748b08cb952af6a4b24d5d8": "ba0278b44ac6b38a2f4bddc15aa6e9e7",
".git/objects/31/9267a8a246e5eee3d636afd8f0374acb1cdde1": "027049367c0a126b3771c04b5746e073",
".git/objects/e8/a9aa49f47eddf4a4babfef40606d0b0268abe6": "6ae50f0093f360c332573cfd3cee3fe6",
".git/objects/ff/21ede72910591a479b89871445e1dbe51711ab": "360a50fefe3a1691f3e8694fc3ccebe3",
".git/objects/12/5220aee2d29ffe09b489edafea419297889a69": "db88bcb8e065204de4fda6e32aa6042e",
".git/objects/95/e1548c7e10155aa4a7bdd5d14374817711a402": "0b25702980fdb6e38af68b61b2b5e9f3",
".git/objects/08/3b45ef9a1f930c3ceb8640df0429d5b6db36c1": "55a9521b0a55a86db545c838c06e0aa8",
".git/objects/28/763a033d107c92a358568d613c098d743ab574": "0499eddbb6ddcb1fa08392f5468ca015",
".git/objects/b9/3ea2154e02b408829c2d5fc55bf795cdc8d174": "1a47d662abb39ced77d3c7d25f9ff9da",
".git/objects/fc/d04b3e4db19e976926ddee2561547e446c9575": "59f9faec3fb777e3162a30d8a4b42e99",
".git/objects/fc/d41b2975371e751bd4903126e991daa4c477b2": "40b1c4f7740d3d3b88263b5a8fcdb0a4",
".git/objects/8a/9346c8fc844fe0dbbb87a12ff58bb9a11c5f67": "3d49083cab738fb08de9202348367538",
".git/objects/00/ad9992baab82b9dab2a59d44a4a89f4a943ca0": "fdeeb3eb0a422d4b5b25d77e2efd19c8",
".git/objects/00/0ea6d676ab34eb9929e1c30c10d9f6c79ce31e": "27ad25f1393473edfa1c483fcb590a6f",
".git/objects/3e/c1f050f5c1174ae55d5dc15a542586ff38e6dc": "7c7d9673d3b2e92bfe338edc7f90a640",
".git/objects/3e/4dc412a6768baa59b1e3f7b29c3fbe348c90be": "11216ac0fce7fbe08545cdbdf96081c6",
".git/objects/3e/30256f4ed72169ce2a593e7dde8920fcb2a1e2": "b083dccfbdf5bd8e4c7707df16bd42d9",
".git/objects/20/2e2eac10d07965cde183c55e60a57a0535ee05": "88906616324c2f471a9023ddf2af8886",
".git/objects/04/aa806304837162990ce08e969477414e9c2d3b": "1f09b349dd6d301a817d015bf1a625e4",
".git/objects/04/881665e7c672b0a5efa11bea39eb1e125dc40b": "4fe2d10878b3a8c68f850787b4c48ed2",
".git/objects/04/b44c6e3621f538f45696e5eeb5978b3013c73c": "55eb0ed9f84f083e64fcbf1039368b74",
".git/objects/04/92c3709ca7b1d1031a0e4e5e81d07b572251de": "4f38498b39ae8abfd7270c828ade128e",
".git/objects/19/1103f3837310b7bea53b3848bf91c48c235b9c": "cc22714fbeb38b309346ad0d87c92b91",
".git/objects/19/e6264d3c82359f01daab8d999a64688fd1efa6": "3307cbbe765af694015d44ad185ee06a",
".git/objects/19/1eb11c9b386b4f09813c1ad3d72e545fbe63aa": "64bab300be6df23ad00814f0efcdb8a3",
".git/objects/f1/3c2510c9a2fb2ba59d85b8706fff9708c6dea7": "cfb5c111065fce08e9f2d2ed3b317bcf",
".git/objects/40/856d1e28ac3a7ce71701370b53861487a7cb96": "8fb82fd096b62fc4d83edfe0f064e88d",
".git/objects/40/5af39037fc493ce38ebdbfa9e4b51d698b9923": "52b81bac7869db6a87a0ea584cd5efd1",
".git/objects/d7/0f8be66418564de1347c8e9a1a1e617fdc18ef": "629353e57b0e0a672509926fc9a7277c",
".git/objects/eb/e3daa349ec718c5d5b7fb41e791cce4b38d069": "f239fa26744e54c152a89fc876465bd5",
".git/objects/50/289bb4724b631b60c76eff53332b9798519b3e": "91be4460d9a0f922c47a5294330aa823",
".git/objects/6b/89552f1bb10c6518a0ab6981adddbae569711e": "1ce1ba346b6bc060d159f81e1284b05a",
".git/objects/f7/a40d833ecb7cb849dbae86ff316280efd8981a": "bfe87284b26039be8d0f9ea9aaf59419",
".git/objects/dd/0a33d844012c951ee238ffb4417895aa17619a": "40876f6c1a191c309a472a1bc1acec51",
".git/objects/7b/b2cd30d20744733274de5e1fa54ce9c9efb07a": "1f88bc8de45fc9b05addf029d38ec097",
".git/objects/23/25d9dd558b6daf7292f3cb6f8a71007827046e": "caf15775679f2e806d027795748d9679",
".git/objects/38/a332240e8d6323a969bd5cd2d5a0fb1c2a568f": "880cf2d39a52b122ef3591a828e149e0",
".git/objects/e3/9cc3d9f28f0d2356c97501f62689cf5053fca5": "0b8499908ec8724edded559967c29659",
".git/objects/10/5e03f93122414cf8df8aca5c8bbb571836bda0": "4aa5c4c78b1cb5fe7fb308a2cd48986d",
".git/objects/ca/2b6e247891b85634cce6fdc8343e0111313774": "7ca2dc307b669137b5a38899a49c17fe",
".git/objects/c7/8cdf44cf1d1543c102134c809e2d8d236a549a": "7ca02aae77a1f73aa122f8f114711127",
".git/objects/c7/bffe7c9b7a71315777244ca73350ba92063b54": "57cece32b43ed2454d4efbc59cae00ef",
".git/objects/78/f933d89a98b3ba42637483d0fd1360138b131b": "22355d50e655050ea7dcf053ccd32a48",
".git/objects/81/0b54b123849d843261ee255885056396d1da99": "e0523a687b1f7d0c0e2646c6db9e7c1f",
".git/objects/8c/96ef614e40ab67874abec115f0b514fd671899": "3f4ddb856624e58b14e67f8669622ca7",
".git/objects/30/6730f3a7b6704f228bacccf24dd088f4739a23": "565b3b62ae9a6ac107f1df3182dd27f1",
".git/objects/5d/8ae49cc2e092c10a65c56de81e2814cdd45d5b": "71b987c7734766caccbf93d5db3ced5d",
".git/objects/5d/7cbbb24eb300651135313c37543ec77457f783": "1f90655612ce8935adb4fb3fb6548f7c",
".git/objects/87/9697017c561d5e201abdc88c4eb84f62b79da8": "0df30a3d6888f88b287780cf63ef2b18",
".git/objects/60/7cbbec22cf1f58e100c025fec09e61b38716e4": "88bf58d4dc4e4a421cf5056d2705d2fb",
".git/objects/e6/916f982c1220fafe7cdbf34584b7470fb707fe": "f58b3ebdf8197ab430d784d69f965c6c",
".git/objects/a9/5f0f6035af17161801b46a3b86a70cb3cb8ccd": "d1baa6882b56a77bde6d703e1c17b371",
".git/objects/ac/f0990693c64b225020de74793151c6837d9f98": "f2eab65d1076934f852466d8259b8cf4",
".git/objects/pack/pack-a151f654dd74e99ea0143813573ed56587834f49.pack": "ef6bd5d3ac9091fff03ef7d095a063ba",
".git/objects/pack/pack-a151f654dd74e99ea0143813573ed56587834f49.idx": "63406c1a6b9ffd98a6d6898ec1a12173",
".git/objects/1e/63fa9f51db073090e7dcc51e1a885aabf53823": "f8d3e7ecf81a70fd7fb200c1488e207e",
".git/objects/6a/595d17dce5357a66192acceaf159f34d072708": "43e76174ea6ff73d2165e446b592e4db",
".git/objects/6a/77dd731357a41c1c4a670b981942cc07088be1": "f69bb76906b0948d7dd77e3758d7da94",
".git/objects/55/470d280ca2f862a3281289b84c2c975c8e6b32": "30863b5a5a23e7310092226004ec2dc5",
".git/objects/b2/dffea90751011bd595b2ff7754b0b8f7e4ce29": "ea4fe7f16884d0b9e7998c0357a04060",
".git/objects/b2/eb0fe5512c872a2f5b81798eea4ceccf7128f4": "f072fb23b1e40c59566f4a8de231e9da",
".git/objects/92/4bc99698f7e585fb60b34cb0da1a6a141e48d7": "e3232a7f2eeabc72280a74202d301df1",
".git/objects/2a/2b147a2ab7beac0be71a0670f3b76032cd2a31": "9f635db799915461d4789320c106ade0",
".git/objects/a4/f631f2b70a2eca6ef8115bcf9bf5d9baa4a2b9": "5bf7408debaad2c2bafcdaf36297de62",
".git/objects/67/13bbfefb767360486209dfeafc709c56df838a": "f73e6c666d0491d50bb18212d66fa64d",
".git/objects/0c/d0263ba8187e02d327fd942ed4fe5ba8332984": "36448b060c06005ded086347382324a2",
".git/objects/bd/1386e06e463bf46137fb907e6d9ad1c4daeb0a": "432170969a90ad6586ad5d65b90bbcc5",
".git/objects/bd/b028ea700abf2cee0e2b536423f7bfcf4b52fb": "9a64f4bb9cfe503ab7ba9f5d1adaa221",
".git/objects/cb/446b45d0b5e264d459d0ef68a7e9893c2e12b6": "84e52b301d1a6b0d7d2b37a4f3582c64",
".git/objects/5b/693db27a7c1fe04e1247722cc62178853c041f": "0d505ffe091f385c64157ee23b02be9d",
".git/objects/ba/cb84f3f5dacde142a7a629e73de921ad166e42": "fd44fcc381b80a95d15dbc848a1c637e",
".git/objects/54/e792b799117044a6084eda63dedfeb361f78e8": "249bdad89cfd2441a66f46d542d20a98",
".git/objects/f9/bc24201d247b235ee91c7bbd7b681011a12dda": "16dcfb9abd892ddf8c952cdb2bdb4a53",
".git/objects/2e/fb51d4d51391ec067e5b2b4ba2f9f847041331": "0e460a24534f59ff1de8f013273fcd92",
".git/objects/9b/e926eea939ff1e8cdcb4cdda2896b68d1b827b": "f311a2149ff1394651dc0a6f8c5fbceb",
".git/objects/9b/b9d69a6d1c121d082c0d4172007dfb99b4f367": "28ae41a5f9e3c5e64c1b47c9074db7a6",
".git/objects/0a/1cd5bef3c0b3cc45a7444bc08f243b4907adda": "a76d4703487415c739cd356419d4cf84",
".git/objects/2b/de9e2cc404aacedbec829b9653bd878c37889b": "d5eee6a26772f497d0a46d2f09c69c1f",
".git/objects/d1/4362731f8362a26223487f9a69d7e436fb8b89": "78660d4f626cc04c02068e3bae50255a",
".git/objects/a7/27fad05fb507fb6db1944a8e60a0e697df1e3a": "08e3763017629362da4b6d83fb353094",
".git/objects/a7/960751b990244deb6fc6c1eb3ac123369c9ba5": "2350159e22b985f4fdb18a6f7647883c",
".git/objects/85/8aa2ce63adc8404897154f689569a382db3fae": "d61668b81e584e1ba5927aafc6b17f2a",
".git/objects/85/67a7934bcf936dcb0b6a9ea8bcdc77b1cf1cbc": "378c96f945f7002849f5479461a61327",
".git/objects/d5/b1d7d6baeb387bcd04b9e22bf233688de4b114": "e199d23ae7c30ab95e8bfa47d6176502",
".git/objects/e1/a1f881bc612d10def77149eafc003d8333eda5": "49962031845ec7d79d90863423f3e9ca",
".git/objects/1d/b795a3a11978bca6c2f95640138cc9b59e9d32": "206c85c782d023c6dcc1942233a01171",
".git/objects/1d/fa9682a3c34965fc9ca4a345071efbfafe01e8": "a4af7631441c608d48ed2d5e852f3ac2",
".git/objects/98/34340840198da313bc6d96b86e0478295c6e91": "3a04525264e1dd571208b558adb070ea",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/a1/2c2a2b753d9e63e00270b896754e06934418ab": "964b4f58ea105a20a3ca435888707c8a",
".git/objects/90/4f5b4db2d4c44a25e2f79019984a15067a393a": "bb4f5c93b255ac857282cbdc31a99793",
".git/objects/4f/345449ff998022b8512f31f493c589cb1edd57": "695b2446fea358824e917094f3505c39",
".git/objects/a6/c9dc077937ffc45d3007be03ed283032025506": "28dbd68d1ccbb242bcee70452c3ff0c4",
".git/objects/f4/97ef696709dc5beab4db32dafda941cf3c0761": "263ea42205cd7e93dafffbb00387459c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
