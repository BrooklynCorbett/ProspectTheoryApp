// Initial values for alpha and lambda
let alpha = 0.88;
let lambda = 2;

// Function to calculate the utility
function utilityFunction(x) {
    if (x >= 0) {
        return Math.pow(x, alpha);
    } else {
        return -lambda * Math.pow(-x, alpha);
    }
}

// Plot the initial graph
function plotGraph() {
    let xValues = [];
    let yValues = [];

    for (let x = -10; x <= 10; x += 0.5) {
        xValues.push(x);
        yValues.push(utilityFunction(x));
    }

    let trace = {
        x: xValues,
        y: yValues,
        mode: 'lines',
        name: 'Utility Curve'
    };

    let layout = {
        title: 'Prospect Theory Utility Function',
        xaxis: { title: 'Outcome' },
        yaxis: { title: 'Utility' }
    };

    Plotly.newPlot('graph', [trace], layout);
}

// Update the graph when sliders are moved
document.getElementById('alphaSlider').addEventListener('input', function (e) {
    alpha = parseFloat(e.target.value);
    document.getElementById('alphaValue').textContent = alpha;
    plotGraph();
});

document.getElementById('lambdaSlider').addEventListener('input', function (e) {
    lambda = parseFloat(e.target.value);
    document.getElementById('lambdaValue').textContent = lambda;
    plotGraph();
});

// Initial plot when the page loads
plotGraph();
