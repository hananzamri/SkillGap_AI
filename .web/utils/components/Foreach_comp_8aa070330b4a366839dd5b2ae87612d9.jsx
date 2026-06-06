
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {Flex as RadixThemesFlex,Text as RadixThemesText} from "@radix-ui/themes"
import {jsx} from "@emotion/react"






export const Foreach_comp_8aa070330b4a366839dd5b2ae87612d9 = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        Array.prototype.map.call(reflex___state____state__skillgap_ai___state____state.learning_path_rx_state_ ?? [],((step_rx_state_,index_576b3bbd09bd0d38d37b9800415aa645)=>(jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",key:index_576b3bbd09bd0d38d37b9800415aa645,gap:"3"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "#7C3AED", ["borderRadius"] : "50%", ["width"] : "22px", ["height"] : "22px", ["flexShrink"] : "0" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "700", ["color"] : "#FFFFFF" })},(JSON.stringify(step_rx_state_?.["num"])))),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#0F172A", ["fontSize"] : "14px", ["lineHeight"] : "1.6" })},step_rx_state_?.["text"])))))
    )
});
