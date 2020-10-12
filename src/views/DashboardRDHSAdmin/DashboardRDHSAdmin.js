import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import authHeader from '../../assets/services/auth-header_res';
import Widget04 from './Widget04';

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

let yearlyImportedQty;
let yearlyImportedQtyYears;
let average=0;

let yearlyAvailableQty;
let yearlyAvailableQtyYears;
let availableAverage=0;

let yearlySuppliedQty;
let yearlySuppliedQtyYears;
let averageSupplied=0;

let yearlyDamagedQty;
let yearlyDamagedQtyYears;
let averageDamaged=0;

let getCurrentImportedStock;
let getCurrentAvailableStock;
let getCurrentDamagedStock;
let getCurrentSuppliedStock;

let dailyDamaged;
let dailyAvailable;
let dailySupplied;
let dailyDates;

// var getWeeklySupplyAr = [];

// var  getWeeklySupply: [];


// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: '',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};



// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: '',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class DashboardRDHSAdmin extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.ImportedQty_5years = this.ImportedQty_5years.bind(this);
    this.ImportedQty_10years = this.ImportedQty_10years.bind(this);
    this.ImportedQty = this.ImportedQty.bind(this);
    this.AvailableQty_5years = this.AvailableQty_5years.bind(this);
    this.AvailableQty_10years = this.AvailableQty_10years.bind(this);
    this.AvailableQty = this.AvailableQty.bind(this);
    this.SuppliedQty_5years = this.SuppliedQty_5years.bind(this);
    this.SuppliedQty_10years = this.SuppliedQty_10years.bind(this);
    this.SuppliedQty = this.SuppliedQty.bind(this);
    this.DamagedQty_5years = this.DamagedQty_5years.bind(this);
    this.DamagedQty_10years = this.DamagedQty_10years.bind(this);
    this.DamagedQty = this.DamagedQty.bind(this);
    this.mainChartMonth = this.mainChartMonth.bind(this); 
    this.mainChartMonth3 = this.mainChartMonth3.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      getWeeklySupply: [],
      getWeeklySupplyDates: [],
       getWeeklyDemand: [],
       getRDHSCurrentYearSupply:0,
       getDirectCurrentYearSupply:0,
      getCurrentStockOfAll: [],
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  mainChartMonth(){
          //daily counts 
 fetch('/getTotalSuppliedStockDaily', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailyAvailable: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.dailyAvailable);
      });
       fetch('/getTotalAvailableStockDaily', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailySupplied: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.dailySupplied);
      });
       fetch('/getTotalDamagedStockDaily', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailyDamaged: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.dailyDamaged);
      });

      fetch('/getDatesDailyCounts', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailyDates: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log(">>" + this.state.dailyDates);
      });

      this.setState({ dailyAvailable: []});
      this.setState({ dailySupplied: []});
      this.setState({ dailyDamaged: []});
      this.setState({ dailyDates: []});
  }

  mainChartMonth3(){
          //daily counts 
 fetch('/getTotalSuppliedStockDaily3', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailyAvailable: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.dailyAvailable);
      });
       fetch('/getTotalAvailableStockDaily3', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailySupplied: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.dailySupplied);
      });
       fetch('/getTotalDamagedStockDaily3', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailyDamaged: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.dailyDamaged);
      });

      fetch('/getDatesDailyCounts', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailyDates: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.dailyDates);
      });
         this.setState({ dailyAvailable: []});
      this.setState({ dailySupplied: []});
      this.setState({ dailyDamaged: []});
      this.setState({ dailyDates: []});
  }

  onRadioBtnClick(radioSelected) {
    console.log("Hello");
    this.setState({
      radioSelected: radioSelected,
    });
  }

   componentDidMount() {
    this.setState({ isLoading: true });
    // this.setState({ getWeeklySupply: []});
    // console.log(this.state.user_type);


       fetch('/yearlyImportMedicie5Avg', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ average: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.average);
      });

    fetch('/yearlyImportMedicieSumYears5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyImportedQtyYears: data, isLoading: false })
        // yearlyImportedQtyYears=this.state.yearlyImportedQtyYears;
        console.log("Years" + this.state.yearlyImportedQtyYears);
      });

       fetch('/yearlyImportMedicieSum5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyImportedQty: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.yearlyImportedQty);
      });



    
    //load Available medicine charts

    fetch('/yearlyAvailableMedicieSumYears5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyAvailableQtyYears: data, isLoading: false })
        // yearlyAvailableQtyYears=this.state.yearlyAvailableQtyYears;
        console.log("Years Av" + this.state.yearlyAvailableQtyYears);
      });

      fetch('/yearlyAvailableMedicieSum5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyAvailableQty: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Sums Av" + this.state.yearlyAvailableQty);
      });

          fetch('/yearlyAvailableMedicie5Avg', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageAvailable: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Avg Av" + this.state.averageAvailable);
      });


       //load Supplied medicine charts
    
    fetch('/yearlySuppliedMedicieSumYears5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlySuppliedQtyYears: data, isLoading: false })
        // yearlyAvailableQtyYears=this.state.yearlyAvailableQtyYears;
        console.log("Years Av" + this.state.yearlySuppliedQtyYears);
      });

      fetch('/yearlySuppliedMedicieSum5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlySuppliedQty: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Sums Av" + this.state.yearlySuppliedQty);
      });

          fetch('/yearlySuppliedMedicieAvg5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageSupplied: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Avg Av" + this.state.averageSupplied);
      });

fetch('/yearlyDamagedMedicieSumYears5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyDamagedQtyYears: data, isLoading: false })
        // yearlyDamagedQtyYears=this.state.yearlyDamagedQtyYears;
        console.log("Years" + this.state.yearlyDamagedQtyYears);
      });

       fetch('/yearlyDamagedMedicieSum5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyDamagedQty: data, isLoading: false });
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.yearlyDamagedQty);
      });

            fetch('/yearlyDamagedMedicieAvg5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageDamaged: data, isLoading: false });
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Avg Av" + this.state.averageDamaged);
      });

      //get current stock details

                   fetch('/getCurrentImportedStock', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ getCurrentImportedStock: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        // console.log("THIS" + this.state.getCurrentImportedStock);
      });

                         fetch('/getCurrentSuppliedStock', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ getCurrentSuppliedStock: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        // console.log("THISSSSS" + this.state.getCurrentSuppliedStock);
      });
                         fetch('/getCurrentAvailableStock', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ getCurrentAvailableStock: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        // console.log("THISSSSSSSSSSSSSSSSSSSS" + this.state.getCurrentAvailableStock);
      });
                         fetch('/getCurrentDamagedStock', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ getCurrentDamagedStock: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        // console.log("THISSSSSSSSSSSSSSSSSSSS" + this.state.getCurrentDamagedStock);
      });


      //daily counts 
 fetch('/getTotalSuppliedStockDaily', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailyAvailable: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.dailyAvailable);
      });
       fetch('/getTotalAvailableStockDaily', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailySupplied: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.dailySupplied);
      });
       fetch('/getTotalDamagedStockDaily', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailyDamaged: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.dailyDamaged);
      });

      fetch('/getDatesDailyCounts', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ dailyDates: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.dailyDates);
      });

         fetch('/medicineCount', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ medicineCount: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.medicineCount);
      });

        fetch('/getMinistryStoreCount', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ getMinistryStoreCount: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.getMinistryStoreCount);
      });

           fetch('/getRDHSHospitalCount', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ getRDHSHospitalCount: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.getRDHSHospitalCount);
      });

           fetch('/getRdhsCount', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ getRDHSCount: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.getRDHSCount);
      });

               fetch('/getDirectHospitalCount', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ getDirectHospitalCount: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.getDirectHospitalCount);
      });
               fetch('/getVehicleCount', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ getVehicleCount: data, isLoading: false })
        //  console.log("" + this.state.getVehicleCount);
        //  yearlyImportedQty=this.state.yearlyImportedQty;
      });


               fetch('/getWeeklySupply', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({ getWeeklySupply: data, isLoading: false })
        // getWeeklySupplyAr.push(this.state.getWeeklySupply[0]);


      });

      fetch('/getWeeklyDemand', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({ getWeeklyDemand: data, isLoading: false })
        // getWeeklySupplyAr.push(this.state.getWeeklySupply[0]);


      });

            fetch('/getWeeklySupplyDates', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({ getWeeklySupplyDates: data, isLoading: false })
        // console.log(this.state.getWeeklySupplyDates[0]+"WS+============");


      });



         fetch('/getRDHSCurrentYearSupply', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {this.setState({ getRDHSCurrentYearSupply: data, isLoading: false });
        // console.log(this.state.getRDHSCurrentYearSupply+"Cur RDHS+============");


      });

      
         fetch('/getDirectCurrentYearSupply', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {this.setState({ getDirectCurrentYearSupply: data, isLoading: false });
        console.log(this.state.getDirectCurrentYearSupply+"Cur RDHS+============");


      });

           fetch('/getDirectCurrentYearDemand', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {this.setState({ getDirectCurrentYearDemand: data, isLoading: false });
        console.log(this.state.getDirectCurrentYearDemand+"Cur Demand Direct+============");


      });
      

            fetch('/getRDHSCurrentYearDemand', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {this.setState({ getRDHSCurrentYearDemand: data, isLoading: false });
        // console.log(this.state.getRDHSCurrentYearDemand+"Cur Demand RDHS+============");


      });
      // console.log("Theseeeeeeeeeeeeeeeeeeeeeee");

           fetch('/getRDHSHospitalCurrentYearDemand', {
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {this.setState({ getRDHSHospitalCurrentYearDemand: data, isLoading: false });
        console.log(this.state.getRDHSHospitalCurrentYearDemand+"Cur Demand RDHS+/////////");


      });

       fetch('/getRDHSHospitalCurrentYearSupply', {
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {this.setState({ getRDHSHospitalCurrentYearSupply: data, isLoading: false });
        console.log(this.state.getRDHSHospitalCurrentYearSupply+"Cur Demand RDHS////////////////");


      });

             fetch('/getCurrentStockOfAll', {
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {this.setState({ getCurrentStockOfAll: data, isLoading: false });
        console.log(this.state.getCurrentStockOfAll+"Current Stock of All");


      });
      // this.state.dailyAvailable[0]=15;
// this.state.dailyAvailable[0]=15;this.state.dailyAvailable[2]=13; this.state.dailyAvailable[3]=16;this.state.dailyAvailable[4]=18;


        // console.log(getWeeklySupplyAr+"WS++++++++++++++++++++++++++++++++++compend");

  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
  ImportedQty_5years(){
    console.log("say hy");
    this.setState({ isLoading: true });
   
    fetch('/yearlyImportMedicieSumYears5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyImportedQtyYears: data, isLoading: false })
        // yearlyImportedQtyYears=this.state.yearlyImportedQtyYears;
        console.log("Years" + this.state.yearlyImportedQtyYears);
      });

       fetch('/yearlyImportMedicieSum5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyImportedQty: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.yearlyImportedQty);
      });

          fetch('/yearlyImportMedicie5Avg', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ average: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.average);
      });
       

      this.setState({ yearlyImportedQtyYears: []});
      this.setState({ yearlyImportedQty: []});
      this.setState({ average: 0});


    
  }

  ImportedQty_10years(){
    console.log("say hy");
    this.setState({ isLoading: true });
    // console.log(this.state.user_type);

    fetch('/yearlyImportMedicieSumYears10', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyImportedQtyYears: data, isLoading: false })
        // yearlyImportedQtyYears=this.state.yearlyImportedQtyYears;
        console.log("Years" + this.state.yearlyImportedQtyYears);
      });

       fetch('/yearlyImportMedicieSum10', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyImportedQty: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.yearlyImportedQty);
      });

       fetch('/yearlyImportMedicie10Avg', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ average: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.average);
      });
       

      this.setState({ yearlyImportedQtyYears: []});
      this.setState({ yearlyImportedQty: []});
      this.setState({ average: 0});
    
  }

  ImportedQty(){
    console.log("say hy");
    this.setState({ isLoading: true });
    // console.log(this.state.user_type);

    fetch('/yearlyImportMedicieSumYears', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyImportedQtyYears: data, isLoading: false })
        // yearlyImportedQtyYears=this.state.yearlyImportedQtyYears;
        console.log("Years" + this.state.yearlyImportedQtyYears);
      });

       fetch('/yearlyImportMedicieSum', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyImportedQty: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.yearlyImportedQty);
      });

          fetch('/yearlyImportMedicieAvg', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ average: data, isLoading: false })
        //  yearlyImportedQty=this.state.yearlyImportedQty;
        console.log("Sums" + this.state.average);
      });
       

      this.setState({ yearlyImportedQtyYears: []});
      this.setState({ yearlyImportedQty: []});
      this.setState({ average: 0});
    
  }


  //Available
    AvailableQty_5years(){
    // console.log("say hy");
    this.setState({ isLoading: true });
    // console.log(this.state.user_type);
    fetch('/yearlyAvailableMedicieSumYears5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyAvailableQtyYears: data, isLoading: false })
        // yearlyAvailableQtyYears=this.state.yearlyAvailableQtyYears;
        console.log("Years" + this.state.yearlyAvailableQtyYears);
      });

       fetch('/yearlyAvailableMedicieSum5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyAvailableQty: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Sums" + this.state.yearlyAvailableQty);
      });

          fetch('/yearlyAvailableMedicie5Avg', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageAvailable: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Sums" + this.state.averageAvailable);
      });
       

      this.setState({ yearlyAvailableQtyYears: []});
      this.setState({ yearlyAvailableQty: []});
      this.setState({ averageAvailable: 0});


    
  }

  AvailableQty_10years(){
    console.log("say hy");
    this.setState({ isLoading: true });
    // console.log(this.state.user_type);

    fetch('/yearlyAvailableMedicieSumYears10', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyAvailableQtyYears: data, isLoading: false })
        // yearlyAvailableQtyYears=this.state.yearlyAvailableQtyYears;
        console.log("Years" + this.state.yearlyAvailableQtyYears);
      });

       fetch('/yearlyAvailableMedicieSum10', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyAvailableQty: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Sums" + this.state.yearlyAvailableQty);
      });

       fetch('/yearlyAvailableMedicie10Avg', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageAvailable: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Sums" + this.state.averageAvailable);
      });
       

      this.setState({ yearlyAvailableQtyYears: []});
      this.setState({ yearlyAvailableQty: []});
      this.setState({ averageAvailable: 0});
    
  }

  AvailableQty(){
    console.log("say hy");
    this.setState({ isLoading: true });
    // console.log(this.state.user_type);

    fetch('/yearlyAvailableMedicieSumYears', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyAvailableQtyYears: data, isLoading: false })
        // yearlyAvailableQtyYears=this.state.yearlyAvailableQtyYears;
        console.log("Years" + this.state.yearlyAvailableQtyYears);
      });

       fetch('/yearlyAvailableMedicieSum', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyAvailableQty: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Sums" + this.state.yearlyAvailableQty);
      });

          fetch('/yearlyAvailableMedicieAvg', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageAvailable: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Sums" + this.state.averageAvailable);
      });
       

      this.setState({ yearlyAvailableQtyYears: []});
      this.setState({ yearlyAvailableQty: []});
      this.setState({ averageAvailable: 0});
    
  }


//Supplied
SuppliedQty_5years(){
    console.log("say hy");
    this.setState({ isLoading: true });
    // console.log(this.state.user_type);
    fetch('/yearlySuppliedMedicieSumYears5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlySuppliedQtyYears: data, isLoading: false })
        // yearlySuppliedQtyYears=this.state.yearlySuppliedQtyYears;
        console.log("Years" + this.state.yearlySuppliedQtyYears);
      });

       fetch('/yearlySuppliedMedicieSum5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlySuppliedQty: data, isLoading: false })
        //  yearlySuppliedQty=this.state.yearlySuppliedQty;
        console.log("Sums" + this.state.yearlySuppliedQty);
      });

            fetch('/yearlySuppliedMedicieAvg5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageSupplied: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Avg Av" + this.state.averageSupplied);
      });
       

      this.setState({ yearlySuppliedQtyYears: []});
      this.setState({ yearlySuppliedQty: []});
      this.setState({ averageSupplied: 0});


    
  }

  SuppliedQty_10years(){
    console.log("say hy");
    this.setState({ isLoading: true });
    // console.log(this.state.user_type);

    fetch('/yearlySuppliedMedicieSumYears10', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlySuppliedQtyYears: data, isLoading: false })
        // yearlySuppliedQtyYears=this.state.yearlySuppliedQtyYears;
        console.log("Years" + this.state.yearlySuppliedQtyYears);
      });

       fetch('/yearlySuppliedMedicieSum10', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlySuppliedQty: data, isLoading: false })
        //  yearlySuppliedQty=this.state.yearlySuppliedQty;
        console.log("Sums" + this.state.yearlySuppliedQty);
      });

       fetch('/yearlySuppliedMedicieAvg10', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageSupplied: data, isLoading: false })
        //  yearlySuppliedQty=this.state.yearlySuppliedQty;
        console.log("Sums" + this.state.averageSupplied);
      });
       

      this.setState({ yearlySuppliedQtyYears: []});
      this.setState({ yearlySuppliedQty: []});
      this.setState({ averageSupplied: 0});
    
  }

  SuppliedQty(){
    console.log("say hy");
    this.setState({ isLoading: true });
    // console.log(this.state.user_type);

    fetch('/yearlySuppliedMedicieSumYears', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlySuppliedQtyYears: data, isLoading: false })
        // yearlySuppliedQtyYears=this.state.yearlySuppliedQtyYears;
        console.log("Years" + this.state.yearlySuppliedQtyYears);
      });

       fetch('/yearlySuppliedMedicieSum', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlySuppliedQty: data, isLoading: false })
        //  yearlySuppliedQty=this.state.yearlySuppliedQty;
        console.log("Sums" + this.state.yearlySuppliedQty);
      });

          fetch('/yearlySuppliedMedicieAvg', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageSupplied: data, isLoading: false })
        //  yearlySuppliedQty=this.state.yearlySuppliedQty;
        console.log("Sums" + this.state.averageSupplied);
      });
       

      this.setState({ yearlySuppliedQtyYears: []});
      this.setState({ yearlySuppliedQty: []});
      this.setState({ averageSupplied: 0});
    
  }

  //damaged
DamagedQty_5years(){
    console.log("say hy");
    this.setState({ isLoading: true });
    // console.log(this.state.user_type);
    fetch('/yearlyDamagedMedicieSumYears5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyDamagedQtyYears: data, isLoading: false })
        // yearlyDamagedQtyYears=this.state.yearlyDamagedQtyYears;
        console.log("Years" + this.state.yearlyDamagedQtyYears);
      });

       fetch('/yearlyDamagedMedicieSum5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyDamagedQty: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.yearlyDamagedQty);
      });

            fetch('/yearlyDamagedMedicieAvg5', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageDamaged: data, isLoading: false })
        //  yearlyAvailableQty=this.state.yearlyAvailableQty;
        console.log("Avg Av" + this.state.averageDamaged);
      });
       

      this.setState({ yearlyDamagedQtyYears: []});
      this.setState({ yearlyDamagedQty: []});
      this.setState({ averageDamaged: 0});


    
  }

  DamagedQty_10years(){
    console.log("say hy");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

       fetch('/yearlyDamagedMedicieSum10', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyDamagedQty: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.yearlyDamagedQty);
      });

       fetch('/yearlyDamagedMedicieAvg10', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageDamaged: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.averageDamaged);
      });
       

      this.setState({ yearlyDamagedQtyYears: []});
      this.setState({ yearlyDamagedQty: []});
      this.setState({ averageDamaged: 0});
    
  }

  DamagedQty(){
    console.log("say hy");
    this.setState({ isLoading: true });
    // console.log(this.state.user_type);

    fetch('/yearlyDamagedMedicieSumYears', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyDamagedQtyYears: data, isLoading: false })
        // yearlyDamagedQtyYears=this.state.yearlyDamagedQtyYears;
        console.log("Years" + this.state.yearlyDamagedQtyYears);
      });

       fetch('/yearlyDamagedMedicieSum', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ yearlyDamagedQty: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.yearlyDamagedQty);
      });

          fetch('/yearlyDamagedMedicieAvg', {
      // method: 'GET',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        // 'Accept': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),
        // 'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => {
        // console.log(data);
        this.setState({ averageDamaged: data, isLoading: false })
        //  yearlyDamagedQty=this.state.yearlyDamagedQty;
        console.log("Sums" + this.state.averageDamaged);
      });
       

      this.setState({ yearlyDamagedQtyYears: []});
      this.setState({ yearlyDamagedQty: []});
      this.setState({ averageDamaged: 0});
    
  }

  say(){
    console.log("say say saysay");
  }

  render() {
    const{getWeeklySupply,getWeeklySupplyDates,getWeeklyDemand,getDirectCurrentYearSupply,getRDHSCurrentYearSupply,getDirectCurrentYearDemand,getRDHSCurrentYearDemand,getRDHSHospitalCurrentYearDemand,getRDHSHospitalCurrentYearSupply,getCurrentStockOfAll}=this.state;

var rdhsSupDim=((this.state.getRDHSCurrentYearSupply/this.state.getRDHSCurrentYearDemand).toFixed(2)*100);
var dirSupDim=((this.state.getDirectCurrentYearSupply/this.state.getDirectCurrentYearDemand).toFixed(2)*100);
var rdhsHospitalSupDim=((this.state.getRDHSHospitalCurrentYearSupply/this.state.getRDHSHospitalCurrentYearDemand).toFixed(2)*100);
var allStock=getCurrentStockOfAll[0]+getCurrentStockOfAll[1]+getCurrentStockOfAll[2]+this.state.getCurrentAvailableStock;
var minPre=(this.state.getCurrentAvailableStock/allStock).toFixed(2)*100;
var rdhsPre=(getCurrentStockOfAll[0]/allStock).toFixed(2)*100;var rdhsHPre=(getCurrentStockOfAll[1]/allStock).toFixed(2)*100;var dirPre=(getCurrentStockOfAll[2]/allStock).toFixed(2)*100;
// var allStock=getCurrentAvailableStock;
// rdhsSupDim=10;
const cardChartDatafor1 = {
  labels: this.state.yearlyImportedQtyYears,
  datasets: [
    {
      label: '',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: this.state.yearlyImportedQty,
    },
  ],
};

const cardChartOptsfor1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};


    // Card Chart data for 2
const cardChartDatafor2 = {
  labels: this.state.yearlyAvailableQtyYears,
  datasets: [
    {
      label: '',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: this.state.yearlyAvailableQty,
    },
  ],
};

const cardChartOptsfor2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

    // Card Chart data for 3
const cardChartDatafor3 = {
  labels: this.state.yearlySuppliedQtyYears,
  datasets: [
    {
      label: '',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: this.state.yearlySuppliedQty,
    },
  ],
};

const cardChartOptsfor3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};
    
     // Card Chart data for 4
const cardChartDatafor4 = {
  labels: this.state.yearlyDamagedQtyYears,
  datasets: [
    {
      label: '',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: this.state.yearlyDamagedQty,
    },
  ],
};

const cardChartOptsfor4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};
    


     // Card Chart 2
const cardChartData2 = {
   labels: this.state.yearlyImportedQty,
  datasets: [
    {
      label: '',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: this.state.yearlyImportedQtyYears,
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};


// Card Chart 1
const cardChartData1 = {
  labels:this.state.yearlyAvailableQty,
  datasets: [
    {
      label: '',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: this.state.yearlyAvailableQtyYears,
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

const mainChart1 = {
  // labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  labels:this.state.dailyDates,
  datasets: [
    {
      label: 'Total Available',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      // data: data1,
      data:this.state.dailyAvailable,
    },
   
    {
      label: 'Available Lower Limit',
      backgroundColor: 'transparent',
      borderColor: brandWarning,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
       data: data3, //this.state.average
      // data:this.state.yearlySuppliedQty,
    },
  ],
};

const mainChart1Opts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 10),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: this.state.getWeeklySupply,
    label: 'Supply',
  },
  {
    data: this.state.getWeeklyDemand,
    label: 'Demand',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: this.state.getWeeklySupplyDates,
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};



    return (
      <div className="animated fadeIn">
         <Row>
          <Col sm="6" md="2">
            <Widget04 icon="icon-mouse" color="info" header={this.state.medicineCount} value="0">Medicine</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-home" color="success" header={this.state.getMinistryStoreCount} value="0">Ministry Stores</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-home" color="warning" header={this.state.getRDHSCount} value="0">RDHS</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-home" color="primary" header={this.state.getRDHSHospitalCount} value="0">RDHS Hospitals</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-home" color="danger" header={this.state.getDirectHospitalCount} value="0">Direct Hospitals</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-support" color="info" header={this.state.getVehicleCount} value="0">Vehicles</Widget04>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Daily Stock Variations</CardTitle>
                    {/*<div className="small text-muted">November 2015</div>*/}
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    {/*<Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>*/}
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        {/*<Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>*/}
                        <Button color="outline-secondary" onClick={() => this.mainChartMonth()} >Month</Button>
                        <Button color="outline-secondary" onClick={() => this.mainChartMonth3()} >3 Months</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart1} options={mainChart1Opts} height={300} />
                </div>
              </CardBody>
       
            </Card>
          </Col>
        </Row>
        </div>
    );
  }
}


export default DashboardRDHSAdmin;
