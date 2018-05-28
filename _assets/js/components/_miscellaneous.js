// ----------------------------------------------
// Imports
// ----------------------------------------------

// ----------------------------------------------
// Time
// ----------------------------------------------
// const miscTime = () => {
//   const date = new Date();
//   const utc = date.getTime() + (date.getTimezoneOffset() * 60000);

//   // -7 (PDT) or -8 (PST)
//   const time = new Date(utc + (3600000 * -7));

//   $('.header__time time').text(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

//   setTimeout(miscTime, 1000);
// };

// ----------------------------------------------
// Cycle
// ----------------------------------------------
const miscCycle = () => {
  $('.cycle').each((idx, ele) => {
    let count = 0;
    const emoji = $(ele).children();
    const length = emoji.length;

    setInterval(() => {
      emoji.eq(count).addClass('hidden');
      count = count === length - 1 ? 0 : ++count;
      emoji.eq(count).removeClass('hidden');
    }, 1000);
  });
};

// ----------------------------------------------
// Clip
// ----------------------------------------------
const miscClip = () => {
  $('.clip').each((idx, ele) => {
    const layerOffset = $(ele).closest('section, footer').offset();
    const containerOffset = layerOffset.top - $(window).scrollTop();
    const clip = containerOffset - $(ele).css('top').replace(/[^-\d\.]/g, '') - $(ele).css('margin-top').replace(/[^-\d\.]/g, '');

    $(ele).css('clip', `rect(${clip}px, auto, auto, auto)`);
  });
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscCycle,
  miscClip
};
