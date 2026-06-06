
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {Box as RadixThemesBox} from "@radix-ui/themes"
import {StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Box_box_b478063fce118a94f0a0baceff36dcc4 = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        jsx(RadixThemesBox,{css:({ ["--score"] : reflex___state____state__skillgap_ai___state____state.score_rx_state_, ["background"] : "conic-gradient(from 0deg, #2563EB calc(var(--score)*1%), #E2E8F0 0%)", ["borderRadius"] : "50%", ["width"] : "150px", ["height"] : "150px", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["position"] : "relative", ["&:before"] : ({ ["content"] : "\"\"", ["position"] : "absolute", ["borderRadius"] : "50%", ["background"] : "#FFFFFF", ["width"] : "110px", ["height"] : "110px" }) })},children)
    )
});
