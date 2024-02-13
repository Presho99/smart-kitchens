import React, {useEffect, useRef} from 'react'

function Bezier() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        // control points
        const p0 = { x: 0, y: 50 };  // Starting point
        const p1 = { x: 100, y: 50 };  // First control point
        const p2 = { x: 400, y: 50 };  // Second control point
        const p3 = { x: 400, y: 450 }; // Ending point
      
      

        // // Draw control points
        // ctx.fillStyle = 'blue'
        // ctx.beginPath()
        // ctx.arc(p0.x, p0.y, 5, 0, Math.PI * 2 )
        // ctx.arc(p1.x, p1.y, 5, 0, Math.PI * 2 )
        // ctx.arc(p2.x, p2.y, 5, 0, Math.PI * 2 )
        // ctx.fill()

        // Draw bezier curve
        ctx.strokeStyle = 'red';
  ctx.lineWidth = 105;  // Adjust line width for a thicker curve
        ctx.beginPath()
        ctx.moveTo(p0.x, p0.y)
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
        ctx.stroke()

    }, [])
  return (
    <canvas ref={canvasRef} width={500} height={400}/>
  )
}

export default Bezier