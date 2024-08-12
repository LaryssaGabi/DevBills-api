import { ResponsivePie } from "@nivo/pie"
import { useMemo } from "react";
import { theme } from "../../styles/theme";
import { formatCurrency } from "../../utils/format-currency";

const apiData = [
    {
        _Id: "1",
        title: 'Alimetação',
        amount: 30000,
        color: "#ff33bb"
    },
    {
        _Id: "2",
        title: 'Compras',
        amount: 50000,
        color: "#176886"
    },
    {
        _Id: "3",
        title: 'Pet',
        amount: 40000,
        color: "#84151d"
    },
]

type ChartData = {
    id: string;
    label: string;
    externalId: string;
    value: number;
    color: string;
}

export function CatgeoriesPieChart() {
    const data = useMemo<ChartData[]>(() => {
        const chartData: ChartData[] = apiData.map((item) => ({
            id: item.title,
            label: item.title,
            externalId: item._Id,
            value: item.amount,
            color: item.color
        }))

        return chartData;
    }, [])
    return (
        <ResponsivePie
            data={data}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            colors={({ data }) => data.color}
            margin={{ top: 20}}
            valueFormat={formatCurrency}
            theme={{
                text: {
                    fontFamily: 'Lexend',
                    fontSize: 10,
                },
                tooltip: {
                    container: {
                        backgroundColor: theme.colors.black,
                        padding: 16,
                        color: theme.colors.white,
                        fontFamily: 'Lexend',
                        fontSize: 12,
                        borderRadius: 4,
                    }
                }
            }}
            legends={[
                {
                    anchor: 'top',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: -20,
                    itemWidth: 120,
                    itemHeight: 16,
                    itemTextColor: theme.colors.neutral,
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 10,
                    symbolShape: 'circle'
                }
            ]}

        />
    )
}