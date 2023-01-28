import { ResponsiveLine } from '@nivo/line'
let data = [
    {
        "id": "japan",
        "color": "hsl(319, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 187
            },
            {
                "x": "helicopter",
                "y": 33
            },
            {
                "x": "boat",
                "y": 165
            },
            {
                "x": "train",
                "y": 84
            },
            {
                "x": "subway",
                "y": 272
            },
            {
                "x": "bus",
                "y": 293
            },
            {
                "x": "car",
                "y": 117
            },
            {
                "x": "moto",
                "y": 178
            },
            {
                "x": "bicycle",
                "y": 32
            },
            {
                "x": "horse",
                "y": 269
            },
            {
                "x": "skateboard",
                "y": 78
            },
            {
                "x": "others",
                "y": 155
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(233, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 128
            },
            {
                "x": "helicopter",
                "y": 260
            },
            {
                "x": "boat",
                "y": 199
            },
            {
                "x": "train",
                "y": 51
            },
            {
                "x": "subway",
                "y": 294
            },
            {
                "x": "bus",
                "y": 93
            },
            {
                "x": "car",
                "y": 137
            },
            {
                "x": "moto",
                "y": 114
            },
            {
                "x": "bicycle",
                "y": 1
            },
            {
                "x": "horse",
                "y": 276
            },
            {
                "x": "skateboard",
                "y": 6
            },
            {
                "x": "others",
                "y": 229
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(218, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 136
            },
            {
                "x": "helicopter",
                "y": 70
            },
            {
                "x": "boat",
                "y": 288
            },
            {
                "x": "train",
                "y": 86
            },
            {
                "x": "subway",
                "y": 128
            },
            {
                "x": "bus",
                "y": 201
            },
            {
                "x": "car",
                "y": 298
            },
            {
                "x": "moto",
                "y": 279
            },
            {
                "x": "bicycle",
                "y": 135
            },
            {
                "x": "horse",
                "y": 90
            },
            {
                "x": "skateboard",
                "y": 75
            },
            {
                "x": "others",
                "y": 18
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(7, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 246
            },
            {
                "x": "helicopter",
                "y": 87
            },
            {
                "x": "boat",
                "y": 282
            },
            {
                "x": "train",
                "y": 271
            },
            {
                "x": "subway",
                "y": 216
            },
            {
                "x": "bus",
                "y": 162
            },
            {
                "x": "car",
                "y": 226
            },
            {
                "x": "moto",
                "y": 204
            },
            {
                "x": "bicycle",
                "y": 276
            },
            {
                "x": "horse",
                "y": 41
            },
            {
                "x": "skateboard",
                "y": 65
            },
            {
                "x": "others",
                "y": 69
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(302, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 132
            },
            {
                "x": "helicopter",
                "y": 22
            },
            {
                "x": "boat",
                "y": 206
            },
            {
                "x": "train",
                "y": 1
            },
            {
                "x": "subway",
                "y": 143
            },
            {
                "x": "bus",
                "y": 44
            },
            {
                "x": "car",
                "y": 156
            },
            {
                "x": "moto",
                "y": 223
            },
            {
                "x": "bicycle",
                "y": 91
            },
            {
                "x": "horse",
                "y": 203
            },
            {
                "x": "skateboard",
                "y": 39
            },
            {
                "x": "others",
                "y": 236
            }
        ]
    }
]
const LineGraph = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'greys' }}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        enableArea={true}
        legends={[]}
    />
)

export default LineGraph