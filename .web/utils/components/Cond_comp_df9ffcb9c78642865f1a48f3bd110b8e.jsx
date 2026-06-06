
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Cond_comp_df9ffcb9c78642865f1a48f3bd110b8e = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        (reflex___state____state__skillgap_ai___state____state.analyzed_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});
