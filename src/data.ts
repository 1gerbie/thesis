export const menu = [
    {
      id: 1,
      title: "",
      listItems: [
        {
          id: 1,
          title: "Dashboard",
          to: "/home",
          icon: "hom.png",
        },
        {
          id: 2,
          title: "Inventory",
          to: "/home/inventory",
          icon: "hom.png",
        },
        {
          id: 3,
          title: "Maintenance Sched",
          to: "/home/maintenance-sched",
          icon: "hom.png",
        },
        {
          id: 4,
          title: "Transactions",
          to: "/home/transaction",
          icon: "hom.png",
        },
        {
          id: 5,
          title: "Reports",
          to: "/home/reports",
          icon: "hom.png",
        },
        {
          id: 6,
          title: "Calibration Due",
          to: "/home/calibration-due",
          icon: "hom.png",
        },
      ],
    },
  ];

export const chartBoxUser = {
    color:"maroon",
    icon:"hom.png",
    title: "Transactions",
    number: "23",
    dataKey:"items",
    percentage: 45,
    chartData: [
        { name:"Sun", items: 20},
        { name:"Mon", items: 24},
        { name:"Tues", items: 19},
        { name:"Wed", items: 25},
        { name:"Thurs", items: 28},
        { name:"Fri", items: 30},
        { name:"Sat", items: 40},
    ],

};

export const chartBoxEquipment = {
    color:"maroon",
    icon:"hom.png",
    title: "Equipment",
    number: "50",
    dataKey:"items",
    percentage: 35,
    chartData: [
        { name:"Sun", items: 20},
        { name:"Mon", items: 24},
        { name:"Tues", items: 19},
        { name:"Wed", items: 25},
        { name:"Thurs", items: 28},
        { name:"Fri", items: 30},
        { name:"Sat", items: 40},
    ],

};

export const chartBoxReport = {
    color:"maroon",
    icon:"hom.png",
    title: "Report",
    number: "9",
    dataKey:"users",
    percentage: 10,
    chartData: [
        { name:"Sun", users: 13},
        { name:"Mon", users: 16},
        { name:"Tues", users: 19},
        { name:"Wed", users: 20},
        { name:"Thurs", users: 14},
        { name:"Fri", users: 21},
        { name:"Sat", users: 25},
    ],

};


export const chartBoxCalibrationDue = {
    color:"maroon",
    icon:"hom.png",
    title: "Calibration Due",
    number: "23",
    dataKey:"users",
    percentage: 20,
    chartData: [
        { name:"Sun", users: 20},
        { name:"Mon", users: 24},
        { name:"Tues", users: 19},
        { name:"Wed", users: 25},
        { name:"Thurs", users: 28},
        { name:"Fri", users: 30},
        { name:"Sat", users: 40},
    ],

};


export const barChartBoxRevenue = {
    title: "Reports", 
    color: "$dark-bg",
    dataKey: "items",
    chartData: [
      { name: "Sun", items: 20 },
      { name: "Mon", items: 14 },
      { name: "Tues", items: 10 },
      { name: "Wed", items: 17 },
      { name: "Thurs", items: 19 },
      { name: "Fri", items: 21 },
      { name: "Sat", items: 23 },
    ],
  };
  
export const topItemsData = [
    { orderId: 1, quantity: 10, alertAmt: 5 },
    { orderId: 2, quantity: 15, alertAmt: 3 },
 ];
 
export const stockAlertData = [
    { orderId: 1, date: '2024-09-29', quantity: 10, alertAmt: 5, status: 'Low' },
    { orderId: 2, date: '2024-09-30', quantity: 15, alertAmt: 3, status: 'Critical' },
 ];
 