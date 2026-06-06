
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Cond_comp_c9811813550cb16b282979a54f9bb225 = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        (!((reflex___state____state__skillgap_ai___state____state.chart_data_rx_state_?.valueOf?.() === []?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});
