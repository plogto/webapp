# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.37.0](https://github.com/plogto/webapp/compare/v0.36.0...v0.37.0) (2022-10-02)


### Features

* **Credits:** implement invitation code ([3acb4d4](https://github.com/plogto/webapp/commit/3acb4d4675457017f7b539fdda78a831bb6871dc))
* **CreditTransaction:** implement TICKET transaction ([2f6a4fa](https://github.com/plogto/webapp/commit/2f6a4fa9c8e47cd0a8c32486ec81e1d680d3a64a))
* **Icon:** add icons for ticket menu ([0f67fdc](https://github.com/plogto/webapp/commit/0f67fdc02f640a0142ed449357a9a0d98703afc9))
* **Icon:** add support and inbox icon ([3ec5830](https://github.com/plogto/webapp/commit/3ec5830d203d91ff56c0a432d410b072c0eb5def))
* **Icons:** add UserPlus icon ([9bf872b](https://github.com/plogto/webapp/commit/9bf872be3aa98e746ce281e5e3c57983d09726c9))
* implement Support feature ([3e8dae8](https://github.com/plogto/webapp/commit/3e8dae82d64e493f1a19f910d39d3c9373190745))
* implement useAuth ([a160923](https://github.com/plogto/webapp/commit/a160923a4b3edc421b6c40569c7bf6226c6e34ef))
* **Search:** implement Posts and handle getExplorePosts ([6e6c682](https://github.com/plogto/webapp/commit/6e6c6826ced5d9b6d20c9d8ef8929e8f75ecd414))
* **Ticket:** implement ConfirmationModal ([adecdc3](https://github.com/plogto/webapp/commit/adecdc30eac520db0dde6509e4ce714f4953e6d3))
* **utils:** add getToken, getInvitationCode, isWindowExists and isDocumentExists ([0118217](https://github.com/plogto/webapp/commit/01182172c520db141580b36861d14795cbf9ab77))


### Bug Fixes

* **AddTicket:** handle addTicketMessage query ([a8c0265](https://github.com/plogto/webapp/commit/a8c0265a5baf4025f34c9f83776b624d401d083d))
* **Auth:** reduce size of google button for mobile ([5c524e7](https://github.com/plogto/webapp/commit/5c524e756a4467283b74353ca909f261f16e3aab))
* improve Profile styles ([704f2b1](https://github.com/plogto/webapp/commit/704f2b101dbd136cfed0426b3cfa30bb3f55707b))
* increase size of apply buttons ([a8f196c](https://github.com/plogto/webapp/commit/a8f196c231bae52a4cb66e1b02819a0f89ed676b))
* **Input:** improve styles ([fb5810c](https://github.com/plogto/webapp/commit/fb5810cb2c0da98d41a1b9da40f3fe900f5db048))
* remove unused type from tsconfig.json ([fe442ae](https://github.com/plogto/webapp/commit/fe442ae8dd292a3e590800811dcfac657556e085))
* **Status:** improve Status component ([2471435](https://github.com/plogto/webapp/commit/24714356658161073047943a545fc74a5f85f5ea))
* **Tabs:** add `replace` for Link ([3016fe7](https://github.com/plogto/webapp/commit/3016fe7d8f706f640ff009cc2eff8e1a6be7c744))
* **TagContent:** use PostsList ([fbaac39](https://github.com/plogto/webapp/commit/fbaac39fbea303a8f1504e7bc2cfd42907d64a9a))
* **useLogout:** reset apollo cache after logout ([2d3ada8](https://github.com/plogto/webapp/commit/2d3ada854b325aae67aa28d6998061225ff6c93d))
* **useUrls:** fix formatInvitationUrl ([9420b88](https://github.com/plogto/webapp/commit/9420b8897ed54127d4d2ba83de7da4bfce319252))

## [0.36.0](https://github.com/plogto/webapp/compare/v0.35.0...v0.36.0) (2022-09-13)


### Features

* **Auth:** add oAuthGoogle button ([5ad9a83](https://github.com/plogto/webapp/commit/5ad9a83691c1d8385a0b98db3a261db2744ad655))
* implement oAuthGoogle ([809a1bf](https://github.com/plogto/webapp/commit/809a1bf8e4c0751e22b827e21f1ba58cd427f4de))


### Bug Fixes

* **ProfileInfo:** improve ConnectionStatus button ([528b57c](https://github.com/plogto/webapp/commit/528b57c17634f948d61d2b0abd9bad971d419597))

## [0.35.0](https://github.com/plogto/webapp/compare/v0.34.0...v0.35.0) (2022-09-10)


### Features

* implement Credits feature ([92baa21](https://github.com/plogto/webapp/commit/92baa219f3b56e7f19acdc31c20eb2e9df821e71))
* implement InvitedUser ([7219e76](https://github.com/plogto/webapp/commit/7219e769fff6cd47d838124b2b5bd3ffa4e1bf41))


### Bug Fixes

* **Connections:** use DefaultBackground if user background is empty ([ab9f559](https://github.com/plogto/webapp/commit/ab9f5598b59fd4a9bbd564c6d82c016bc2c99ab9))
* **pages:** revert deleted pages ([341c58a](https://github.com/plogto/webapp/commit/341c58a33a0bceffc02a84f2c5d38fe2f30dab86))
* **useAuthentication:** handle protected pages ([d6a5ce2](https://github.com/plogto/webapp/commit/d6a5ce2c24cff45a291143e580774de9c62c3bb7))

## [0.34.0](https://github.com/plogto/webapp/compare/v0.33.0...v0.34.0) (2022-08-21)


### Features

* add Edge, WithPageInfo, PageInfo and PageInfoRequest types ([cefd001](https://github.com/plogto/webapp/commit/cefd001d47af93a550e43cce582c1cc51a131373))
* implement PostLikesCounter component ([a699cd0](https://github.com/plogto/webapp/commit/a699cd09b87ab98de330d8349cc78fb27c420e95))


### Bug Fixes

* add likes counter for AddPost component ([a37a436](https://github.com/plogto/webapp/commit/a37a4367c2cf903ddee5d042ffb408a593754a6d))
* improve Layout styles ([2fdaca1](https://github.com/plogto/webapp/commit/2fdaca1ec526f2417e02e7388cf10bdd5cbc8ea1))
* remove `/` from url on Notification component ([c4dabc1](https://github.com/plogto/webapp/commit/c4dabc16789a2ef42d20b37a03bd8f0d2413fd40))

## [0.33.0](https://github.com/plogto/webapp/compare/v0.32.0...v0.33.0) (2022-07-12)


### Features

* implement isRouteActive ([4c98259](https://github.com/plogto/webapp/commit/4c9825971a95cf3c60251b67d171fc9a658052a5))
* implement isRouteActive ([983d4c6](https://github.com/plogto/webapp/commit/983d4c6d5e4ebaad526fe17ee7b6b0c1e137c90d))
* implement Notification component ([b2ccc86](https://github.com/plogto/webapp/commit/b2ccc861b9a0623bd1902f0e84c164960f43f3d2))
* implement NotificationsList component ([af7253a](https://github.com/plogto/webapp/commit/af7253a0abdc7313bdb3b351dfbf0ca14fe9fdf2))

## [0.32.0](https://github.com/plogto/webapp/compare/v0.31.0...v0.32.0) (2022-07-06)


### Features

* add getTimelinePosts graphql query for Home feature ([84a2c4d](https://github.com/plogto/webapp/commit/84a2c4d1beda9bcbbd0ba2b2b286535425cc98ed))
* add useSuggestions hook ([8bf81d3](https://github.com/plogto/webapp/commit/8bf81d30a3e3381682d4f86f0a2ec8bd4375f6ef))
* implement DefaultBackground component ([e499400](https://github.com/plogto/webapp/commit/e499400932064b237c838f6948a20664a727e247))
* implement Logo component ([9637a3c](https://github.com/plogto/webapp/commit/9637a3ca643250235b479eb71679e840e2fb9f7b))
* implement Suggestions component ([97fcde7](https://github.com/plogto/webapp/commit/97fcde78ecf4e897a3c77ae24ba32ac86e1f9c7a))
* implement TextEditor component ([f3a9c18](https://github.com/plogto/webapp/commit/f3a9c18f320bb3e53af72e6dc14b137e6e64918e))


### Bug Fixes

* add refetchQueries for editUser query on useThemes ([2da8513](https://github.com/plogto/webapp/commit/2da85135882b75df67a1a4678d83664f655368bc))
* handle disabled prop for Button component ([a866ffa](https://github.com/plogto/webapp/commit/a866ffa3d8770d160f143f05eb3e3cfe4972d156))
* improve styles on CropImage component ([5f013bf](https://github.com/plogto/webapp/commit/5f013bf7da00e81e9f9b04be4b6f548349365b11))
* remove unread notification count from Notifications feature ([8c40fa5](https://github.com/plogto/webapp/commit/8c40fa5e38b4908f11aa89c41bfbf334bb6ba96a))
* set left align for Tabs component ([410172a](https://github.com/plogto/webapp/commit/410172a42a90fc2d9f1b89cdeab49ad02af5ba29))

## [0.31.0](https://github.com/plogto/webapp/compare/v0.30.1...v0.31.0) (2022-06-28)


### Features

* add Pencil icon ([cb14d40](https://github.com/plogto/webapp/commit/cb14d407ddb5ca7aca1e59af322a21eaea992f1e))
* implement EditPost page ([0d6924c](https://github.com/plogto/webapp/commit/0d6924c2c65c1c8e8db63c2753e267143158cdf8))
* implement Tabs component ([ce64c36](https://github.com/plogto/webapp/commit/ce64c365a16d030ac0a956a908c9f2b4fc415165))

### [0.30.1](https://github.com/plogto/webapp/compare/v0.30.0...v0.30.1) (2022-06-24)

## [0.30.0](https://github.com/plogto/webapp/compare/v0.29.0...v0.30.0) (2022-06-23)


### Features

* add plus-circle icon ([764d05b](https://github.com/plogto/webapp/commit/764d05b95dd6a7f45c8bea5e5b47a59bfee47058))
* add verify icon ([9639bae](https://github.com/plogto/webapp/commit/9639baee87050836920e958164516a3a17e6de5d))
* implement FullName component ([c78f994](https://github.com/plogto/webapp/commit/c78f99438a70f97c85e503d2ad9036e0cfb60566))
* implement Header component ([9b872ef](https://github.com/plogto/webapp/commit/9b872ef4e4857a2e13478bbe676f246563fde3b3))
* implement NotFound component ([d1b6369](https://github.com/plogto/webapp/commit/d1b636916b87bf91d1b3ab9ef9a2378b011c21b9))
* implement ProfileContext ([0239e8f](https://github.com/plogto/webapp/commit/0239e8f01235c6cdfed952a97ccad227d803b5ce))
* implement Saved page ([718fd3b](https://github.com/plogto/webapp/commit/718fd3b66a2fd203ad4cc7785c6b032eec121da7))
* implement Users component ([2ac15ae](https://github.com/plogto/webapp/commit/2ac15ae12fb9413af6016cf518f2f7cac9135900))


### Bug Fixes

* add condition for bio on Profile feature ([332e4eb](https://github.com/plogto/webapp/commit/332e4ebd8f4900d8f124ea52ab8cd30bedb21c20))
* add stroke-2 for Navbar icons ([c14aa20](https://github.com/plogto/webapp/commit/c14aa20ac88213026cfa0925e928c7498b6bf233))
* add stroke-2 for Navbar icons ([afd5068](https://github.com/plogto/webapp/commit/afd506884208b41df4411d3d99ec512c2134a188))
* add validationSchema for login form ([df57f10](https://github.com/plogto/webapp/commit/df57f10c0ad13961aa976d014d61b8281c32dd0e))
* **Connections:** fix active tab condition ([00e125d](https://github.com/plogto/webapp/commit/00e125d9e52cefa43abb619885bfea9dbcf7f9a0))
* **CropImage:** fix Square icon ([96229f3](https://github.com/plogto/webapp/commit/96229f3795791e14a81906415fb4c5cd56d4cb43))
* improve DARK theme colors ([e6b0a7f](https://github.com/plogto/webapp/commit/e6b0a7f640909faf595c41049140da4e33e72c7e))
* improve Layout and Wrapper component ([408b2dc](https://github.com/plogto/webapp/commit/408b2dc00541c744b61a27aff3c082f7dd1d00fb))
* improve styles on Auth components ([93c9968](https://github.com/plogto/webapp/commit/93c9968d689d5a6cfb5ab10f2d0686addc6b622e))
* **ProfileContext:** improve getMoreData ([50cff6b](https://github.com/plogto/webapp/commit/50cff6bb087c86f3bed9c8d12197dec7a75266fd))
* refetch GET_USER_INFO after editUserMutation ([bb7b6c5](https://github.com/plogto/webapp/commit/bb7b6c5214e98b1f5ff9269ecb91ba5d5694ea5f))
* remove extra size from FullName component ([8384f8a](https://github.com/plogto/webapp/commit/8384f8a8ba6ecaf8e62f11814b92a17666b2c764))

## [0.29.0](https://github.com/plogto/webapp/compare/v0.28.0...v0.29.0) (2022-05-06)


### Features

* add mail icon ([4fe0fc3](https://github.com/plogto/webapp/commit/4fe0fc3e7a08dae12ac6e85044d6f5d6f24528a0))
* implement Auth feature ([b29468c](https://github.com/plogto/webapp/commit/b29468c43bfd955949f3cf007417cec17ff59330))
* implement part for Post component ([1aebf6f](https://github.com/plogto/webapp/commit/1aebf6f1035ae5ee579f540a9e77ff386adfcdd8))
* import Fredoka One font ([0d27217](https://github.com/plogto/webapp/commit/0d2721793ed553ee5c186dbcf0dd9394eff5cd1d))


### Bug Fixes

* capitalize translation texts ([cb19705](https://github.com/plogto/webapp/commit/cb19705fba463e20d1843cfd2cb4a55f14e95e7b))
* **Header:** add themeColor and primaryColor args to story ([37d9212](https://github.com/plogto/webapp/commit/37d92121136faae5b6be8fab85ec944b91545438))
* rename cancel type with outline on Button components ([4113ae5](https://github.com/plogto/webapp/commit/4113ae5cdba6089db8df2f86546618ce2b64b9d6))

## [0.28.0](https://github.com/plogto/webapp/compare/v0.27.4...v0.28.0) (2022-04-23)


### Features

* add themes styles ([2285fb7](https://github.com/plogto/webapp/commit/2285fb70adbb4759da31cbd2207604de2fba0a31))
* change primary color with gray color ([44da9a7](https://github.com/plogto/webapp/commit/44da9a7595ea60cc8a08c50c709b7bb025c91c11))
* implement Themes feature ([df6c1ee](https://github.com/plogto/webapp/commit/df6c1eefa713659b7ccf28658181ef00d2e291ce))
* use PageHeader for ChangePassword and EditProfile feature ([37f1330](https://github.com/plogto/webapp/commit/37f13301005330e9f36acaf5e91ec65552140103))


### Bug Fixes

* **ChangeImageProfile:** add showRemoveButton prop ([d5d6476](https://github.com/plogto/webapp/commit/d5d64764ce2124a7ff888b252e95ff9432f16559))
* **cropImage:** fix modal style on mobile layout ([0689eb9](https://github.com/plogto/webapp/commit/0689eb98b32a4aa1fe42ec68179b7d0acafd9d06))
* **EditProfile:** set avatar and background id for defaultValues ([36ad732](https://github.com/plogto/webapp/commit/36ad7328d028363ed6d89e096b700cd3a50b3996))
* improve apollo config ([ca31d7a](https://github.com/plogto/webapp/commit/ca31d7a6956a633223ffc46b7c6475c9c432cc39))
* reduce size of Navbar ([44c6792](https://github.com/plogto/webapp/commit/44c67927076e8476fb4c6f4fd2e0603f98bd5b2e))
* remove LAST_CHILD from PostTypeKey ([7bb018a](https://github.com/plogto/webapp/commit/7bb018accd6273ada3be3c40b254894bf5eb9a3a))

### [0.27.4](https://github.com/plogto/webapp/compare/v0.27.3...v0.27.4) (2022-04-17)


### Bug Fixes

* **AddPost:** handle submit button ([c93fd7e](https://github.com/plogto/webapp/commit/c93fd7e122163f36d4e86afdc768fdaa453affd4))

### [0.27.3](https://github.com/plogto/webapp/compare/v0.27.1...v0.27.3) (2022-04-17)


### Features

* add reply for Post feature ([e0244ae](https://github.com/plogto/webapp/commit/e0244aea0945a2b0b63c0866099926667a0d28fc))
* implement Img component ([7b64ed4](https://github.com/plogto/webapp/commit/7b64ed4c1e78ce712b8f672cf3adb22e93db939d))
* implement PageHeader component ([e942a95](https://github.com/plogto/webapp/commit/e942a95b64577abaa6b58970c108f584762cd61b))


### Bug Fixes

* fix DesktopTrends styles ([25bbafd](https://github.com/plogto/webapp/commit/25bbafd2445ed357d04c4d891c532131ddbd7706))

### [0.27.2](https://github.com/plogto/webapp/compare/v0.27.1...v0.27.2) (2022-04-16)


### Features

* add reply for Post feature ([e0244ae](https://github.com/plogto/webapp/commit/e0244aea0945a2b0b63c0866099926667a0d28fc))
* implement Img component ([7b64ed4](https://github.com/plogto/webapp/commit/7b64ed4c1e78ce712b8f672cf3adb22e93db939d))


### Bug Fixes

* fix DesktopTrends styles ([25bbafd](https://github.com/plogto/webapp/commit/25bbafd2445ed357d04c4d891c532131ddbd7706))

### [0.27.1](https://github.com/plogto/webapp/compare/v0.27.0...v0.27.1) (2022-04-10)


### Features

* implement Toast component ([10fb954](https://github.com/plogto/webapp/commit/10fb954063276aac8db4d1cd3846b18be4eefdb3))


### Bug Fixes

* add NEXT_PUBLIC_IMAGES_DOMAINS env ([a4c7bb2](https://github.com/plogto/webapp/commit/a4c7bb2443804f56894214df1e0ed2546363232d))
* fix menu items for Post component ([96c2039](https://github.com/plogto/webapp/commit/96c203929dbc149c9d9d937b7cf3040a8d5a560d))

## [0.27.0](https://github.com/plogto/webapp/compare/v0.26.0...v0.27.0) (2022-04-10)


### Features

* add copyTextToClipboard to utils ([5f62fc2](https://github.com/plogto/webapp/commit/5f62fc237656bbac5fdbc33aa7bd3c064c01b286))
* add link and trash icons ([04e4eea](https://github.com/plogto/webapp/commit/04e4eea8c26d9de4805b399b55ebe0f25a5001fc))
* implement Menu component ([b38aa39](https://github.com/plogto/webapp/commit/b38aa393475287263ecdf6ab3f5243371423a9e0))

### [0.26.1](https://github.com/plogto/webapp/compare/v0.26.0...v0.26.1) (2022-04-06)

## [0.26.0](https://github.com/plogto/webapp/compare/v0.25.0...v0.26.0) (2022-04-06)


### Features

* implement attachment part for Post component ([d41061c](https://github.com/plogto/webapp/commit/d41061c8bf3a9c98debdab1259a8c69630ee869f))
* implement AttachmentPreview component for AddPost feature ([f360fbb](https://github.com/plogto/webapp/commit/f360fbbe9cfbe444a7a7feab3f67e1684c2bcd71))


### Bug Fixes

* add attachment prop for addPost graphql query ([1fcf20b](https://github.com/plogto/webapp/commit/1fcf20b4e9cfc8e80174660ba2f97681ece5cd46))

## [0.25.0](https://github.com/favecode/webapp/compare/v0.24.0...v0.25.0) (2022-03-13)


### Features

* add bell, globe, lockClosed, photo, plus, trendingUp, user, viewGrid and x  icon ([4eacc8c](https://github.com/favecode/webapp/commit/4eacc8cb5acf37505e48562f461e4e447788c84c))
* add camera icon ([8a8dbf0](https://github.com/favecode/webapp/commit/8a8dbf0380817f15081d0c41f73687d75c09a02f))
* add createUploadLink to ApolloClient config ([cdd63b6](https://github.com/favecode/webapp/commit/cdd63b640378defbbc658d09784b5434b1afe4a7))
* add singleUploadFile graphl query ([1726629](https://github.com/favecode/webapp/commit/17266290a43bbe93978e12a08ce684f6f65c5f0d))
* add tiny size for Avatar component ([25a6c97](https://github.com/favecode/webapp/commit/25a6c977d1a0dc7fbd2b49b71f684c7c34039973))
* add useUploadFile hook ([29ba620](https://github.com/favecode/webapp/commit/29ba620e379d2b82797c31bc699804f815e5e860))
* add useUrls hook ([468a048](https://github.com/favecode/webapp/commit/468a0480a53e16585a6cdbfb7ba01ab3ea71bc57))
* implement LogoutButton component ([f59a98e](https://github.com/favecode/webapp/commit/f59a98ee0986d877323c51a8aeea66c38b288138))
* implement upload avatar and background on Settings feature ([71bccd8](https://github.com/favecode/webapp/commit/71bccd86640a2159f6b1ea46b67f9a926744fbe5))


### Bug Fixes

* reduce the size of buttons on ChangePassword feature ([4430458](https://github.com/favecode/webapp/commit/44304587e6a66dc5e59dc8c89f5cc801243757a0))

## [0.24.0](https://github.com/favecode/webapp/compare/v0.23.0...v0.24.0) (2022-03-08)


### Features

* add changePassword graphql query ([f7ac6e9](https://github.com/favecode/webapp/commit/f7ac6e9163fdc01b9593334911724dcaba873e36))
* add EditProfile feature ([69b513d](https://github.com/favecode/webapp/commit/69b513df246e81f82330faee4f0a3a35dfb27bc6))
* add hashtag icon ([50312a7](https://github.com/favecode/webapp/commit/50312a7187d344b6cc4862ca2bdbcddc678aac27))
* add key icon ([d52409b](https://github.com/favecode/webapp/commit/d52409b8d3c949264ebff90016b8650ed8e90a11))
* add key, user and users icons ([7ca954b](https://github.com/favecode/webapp/commit/7ca954b31f9c8ff48ddc520a15ad7e40e4eb820d))
* implement ChangePassword feature ([22ac720](https://github.com/favecode/webapp/commit/22ac7200e137cb8379924592303856704026c5dc))
* implement LogoutButton component ([7efcd3c](https://github.com/favecode/webapp/commit/7efcd3c3dd6710889950541a20729c9f5bdc40a5))


### Bug Fixes

* change loading button size for Login component ([04c3bf5](https://github.com/favecode/webapp/commit/04c3bf571317a3ad553e654718612f8c0a122e0d))
* handle data in Connections feature ([95f6e88](https://github.com/favecode/webapp/commit/95f6e8891a5b00ec3eab047aa20d64c71414f5d1))

## [0.23.0](https://github.com/favecode/webapp/compare/v0.22.1...v0.23.0) (2022-03-06)


### Features

* add CropImageTypeKey enum ([353e6dd](https://github.com/favecode/webapp/commit/353e6ddf050176429a0f75cf6684c1b723c32b12))
* add square, rectangle horizontal and vertical icons ([cccfbf1](https://github.com/favecode/webapp/commit/cccfbf15cacdb4836f1729b454e3c082e62199f5))
* implement CropImage component ([224d105](https://github.com/favecode/webapp/commit/224d105df816df5ef73ff87ca07b01b62fb92e04))

### [0.22.1](https://github.com/favecode/webapp/compare/v0.22.0...v0.22.1) (2022-03-04)

## [0.22.0](https://github.com/favecode/webapp/compare/v0.21.0...v0.22.0) (2022-02-27)


### Features

* add bundle analyer ([3abeb47](https://github.com/favecode/webapp/commit/3abeb47e12491068ced5b7e2f495cf4cb82a61ab))
* add chevronLeft icon ([205deb5](https://github.com/favecode/webapp/commit/205deb51ca223d18454557c08bc586e3527b775a))
* add dots-horizontal icon ([581b905](https://github.com/favecode/webapp/commit/581b9059532a3c883ef6cc67f5cc1fbbf7fccb45))
* add formatFollowersPageRoute and formatFollowingPageRoute to useNavigation ([82aabd4](https://github.com/favecode/webapp/commit/82aabd478c86d48b3c00c39d4b5f7e49842a8225))
* add useDate hook ([8ca7e3b](https://github.com/favecode/webapp/commit/8ca7e3b51181e0a65c83753375e489f5ac3b5d7c))
* implement UserInfo component ([1c55dc3](https://github.com/favecode/webapp/commit/1c55dc37676c996ddf6fc732e001c7ee404802e5))


### Bug Fixes

* add min-height for pages ([51cb03d](https://github.com/favecode/webapp/commit/51cb03db171b12d69022c198f002445238dac64a))
* change Post and User types ([8b19127](https://github.com/favecode/webapp/commit/8b191272346c2a810ca5c5d5f7661ed66bd576f7))
* change Wrapper styles ([67bb76c](https://github.com/favecode/webapp/commit/67bb76c04d3900e3fdafa6c58b24e0b710d6a8ff))
* increase z-index of Navbar component ([89ac42b](https://github.com/favecode/webapp/commit/89ac42b5ae21cecba2e16d37479c7c18792f3b26))
* remove unused repliesActions props from Post and Replies component ([7a9dd8b](https://github.com/favecode/webapp/commit/7a9dd8b446df2cea32797eb44a9eee9f5fda8a29))
* set full width content for Post component ([52c6653](https://github.com/favecode/webapp/commit/52c66534f6f58e3c55429c280da1d2a1cacdbc8f))

## [0.21.0](https://github.com/favecode/webapp/compare/v0.20.3...v0.21.0) (2022-02-04)


### Features

* add bell icon ([8f24637](https://github.com/favecode/webapp/commit/8f246372c1ef60e73500f7cd6e52251adf804235))
* add getNotification graphql query ([328b86d](https://github.com/favecode/webapp/commit/328b86df38b7a103952d5d91a4f84c035b0fe435))
* add getNotifications graphql query ([1f6a21e](https://github.com/favecode/webapp/commit/1f6a21e735a90dffb52638c11ba2294897e4032d))
* implement NotificationContext ([55ea85c](https://github.com/favecode/webapp/commit/55ea85c43a63e46e19e21fe1526c8e05fe88bfad))
* implement Notifications feature ([6b71546](https://github.com/favecode/webapp/commit/6b715467b7027ccad7e9c38603065d37fcef536e))
* implement push nofitications ([b975702](https://github.com/favecode/webapp/commit/b975702b1db10d86fe87a743a1fe352eb8ff4cbe))
* implement subscription ([39144c8](https://github.com/favecode/webapp/commit/39144c8124c9b458f1e395e5d329c347bb37dd8e))


### Bug Fixes

* add keys for parseNotification components ([801b1e5](https://github.com/favecode/webapp/commit/801b1e5e8e0a5db4f980bc01349cfd99862d3c0f))
* change fetchPolicy for validations of Settings feature ([9fcb365](https://github.com/favecode/webapp/commit/9fcb3654982851c5681b8903015cf09b03b4b79a))
* modify styles of Modal component ([cd99b87](https://github.com/favecode/webapp/commit/cd99b879623dee5da52772fe448c4197ed29901d))

### [0.20.3](https://github.com/favecode/webapp/compare/v0.20.2...v0.20.3) (2021-11-30)


### Features

* add plog icon ([a793362](https://github.com/favecode/webapp/commit/a793362466fc7d60c23b6b0da0eae7eac337bf11))
* add username and email validations for Settings feature ([d56f884](https://github.com/favecode/webapp/commit/d56f8842ae0c9eba6b4c97a2fa357939c8761052))


### Bug Fixes

* improve component styles ([7c0a008](https://github.com/favecode/webapp/commit/7c0a008c0f888c94ff388d289658db3d0ca1a788))
* improve styles for login button ([32c2353](https://github.com/favecode/webapp/commit/32c23530b7634bdc5352bff37f0e80136164db67))

### [0.20.2](https://github.com/favecode/webapp/compare/v0.20.1...v0.20.2) (2021-11-26)

### [0.20.1](https://github.com/favecode/webapp/compare/v0.20.0...v0.20.1) (2021-11-26)


### Bug Fixes

* improve toggle styles for Settings feature ([4b85e37](https://github.com/favecode/webapp/commit/4b85e37878d13722716c20669e7b8d43925ec99e))

## [0.20.0](https://github.com/favecode/webapp/compare/v0.19.3...v0.20.0) (2021-11-26)


### Features

* add bio for User type ([8e98167](https://github.com/favecode/webapp/commit/8e98167f315d0bbb3f07e6206f35eadb0518eb4e))
* implement Card component ([4bdbc7b](https://github.com/favecode/webapp/commit/4bdbc7b06680e30e6e08d0cb928697a59598cf0c))
* implement Settings feature ([04d05a2](https://github.com/favecode/webapp/commit/04d05a232b374b338030f16914ecb75fafa9826b))
* implement Textarea component ([87476da](https://github.com/favecode/webapp/commit/87476da169e32c4cfabc201718cb4e1fd3157ce7))
* implement Toggle component ([1d122a0](https://github.com/favecode/webapp/commit/1d122a0effa675359c5d999338b6d0d03b03c963))

### [0.19.3](https://github.com/favecode/webapp/compare/v0.19.2...v0.19.3) (2021-11-19)

### [0.19.2](https://github.com/favecode/webapp/compare/v0.19.1...v0.19.2) (2021-11-14)

### [0.19.1](https://github.com/favecode/webapp/compare/v0.19.0...v0.19.1) (2021-10-30)

## [0.19.0](https://github.com/favecode/webapp/compare/v0.18.0...v0.19.0) (2021-10-30)


### Features

* add delete button for Comment component ([669a727](https://github.com/favecode/webapp/commit/669a727accdb765813ab8e72a208263fd7aba400))
* add exclamation for Icon component ([fc40160](https://github.com/favecode/webapp/commit/fc40160baa83ed2daa9e6f0fb36518a07351582d))
* add Modal component ([fd99ce0](https://github.com/favecode/webapp/commit/fd99ce0925e5339f3e0ce7e0c3d8ebdbf2d1a5bc))
* implement DeletionModal component ([fea22ec](https://github.com/favecode/webapp/commit/fea22ecfe3717de3d039f66032f82b555f703b2c))

## [0.18.0](https://github.com/favecode/webapp/compare/v0.17.3...v0.18.0) (2021-10-25)


### Features

* add singleUploadFile graphql query ([433f54c](https://github.com/favecode/webapp/commit/433f54cc2cb293d8d2b304c984753eaa4da98aed))
* add view replies button for Comment component ([8ea185a](https://github.com/favecode/webapp/commit/8ea185a3dbe8092709e57f49eb97535fe65efc66))
* handle reply button for Comment component ([3b459a4](https://github.com/favecode/webapp/commit/3b459a4f20c94c5fbc66f2c012ba5ebb25446bb6))
* implement addPostComment component ([eccd9a9](https://github.com/favecode/webapp/commit/eccd9a9885eb2bfc6886eb09635fe45c00d8a3c0))
* implement Comment feature ([3fba2d9](https://github.com/favecode/webapp/commit/3fba2d922f1c18e3bb9005fea11d0a8cff5b5cc4))
* implement like button for comment component ([a79e8b4](https://github.com/favecode/webapp/commit/a79e8b461131da492ba2d24292922cfde39b0280))
* implement PostContext ([e4cfcd0](https://github.com/favecode/webapp/commit/e4cfcd0e98d91bcd8d8906a735fd3611bbffa492))


### Bug Fixes

* improve names ([08b33d9](https://github.com/favecode/webapp/commit/08b33d92997e43f891bfb08b3200ac2167a94b5e))

### [0.17.3](https://github.com/favecode/webapp/compare/v0.17.2...v0.17.3) (2021-10-12)

### [0.17.2](https://github.com/favecode/webapp/compare/v0.17.1...v0.17.2) (2021-10-10)

### [0.17.1](https://github.com/favecode/webapp/compare/v0.17.0...v0.17.1) (2021-10-10)

## [0.17.0](https://github.com/favecode/webapp/compare/v0.16.3...v0.17.0) (2021-10-10)


### Features

* add commentCounter for PostCard feature ([019855c](https://github.com/favecode/webapp/commit/019855c5cc7e4a3e83c08fcdcced5a0d74d580cc))
* add dark mode for storybook ([8fb6f34](https://github.com/favecode/webapp/commit/8fb6f349d345ce036ae903056402ecb5267153f3))
* add comment queries ([669fce8](https://github.com/favecode/webapp/commit/669fce8f0cd8095c0d2a9b4a7ba7ee448b80670f))
* implement Comment component ([8107ce2](https://github.com/favecode/webapp/commit/8107ce2cb166b1f766d9fb0151cc42ef5fc7e452))
* implement Post page ([50bd65e](https://github.com/favecode/webapp/commit/50bd65e245517c21b1075a579d9a5f9baac50b87))

### [0.16.3](https://github.com/favecode/webapp/compare/v0.16.2...v0.16.3) (2021-10-09)


### Features

* implement Loading component ([fc18516](https://github.com/favecode/webapp/commit/fc185165915b2dd0fe4fe98046009de1d628e9eb))


### Bug Fixes

* improve buttons for Profile feature ([f6eead4](https://github.com/favecode/webapp/commit/f6eead447355cd57e921c4010713fcbae5c4844b))
* replace lg with md size ([846c71f](https://github.com/favecode/webapp/commit/846c71f2c247c634fe738d9f6c23c730e2a67d39))

### [0.16.2](https://github.com/favecode/webapp/compare/v0.16.1...v0.16.2) (2021-10-08)


### Bug Fixes

* handle getUserInfo response ([5ab223a](https://github.com/favecode/webapp/commit/5ab223ace67510ab58d2f332cc7153e1ed309cc0))

### [0.16.1](https://github.com/favecode/webapp/compare/v0.16.0...v0.16.1) (2021-10-08)

## [0.16.0](https://github.com/favecode/webapp/compare/v0.15.0...v0.16.0) (2021-10-04)

## [0.15.0](https://github.com/favecode/webapp/compare/v0.14.1...v0.15.0) (2021-10-02)


### Features

* add save button for PostCard feature ([7de2e51](https://github.com/favecode/webapp/commit/7de2e512f93701006ee91fba7090332d929ba276))

### [0.14.1](https://github.com/favecode/webapp/compare/v0.14.0...v0.14.1) (2021-10-01)

## [0.14.0](https://github.com/favecode/webapp/compare/v0.13.0...v0.14.0) (2021-09-30)


### Features

* add Icon stories ([02c9b09](https://github.com/favecode/webapp/commit/02c9b09d0e40e15c482ea958471e19fc7b55ca02))
* add like button for PostCard feature ([dc194bb](https://github.com/favecode/webapp/commit/dc194bbb473a70a89accb4f078c4e15920cdfb72))
* implement Icon component ([aa995c8](https://github.com/favecode/webapp/commit/aa995c86739b9e3516b883973d53d9421871f22a))
* improve components ([81045ce](https://github.com/favecode/webapp/commit/81045cee2a9d323850979c93d036b5006fcc4401))

## [0.13.0](https://github.com/favecode/webapp/compare/v0.12.6...v0.13.0) (2021-09-25)


### Features

* add storybook for Input component ([4c92cc3](https://github.com/favecode/webapp/commit/4c92cc3417c2c24d18f7f1e8aedbf4ea751f9543))
* implement jest ([0abca96](https://github.com/favecode/webapp/commit/0abca96f03547e2ed01b08b145eee36f4a4146c2))
* implement storybook ([4815278](https://github.com/favecode/webapp/commit/4815278b19d195370430a7339f66c65b44ae8170))

### [0.12.6](https://github.com/favecode/webapp/compare/v0.12.5...v0.12.6) (2021-09-19)

### [0.12.5](https://github.com/favecode/webapp/compare/v0.12.4...v0.12.5) (2021-09-18)

### [0.12.4](https://github.com/favecode/webapp/compare/v0.12.3...v0.12.4) (2021-09-18)


### Features

* add eslint-plugin-simple-import-sort to eslint rules ([9218769](https://github.com/favecode/webapp/commit/9218769ca536e98bac42c863e391cf189714c2d9))

### [0.12.3](https://github.com/favecode/webapp/compare/v0.12.2...v0.12.3) (2021-09-18)


### Features

* highlight hashtags in PostCard feature ([4e13a69](https://github.com/favecode/webapp/commit/4e13a69a9aebe526328de73ed6985b548e0ac8ff))

### [0.12.2](https://github.com/favecode/webapp/compare/v0.12.1...v0.12.2) (2021-09-17)


### Features

* implement Trends feature for desktop and mobile view ([b4e8c69](https://github.com/favecode/webapp/commit/b4e8c6979952eea793ef77872f716dc7b09c3e2d))
* implement trends for Desktop ([65c70d7](https://github.com/favecode/webapp/commit/65c70d75e3ef71a0cdfff448016475e2b4f1fb41))
* import tailwindcss/tailwind.css to _app.tsx ([3a58486](https://github.com/favecode/webapp/commit/3a584860dadc6f1946b95aee029d9f32d3ec7e54))

### [0.12.1](https://github.com/favecode/webapp/compare/v0.12.0...v0.12.1) (2021-09-16)


### Features

* implement Wrapper component ([7de7070](https://github.com/favecode/webapp/commit/7de7070ee1aa74a4a8256f92442ba6ad8ee95baa))


### Bug Fixes

* show Profile page for guest users ([b5fcba3](https://github.com/favecode/webapp/commit/b5fcba37e73b9de5a955f05f03f01d9a77af1682))

## [0.12.0](https://github.com/favecode/webapp/compare/v0.11.0...v0.12.0) (2021-09-16)


### Features

* add useClassName hook ([17af480](https://github.com/favecode/webapp/commit/17af4804951a270545d42f9e89d713c8ff762a91))
* implement Layout component and improve features wrapper ([198cef4](https://github.com/favecode/webapp/commit/198cef418e2e89f1a8b648294d7e2352816cac6b))
* implement SidebarNavigation component ([b7a381d](https://github.com/favecode/webapp/commit/b7a381de47f2abb0775276bc08000d0707c609d9))

## [0.11.0](https://github.com/favecode/webapp/compare/v0.10.1...v0.11.0) (2021-09-15)


### Features

* implement Landing feature ([166a5b4](https://github.com/favecode/webapp/commit/166a5b4ea7207f4410731059b88ecb92b9a1dde3))

### [0.10.1](https://github.com/favecode/webapp/compare/v0.10.0...v0.10.1) (2021-09-15)


### Features

* add formatCountTitle to utils ([27005d0](https://github.com/favecode/webapp/commit/27005d0bacf2d3e5b30583ffb34e4bde2d5f3691))

## [0.10.0](https://github.com/favecode/webapp/compare/v0.9.0...v0.10.0) (2021-09-14)


### Features

* add getPostsByTagName graphql query ([6c10dbd](https://github.com/favecode/webapp/commit/6c10dbdc1c6f9508441b49b91761a9b9a0587a00))
* implement filters for Search feature ([c4b0ed9](https://github.com/favecode/webapp/commit/c4b0ed9503c8d28f8bdfa786e6299415bdf4b6f0))
* implement TagInfo component ([79e3822](https://github.com/favecode/webapp/commit/79e382241dc6c3804a1978c45a3366fb003b5666))
* implement TagPage ([6f874a7](https://github.com/favecode/webapp/commit/6f874a78eb5377389014807ae6f397c97a01a670))

## [0.9.0](https://github.com/favecode/webapp/compare/v0.8.0...v0.9.0) (2021-09-10)


### Features

* implement PageStatus component ([1de5691](https://github.com/favecode/webapp/commit/1de569173240ccba06374e60c491523a74492a2e))

## [0.8.0](https://github.com/favecode/webapp/compare/v0.7.1...v0.8.0) (2021-09-08)


### Features

* implement i18next ([3280f61](https://github.com/favecode/webapp/commit/3280f617cd4341d626cc2ce4cf527828e9692639))


### Bug Fixes

* title for LoginPage ([84029b8](https://github.com/favecode/webapp/commit/84029b821ebb8592d93bb785fb26505aff55dfed))

### [0.7.1](https://github.com/favecode/webapp/compare/v0.7.0...v0.7.1) (2021-09-06)


### Bug Fixes

* clickable style for Profile's header ([0a67790](https://github.com/favecode/webapp/commit/0a67790fbe5a51a1dc3c5b65c9501ed761e7fb06))
* replace private with isPrivate for user type ([9f45736](https://github.com/favecode/webapp/commit/9f457360d4050d5d9c05bab3f4eaf582260e0b26))

## [0.7.0](https://github.com/favecode/webapp/compare/v0.6.1...v0.7.0) (2021-09-06)


### Features

* add Connections feature and pages ([d0d7d60](https://github.com/favecode/webapp/commit/d0d7d60cd3c9dcfbf1ccd8cf02dfe4659e339e38))
* add SafeHydrate component ([e69ee5b](https://github.com/favecode/webapp/commit/e69ee5bee9640dadcf0108afce6f45a7f75ea0af))
* add text-tiny for fontSize ([a8a7567](https://github.com/favecode/webapp/commit/a8a7567c2b14407be13f2e9f158781fc4cb7d921))
* implement FollowRequestsContext ([e8f03c5](https://github.com/favecode/webapp/commit/e8f03c50fd27ce171cd2434510f9007773a53247))


### Bug Fixes

* remove ProfileProvider from ProfilePage ([439d1e7](https://github.com/favecode/webapp/commit/439d1e734e40adf11258192b08dbbdfb6e08d878))

### [0.6.1](https://github.com/favecode/webapp/compare/v0.5.0...v0.6.1) (2021-09-01)


### Features

* add counts for Profile feature ([5058327](https://github.com/favecode/webapp/commit/5058327e3b5a5c1677114aac3c455f59f91757a9))

## [0.6.0](https://github.com/favecode/webapp/compare/v0.5.0...v0.6.0) (2021-09-01)


### Features

* add counts for Profile feature ([5058327](https://github.com/favecode/webapp/commit/5058327e3b5a5c1677114aac3c455f59f91757a9))

## [0.5.0](https://github.com/favecode/webapp/compare/v0.4.0...v0.5.0) (2021-08-31)


### Features

* add follow requests page ([0655493](https://github.com/favecode/webapp/commit/0655493998ee65dc35088109935e6edb7bdb3fbf))

## [0.4.0](https://github.com/favecode/webapp/compare/v0.3.3...v0.4.0) (2021-08-30)


### Features

* add connection for Profile feature ([34f9e36](https://github.com/favecode/webapp/commit/34f9e36a0794f689b365a02224020874a64aeef3))
* implement UserProfileContext ([80c0376](https://github.com/favecode/webapp/commit/80c03766d90577981f0bcc155d8bea6ade097c3e))

### [0.3.3](https://github.com/favecode/webapp/compare/v0.3.2...v0.3.3) (2021-08-28)


### Features

* initialize ConnectionButton for Profile feature ([642807e](https://github.com/favecode/webapp/commit/642807e8f72393bd3532ead88caa01e0e7bd232c))


### Bug Fixes

* profile link in navbar ([1efd4d5](https://github.com/favecode/webapp/commit/1efd4d534d4a557e228cc7248573b87d5cd1fdab))

### [0.3.2](https://github.com/favecode/webapp/compare/v0.3.1...v0.3.2) (2021-08-28)

### [0.3.1](https://github.com/favecode/webapp/compare/v0.3.0...v0.3.1) (2021-08-28)


### Features

* implement Posts component ([d72c41f](https://github.com/favecode/webapp/commit/d72c41f58266880896886c5bcb6d7b6b44c71897))

## [0.3.0](https://github.com/favecode/webapp/compare/v0.2.1...v0.3.0) (2021-08-23)


### Features

* implement Search feature ([d553800](https://github.com/favecode/webapp/commit/d5538008f0616388aabe3aa7526c64a58a776881))

### [0.2.1](https://github.com/favecode/webapp/compare/v0.2.0...v0.2.1) (2021-08-22)

## [0.2.0](https://github.com/favecode/webapp/compare/v0.1.0...v0.2.0) (2021-08-21)

## 0.1.0 (2021-08-19)


### Features

* add Dashboard page ([2f908eb](https://github.com/favecode/webapp/commit/2f908eb0ee8a83ed010c30c8cf7e9d101e329491))
* add getUserByUsername graphql query ([4bdfe81](https://github.com/favecode/webapp/commit/4bdfe81577a2b3caf43bb2fa76b0dbb4c54a0633))
* add getUserInfo graphql query ([557bc87](https://github.com/favecode/webapp/commit/557bc876c0bfb8265196cfd74cd1a906c8e7ff54))
* add Logout page ([c6b46e5](https://github.com/favecode/webapp/commit/c6b46e5f36dce3657a21a747b597ad67a4973df9))
* add NavLink component ([aaca79d](https://github.com/favecode/webapp/commit/aaca79d4548538b8dcec2b9a8cd817c1520bdec4))
* add PageUrls ([a56219d](https://github.com/favecode/webapp/commit/a56219dbe8143ec833f862431f388c5fe5a9b63c))
* add project config ([41705bc](https://github.com/favecode/webapp/commit/41705bc2002eab538e2c5c940fea19d4c08f06c4))
* implement AccountContext ([8242096](https://github.com/favecode/webapp/commit/82420964bed32519f6d200ac928756fafe3ab47d))
* implement AppInit component ([da2917a](https://github.com/favecode/webapp/commit/da2917a9ef585bd764a8b062fd8aec8fc9ee3c46))
* implement Avatar component ([d82fdc0](https://github.com/favecode/webapp/commit/d82fdc0c4e8b1aed946fb5b3d52fed08bbca8d5e))
* implement commitlint and standard-version ([07aa78d](https://github.com/favecode/webapp/commit/07aa78d356a421312792c1aa2c3d21267a4dd0d9))
* implement PostCard feature ([acbc763](https://github.com/favecode/webapp/commit/acbc763f060b1bb4dc2cf8103e6c0c9153dd64fa))
* implement pwa ([b293ceb](https://github.com/favecode/webapp/commit/b293cebe3c6713f3d319b7fb1bc0eceaa1d3e46d))
* implement pwa ([3218989](https://github.com/favecode/webapp/commit/3218989e1871b43a0b2a0c950a5d0a136353c7db))
* initialize add, notifications and search page ([ab7c4cb](https://github.com/favecode/webapp/commit/ab7c4cba363290d6fb2715ff2e3c908b02aeb173))
* initialize Profile page ([7a7110a](https://github.com/favecode/webapp/commit/7a7110a50804c14bbd702674760742546d93efd2))


### Bug Fixes

* replace avatar icon with Avatar component ([3d5478d](https://github.com/favecode/webapp/commit/3d5478d0e5e6ece887697026a79d40ef303289ab))
