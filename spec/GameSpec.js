'use strict';

describe("Game", () => {
  var game;
  var frame;

  beforeEach(() => {
    game = new Game();
  })

  describe("initialization", () => {

    it("should have an array for storing frame scores", () => {
      expect(game.frameScores).toEqual([]);
    });

    it("should have an array for storing pin boards from each frame", () => {
      expect(game.frames).toEqual([]);
    })
  });

  describe("updating frames array", () => {
    beforeEach(() => {
      frame = jasmine.createSpy(frame);
    })

    it("should update the frames array depending on each frame's outcome", () => {
      game.updateFramesArray(frame);
      expect(game.frames).toEqual([frame]);
    } )

    it("should update multiple frames", () => {
      let frameTwo;
      frameTwo = jasmine.createSpy(frame);
      game.updateFramesArray(frame);
      game.updateFramesArray(frameTwo);
      expect(game.frames).toEqual([frame, frameTwo]);
    })

  })

  describe("updating frame scores", () => {

    it("should calculate the frame score", () => {
      frame = jasmine.createSpy(frame, 'reduce')
      
      expect(game.calculateInitialScore(frame)).toEqual();
    })
  })


});