import { ResponsiveChoropleth } from '@nivo/geo'
import countries from "./world_countries.json";
import dummyData from "./data"
const getColor = ["#c0392b", "#27ae60"];

const GeoMap = (props) => (
    <ResponsiveChoropleth
        data={props.data || dummyData}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors={getColor}
        domain={[0, 1]}
        unknownColor="#b6b6b6"
        valueFormat=".2s"
        projectionScale={113}
        projectionTranslation={[0.5, 0.7]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="#ffffff"
        borderWidth={0.5}
        borderColor={{ theme: "background" }}
        tooltip={(data, color) => (
            <div
                style={{
                    padding: 12,
                    color,
                    background: "#ffffff"
                }}
            >
                <span>Ranking</span>
                <br />
                <strong>
                    <span>{data.feature.properties.name}</span>
                </strong>
                <br />
                <strong>
                    {data.feature.id}: {data.feature.value}
                </strong>
            </div>
        )}
    />
)

export default GeoMap