## Simple Dom Manipulation

This is a sample of how to play with the DOM using HTML, Javascript , and CSS  

### Adding elements to the DOM:
The List of names is not part of the original HTML.  It's added using Javascript.  
The list is created using `document.createElement`  
The section that will contain the list is retrieved using `document.getElementById`  
The list is added to the element using it's appendChild method.

### Capturing Keyboard Events:
In the Type Something section, an event handler is set up to catch keystrokes using `window.addEventListener` and the `keyup` event.  
The event is tied to a method that will populate each of the five boxes.  
Each box is retrieved using `document.getElementById` and populated with the letter or number of the key pressed.  
When the fifth box is populated it will reset it's counter and begin adding from the first box again.  

### Layout styling
The layout and rollover behavior is all HTML styled with CSS.  
Nothing too complicated.