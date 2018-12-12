let domUpdates = {
  disableSquare(eventTarget, currentRound) {
    $(eventTarget).text(' ');
    let category = $(eventTarget).siblings('.categories').attr('id').toLowerCase();
    let array = currentRound.clues;
  },

  getPlayerNames() {
   return [
      new Player(document.querySelector('.js-p1-name-input').value), 
      new Player(document.querySelector('.js-p2-name-input').value), 
      new Player(document.querySelector('.js-p3-name-input').value)
    ];
  },

  playerGuess() {
    return $('.js-guess-input').val().toLowerCase();
  },

  displayScore(players) {
    $('.js-p1-score').text(players[0].score);
    $('.js-p2-score').text(players[1].score);
    $('.js-p3-score').text(players[2].score);
  },

  updatePlayerNames(players) {
    $('.p1-name-display').text(players[0].playerName);
    $('.p2-name-display').text(players[1].playerName);
    $('.p3-name-display').text(players[2].playerName);
  },

  createCard(currentClue) {
    console.log('this clue', currentClue)
    console.log('clues array length', round.clues)
    document.querySelector('.js-card-popup').style.zIndex = '1';

    $('.pop-question').text(currentClue.question); 
  },

  hideCard() {
    document.querySelector('.js-card-popup').style.zIndex = '-1';
    $('.js-guess-input').val('');
  },

  createDailyDoubleCard(currentClue) {
    document.querySelector('.js-daily-double-popup').style.zIndex = '2';
  },

  highlightPodium(player) {
    if(player == 0) {
      $('.js-p1-podium').addClass('podium-border')
      $('.js-p2-podium').removeClass('podium-border')
      $('.js-p3-podium').removeClass('podium-border')
    } else if(player == 1) {
      $('.js-p2-podium').addClass('podium-border')
      $('.js-p3-podium').removeClass('podium-border')
      $('.js-p1-podium').removeClass('podium-border')
    } else {
      $('.js-p3-podium').addClass('podium-border')
      $('.js-p2-podium').removeClass('podium-border')
      $('.js-p1-podium').removeClass('podium-border')
    }
  },

  updateCategories(categoryArray) {
    categoryArray.map((category, i) => {
      let currentCategory = category.category;
      let separate = currentCategory.replace( /([A-Z])/g, " $1" );
      let result = separate.charAt(0).toUpperCase() + separate.slice(1);
      let categoryClass = `.category-${i + 1}`;
      $(categoryClass).text(result);
      $(categoryClass).attr('id', category.Id);
    });

  }

};

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
};