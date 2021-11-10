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

const PLAYER_GENDER_MEN = 0;
const PLAYER_GENDER_WOMEN = 1;
const SELECTOR_ROW_PLAYER = "table tr[data-playerid]"

module.exports = {
  getPlayerImageUrl,
  getCountryImageUrl,
  getClubImageUrl,
  getPlayersListUrl,

  SELECTOR_ROW_PLAYER,
  PLAYER_GENDER_MEN,
  PLAYER_GENDER_WOMEN
};
