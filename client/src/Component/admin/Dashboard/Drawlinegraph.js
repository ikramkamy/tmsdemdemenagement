function DrawLineGraph(canvas, data, xLabels, yLabel, axisColor,axisWidth,lineColor) {
    const ctx = canvas.getContext('2d');
  
    const width = canvas.width;
    const height = canvas.height;
    // Set axis color and width
  
    // Draw x and y axis
    ctx.strokeStyle = axisColor;
    ctx.lineWidth = axisWidth;
     ctx.lineColor=lineColor;
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(width, height);
    ctx.stroke();
  
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);
    ctx.stroke();
  
    // Draw X labels
    const xRatio = width / (data.length - 1);
    for (let i = 0; i < xLabels.length; i++) {
      const x = i * xRatio;
      const y = height + 20;
      ctx.fillText(xLabels[i], x, y);
    }
  
    // Draw Y label
    const yRatio = height / Math.max(...data);
    ctx.save();
    ctx.translate(10, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();
  
    // Draw data points
    ctx.beginPath();
    ctx.moveTo(0, height - data[0] * yRatio);
  
    for (let i = 1; i < data.length; i++) {
      ctx.lineTo(i * xRatio, height - data[i] * yRatio);
    }
  
    ctx.stroke();
  }
  export default DrawLineGraph;