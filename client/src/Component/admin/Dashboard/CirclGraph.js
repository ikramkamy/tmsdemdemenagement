import { useEffect,useRef } from "react";

function drawPieChart(canvas, data, colors) {
  const ctx = canvas.getContext('2d');
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const total = data.reduce((acc, value) => acc + value, 0);
  let startAngle = 0;

  for (let i = 0; i < data.length; i++) {
    const sliceAngle = 2 * Math.PI * (data[i] / total);
    ctx.fillStyle = colors[i];
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2);
    ctx.arc(canvasWidth / 2, canvasHeight / 2, canvasHeight / 2, startAngle, startAngle + sliceAngle);
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2);
    ctx.fill();
    startAngle += sliceAngle;
  }
}

function PieChart({ data, colors }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    drawPieChart(canvas, data, colors);
  }, [data, colors]);

  return <canvas ref={canvasRef} width={400}/>;
}

export default PieChart;
