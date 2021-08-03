export const historyOptions = {
  lineHeightAnnotation: {
    lineWeight: 1,
  },

  animation: {
    duration: 2000,
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        type: "time",
        distribution: "linear",
        gridLines: {
          color: "rgba(0, 0, 0, 0.03)",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0.08)",
        },
      },
    ],
  },
};
