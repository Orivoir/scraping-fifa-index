const {expect, assert} = require('chai');

const extractPlayerItem = require('./../src/extract-player-item');

const playerContentHtmlFixtures = require('./fixtures/players-html');
const getPlayerCore = require('./../src/get-player-core');
const createPlayerContainer = require('./../src/create-player-item');

describe('extract-player-item:', () => {

  playerContentHtmlFixtures.forEach(playerContentHtmlFixture => {

    describe('extract player item', () => {

      const playerContainer = createPlayerContainer(playerContentHtmlFixture);
      const playerCore = getPlayerCore(playerContainer);
      const playerData = extractPlayerItem(playerCore);

      it('should be a object', () => {
        assert.isObject(playerData);
      });

      // tested as standlone at /test/extract-header-player-item.test.js
      it.skip('should has header properties', () => {

        expect(playerData).to.has.property('height');
        assert.isNumber(playerData.height);

        expect(playerData).to.has.property('weight');
        assert.isNumber(playerData.weight);

        expect(playerData).to.has.property('preferredFoot');
        assert.isString(playerData.preferredFoot);

        expect(playerData).to.has.property('bornAt');
        assert.isNumber(playerData.bornAt);

        expect(playerData).to.has.property('age');
        assert.isNumber(playerData.age);

      });

      // tested as standlone at /test/extract-teams-player-item.test.js
      it.skip('should has team properties', () => {

        expect(playerData).to.has.property('teams');
        assert.isArray(teams);

        expect(playerData.teams).to.has.lengthOf.greaterThan(0);
        expect(playerData.teams).to.has.lengthOf.lessThan(3);

        playerData.teams.forEach(playerTeam => {

          assert.isObject(playerTeam);

          expect(playerTeam).to.has.property('kitNumber');
          assert.isNumber(playerTeam.kitNumber);

          expect(playerTeam).to.has.property('name');
          assert.isString(playerTeam.name);

          expect(playerTeam).to.has.property('id');
          assert.isNumber(playerTeam.id);

          // optional properties
          if(playerTeam.joinedClubAt) {
            assert.isNumber(playerTeam.joinedClubAt);
          }
        });

      });

      describe('player data skills properties:', () => {

        it('should has all skills categories', () => {
          expect(playerData).to.has.property('skills');
          assert.isObject(playerData.skills);

          expect(playerData.skills).to.has.property('ballskills');
          assert.isObject(playerData.skills.ballskills);

          expect(playerData.skills).to.has.property('passing');
          assert.isObject(playerData.skills.passing);

          expect(playerData.skills).to.has.property('shooting');
          assert.isObject(playerData.skills.shooting);

          expect(playerData.skills).to.has.property('defence');
          assert.isObject(playerData.skills.defence);

          expect(playerData.skills).to.has.property('physical');
          assert.isObject(playerData.skills.physical);

          expect(playerData.skills).to.has.property('mental');
          assert.isObject(playerData.skills.mental);

          expect(playerData.skills).to.has.property('goalkeeper');
          assert.isObject(playerData.skills.goalkeeper);

          expect(playerData.skills).to.has.not.property('traits');
        });

        // tested as standlone at /test/extract-player-skills/extract-player-ballskills.test.js
        it.skip('should has skills of ball skills', () => {
          expect(playerData.skills.ballSkills).to.has.property('ballControl');
          assert.isNumber(playerData.skills.ballSkills.ballControl)

          expect(playerData.skills.ballSkills).to.has.property('dribbling');
          assert.isNumber(playerData.skills.ballSkills.dribbling);
        });

        // tested as standlone at /test/extract-player-skills/extract-player-passing.test.js
        it.skip('should has skills of passing', () => {

          expect(playerData.skills.passing).to.has.property('crossing');
          assert.isNumber(playerData.skills.passing.crossing);

          expect(playerData.skills.passing).to.has.property('shortPass');
          assert.isNumber(playerData.skills.passing.shortPass);

          expect(playerData.skills.passing).to.has.property('longPass');
          assert.isNumber(playerData.skills.passing.longPass);
        });

        // tested as standlone at /test/extract-player-skills/extract-player-shooting.test.js
        it.skip('should has skills of shooting', () => {

          expect(playerData.skills.shooting).to.has.property('heading');
          assert.isNumber(playerData.skills.shooting.heading)

          expect(playerData.skills.shooting).to.has.property('shotPower');
          assert.isNumber(playerData.skills.shooting.shotPower);

          expect(playerData.skills.shooting).to.has.property('finishing');
          assert.isNumber(playerData.skills.shooting.finishing);

          expect(playerData.skills.shooting).to.has.property('longShot');
          assert.isNumber(playerData.skills.shooting.longShot);

          expect(playerData.skills.shooting).to.has.property('curve');
          assert.isNumber(playerData.skills.shooting.curve);

          expect(playerData.skills.shooting).to.has.property('freeKickAccuracy');
          assert.isNumber(playerData.skills.shooting.freeKickAccuracy);

          expect(playerData.skills.shooting).to.has.property('penalties');
          assert.isNumber(playerData.skills.shooting.penalties);

          expect(playerData.skills.shooting).to.has.property('volleys');
          assert.isNumber(playerData.skills.shooting.volleys);

        });

        // tested as standlone at /test/extract-player-skills/extract-player-defence.test.js
        it.skip('should has skills of defence', () => {

          expect(playerData.skills.defence).to.has.property('marking');
          assert.isNumber(playerData.skills.defence.marking);

          expect(playerData.skills.defence).to.has.property('slideTackle');
          assert.isNumber(playerData.skills.defence.slideTackle);

          expect(playerData.skills.defence).to.has.property('standTackle');
          assert.isNumber(playerData.skills.defence.standTackle);
        });

        // tested as standlone at /test/extract-player-skills/extract-player-physical.test.js
        it.skip('should has skills of physical', () => {

          expect(playerData.skills.physical).to.has.property('acceleration');
          assert.isNumber(playerData.skills.physical.acceleration);

          expect(playerData.skills.physical).to.has.property('stamina');
          assert.isNumber(playerData.skills.physical.stamina);

          expect(playerData.skills.physical).to.has.property('strenght');
          assert.isNumber(playerData.skills.physical.strenght);

          expect(playerData.skills.physical).to.has.property('balance');
          assert.isNumber(playerData.skills.physical.balance);

          expect(playerData.skills.physical).to.has.property('sprintSpeed');
          assert.isNumber(playerData.skills.physical.sprintSpeed);

          expect(playerData.skills.physical).to.has.property('agility');
          assert.isNumber(playerData.skills.physical.agility);

          expect(playerData.skills.physical).to.has.property('jumping');
          assert.isNumber(playerData.skills.physical.jumping);
        });

        // tested as standlone at /test/extract-player-skills/extract-player-mental.test.js
        it.skip('should has skills of mental', () => {

          expect(playerData.skills.mental).to.has.property('aggression');
          assert.isNumber(playerData.skills.mental.aggression);

          expect(playerData.skills.mental).to.has.property('reactions');
          assert.isNumber(playerData.skills.mental.reactions);

          expect(playerData.skills.mental).to.has.property('attackPosition');
          assert.isNumber(playerData.skills.mental.attackPosition);

          expect(playerData.skills.mental).to.has.property('interceptions');
          assert.isNumber(playerData.skills.mental.interceptions);

          expect(playerData.skills.mental).to.has.property('vision');
          assert.isNumber(playerData.skills.mental.vision);

          expect(playerData.skills.mental).to.has.property('composure');
          assert.isNumber(playerData.skills.mental.composure);
        });

        // tested as standlone at /test/extract-player-skills/extract-player-goalkeeper.test.js
        it.skip('should has skills of goalkeeper', () => {

          expect(playerData.skills.goalkeeper).to.has.property('positioning');
          assert.isNumber(playerData.skills.goalkeeper.positioning);

          expect(playerData.skills.goalkeeper).to.has.property('diving');
          assert.isNumber(playerData.skills.goalkeeper.diving);

          expect(playerData.skills.goalkeeper).to.has.property('handling');
          assert.isNumber(playerData.skills.goalkeeper.handling);

          expect(playerData.skills.goalkeeper).to.has.property('kicking');
          assert.isNumber(playerData.skills.goalkeeper.kicking);

          expect(playerData.skills.goalkeeper).to.has.property('reflexes');
          assert.isNumber(playerData.skills.goalkeeper.reflexes);
        });

      });

    });

  });

});