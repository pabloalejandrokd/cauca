declare var require: any

import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import * as HC_map from 'highcharts/modules/map';
import * as $ from 'jquery';
import { Nvd3 } from '../../node_modules/angular-nvd3';

HC_map(Highcharts);
require('../../js/map')(Highcharts);


Highcharts.setOptions({
  title: {
    style: {
      color: 'orange'
    }
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tangara';
  options = {
    chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 55
        },
        x: function(d){ return d.label; },
        y: function(d){ return d.value; },
        showValues: true,
        valueFormat: function(d){
            return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
            axisLabel: 'X Axis'
        },
        yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 30
        }
    }
};

  public ngOnInit()
  {
    $(document).ready(function(){
       console.log('äsasassa');
       
      $('.highcharts-point').each(function(){
          
          $(this).click(function(){
              if($(this).hasClass('current')){
                $('.highcharts-point').removeClass('current');
              }else{
                $('.highcharts-point').removeClass('current');
                $(this).toggleClass('current');
              }
          })

      });
    });

  }


  Highcharts = Highcharts;
  chartMap = {
    chart: {
      map: 'colombia'
    },
    title: {
      text: 'Departamento del Cauca'
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    series: [{
      name: 'Random data',
      states: {
          hover: {
              color: '#BADA55'
          }
      },
      dataLabels: {
          enabled: true,
          format: '{point.name}'
      },
      allAreas: false,
      data: [
        ['co-sa', 0],
        ['co-ca', 1],
        ['co-na', 2],
        ['co-ch', 3],
        ['co-3653', 4],
        ['co-to', 5],
        ['co-cq', 6],
        ['co-hu', 7],
        ['co-pu', 8],
        ['co-am', 9],
        ['co-bl', 10],
        ['co-vc', 11],
        ['co-su', 12],
        ['co-at', 13],
        ['co-ce', 14],
        ['co-lg', 15],
        ['co-ma', 16],
        ['co-ar', 17],
        ['co-ns', 18],
        ['co-cs', 19],
        ['co-gv', 20],
        ['co-me', 21],
        ['co-vp', 22],
        ['co-vd', 23],
        ['co-an', 24],
        ['co-co', 25],
        ['co-by', 26],
        ['co-st', 27],
        ['co-cl', 28],
        ['co-cu', 29],
        ['co-1136', 30],
        ['co-ri', 31],
        ['co-qd', 32],
        ['co-gn', 33]
      ]

    }]
  }

}
