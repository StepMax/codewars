function isTriangle(a,b,c){
    return ( a + b > c && Math.abs(a - b) < c || b + c > a && Math.abs(b - c) < a || c + a > b && Math.abs(c - a) < b) ? true: false;
    }