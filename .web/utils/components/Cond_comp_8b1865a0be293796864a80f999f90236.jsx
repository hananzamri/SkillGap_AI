
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Cond_comp_8b1865a0be293796864a80f999f90236 = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        (reflex___state____state__skillgap_ai___state____state.loading_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});
