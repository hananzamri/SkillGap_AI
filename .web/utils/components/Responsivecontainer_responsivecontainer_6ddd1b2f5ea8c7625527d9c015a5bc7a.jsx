
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Bar as RechartsBar,ResponsiveContainer as RechartsResponsiveContainer,XAxis as RechartsXAxis,YAxis as RechartsYAxis} from "recharts"
import {ClientSide,StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"

const RechartsBarChart = ClientSide(() => import('recharts').then((mod) => mod.BarChart))




export const Responsivecontainer_responsivecontainer_6ddd1b2f5ea8c7625527d9c015a5bc7a = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        jsx(RechartsResponsiveContainer,{height:300,minHeight:10,minWidth:10,width:"100%"},jsx(RechartsBarChart,{data:reflex___state____state__skillgap_ai___state____state.chart_data_rx_state_,height:"100%",width:"100%"},jsx(RechartsXAxis,{dataKey:"skill",stroke:"var(--gray-9)"},),jsx(RechartsYAxis,{stroke:"var(--gray-9)"},),jsx(RechartsBar,{dataKey:"score",fill:"var(--accent-9)"},)))
    )
});
