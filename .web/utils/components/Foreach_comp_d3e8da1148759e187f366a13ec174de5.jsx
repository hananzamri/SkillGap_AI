
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {Box as RadixThemesBox,Flex as RadixThemesFlex,Text as RadixThemesText} from "@radix-ui/themes"
import {jsx} from "@emotion/react"






export const Foreach_comp_d3e8da1148759e187f366a13ec174de5 = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        Array.prototype.map.call(reflex___state____state__skillgap_ai___state____state.job_suggestions_rx_state_ ?? [],((j_rx_state_,index_56acf455be829058a993755c9d247b18)=>(jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",key:index_56acf455be829058a993755c9d247b18,gap:"2"},jsx(RadixThemesBox,{css:({ ["width"] : "7px", ["height"] : "7px", ["background"] : "#059669", ["borderRadius"] : "50%", ["flexShrink"] : "0", ["marginTop"] : "6px" })},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A", ["fontSize"] : "14px", ["lineHeight"] : "1.6" })},j_rx_state_)))))
    )
});
