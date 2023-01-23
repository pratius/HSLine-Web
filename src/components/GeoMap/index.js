import { ResponsiveChoropleth } from '@nivo/geo'
let mapData = [
    {
        "id": "AFG",
        "value": 674991
    },
    {
        "id": "AGO",
        "value": 89356
    },
    {
        "id": "ALB",
        "value": 59979
    },
    {
        "id": "ARE",
        "value": 101727
    },
    {
        "id": "ARG",
        "value": 381541
    },
    {
        "id": "ARM",
        "value": 977238
    },
    {
        "id": "ATA",
        "value": 558881
    },
    {
        "id": "ATF",
        "value": 254235
    },
    {
        "id": "AUT",
        "value": 713079
    },
    {
        "id": "AZE",
        "value": 675095
    },
    {
        "id": "BDI",
        "value": 897604
    },
    {
        "id": "BEL",
        "value": 796971
    },
    {
        "id": "BEN",
        "value": 863877
    },
    {
        "id": "BFA",
        "value": 321434
    },
    {
        "id": "BGD",
        "value": 602081
    },
    {
        "id": "BGR",
        "value": 869659
    },
    {
        "id": "BHS",
        "value": 447862
    },
    {
        "id": "BIH",
        "value": 777574
    },
    {
        "id": "BLR",
        "value": 171078
    },
    {
        "id": "BLZ",
        "value": 386182
    },
    {
        "id": "BOL",
        "value": 386595
    },
    {
        "id": "BRN",
        "value": 638918
    },
    {
        "id": "BTN",
        "value": 444905
    },
    {
        "id": "BWA",
        "value": 828
    },
    {
        "id": "CAF",
        "value": 344481
    },
    {
        "id": "CAN",
        "value": 563161
    },
    {
        "id": "CHE",
        "value": 866319
    },
    {
        "id": "CHL",
        "value": 619073
    },
    {
        "id": "CHN",
        "value": 525161
    },
    {
        "id": "CIV",
        "value": 401528
    },
    {
        "id": "CMR",
        "value": 405500
    },
    {
        "id": "COG",
        "value": 831848
    },
    {
        "id": "COL",
        "value": 133737
    },
    {
        "id": "CRI",
        "value": 116169
    },
    {
        "id": "CUB",
        "value": 248683
    },
    {
        "id": "-99",
        "value": 413898
    },
    {
        "id": "CYP",
        "value": 264345
    },
    {
        "id": "CZE",
        "value": 766464
    },
    {
        "id": "DEU",
        "value": 149104
    },
    {
        "id": "DJI",
        "value": 355648
    },
    {
        "id": "DNK",
        "value": 454512
    },
    {
        "id": "DOM",
        "value": 411498
    },
    {
        "id": "DZA",
        "value": 431570
    },
    {
        "id": "ECU",
        "value": 505268
    },
    {
        "id": "EGY",
        "value": 121086
    },
    {
        "id": "ERI",
        "value": 33918
    },
    {
        "id": "ESP",
        "value": 545665
    },
    {
        "id": "EST",
        "value": 178422
    },
    {
        "id": "ETH",
        "value": 344909
    },
    {
        "id": "FIN",
        "value": 9407
    },
    {
        "id": "FJI",
        "value": 245530
    },
    {
        "id": "FLK",
        "value": 539889
    },
    {
        "id": "FRA",
        "value": 909114
    },
    {
        "id": "GAB",
        "value": 485795
    },
    {
        "id": "GBR",
        "value": 756775
    },
    {
        "id": "GEO",
        "value": 300882
    },
    {
        "id": "GHA",
        "value": 875060
    },
    {
        "id": "GIN",
        "value": 65922
    },
    {
        "id": "GMB",
        "value": 198263
    },
    {
        "id": "GNB",
        "value": 915817
    },
    {
        "id": "GNQ",
        "value": 352106
    },
    {
        "id": "GRC",
        "value": 403436
    },
    {
        "id": "GTM",
        "value": 779986
    },
    {
        "id": "GUY",
        "value": 929002
    },
    {
        "id": "HND",
        "value": 124952
    },
    {
        "id": "HRV",
        "value": 800878
    },
    {
        "id": "HTI",
        "value": 231631
    },
    {
        "id": "HUN",
        "value": 845120
    },
    {
        "id": "IDN",
        "value": 196143
    },
    {
        "id": "IND",
        "value": 967728
    },
    {
        "id": "IRL",
        "value": 473399
    },
    {
        "id": "IRN",
        "value": 18040
    },
    {
        "id": "IRQ",
        "value": 146953
    },
    {
        "id": "ISL",
        "value": 703171
    },
    {
        "id": "ISR",
        "value": 958095
    },
    {
        "id": "ITA",
        "value": 509837
    },
    {
        "id": "JAM",
        "value": 676936
    },
    {
        "id": "JOR",
        "value": 510404
    },
    {
        "id": "JPN",
        "value": 759916
    },
    {
        "id": "KAZ",
        "value": 719388
    },
    {
        "id": "KEN",
        "value": 183431
    },
    {
        "id": "KGZ",
        "value": 974734
    },
    {
        "id": "KHM",
        "value": 577257
    },
    {
        "id": "OSA",
        "value": 815720
    },
    {
        "id": "KWT",
        "value": 582751
    },
    {
        "id": "LAO",
        "value": 844818
    },
    {
        "id": "LBN",
        "value": 325879
    },
    {
        "id": "LBR",
        "value": 126278
    },
    {
        "id": "LBY",
        "value": 167933
    },
    {
        "id": "LKA",
        "value": 928877
    },
    {
        "id": "LSO",
        "value": 247320
    },
    {
        "id": "LTU",
        "value": 42656
    },
    {
        "id": "LUX",
        "value": 122276
    },
    {
        "id": "LVA",
        "value": 499165
    },
    {
        "id": "MAR",
        "value": 425753
    },
    {
        "id": "MDA",
        "value": 327391
    },
    {
        "id": "MDG",
        "value": 726394
    },
    {
        "id": "MEX",
        "value": 475543
    },
    {
        "id": "MKD",
        "value": 490815
    },
    {
        "id": "MLI",
        "value": 162869
    },
    {
        "id": "MMR",
        "value": 365895
    },
    {
        "id": "MNE",
        "value": 300900
    },
    {
        "id": "MNG",
        "value": 515651
    },
    {
        "id": "MOZ",
        "value": 490635
    },
    {
        "id": "MRT",
        "value": 442110
    },
    {
        "id": "MWI",
        "value": 677854
    },
    {
        "id": "MYS",
        "value": 837747
    },
    {
        "id": "NAM",
        "value": 541214
    },
    {
        "id": "NCL",
        "value": 558197
    },
    {
        "id": "NER",
        "value": 674582
    },
    {
        "id": "NGA",
        "value": 906803
    },
    {
        "id": "NIC",
        "value": 670185
    },
    {
        "id": "NLD",
        "value": 323787
    },
    {
        "id": "NOR",
        "value": 752846
    },
    {
        "id": "NPL",
        "value": 207174
    },
    {
        "id": "NZL",
        "value": 369467
    },
    {
        "id": "OMN",
        "value": 912116
    },
    {
        "id": "PAK",
        "value": 737553
    },
    {
        "id": "PAN",
        "value": 442609
    },
    {
        "id": "PER",
        "value": 60947
    },
    {
        "id": "PHL",
        "value": 913607
    },
    {
        "id": "PNG",
        "value": 651589
    },
    {
        "id": "POL",
        "value": 636601
    },
    {
        "id": "PRI",
        "value": 365005
    },
    {
        "id": "PRT",
        "value": 9175
    },
    {
        "id": "PRY",
        "value": 552085
    },
    {
        "id": "QAT",
        "value": 695504
    },
    {
        "id": "ROU",
        "value": 230064
    },
    {
        "id": "RUS",
        "value": 393112
    },
    {
        "id": "RWA",
        "value": 89193
    },
    {
        "id": "ESH",
        "value": 547849
    },
    {
        "id": "SAU",
        "value": 666035
    },
    {
        "id": "SDN",
        "value": 546673
    },
    {
        "id": "SDS",
        "value": 60247
    },
    {
        "id": "SEN",
        "value": 702408
    },
    {
        "id": "SLB",
        "value": 587937
    },
    {
        "id": "SLE",
        "value": 138740
    },
    {
        "id": "SLV",
        "value": 367667
    },
    {
        "id": "ABV",
        "value": 433199
    },
    {
        "id": "SOM",
        "value": 941184
    },
    {
        "id": "SRB",
        "value": 624207
    },
    {
        "id": "SUR",
        "value": 61087
    },
    {
        "id": "SVK",
        "value": 426994
    },
    {
        "id": "SVN",
        "value": 917618
    },
    {
        "id": "SWZ",
        "value": 564386
    },
    {
        "id": "SYR",
        "value": 517566
    },
    {
        "id": "TCD",
        "value": 715768
    },
    {
        "id": "TGO",
        "value": 24330
    },
    {
        "id": "THA",
        "value": 620086
    },
    {
        "id": "TJK",
        "value": 353205
    },
    {
        "id": "TKM",
        "value": 469404
    },
    {
        "id": "TLS",
        "value": 886631
    },
    {
        "id": "TTO",
        "value": 75878
    },
    {
        "id": "TUN",
        "value": 627438
    },
    {
        "id": "TUR",
        "value": 440394
    },
    {
        "id": "TWN",
        "value": 393398
    },
    {
        "id": "TZA",
        "value": 354899
    },
    {
        "id": "UGA",
        "value": 864478
    },
    {
        "id": "UKR",
        "value": 34202
    },
    {
        "id": "URY",
        "value": 701798
    },
    {
        "id": "USA",
        "value": 519850
    },
    {
        "id": "UZB",
        "value": 529390
    },
    {
        "id": "VEN",
        "value": 626190
    },
    {
        "id": "VNM",
        "value": 930235
    },
    {
        "id": "VUT",
        "value": 375589
    },
    {
        "id": "PSE",
        "value": 141580
    },
    {
        "id": "YEM",
        "value": 45463
    },
    {
        "id": "ZAF",
        "value": 805915
    },
    {
        "id": "ZMB",
        "value": 379426
    },
    {
        "id": "ZWE",
        "value": 683896
    },
    {
        "id": "KOR",
        "value": 29714
    }
]
const GeoMap = () => (
    <ResponsiveChoropleth
        data={mapData}
        features="/* please have a look at the description for usage */"
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
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
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default GeoMap