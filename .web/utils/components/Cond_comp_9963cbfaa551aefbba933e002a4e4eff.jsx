
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Cond_comp_9963cbfaa551aefbba933e002a4e4eff = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        ((reflex___state____state__skillgap_ai___state____state.mode_rx_state_?.valueOf?.() === "skills"?.valueOf?.())?(children?.at?.(0)):(children?.at?.(1)))
    )
});
