import { ResponsiveTreeMap } from '@nivo/treemap'
let data = {
    "name": "nivo",
    "color": "hsl(49, 70%, 50%)",
    "children": [


        {
            "name": "set",
            "color": "hsl(49, 70%, 50%)",
            "children": [
                {
                    "name": "address",
                    "color": "hsl(229, 70%, 50%)",
                    "loc": 160889
                },
                {
                    "name": "city",
                    "color": "hsl(328, 70%, 50%)",
                    "loc": 63321
                },
            ]
        },
        {
            "name": "text",
            "color": "hsl(63, 70%, 50%)",
            "children": [
                {
                    "name": "trim",
                    "color": "hsl(43, 70%, 50%)",
                    "loc": 165289
                },
                {
                    "name": "slugify",
                    "color": "hsl(49, 70%, 50%)",
                    "loc": 1904
                },
                {
                    "name": "snakeCase",
                    "color": "hsl(336, 70%, 50%)",
                    "loc": 183362
                },
                {
                    "name": "camelCase",
                    "color": "hsl(298, 70%, 50%)",
                    "loc": 169454
                },
                {
                    "name": "repeat",
                    "color": "hsl(337, 70%, 50%)",
                    "loc": 84560
                },
                {
                    "name": "padLeft",
                    "color": "hsl(344, 70%, 50%)",
                    "loc": 18909
                },
                {
                    "name": "padRight",
                    "color": "hsl(103, 70%, 50%)",
                    "loc": 177720
                },
                {
                    "name": "sanitize",
                    "color": "hsl(267, 70%, 50%)",
                    "loc": 81774
                },
                {
                    "name": "ploucify",
                    "color": "hsl(325, 70%, 50%)",
                    "loc": 194544
                }
            ]
        },
        {
            "name": "misc",
            "color": "hsl(244, 70%, 50%)",
            "children": [
                {
                    "name": "greetings",
                    "color": "hsl(222, 70%, 50%)",
                    "children": [
                        {
                            "name": "hey",
                            "color": "hsl(327, 70%, 50%)",
                            "loc": 95447
                        },
                        {
                            "name": "HOWDY",
                            "color": "hsl(293, 70%, 50%)",
                            "loc": 188972
                        },
                        {
                            "name": "aloha",
                            "color": "hsl(299, 70%, 50%)",
                            "loc": 27714
                        },
                        {
                            "name": "AHOY",
                            "color": "hsl(174, 70%, 50%)",
                            "loc": 51660
                        }
                    ]
                },
                {
                    "name": "other",
                    "color": "hsl(319, 70%, 50%)",
                    "loc": 49961
                },
                {
                    "name": "path",
                    "color": "hsl(151, 70%, 50%)",
                    "children": [
                        {
                            "name": "pathA",
                            "color": "hsl(143, 70%, 50%)",
                            "loc": 146163
                        },
                        {
                            "name": "pathB",
                            "color": "hsl(59, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathB1",
                                    "color": "hsl(329, 70%, 50%)",
                                    "loc": 45940
                                },
                                {
                                    "name": "pathB2",
                                    "color": "hsl(232, 70%, 50%)",
                                    "loc": 66311
                                },
                                {
                                    "name": "pathB3",
                                    "color": "hsl(182, 70%, 50%)",
                                    "loc": 14515
                                },
                                {
                                    "name": "pathB4",
                                    "color": "hsl(78, 70%, 50%)",
                                    "loc": 21734
                                }
                            ]
                        },
                        {
                            "name": "pathC",
                            "color": "hsl(33, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathC1",
                                    "color": "hsl(204, 70%, 50%)",
                                    "loc": 36070
                                },
                                {
                                    "name": "pathC2",
                                    "color": "hsl(242, 70%, 50%)",
                                    "loc": 23767
                                },
                                {
                                    "name": "pathC3",
                                    "color": "hsl(198, 70%, 50%)",
                                    "loc": 67859
                                },
                                {
                                    "name": "pathC4",
                                    "color": "hsl(291, 70%, 50%)",
                                    "loc": 134226
                                },
                                {
                                    "name": "pathC5",
                                    "color": "hsl(201, 70%, 50%)",
                                    "loc": 118939
                                },
                                {
                                    "name": "pathC6",
                                    "color": "hsl(294, 70%, 50%)",
                                    "loc": 24012
                                },
                                {
                                    "name": "pathC7",
                                    "color": "hsl(80, 70%, 50%)",
                                    "loc": 88251
                                },
                                {
                                    "name": "pathC8",
                                    "color": "hsl(180, 70%, 50%)",
                                    "loc": 127832
                                },
                                {
                                    "name": "pathC9",
                                    "color": "hsl(212, 70%, 50%)",
                                    "loc": 9338
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
const TreeGraph = () => (
    <ResponsiveTreeMap
        data={data}
        identity="name"
        value="loc"
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