import _ from 'underscore';

const initialState = {
    data: {
        labels: ["1"],
        datasets: [{
                label: "My First dataset",
                fillColor: "rgba(0,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65]
            }
        ]
    },
    chartOptions: {},
    chartReady: false
};

const statisticsReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "SETCHARTLOADING":
            newState.chartReady = false;
            return newState;
        case "GETBETSTATISTICSSUCCESS":

            var stats = action.betStatistics;
            var game = action.game;
            var labels = action.labels;

            // TODO delete temp
            stats.homeWin = 123;
            stats.draw = 54;
            stats.homeLose = 96;

            const homeWinFillColor = "rgba(100,100,255,0.5)";
            const drawFillColor = "rgba(255,255,100,0.5)";
            const homeLoseFillColor = "rgba(100,255,100,0.5)";
            const baseColor = "rgba(200,200,200,1)";

            console.log(labels);

            var data = {
                labels: [labels.gamename],
                datasets: [{
                        label: labels.home,
                        fillColor: homeWinFillColor,
                        strokeColor: baseColor,
                        pointColor: baseColor,
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: baseColor,
                        data: [stats.homeWin]
                    },
                    {
                        label: labels.draw,
                        fillColor: drawFillColor,
                        strokeColor: drawFillColor,
                        pointColor: drawFillColor,
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: drawFillColor,
                        data: [stats.draw]
                    },
                    {
                        label: labels.away,
                        fillColor: homeLoseFillColor,
                        strokeColor: homeLoseFillColor,
                        pointColor: homeLoseFillColor,
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: homeLoseFillColor,
                        data: [stats.homeLose]
                    }
                ]
            };

            var chartOptions = {}

            newState.data = data;
            newState.chartOptions = chartOptions;
            newState.chartReady = true;

            return newState;
        default:
            return state;
    }
};

export default statisticsReducer;