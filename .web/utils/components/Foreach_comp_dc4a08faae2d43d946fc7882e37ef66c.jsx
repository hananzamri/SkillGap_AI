
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {Card as RadixThemesCard,Flex as RadixThemesFlex,Text as RadixThemesText} from "@radix-ui/themes"
import {jsx} from "@emotion/react"






export const Foreach_comp_dc4a08faae2d43d946fc7882e37ef66c = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        Array.prototype.map.call(reflex___state____state__skillgap_ai___state____state.jobs_rx_state_ ?? [],((job_rx_state_,index_2bc7b03a0e9b1bf5e9ba0b6a6158a34b)=>(jsx(RadixThemesCard,{key:index_2bc7b03a0e9b1bf5e9ba0b6a6158a34b},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold" })},job_rx_state_?.["title"]),jsx(RadixThemesText,{as:"p"},job_rx_state_?.["company"]),jsx(RadixThemesText,{as:"p"},job_rx_state_?.["location"]))))))
    )
});
