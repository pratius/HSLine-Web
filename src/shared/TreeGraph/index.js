import { ResponsiveTreeMap } from '@nivo/treemap'
let data = {
    "name": "nivo",
    "color": "hsl(49, 70%, 50%)",
    "children": [



    ]
}
const TreeGraph = (props) => (
    <ResponsiveTreeMap
        data={{
            "name": "nivo",
            "color": "hsl(49, 70%, 50%)",
            "children": [...props.data]
        }}
        identity="category_name"
        value="value"
        valueFormat=".02s"
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        labelSkipSize={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.2
                ]
            ]
        }}
        parentLabelPosition="left"
        parentLabelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        label="id"

        colors={{ scheme: 'nivo' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.1
                ]
            ]
        }}
    />
)

export default TreeGraph