# Scraping application target players metadata of [FIFA Index](https://www.fifaindex.com/players/)

## installation

```bash
git clone https://github.com/Orivoir/scraping-fifa-index.git
cd scraping-fifa-index
npm run build
npm start
```

npm run build generate file `app.js` at `./dist` folder
this script contains client application create JSON metadata of players

npm start command open server HTTP at [localhost:8000](http://localhost:8000)
this server will upload data will send by client application.

Server contains twice main routes `/upload`
used by client app for send data from browser to you'r computer,
server save in array JSON file at `./store/players.json` will contains all players.
Other route at `/next-players-list` route used by client app for get next url target for get players list.



## Start upload data

Go at any page of [https://www.fifaindex.com](https://www.fifaindex.com) with you'r browser
open developer tools and copy/paste client application for start create and upload JSON metadata,
you can see status upload from server log (size data, progress status ...).
If you manual stop upload (ctrl^c) during next start upload begin at same position
