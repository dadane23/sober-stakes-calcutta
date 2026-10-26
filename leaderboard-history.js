// Append the completed week before replacing team data during the next Monday
// refresh. Earlier snapshots must remain intact so movement stays auditable.
const LEADERBOARD_SNAPSHOTS=[
  {
    week:"2026-09-22",
    dataThrough:"2026-09-19",
    participants:[
      {owner:"John",rank:1,invested:4320.83,modeledPayoutEV:5064.06,evVsCost:743.23,anyCfpPayoutProbability:99.97},
      {owner:"Robert A",rank:2,invested:4750,modeledPayoutEV:4720.50,evVsCost:-29.50,anyCfpPayoutProbability:96.69},
      {owner:"Bob",rank:3,invested:3245.83,modeledPayoutEV:3943.95,evVsCost:698.11,anyCfpPayoutProbability:99.88},
      {owner:"Freddie",rank:4,invested:4525,modeledPayoutEV:3832.89,evVsCost:-692.11,anyCfpPayoutProbability:97.99},
      {owner:"Dagem",rank:5,invested:4400,modeledPayoutEV:3245.95,evVsCost:-1154.05,anyCfpPayoutProbability:96.59},
      {owner:"Jake",rank:6,invested:3770.83,modeledPayoutEV:3079.80,evVsCost:-691.03,anyCfpPayoutProbability:99.31},
      {owner:"Josh B",rank:7,invested:2495,modeledPayoutEV:1986.59,evVsCost:-508.41,anyCfpPayoutProbability:69.36},
      {owner:"Adam",rank:8,invested:4125,modeledPayoutEV:1631.05,evVsCost:-2493.95,anyCfpPayoutProbability:61.20},
      {owner:"Ralph",rank:9,invested:1300,modeledPayoutEV:1606.97,evVsCost:306.97,anyCfpPayoutProbability:57.8},
      {owner:"Dave G",rank:10,invested:2262.5,modeledPayoutEV:963.62,evVsCost:-1298.88,anyCfpPayoutProbability:58.10},
      {owner:"Brent S",rank:11,invested:1025,modeledPayoutEV:540.48,evVsCost:-484.52,anyCfpPayoutProbability:69.25},
      {owner:"Jordan",rank:12,invested:300,modeledPayoutEV:282.04,evVsCost:-17.96,anyCfpPayoutProbability:24.3}
    ]
  },
  {
    week:"2026-09-28",
    dataThrough:"2026-09-26",
    participants:[
      {owner:"John",rank:1,invested:4320.83,modeledPayoutEV:5346.83,evVsCost:1026.00,anyCfpPayoutProbability:99.99},
      {owner:"Robert A",rank:2,invested:4750,modeledPayoutEV:4229.49,evVsCost:-520.51,anyCfpPayoutProbability:96.64},
      {owner:"Bob",rank:3,invested:3245.83,modeledPayoutEV:4069.28,evVsCost:823.45,anyCfpPayoutProbability:99.96},
      {owner:"Freddie",rank:4,invested:4525,modeledPayoutEV:4011.40,evVsCost:-513.60,anyCfpPayoutProbability:98.43},
      {owner:"Dagem",rank:5,invested:4400,modeledPayoutEV:3491.86,evVsCost:-908.14,anyCfpPayoutProbability:98.56},
      {owner:"Jake",rank:6,invested:3770.83,modeledPayoutEV:2959.11,evVsCost:-811.72,anyCfpPayoutProbability:99.44},
      {owner:"Adam",rank:7,invested:4125,modeledPayoutEV:2463.57,evVsCost:-1661.43,anyCfpPayoutProbability:77.51},
      {owner:"Ralph",rank:8,invested:1300,modeledPayoutEV:2059.52,evVsCost:759.52,anyCfpPayoutProbability:72.70},
      {owner:"Josh B",rank:9,invested:2495,modeledPayoutEV:1092.28,evVsCost:-1402.72,anyCfpPayoutProbability:44.16},
      {owner:"Dave G",rank:10,invested:2262.5,modeledPayoutEV:771.47,evVsCost:-1491.03,anyCfpPayoutProbability:59.94},
      {owner:"Brent S",rank:11,invested:1025,modeledPayoutEV:521.33,evVsCost:-503.67,anyCfpPayoutProbability:69.12},
      {owner:"Jordan",rank:12,invested:300,modeledPayoutEV:66.03,evVsCost:-233.97,anyCfpPayoutProbability:6.10}
    ]
  },
  {
    week:"2026-10-19",
    dataThrough:"2026-10-17",
    participants:[
      {owner:"John",rank:1,invested:4320.83,modeledPayoutEV:5535.61,evVsCost:1214.78,anyCfpPayoutProbability:100.00},
      {owner:"Freddie",rank:2,invested:4525,modeledPayoutEV:5314.81,evVsCost:789.81,anyCfpPayoutProbability:99.90},
      {owner:"Bob",rank:3,invested:3245.83,modeledPayoutEV:4029.45,evVsCost:783.61,anyCfpPayoutProbability:99.96},
      {owner:"Robert A",rank:4,invested:4750,modeledPayoutEV:3691.26,evVsCost:-1058.74,anyCfpPayoutProbability:94.16},
      {owner:"Dagem",rank:5,invested:4400,modeledPayoutEV:3658.34,evVsCost:-741.66,anyCfpPayoutProbability:99.34},
      {owner:"Jake",rank:6,invested:3770.83,modeledPayoutEV:3193.21,evVsCost:-577.62,anyCfpPayoutProbability:99.90},
      {owner:"Adam",rank:7,invested:4125,modeledPayoutEV:1445.13,evVsCost:-2679.87,anyCfpPayoutProbability:53.26},
      {owner:"Ralph",rank:8,invested:1300,modeledPayoutEV:1232.47,evVsCost:-67.53,anyCfpPayoutProbability:48.60},
      {owner:"Josh B",rank:9,invested:2495,modeledPayoutEV:1206.61,evVsCost:-1288.39,anyCfpPayoutProbability:57.37},
      {owner:"Dave G",rank:10,invested:2262.5,modeledPayoutEV:724.05,evVsCost:-1538.45,anyCfpPayoutProbability:74.68},
      {owner:"Brent S",rank:11,invested:1025,modeledPayoutEV:688.93,evVsCost:-336.07,anyCfpPayoutProbability:89.62},
      {owner:"Jordan",rank:12,invested:300,modeledPayoutEV:7.27,evVsCost:-292.73,anyCfpPayoutProbability:0.70}
    ]
  }
];
