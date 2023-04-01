let points = [[1, -3], [5, -4], [4, -3],[9,1],[7,2],[8,5],[5,4],[5,5],[3,4],[4,9],[2,7],[0,10],[-2,7],[-4,8],[-3,3],[-5,6],[-5,4],[-8,5],[-7,2],[-9,1],[-4,-3],[-5,-4],[0,-3],[2,-7],[2,-6],[1,-3]]; //list資料，

function setup() {   //只會執行一次
  createCanvas(windowWidth, windowHeight); 
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
 }
}

function draw() {
  background("#e76f51");
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1,-1);  //上下翻轉
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  scale(1,-1)
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點連在一起
	textSize(90)  //文字大小
  fill(255);  //設定顏色
  text("楓葉",0,0)  //顯示文字
}

