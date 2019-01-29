// ----------------------------------------------
// Canvas
// ----------------------------------------------
const Canvas = (() => {
  let s;

  return {
    settings() {
      return {
        canvas: document.getElementById('canvas'),
        context: canvas.getContext('2d'),
        talk: document.querySelector('.talk__left')
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      this.set();
      this.touchmove();
      this.resize();
    },

    set() {
      const start = coors => {
        s.context.beginPath();
        s.context.moveTo(coors.x, coors.y);
        this.isDrawing = true;
      };

      const move = coors => {
        if (this.isDrawing) {
          s.context.strokeStyle = '#ffffff';
          s.context.lineJoin = 'round';
          s.context.lineWidth = 3;
          s.context.lineTo(coors.x, coors.y);
          s.context.stroke();
        }
      };

      const stop = coors => {
        if (this.isDrawing) {
          this.touchmove(coors);
          this.isDrawing = false;
        }
      };

      const draw = e => {
        const coors = {
          x: e.clientX || e.targetTouches[0].pageX,
          y: e.clientY || e.targetTouches[0].pageY
        };

        drawer[e.type](coors);
      };

      s.canvas.height = s.talk.offsetHeight;
      s.canvas.width = s.talk.offsetWidth;

      const drawer = {
        isDrawing: false,
        mousedown: start,
        mousemove: move,
        mouseup: stop,
        touchstart: start,
        touchmove: move,
        touchend: stop
      };

      s.canvas.addEventListener('mousedown', draw);
      s.canvas.addEventListener('mousemove', draw);
      s.canvas.addEventListener('mouseup', draw);
      s.canvas.addEventListener('touchstart', draw);
      s.canvas.addEventListener('touchmove', draw);
      s.canvas.addEventListener('touchend', draw);
    },

    touchmove() {
      document.body.addEventListener('touchmove', e => {
        e.preventDefault();
      });
    },

    resize() {
      window.addEventListener('resize', () => {
        s.canvas.height = s.talk.offsetHeight;
        s.canvas.width = s.talk.offsetWidth;
      });
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Canvas;
