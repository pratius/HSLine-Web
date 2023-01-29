import { ResponsiveHeatMap } from '@nivo/heatmap'

let data =[
    {
      "id": "Japan",
      "data": [
        {
          "x": "Rice",
          "y": -72800
        },
        {
          "x": "Wheat",
          "y": -5804
        },
        {
          "x": "Tomato",
          "y": 59724
        },
        {
          "x": "Potato",
          "y": -34362
        },
        {
          "x": "Banana",
          "y": 17598
        },
        {
          "x": "Apple",
          "y": -86401
        },
        {
          "x": "Onion",
          "y": 66684
        },
        {
          "x": "Chilli",
          "y": -42725
        },
        {
          "x": "Others",
          "y": -24781
        }
      ]
    },
    {
      "id": "France",
      "data": [
        {
          "x": "Rice",
          "y": 93171
        },
        {
          "x": "Wheat",
          "y": -50988
        },
        {
          "x": "Tomato",
          "y": 87456
        },
        {
          "x": "Potato",
          "y": 55596
        },
        {
          "x": "Banana",
          "y": -41143
        },
        {
          "x": "Apple",
          "y": 41744
        },
        {
          "x": "Onion",
          "y": -52606
        },
        {
          "x": "Chilli",
          "y": -65526
        },
        {
          "x": "Others",
          "y": -82524
        }
      ]
    },
    {
      "id": "US",
      "data": [
        {
          "x": "Rice",
          "y": -30862
        },
        {
          "x": "Wheat",
          "y": -32590
        },
        {
          "x": "Tomato",
          "y": -97722
        },
        {
          "x": "Potato",
          "y": 17971
        },
        {
          "x": "Banana",
          "y": 33753
        },
        {
          "x": "Apple",
          "y": -8285
        },
        {
          "x": "Onion",
          "y": 42963
        },
        {
          "x": "Chilli",
          "y": -18479
        },
        {
          "x": "Others",
          "y": -94997
        }
      ]
    },
    {
      "id": "Germany",
      "data": [
        {
          "x": "Rice",
          "y": -96081
        },
        {
          "x": "Wheat",
          "y": -15134
        },
        {
          "x": "Tomato",
          "y": 83854
        },
        {
          "x": "Potato",
          "y": -61938
        },
        {
          "x": "Banana",
          "y": 90163
        },
        {
          "x": "Apple",
          "y": -34096
        },
        {
          "x": "Onion",
          "y": -50577
        },
       
        {
          "x": "Chilli",
          "y": -24194
        }
      ]
    },
    {
      "id": "Norway",
      "data": [
        {
          "x": "Rice",
          "y": 17101
        },
        {
          "x": "Wheat",
          "y": 6520
        },
        {
          "x": "Tomato",
          "y": -210
        },
        {
          "x": "Potato",
          "y": 62584
        },
        {
          "x": "Banana",
          "y": -50440
        },
        {
          "x": "Apple",
          "y": 34717
        },
        {
          "x": "Onion",
          "y": -80069
        },
        {
          "x": "Chilli",
          "y": 17949
        },
        {
          "x": "Others",
          "y": 12672
        }
      ]
    },
    {
      "id": "Iceland",
      "data": [
        {
          "x": "Rice",
          "y": 42557
        },
        {
          "x": "Wheat",
          "y": 95187
        },
        {
          "x": "Tomato",
          "y": -64109
        },
        {
          "x": "Potato",
          "y": 96861
        },
        {
          "x": "Banana",
          "y": 86672
        },
        {
          "x": "Apple",
          "y": 51606
        },
        {
          "x": "Onion",
          "y": -64771
        },
        {
          "x": "Chilli",
          "y": 3716
        },
        {
          "x": "Others",
          "y": -54604
        }
      ]
    },
    {
      "id": "UK",
      "data": [
        {
            "x": "Wheat",
          "y": -56632
        },
        {
            "x": "Tomato",
          "y": 20815
        },
        {
            "x": "Potato",
          "y": -79496
        },
        {
            "x": "Banana",
          "y": 12547
        },
        {
            "x": "Apple",
          "y": 86712
        },
        {
            "x": "Onion",
          "y": 2840
        },
        {
            "x": "Onion",
          "y": -59639
        },
        {
            "x": "Chilli",
          "y": -53785
        },
        {
          "x": "Others",
          "y": -18780
        }
      ]
    },
    {
      "id": "Vietnam",
      "data": [
        {
          "x": "Rice",
          "y": -62755
        },
        {
          "x": "Wheat",
          "y": -98048
        },
        {
          "x": "Tomato",
          "y": 97413
        },
        {
          "x": "Potato",
          "y": -74188
        },
        {
          "x": "Banana",
          "y": -66212
        },
        {
          "x": "Apple",
          "y": -22274
        },
        {
          "x": "Onion",
          "y": 43911
        },
        {
          "x": "Chilli",
          "y": -35783
        },
        {
          "x": "Others",
          "y": 49906
        }
      ]
    }
  ]
const HeatMap = () => (
    <ResponsiveHeatMap
        data={data}
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        valueFormat=">-.2s"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -90,
            legend: '',
            legendOffset: 46
        }}
        axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 70
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: -72
        }}
        colors={{
            type: 'diverging',
            scheme: 'red_yellow_blue',
            divergeAt: 0.5,
            minValue: -100000,
            maxValue: 100000
        }}
        emptyColor="#555555"
        legends={[
            {
                anchor: 'bottom',
                translateX: 0,
                translateY: 30,
                length: 400,
                thickness: 8,
                direction: 'row',
                tickPosition: 'after',
                tickSize: 3,
                tickSpacing: 4,
                tickOverlap: false,
                tickFormat: '>-.2s',
                title: 'Value →',
                titleAlign: 'start',
                titleOffset: 4
            }
        ]}
    />
)

export default HeatMap