# Front End Libraries Projects: A Drum Machine for freecodecamp.org

### Build a Drum Machine with React

#### Objective

Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/MJyNMd.

#### Fulfill the below user stories and get all of the tests to pass. Give it your own personal style. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example).

1. User Story: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
2. User Story: Within #drum-machine I can see an element with a corresponding id="display".
3. User Story: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
4. User Story: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
5. User Story: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
6. User Story: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).
7. User Story: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
