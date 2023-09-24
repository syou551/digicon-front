function showGazeImage(gazeInfo){
    let canvas = document.getElementById("output")
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            let ctx = canvas.getContext("2d");
            ctx.fillStyle = '#FF0000'
            ctx.clearRect(0, 0, canvas.width, canvas.height )
            ctx.beginPath();
            ctx.arc(gazeInfo.x, gazeInfo.y, 10, 0, Math.PI * 2, true);
            ctx.fill();
  }

export default showGazeImage;