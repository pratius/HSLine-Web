import { ResponsiveChoropleth } from '@nivo/geo'
import data from "./data";
import countries from "./world_countries.json";

const getColor = ["#b6b6b6", "#000000"];

const GeoMap = () => (
    <ResponsiveChoropleth
        data={data}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors={getColor}
        domain={[0, 1]}
        unknownColor="#b6b6b6"
        valueFormat=".2s"
        projectionScale={130}
        projectionTranslation={[0.5, 0.5]}
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
                <span>Look, I'm custom :</span>
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