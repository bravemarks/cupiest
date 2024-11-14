function renderGradient(gradient) {
    // Assuming a function to render a gradient
    gradient.forEach(stop => {
        console.log(`Color: ${stop.color}, Position: ${stop.position}`);
        // You would typically use this data to render a gradient on a canvas or in CSS
    });
}

// Example usage
renderGradient(gradient);
