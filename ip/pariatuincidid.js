// Constants representing possible orientations
const Top = 'top';
const Bottom = 'bottom';
const Left = 'left';
const Right = 'right';

// Configuration object for the axes
const config = {
  axisX: { /* Configuration for X-axis */ },
  axisY: { /* Configuration for Y-axis */ }
};

// Variable representing the orientation of the current axis
let orient = Top; // This could be dynamically set

// Decide which axis configuration to use based on the orientation
let xy = (orient === Top || orient === Bottom) ? config.axisX : config.axisY;

console.log(xy); // Outputs the configuration for the X-axis if orient is Top or Bottom
