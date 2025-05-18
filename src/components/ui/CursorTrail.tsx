"use client";

import { useState, useEffect, useRef } from "react";

interface PositionType {
  x: number;
  y: number;
  timestamp: number;
}

// Available shapes for the trail
type TrailShape = "circle" | "square" | "triangle" | "star" | "custom";

interface TrailOptions {
  shape: TrailShape;
  startColor: string;
  endColor: string;
  size: number;
  particleCount: number;
  duration: number;
}

export default function CursorTrail({
  options = {
    shape: "circle" as TrailShape,
    startColor: "rgba(96, 199, 243, 1)",  // Initial color
    endColor: "rgba(255, 105, 180, 0.8)", // Final color in the trail
    size: 8,                              // Max size of trail elements
    particleCount: 20,                    // Number of particles in the trail
    duration: 1000,                       // Duration in ms before particles disappear
  }
}: {
  options?: Partial<TrailOptions>;
}) {
  const [trail, setTrail] = useState<PositionType[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const lastMousePosition = useRef<PositionType>({ x: 0, y: 0, timestamp: 0 });
  
  // Merge default options with provided options
  const trailOptions: TrailOptions = {
    shape: "circle",
    startColor: "rgba(96, 199, 243, 1)",
    endColor: "rgba(255, 105, 180, 0.8)",
    size: 8,
    particleCount: 20,
    duration: 1000,
    ...options
  };

  // Helper function to interpolate between colors
  const interpolateColor = (index: number, total: number): string => {
    // Parse colors to get RGB values
    const parseColor = (color: string): number[] => {
      // Handle rgba format
      if (color.startsWith("rgba")) {
        const match = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
        if (match) {
          return [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3], 10),
            parseFloat(match[4])
          ];
        }
      }
      // Handle rgb format
      if (color.startsWith("rgb")) {
        const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (match) {
          return [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3], 10),
            1
          ];
        }
      }
      // Handle hex format
      if (color.startsWith("#")) {
        const hex = color.slice(1);
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4) || hex.slice(0, 2), 16);
        const b = parseInt(hex.slice(4, 6) || hex.slice(0, 2), 16);
        return [r, g, b, 1];
      }
      
      return [0, 0, 0, 1]; // Default black
    };
    
    const startRGBA = parseColor(trailOptions.startColor);
    const endRGBA = parseColor(trailOptions.endColor);
    
    // Calculate the interpolated value
    const factor = index / total;
    const r = Math.round(startRGBA[0] + factor * (endRGBA[0] - startRGBA[0]));
    const g = Math.round(startRGBA[1] + factor * (endRGBA[1] - startRGBA[1]));
    const b = Math.round(startRGBA[2] + factor * (endRGBA[2] - startRGBA[2]));
    const a = startRGBA[3] + factor * (endRGBA[3] - startRGBA[3]);
    
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  // Render shape based on specified shape type
  const renderShape = (index: number, opacity: number) => {
    const shape = trailOptions.shape;
    const sizeReduction = (trailOptions.size / trailOptions.particleCount) * index;
    const size = Math.max(2, trailOptions.size - sizeReduction);
    const color = interpolateColor(index, trailOptions.particleCount);
    
    // Common style props
    const commonStyle = {
      opacity,
      backgroundColor: shape !== "triangle" && shape !== "star" ? color : "transparent",
    };
    
    switch (shape) {
      case "square":
        return {
          ...commonStyle,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '0'
        };
      case "triangle":
        return {
          ...commonStyle,
          width: '0',
          height: '0',
          borderLeft: `${size/2}px solid transparent`,
          borderRight: `${size/2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
          background: 'transparent'
        };
      case "star":
        // CSS for a star shape using clip-path
        return {
          ...commonStyle,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        };
      case "custom":
        // Example of a custom shape (diamond)
        return {
          ...commonStyle,
          width: `${size}px`,
          height: `${size}px`,
          transform: 'translate(-50%, -50%) rotate(45deg)',
          backgroundColor: color
        };
      case "circle":
      default:
        return {
          ...commonStyle,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%'
        };
    }
  };

  // Setup continuous animation
  useEffect(() => {
    // Function to continuously update the trail
    const updateTrail = () => {
      setTrail((prevTrail) => {
        // Always remove last point (tail of the trail) to ensure continuous fading
        if (prevTrail.length === 0) return prevTrail;
        
        // Remove old points (based on time)
        const now = Date.now();
        const filteredTrail = prevTrail.filter(
          point => now - point.timestamp < trailOptions.duration
        );
        
        return filteredTrail.length > 0 ? 
          filteredTrail.slice(0, trailOptions.particleCount) : [];
      });
      
      animationFrameId.current = requestAnimationFrame(updateTrail);
    };
    
    // Start the animation loop
    animationFrameId.current = requestAnimationFrame(updateTrail);
    
    // Cleanup function
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [trailOptions.duration, trailOptions.particleCount]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const currentTime = Date.now();
      const newPosition = { 
        x: e.clientX, 
        y: e.clientY, 
        timestamp: currentTime 
      };
      
      // Add new position to trail
      setTrail(prevTrail => {
        // Only keep recent trail points plus the new one
        const filteredTrail = [...prevTrail]
          .filter(point => currentTime - point.timestamp < trailOptions.duration)
          .slice(0, trailOptions.particleCount - 1); // Leave room for the new point
        
        return [newPosition, ...filteredTrail];
      });
      
      lastMousePosition.current = newPosition;
    };

    // Add mouse event listeners
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [trailOptions.duration, trailOptions.particleCount]);

  return (
    <>
      {trail.map((point, index) => {
        // Calculate age of this point in milliseconds
        const age = Date.now() - point.timestamp;
        // Calculate opacity based on age (faster fadeout)
        const opacity = Math.max(0, 1 - age / (trailOptions.duration * 0.6));
        
        // Get shape-specific styles
        const shapeStyle = renderShape(index, opacity);
        
        return (
          <div
            key={`trail-${point.timestamp}-${index}`}
            className="fixed pointer-events-none z-30"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              transform: "translate(-50%, -50%)",
              ...shapeStyle
            }}
          />
        );
      })}
    </>
  );
}