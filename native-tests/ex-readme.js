try{ require.exists;}catch(e){require=function(x){load("./src/"+x+'.js');};}
try{
   glm.exists;
} catch(e) {
   try { glm = require("../src/glm-js") || glm; }
   catch(e) { load("src/glm-js.js"); }
}
function main(log) {
    this.mrot = this.mrot || glm.angleAxis(glm.radians(45.0), glm.vec3(0,1,0));
    //...
    var m1 = glm.mat4(1.0); 
    var m2 = glm.mat4(2.0);
    
    var m3 = m1['*'](m2); // operator sugars
    log("m3", m3);
    
    m3['*='](glm.toMat4(this.mrot)); // three.js-style inplace mutation still possible

    log("mrot", this.mrot);
    log("m3", m3);

 }

try {
   describe.exists;
   var _main = main;
   main = function(log) {
      try {
         document.location.exists;
         log = function() {
            var t = document.createElement("div");
            t.textContent = [].slice.call(arguments).join(" ");//sprintf.apply(this, arguments);
            document.getElementById('glmlog').appendChild(t);
         }
      } catch(e) {}
      describe('ex-readme', function() {
                  it('should run without errors',function() {
                        _main(log);
                     });
               });
   };
} catch(e) {}

main(glm.$log);


