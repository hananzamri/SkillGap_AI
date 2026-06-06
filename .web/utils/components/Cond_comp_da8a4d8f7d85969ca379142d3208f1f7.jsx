
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Cond_comp_da8a4d8f7d85969ca379142d3208f1f7 = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        ((reflex___state____state__skillgap_ai___state____state.live_jobs_rx_state_.length > 0)?(children?.at?.(0)):(children?.at?.(1)))
    )
});
