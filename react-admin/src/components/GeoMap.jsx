import { ResponsiveChoropleth } from '@nivo/geo'
import { useTheme } from "@mui/material";
import { tokens } from '../theme'
import { mockGeographyData as data } from '../data/mockData'
import { geoFeatures } from '../data/mockGeoFeatures'

const GeoMap = ({ isDashBoard = false }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <ResponsiveChoropleth
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100]
                        }
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100]
                        }
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1
                        },
                        text: {
                            fill: colors.grey[100]
                        }
                    }
                },
                legends: {
                    text: {
                        fill: colors.grey[100]
                    }
                }
            }}
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            projectionScale={isDashBoard ? 40 : 150}
            projectionTranslation={isDashBoard ? [0.49, 0.6] : [0.5, 0.5]}
            colors="BuPu"
            domain={[ 0, 1000000 ]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionRotation={[ 0, 0, 0 ]}
            enableGraticule={true}
            graticuleLineWidth={0.1}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#fff"
            legends={ isDashBoard ?
                [
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
                        itemTextColor: colors.grey[100],
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#fff',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
            ] : undefined}
        />
    )
}

export default GeoMap