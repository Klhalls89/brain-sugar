let domUpdates = {
  disableSquare(eventTarget, currentRound) {
    $(eventTarget).text(' ');
    let category = $(eventTarget).siblings('.categories').attr('id').toLowerCase();
    let array = currentRound.clues;
  },

  displayScore(playArr) {
    $('.js-p1-score').text(playArr[0].score);
    $('.js-p2-score').text(playArr[1].score);
    $('.js-p3-score').text(playArr[2].score);
  },

  updatePlayerNames(playArr) {
    $('.p1-name-display').text(playArr[0].playerName);
    $('.p2-name-display').text(playArr[1].playerName);
    $('.p3-name-display').text(playArr[2].playerName);
  },

  createCard(currentClue) {
    console.log('this clue', currentClue)
    console.log('clues array length', round.clues.length)
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
      console.log('player1')
      $('.js-p1').addClass('podium-border')
      $('.js-p2').removeClass('podium-border')
      $('.js-p3').removeClass('podium-border')
    } else if(player == 1) {
      console.log('player2')
      $('.js-p2').addClass('podium-border')
      $('.js-p3').removeClass('podium-border')
      $('.js-p1').removeClass('podium-border')
    } else {
      console.log('player3')
      $('.js-p3').addClass('podium-border')
      $('.js-p2').removeClass('podium-border')
      $('.js-p1').removeClass('podium-border')
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