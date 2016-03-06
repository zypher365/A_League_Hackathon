// Morris.js Charts sample data for SB Admin template

$(function() {

    var mainline =[{"From":"01-10-2015 00:15:00","To":"01-10-2015 00:30:00","kVA":31.68,"kW":27.61,"kWH":18.85},
{"From":"01-10-2015 04:30:00","To":"01-10-2015 04:45:00","kVA":29.93,"kW":25.33,"kWH":17.32},

{"From":"01-10-2015 08:30:00","To":"01-10-2015 08:45:00","kVA":0.35,"kW":0.35,"kWH":0.25},

{"From":"01-10-2015 12:30:00","To":"01-10-2015 12:45:00","kVA":32.03,"kW":27.18,"kWH":19.36},

{"From":"01-10-2015 16:30:00","To":"01-10-2015 16:45:00","kVA":29.53,"kW":25.01,"kWH":17.61},

{"From":"01-10-2015 20:15:00","To":"01-10-2015 20:30:00","kVA":27.19,"kW":22.18,"kWH":15.29}];

    


    var temp = mainline;

    Morris.Donut({
        element: 'morris-donut-chart-mainline',
        data: [{
            label: "Efficiency(%)",
            value: 79
        }, {
            label: "Feasible Loss(%)",
            value: 18
        },
        {
            label: "Health Decrement(%)",
            value: 1.6
        }

        ,
         {
            label: "Miscellaneous Loss(%)",
            value: 3
        }],
        resize: true
    });


    

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart-mainline',
        data:temp 





        ,

        xkey: ['From'],
        ykeys: ['kVA', 'kW', 'kWH'],
        labels: ['kVA', 'kW', 'kWH'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    

    // Donut Chart
   

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2012-10-01',
            visits: 802
        }, {
            d: '2012-10-02',
            visits: 783
        }, {
            d: '2012-10-03',
            visits: 820
        }, {
            d: '2012-10-04',
            visits: 839
        }, {
            d: '2012-10-05',
            visits: 792
        }, {
            d: '2012-10-06',
            visits: 859
        }, {
            d: '2012-10-07',
            visits: 790
        }, {
            d: '2012-10-08',
            visits: 1680
        }, {
            d: '2012-10-09',
            visits: 1592
        }, {
            d: '2012-10-10',
            visits: 1420
        }, {
            d: '2012-10-11',
            visits: 882
        }, {
            d: '2012-10-12',
            visits: 889
        }, {
            d: '2012-10-13',
            visits: 819
        }, {
            d: '2012-10-14',
            visits: 849
        }, {
            d: '2012-10-15',
            visits: 870
        }, {
            d: '2012-10-16',
            visits: 1063
        }, {
            d: '2012-10-17',
            visits: 1192
        }, {
            d: '2012-10-18',
            visits: 1224
        }, {
            d: '2012-10-19',
            visits: 1329
        }, {
            d: '2012-10-20',
            visits: 1329
        }, {
            d: '2012-10-21',
            visits: 1239
        }, {
            d: '2012-10-22',
            visits: 1190
        }, {
            d: '2012-10-23',
            visits: 1312
        }, {
            d: '2012-10-24',
            visits: 1293
        }, {
            d: '2012-10-25',
            visits: 1283
        }, {
            d: '2012-10-26',
            visits: 1248
        }, {
            d: '2012-10-27',
            visits: 1323
        }, {
            d: '2012-10-28',
            visits: 1390
        }, {
            d: '2012-10-29',
            visits: 1420
        }, {
            d: '2012-10-30',
            visits: 1529
        }, {
            d: '2012-10-31',
            visits: 1892
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            device: 'iPhone',
            geekbench: 136
        }, {
            device: 'iPhone 3G',
            geekbench: 137
        }, {
            device: 'iPhone 3GS',
            geekbench: 275
        }, {
            device: 'iPhone 4',
            geekbench: 380
        }, {
            device: 'iPhone 4S',
            geekbench: 655
        }, {
            device: 'iPhone 5',
            geekbench: 1571
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
