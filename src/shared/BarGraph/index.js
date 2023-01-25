import { ResponsiveBar } from '@nivo/bar'
let data = [
    {
        "country": "Transportation",
        "hot dog": 174,
        "hot dogColor": "hsl(253, 70%, 50%)",

    },

    {
        "country": "Electronics",
        "hot dog": 603,
        "hot dogColor": "hsl(85, 70%, 50%)",

    },
    {
        "country": "Weapons",
        "hot dog": 235,
        "hot dogColor": "hsl(29, 70%, 50%)",

    },
    {
        "country": "HotDogs",
        "hot dog": 194,
        "hot dogColor": "hsl(190, 70%, 50%)",

    },
    {
        "country": "Cheese Burgers",
        "hot dog": 900,
        "hot dogColor": "hsl(265, 70%, 50%)",

    }
]
const BarGraph = () => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 10, right: 20, bottom: 50, left: 20 }}
        padding={0.3}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'category10' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}

        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={null}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={["#ffffff"]}
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
    />
)

export default BarGraph