const UPLOAD_SERVER_BASE_URL = "http://localhost:8000";

const getNextPage = async ({baseUrl=UPLOAD_SERVER_BASE_URL}) => {

  const response = await fetch(`${baseUrl}/next-page`, {method: "GET"});
  const data = await response.json();

  return data.page;
};

const uploadPlayers = async ({players, filename, baseUrl=UPLOAD_SERVER_BASE_URL}) => {

  const response =  await fetch(`${baseUrl}/upload?filename=${filename}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({players: players})
  });

  const data = await response.json();

  return data.insertedCount;
};

const BASE_URL_PLAYERS_LIST = "https://www.fifaindex.com/players/";
const BASE_URL_PLAYER = "https://www.fifaindex.com/player/";

const BASE_URL_PLAYER_IMAGE = "https://fifastatic.fifaindex.com/FIFA22/players/";
const BASE_URL_CLUB_IMAGE = "https://fifastatic.fifaindex.com/FIFA22/teams/";
const BASE_URL_COUNTRY_IMAGE = "https://fifastatic.fifaindex.com/FIFA21/images/flags/"

const getPlayerImageUrl = (playerId) => (
  `${BASE_URL_PLAYER_IMAGE}${playerId}.png`
);

const getCountryImageUrl = (countryId, size=3) => (
  `${BASE_URL_COUNTRY_IMAGE}${size}/${countryId}.png`
);

const getClubImageUrl = (clubId, theme="dark") => (
  `${BASE_URL_CLUB_IMAGE}${theme}/${clubId}.png`
);

const getPlayersListUrl = (page, gender) => (
  `${BASE_URL_PLAYERS_LIST}?page=${page}&gender=${gender}`
);

const getPlayerUrl = (playerId) => (
  `${BASE_URL_PLAYER}${playerId}`
);

const PLAYER_GENDER_MEN = 0;
const PLAYER_GENDER_WOMEN = 1;

// selector for a players list page
const SELECTOR_ROW_PLAYER = "table tr[data-playerid]";

// selectors for single page player
const SELECTOR_PLAYER_CONTAINER = "main div.row div.col-lg-8";
const SELECTOR_PLAYER_HEADER = "div.col-sm-6 div.d-flex.mb-3.align-items-center";
const SELECTOR_PLAYER_SECONDARY = "div.col-sm-6:nth-child(2) div.card.mb-5";
const SELECTOR_PLAYER_SKILL_CONTAINER = "div.item div.card.mb-5";

module.exports = {
  getPlayerImageUrl,
  getCountryImageUrl,
  getClubImageUrl,
  getPlayersListUrl,
  getPlayerUrl,

  getNextPage,
  uploadPlayers,

  SELECTOR_ROW_PLAYER,
  PLAYER_GENDER_MEN,
  PLAYER_GENDER_WOMEN,

  SELECTOR_PLAYER_CONTAINER,
  SELECTOR_PLAYER_HEADER,
  SELECTOR_PLAYER_SECONDARY,
  SELECTOR_PLAYER_SKILL_CONTAINER
};
