var rocky = require("rocky")

var activity = "Running"
var inProgress = false
var progress = 0.4

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;

  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Current date/time
  var d = new Date();

  // Set the text color
  ctx.fillStyle = 'white';

  // Center align the text
  ctx.textAlign = 'center';
  
  ctx.fillText(activity, w/2, h/10)
  
  ctx.fillText(inProgress ? "In Progress" : "Inactive", w/2, h/2)
  
  ctx.fillText("Progress: " + progress*100 + "%", w/2, h-h/5 )
});