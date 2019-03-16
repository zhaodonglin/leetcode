function Point(x, y) {
    this.x = x;
    this.y = y;
};

var maxPoints = function(points) {
    var res = 0;
    if (points.length -1 ==0){
        return 1;
    }
    for (var i = 0; i < points.length - 1; i++){
        var duplicate = 1;
        var line = new Map();
        for (var j= i+1; j<points.length; j++){

            if (points[j].x == points[i].x && points[j].y == points[i].y){
                duplicate = duplicate + 1;
                continue;
            }

            var dx = points[i].x - points[j].x;
            var dy = points[i].y - points[j].y;

            var x_y = gcd(dx, dy);
            var line_key = (dx/x_y).toString()+"-"+ (dy/x_y).toString();

            var points_in_a_line = line.get(line_key);
            if (points_in_a_line == undefined) {

                points_in_a_line = new Array();
            }
            points_in_a_line.push(points[j]);
            line.set(line_key, points_in_a_line);
        }
        //console.log(i,points)
        res = Math.max(res, duplicate);
        for (var [key, val] of line){
            console.log(key, val.length, duplicate);
            res = Math.max(res, val.length + duplicate);
        }
    }

    return res;
};

var gcd = function(a, b) {
    if (b == 0){return a;}
    return gcd(b, a%b);
};
// gcd(1,3)
point1 = new Point(0,0);
point2 = new Point(1,1);
point3 = new Point(0,0);

console.log(maxPoints([point1,point2, point3]));


arr1= [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
var points = new Array();
for (var i = 0; i<arr1.length; i++){
    point =new Point(arr1[i][0], arr1[i][1]);
    points.push(point);
};
console.log(maxPoints(points));


