/*
window.onload = function() {
    drawCircle(circle);
  //  drawCircle(circle1);
    element = document.getElementById('canvas');
    element.addEventListener('mousedown', startDragging, false);
    element.addEventListener('mousemove', drag, false);
    element.addEventListener('mouseup', stopDragging, false);
    element.addEventListener('mouseout', stopDragging, false);
}

var Point = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
}

var Circle = function (point, radius) {
    this.point = point;
    this.radius = radius;
    this.isInside = function (pt) {
        return Math.pow(pt.x - point.x, 2) + Math.pow(pt.y - point.y, 2) <
                                                          Math.pow(radius, 2);
    };
    return this;
}

function startDragging(e) {
    var p = new Point(mouseX(e), mouseY(e));
    if(circle.isInside(p)) {
        deltaCenter = new Point(p.x - circle.point.x, p.y - circle.point.y);
    }
}

function drag(e) {
    if(deltaCenter != null) {
        circle.point.x = (mouseX(e) - deltaCenter.x);
        circle.point.y = (mouseY(e) - deltaCenter.y);
        drawCircle(circle);
      //  drawCircle(circle1);
    }
}

function stopDragging(e) {
    deltaCenter = null;
}

function mouseX(e) {
    return e.clientX - element.offsetLeft;
}

function mouseY(e) {
    return e.clientY - element.offsetTop;
}

function drawCircle(circle) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(circle.point.x, circle.point.y, circle.radius, 0, Math.PI*2, true);
    ctx.fill();
}
var element;
var circle = new Circle(new Point(30, 40), 25);

//var circle1 = new Circle(new Point(100, 80), 15);
var deltaCenter = null;*/
