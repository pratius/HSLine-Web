import { ResponsiveTreeMap } from '@nivo/treemap'
let treeData = {
    "name": "nivo",
    "color": "hsl(350, 70%, 50%)",
    "children": [
        {
            "name": "viz",
            "color": "hsl(168, 70%, 50%)",
            "children": [
                {
                    "name": "stack",
                    "color": "hsl(287, 70%, 50%)",
                    "children": [
                        {
                            "name": "cchart",
                            "color": "hsl(211, 70%, 50%)",
                            "loc": 163583
                        },
                        {
                            "name": "xAxis",
                            "color": "hsl(63, 70%, 50%)",
                            "loc": 132627
                        },
                        {
                            "name": "yAxis",
                            "color": "hsl(282, 70%, 50%)",
                            "loc": 73403
                        },
                        {
                            "name": "layers",
                            "color": "hsl(7, 70%, 50%)",
                            "loc": 98009
                        }
                    ]
                },
                {
                    "name": "ppie",
                    "color": "hsl(41, 70%, 50%)",
                    "children": [
                        {
                            "name": "chart",
                            "color": "hsl(154, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pie",
                                    "color": "hsl(102, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "outline",
                                            "color": "hsl(11, 70%, 50%)",
                                            "loc": 190455
                                        },
                                        {
                                            "name": "slices",
                                            "color": "hsl(180, 70%, 50%)",
                                            "loc": 64801
                                        },
                                        {
                                            "name": "bbox",
                                            "color": "hsl(328, 70%, 50%)",
                                            "loc": 164849
                                        }
                                    ]
                                },
                                {
                                    "name": "donut",
                                    "color": "hsl(21, 70%, 50%)",
                                    "loc": 8531
                                },
                                {
                                    "name": "gauge",
                                    "color": "hsl(45, 70%, 50%)",
                                    "loc": 35657
                                }
                            ]
                        },
                        {
                            "name": "legends",
                            "color": "hsl(274, 70%, 50%)",
                            "loc": 18815
                        }
                    ]
                }
            ]
        },
        {
            "name": "colors",
            "color": "hsl(168, 70%, 50%)",
            "children": [
                {
                    "name": "rgb",
                    "color": "hsl(312, 70%, 50%)",
                    "loc": 178534
                },
                {
                    "name": "hsl",
                    "color": "hsl(18, 70%, 50%)",
                    "loc": 73756
                }
            ]
        },
        {
            "name": "utils",
            "color": "hsl(189, 70%, 50%)",
            "children": [
                {
                    "name": "randomize",
                    "color": "hsl(29, 70%, 50%)",
                    "loc": 80235
                },
                {
                    "name": "resetClock",
                    "color": "hsl(340, 70%, 50%)",
                    "loc": 133387
                },
                {
                    "name": "noop",
                    "color": "hsl(92, 70%, 50%)",
                    "loc": 34930
                },
                {
                    "name": "tick",
                    "color": "hsl(155, 70%, 50%)",
                    "loc": 56943
                },
                {
                    "name": "forceGC",
                    "color": "hsl(345, 70%, 50%)",
                    "loc": 9291
                },
                {
                    "name": "stackTrace",
                    "color": "hsl(173, 70%, 50%)",
                    "loc": 80485
                },
                {
                    "name": "dbg",
                    "color": "hsl(117, 70%, 50%)",
                    "loc": 110108
                }
            ]
        },
        {
            "name": "generators",
            "color": "hsl(14, 70%, 50%)",
            "children": [
                {
                    "name": "address",
                    "color": "hsl(16, 70%, 50%)",
                    "loc": 38117
                },
                {
                    "name": "city",
                    "color": "hsl(27, 70%, 50%)",
                    "loc": 63819
                },
                {
                    "name": "animal",
                    "color": "hsl(188, 70%, 50%)",
                    "loc": 126459
                },
                {
                    "name": "movie",
                    "color": "hsl(221, 70%, 50%)",
                    "loc": 64781
                },
                {
                    "name": "user",
                    "color": "hsl(301, 70%, 50%)",
                    "loc": 108087
                }
            ]
        },
        {
            "name": "set",
            "color": "hsl(188, 70%, 50%)",
            "children": [
                {
                    "name": "clone",
                    "color": "hsl(106, 70%, 50%)",
                    "loc": 130563
                },
                {
                    "name": "intersect",
                    "color": "hsl(96, 70%, 50%)",
                    "loc": 117536
                },
                {
                    "name": "merge",
                    "color": "hsl(57, 70%, 50%)",
                    "loc": 199612
                },
                {
                    "name": "reverse",
                    "color": "hsl(193, 70%, 50%)",
                    "loc": 52420
                },
                {
                    "name": "toArray",
                    "color": "hsl(273, 70%, 50%)",
                    "loc": 74320
                },
                {
                    "name": "toObject",
                    "color": "hsl(150, 70%, 50%)",
                    "loc": 171104
                },
                {
                    "name": "fromCSV",
                    "color": "hsl(140, 70%, 50%)",
                    "loc": 64915
                },
                {
                    "name": "slice",
                    "color": "hsl(330, 70%, 50%)",
                    "loc": 139119
                },
                {
                    "name": "append",
                    "color": "hsl(108, 70%, 50%)",
                    "loc": 66035
                },
                {
                    "name": "prepend",
                    "color": "hsl(219, 70%, 50%)",
                    "loc": 120930
                },
                {
                    "name": "shuffle",
                    "color": "hsl(333, 70%, 50%)",
                    "loc": 170948
                },
                {
                    "name": "pick",
                    "color": "hsl(263, 70%, 50%)",
                    "loc": 131974
                },
                {
                    "name": "plouc",
                    "color": "hsl(277, 70%, 50%)",
                    "loc": 120538
                }
            ]
        },
        {
            "name": "text",
            "color": "hsl(226, 70%, 50%)",
            "children": [
                {
                    "name": "trim",
                    "color": "hsl(224, 70%, 50%)",
                    "loc": 946
                },
                {
                    "name": "slugify",
                    "color": "hsl(245, 70%, 50%)",
                    "loc": 119053
                },
                {
                    "name": "snakeCase",
                    "color": "hsl(72, 70%, 50%)",
                    "loc": 198158
                },
                {
                    "name": "camelCase",
                    "color": "hsl(242, 70%, 50%)",
                    "loc": 152928
                },
                {
                    "name": "repeat",
                    "color": "hsl(65, 70%, 50%)",
                    "loc": 154772
                },
                {
                    "name": "padLeft",
                    "color": "hsl(95, 70%, 50%)",
                    "loc": 144590
                },
                {
                    "name": "padRight",
                    "color": "hsl(195, 70%, 50%)",
                    "loc": 14744
                },
                {
                    "name": "sanitize",
                    "color": "hsl(256, 70%, 50%)",
                    "loc": 110635
                },
                {
                    "name": "ploucify",
                    "color": "hsl(294, 70%, 50%)",
                    "loc": 105457
                }
            ]
        },
        {
            "name": "misc",
            "color": "hsl(70, 70%, 50%)",
            "children": [
                {
                    "name": "greetings",
                    "color": "hsl(200, 70%, 50%)",
                    "children": [
                        {
                            "name": "hey",
                            "color": "hsl(180, 70%, 50%)",
                            "loc": 68040
                        },
                        {
                            "name": "HOWDY",
                            "color": "hsl(355, 70%, 50%)",
                            "loc": 25512
                        },
                        {
                            "name": "aloha",
                            "color": "hsl(102, 70%, 50%)",
                            "loc": 135532
                        },
                        {
                            "name": "AHOY",
                            "color": "hsl(156, 70%, 50%)",
                            "loc": 79082
                        }
                    ]
                },
                {
                    "name": "other",
                    "color": "hsl(334, 70%, 50%)",
                    "loc": 193505
                },
                {
                    "name": "path",
                    "color": "hsl(264, 70%, 50%)",
                    "children": [
                        {
                            "name": "pathA",
                            "color": "hsl(34, 70%, 50%)",
                            "loc": 2709
                        },
                        {
                            "name": "pathB",
                            "color": "hsl(10, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathB1",
                                    "color": "hsl(228, 70%, 50%)",
                                    "loc": 15764
                                },
                                {
                                    "name": "pathB2",
                                    "color": "hsl(143, 70%, 50%)",
                                    "loc": 164973
                                },
                                {
                                    "name": "pathB3",
                                    "color": "hsl(102, 70%, 50%)",
                                    "loc": 36862
                                },
                                {
                                    "name": "pathB4",
                                    "color": "hsl(266, 70%, 50%)",
                                    "loc": 30101
                                }
                            ]
                        },
                        {
                            "name": "pathC",
                            "color": "hsl(249, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathC1",
                                    "color": "hsl(322, 70%, 50%)",
                                    "loc": 190358
                                },
                                {
                                    "name": "pathC2",
                                    "color": "hsl(149, 70%, 50%)",
                                    "loc": 85789
                                },
                                {
                                    "name": "pathC3",
                                    "color": "hsl(204, 70%, 50%)",
                                    "loc": 182748
                                },
                                {
                                    "name": "pathC4",
                                    "color": "hsl(102, 70%, 50%)",
                                    "loc": 56274
                                },
                                {
                                    "name": "pathC5",
                                    "color": "hsl(322, 70%, 50%)",
                                    "loc": 78532
                                },
                                {
                                    "name": "pathC6",
                                    "color": "hsl(214, 70%, 50%)",
                                    "loc": 92515
                                },
                                {
                                    "name": "pathC7",
                                    "color": "hsl(329, 70%, 50%)",
                                    "loc": 158245
                                },
                                {
                                    "name": "pathC8",
                                    "color": "hsl(45, 70%, 50%)",
                                    "loc": 98893
                                },
                                {
                                    "name": "pathC9",
                                    "color": "hsl(194, 70%, 50%)",
                                    "loc": 182450
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
const TreeGraph = (props) => (
    <ResponsiveTreeMap
        data={(props.data && props.data.length > 0) ? {
            "name": "nivo",
            "color": "hsl(49, 70%, 50%)",
            "children": [...props.data]
        } : treeData}
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