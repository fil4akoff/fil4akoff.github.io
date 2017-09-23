;(function () {
    // dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
    // of the mouse, set with a mousemove event listener below
    var dots = [  ],
        mouse = {
            x: 0,
            y: 0
        };

// The Dot object used to scaffold the dots
    var Dot = function() {
        this.x = 0;
        this.y = 0;
        this.randomScale = (Math.random() + Math.random() + Math.random());
        this.randomRotate = (Math.random()*180);
        this.node = (function(){
            var n = document.createElement("div");
            n.className = "trail";
            document.body.appendChild(n);
            return n;
        }());
        this.node1 = (function(){
            var m = document.createElement("div");
            m.className = "trail1";
            document.body.appendChild(m);
            return m;
        }());
        this.node2 = (function(){
            var b = document.createElement("div");
            b.className = "trail2";
            document.body.appendChild(b);
            return b;
        }());
    };
// The Dot.prototype.draw() method sets the position of
    // the object's <div> node
    Dot.prototype.draw = function() {
        this.node.style.left = this.x + "px";
        this.node.style.transform = 'scale(' + this.randomScale + ")";
        this.node.style.top = this.y + "px";
        this.node.style.transform = 'rotate(' + this.randomRotate + 'deg)';
        this.node1.style.left = (this.x + ( 50 * (Math.random()) - .5 ))  + "px";
        this.node1.style.transform = 'scale(' + this.randomScale + ")";
        this.node1.style.top = (this.y + ( 50 * (Math.random() - .5) )) + "px";
        this.node2.style.transform = 'rotate(' + this.randomRotate + 'deg)';
        this.node2.style.left = (this.x + ( 20 * (Math.random()) - .5 ))  + "px";
        this.node2.style.transform = 'scale(' + this.randomScale + ")";
        this.node2.style.top = (this.y + ( 20 * (Math.random() - .5) )) + "px";
        this.node2.style.transform = 'rotate(' + this.randomRotate + 'deg)';

    };

// Creates the Dot objects, populates the dots array
    for (var i = 0; i < 33; i++) {
        var d = new Dot();
        dots.push(d);
    }


// This is the screen redraw function
    function draw() {
        // Make sure the mouse position is set everytime
        // draw() is called.
        var randomNumberX = ((Math.random() - .5) * 10) + 40,
            randomNumberY = ((Math.random() - .5)) + 80,
            x = (mouse.x + randomNumberX),
            y = (mouse.y + randomNumberY);


        // This loop is where all the 90s magic happens
        dots.forEach(function(dot, index, dots) {
            var nextDot = dots[index + 2] || dots[0];

            dot.x = x;
            dot.y = y;
            dot.draw();
            x += (nextDot.x - dot.x) + ((Math.random() - .5) * 10) + 4;
            y += (nextDot.y - dot.y) - ((Math.random() - .5) * 20) + 6;
            // x += (nextDot.x - dot.x) + 1;
            // y += (nextDot.y - dot.y) + 1;

        });
    }

    addEventListener("mousemove", function(event) {
        event.preventDefault();
        mouse.x = event.pageX;
        mouse.y = event.pageY;
    });

// animate() calls draw() then recursively calls itself
    // everytime the screen repaints via requestAnimationFrame().
    function animate() {
        draw();
        requestAnimationFrame(animate);
    }

// And get it started by calling animate().
    animate();


})();