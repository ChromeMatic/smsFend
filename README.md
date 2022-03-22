# School Management System (Front-end)

![image](https://user-images.githubusercontent.com/61952310/159066218-dc14b1e0-209d-4394-b423-a6c0f0704c33.png)


Software Needed to run application
-	Docker
The front-end is dockize, meaning that a docker image is created and the image is stored on a repository on docker hub. So, the application docker is needed to pull the image and run the front-end API.

https://hub.docker.com/search?q=sms_repo&type=image

Front-end API Setup
Step 1:
-	 Go to Empowering App Development for Developers | Docker, and click on Get started, and download the Docker desktop application for your operating system. And install the application.
Step 2:
-	Go to Docker Hub Container Image Library | App Containerization, and create an account. Please write down the Docker ID and Password to use late to login to the Docker desktop application.
Step 3:
 
-	Open the Docker desktop application and click on sign in. Use your  credential used to sign into Docker hub.

![image](https://user-images.githubusercontent.com/61952310/159535649-2e49e110-65a3-4a78-bd54-50e23734ba16.png)

-	Open the Docker desktop application and click on sign in. Use your  credential used to sign into Docker hub.

Back-end API
Step:1

Open any terminal of your liking, command prompt, power shell, git bash etc. And type the command:
docker run  - -name BackEnd-API  -d -p 3000:3000 armanibrown/backend
and press enter.

![image](https://user-images.githubusercontent.com/61952310/159535810-2f62c01a-fbed-4f23-9e54-bf9507351193.png)

Front-end API

Step 1:

Open any terminal of your liking, command prompt, power shell, git bash etc. And type the command:
 docker run  - -name API -d -p 3000:3000 armanibrown/sms_repo
and press enter.

![image](https://user-images.githubusercontent.com/61952310/159535869-c2c304a6-d075-41ae-9783-2a1a6772b879.png)

Step: 2
-	Open any web bowers of your choosing and type, localhost:3000
-	Enter username and password.   
Username:  Dev
Password:  1234

![image](https://user-images.githubusercontent.com/61952310/159535949-9b85017e-0244-41e9-8d56-d5c2ce477ed0.png)

The front-end API is know running on port 3000 and the back-end API is know running on port 8080.

The  database is hosted on Amazon Web Services, so response time may take more then 3 seconds, sorry or the delay.


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
