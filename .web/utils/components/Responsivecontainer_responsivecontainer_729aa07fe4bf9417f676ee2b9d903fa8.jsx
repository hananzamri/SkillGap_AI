
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {PolarAngleAxis as RechartsPolarAngleAxis,RadialBar as RechartsRadialBar,ResponsiveContainer as RechartsResponsiveContainer} from "recharts"
import {ClientSide,StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"

const RechartsRadialBarChart = ClientSide(() => import('recharts').then((mod) => mod.RadialBarChart))




export const Responsivecontainer_responsivecontainer_729aa07fe4bf9417f676ee2b9d903fa8 = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        jsx(RechartsResponsiveContainer,{height:250,minHeight:10,minWidth:10,width:"100%"},jsx(RechartsRadialBarChart,{data:[({ ["name"] : "score", ["value"] : reflex___state____state__skillgap_ai___state____state.score_rx_state_ })],height:"100%",innerRadius:"70%",outerRadius:"100%",width:"100%"},jsx(RechartsRadialBar,{dataKey:"value",wrapperStyle:({ ["fill"] : "#3182CE" })},),jsx(RechartsPolarAngleAxis,{stroke:"var(--gray-10)",tickLine:false,wrapperStyle:({ ["type"] : "number", ["domain"] : [0, 10] })},)))
    )
});
