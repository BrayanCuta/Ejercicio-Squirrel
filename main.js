const url = "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json";

fetch(url).then(res=>res.json()).then(res=>{
    console.log('%main.js line:3 res', 'color:#007acc',res);
})