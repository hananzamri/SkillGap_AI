
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue,pyAnd} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Cond_comp_40a756728b734ae0011c7d09343c3c87 = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        (pyAnd(!(reflex___state____state__skillgap_ai___state____state.analyzed_rx_state_), () => (!(reflex___state____state__skillgap_ai___state____state.loading_rx_state_)))?(children?.at?.(0)):(children?.at?.(1)))
    )
});
