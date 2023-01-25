import { ResponsiveTreeMap } from '@nivo/treemap'
let data = {
    "name": "nivo",
    "color": "hsl(49, 70%, 50%)",
    "children": [
        {
            "name": "viz",
            "color": "hsl(99, 70%, 50%)",
            "children": [
                {
                    "name": "stack",
                    "color": "hsl(312, 70%, 50%)",
                    "children": [
                        {
                            "name": "cchart",
                            "color": "hsl(163, 70%, 50%)",
                            "loc": 161245
                        },
                        {
                            "name": "xAxis",
                            "color": "hsl(234, 70%, 50%)",
                            "loc": 137939
                        },
                        {
                            "name": "yAxis",
                            "color": "hsl(145, 70%, 50%)",
                            "loc": 123288
                        },
                        {
                            "name": "layers",
                            "color": "hsl(142, 70%, 50%)",
                            "loc": 35512
                        }
                    ]
                },
                {
                    "name": "ppie",
                    "color": "hsl(157, 70%, 50%)",
                    "children": [
                        {
                            "name": "chart",
                            "color": "hsl(131, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pie",
                                    "color": "hsl(233, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "outline",
                                            "color": "hsl(32, 70%, 50%)",
                                            "loc": 74078
                                        },
                                        {
                                            "name": "slices",
                                            "color": "hsl(320, 70%, 50%)",
                                            "loc": 136541
                                        },
                                        {
                                            "name": "bbox",
                                            "color": "hsl(102, 70%, 50%)",
                                            "loc": 56642
                                        }
                                    ]
                                },
                                {
                                    "name": "donut",
                                    "color": "hsl(231, 70%, 50%)",
                                    "loc": 75111
                                },
                                {
                                    "name": "gauge",
                                    "color": "hsl(49, 70%, 50%)",
                                    "loc": 192877
                                }
                            ]
                        },
                        {
                            "name": "legends",
                            "color": "hsl(265, 70%, 50%)",
                            "loc": 97659
                        }
                    ]
                }
            ]
        },
        {
            "name": "colors",
            "color": "hsl(310, 70%, 50%)",
            "children": [
                {
                    "name": "rgb",
                    "color": "hsl(295, 70%, 50%)",
                    "loc": 49782
                },
                {
                    "name": "hsl",
                    "color": "hsl(8, 70%, 50%)",
                    "loc": 47081
                }
            ]
        },
        {
            "name": "utils",
            "color": "hsl(257, 70%, 50%)",
            "children": [
                {
                    "name": "randomize",
                    "color": "hsl(59, 70%, 50%)",
                    "loc": 66630
                },
                {
                    "name": "resetClock",
                    "color": "hsl(217, 70%, 50%)",
                    "loc": 182527
                },
                {
                    "name": "noop",
                    "color": "hsl(351, 70%, 50%)",
                    "loc": 186530
                },
                {
                    "name": "tick",
                    "color": "hsl(211, 70%, 50%)",
                    "loc": 193347
                },
                {
                    "name": "forceGC",
                    "color": "hsl(257, 70%, 50%)",
                    "loc": 173414
                },
                {
                    "name": "stackTrace",
                    "color": "hsl(63, 70%, 50%)",
                    "loc": 71055
                },
                {
                    "name": "dbg",
                    "color": "hsl(305, 70%, 50%)",
                    "loc": 83126
                }
            ]
        },
        {
            "name": "generators",
            "color": "hsl(239, 70%, 50%)",
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
                {
                    "name": "animal",
                    "color": "hsl(176, 70%, 50%)",
                    "loc": 551
                },
                {
                    "name": "movie",
                    "color": "hsl(195, 70%, 50%)",
                    "loc": 49535
                },
                {
                    "name": "user",
                    "color": "hsl(203, 70%, 50%)",
                    "loc": 125100
                }
            ]
        },
        {
            "name": "set",
            "color": "hsl(49, 70%, 50%)",
            "children": [
                {
                    "name": "clone",
                    "color": "hsl(315, 70%, 50%)",
                    "loc": 17897
                },
                {
                    "name": "intersect",
                    "color": "hsl(154, 70%, 50%)",
                    "loc": 46007
                },
                {
                    "name": "merge",
                    "color": "hsl(240, 70%, 50%)",
                    "loc": 27512
                },
                {
                    "name": "reverse",
                    "color": "hsl(198, 70%, 50%)",
                    "loc": 149672
                },
                {
                    "name": "toArray",
                    "color": "hsl(182, 70%, 50%)",
                    "loc": 47530
                },
                {
                    "name": "toObject",
                    "color": "hsl(284, 70%, 50%)",
                    "loc": 172241
                },
                {
                    "name": "fromCSV",
                    "color": "hsl(208, 70%, 50%)",
                    "loc": 14143
                },
                {
                    "name": "slice",
                    "color": "hsl(58, 70%, 50%)",
                    "loc": 92942
                },
                {
                    "name": "append",
                    "color": "hsl(227, 70%, 50%)",
                    "loc": 64657
                },
                {
                    "name": "prepend",
                    "color": "hsl(297, 70%, 50%)",
                    "loc": 90320
                },
                {
                    "name": "shuffle",
                    "color": "hsl(200, 70%, 50%)",
                    "loc": 4917
                },
                {
                    "name": "pick",
                    "color": "hsl(219, 70%, 50%)",
                    "loc": 124364
                },
                {
                    "name": "plouc",
                    "color": "hsl(308, 70%, 50%)",
                    "loc": 139965
                }
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