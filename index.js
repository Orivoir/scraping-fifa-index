const {
  PLAYER_GENDER_MEN,
  PLAYER_GENDER_WOMEN,

  getNextPage,
  uploadPlayers,

  getPlayersListUrl,
  getPlayerUrl
} = require('./src/helper');

const createPlayerList = require('./src/create-player-list');
const createPlayerItem = require('./src/create-player-item');
const getPlayerCore = require('./src/get-player-core');

const extractPlayerListItem = require('./src/extract-player-list-item');
const extractPlayerItem = require('./src/extract-player-item');

const state = {
  gender: PLAYER_GENDER_MEN
}

const step = async (filename, baseUrl) => {

  const nextPage = await getNextPage({baseUrl});
  const playerListUrl = getPlayersListUrl(nextPage, state.gender);

  const responsePlayerListHtml = await fetch(playerListUrl, {method: "GET"});

  if(responsePlayerListHtml.status === 200) {

    const playerListHtml = await responsePlayerListHtml.text();

    const playersRow = createPlayerList(playerListHtml);

    const playersRowData = [];

    playersRow.forEach(playerRow => (
      playersRowData.push(extractPlayerListItem(playerRow))
    ));

    const responsesPlayerHtml = await Promise.all(playersRowData.map(playerRowData => (
      fetch(getPlayerUrl(playerRowData.id), {method: "GET"})
    )));

    const playersHtml = await Promise.all(responsesPlayerHtml.map(responsePlayerHtml => (
      responsePlayerHtml.text()
    )));

    const playersData = [];

    playersHtml.forEach((playerHtml, index) => {

      const playerContainer = createPlayerItem(playerHtml);
      const playerCore = getPlayerCore(playerContainer);
      const playerData = extractPlayerItem(playerCore);

      playersData.push({
        ...playerData,
        ...(playersRowData[index])
      })

    });

    const insertedCount = await uploadPlayers({players: playersData, filename, baseUrl});

    return insertedCount;

  } else {
    if(state.gender !== PLAYER_GENDER_WOMEN) {
      state.gender = PLAYER_GENDER_WOMEN;
      return -1;
    } else {
      return -2;
    }
  }

}

const scraping = async ({
  filename,
  baseUrl
}) => {

  const responseStep = await step(filename, baseUrl);

  if(responseStep == -2) {
    // finish
    return 0;
  } else if(responseStep == -1) {
    // upgrade state (has not upload)
    scraping({
      filename,
      baseUrl
    });
  } else {
    // responseStep == inserted count (has upload)
    scraping({
      filename,
      baseUrl
    });
  }

}

window.startFifaScraping = scraping;
