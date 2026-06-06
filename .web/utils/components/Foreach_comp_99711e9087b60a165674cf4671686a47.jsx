
import {Fragment,memo,useContext,useEffect} from "react"
import {isTrue} from "$/utils/state"
import {StateContexts} from "$/utils/context"
import {Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Link as RadixThemesLink,Text as RadixThemesText} from "@radix-ui/themes"
import {Link as ReactRouterLink} from "react-router"
import {jsx} from "@emotion/react"






export const Foreach_comp_99711e9087b60a165674cf4671686a47 = memo(({children}) => {
    const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        Array.prototype.map.call(reflex___state____state__skillgap_ai___state____state.live_jobs_rx_state_ ?? [],((job_rx_state_,index_75fb388d1fb813b71c9f8e6baa9a6a54)=>(jsx(RadixThemesBox,{css:({ ["background"] : "#FFFFFF", ["border"] : "1.5px solid #E2E8F0", ["borderRadius"] : "12px", ["padding"] : "18px 20px", ["boxShadow"] : "0 1px 3px rgba(0,0,0,0.05)", ["width"] : "100%", ["&:hover"] : ({ ["borderColor"] : "#2563EB", ["boxShadow"] : "0 4px 14px rgba(37,99,235,0.12)" }), ["transition"] : "all 0.2s" }),key:index_75fb388d1fb813b71c9f8e6baa9a6a54},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "700", ["fontSize"] : "14px", ["color"] : "#0F172A", ["lineHeight"] : "1.4" })},job_rx_state_?.["title"]),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#2563EB", ["fontWeight"] : "500" })},job_rx_state_?.["company"])),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"1",wrap:"wrap"},jsx(Fragment,{},(!((job_rx_state_?.["location"]?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["background"] : "#F1F5F9", ["borderRadius"] : "6px", ["padding"] : "3px 8px" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#64748B" })},"\ud83d\udccd ",job_rx_state_?.["location"])))):(jsx(Fragment,{},)))),jsx(Fragment,{},(!((job_rx_state_?.["employment"]?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["background"] : "#F1F5F9", ["borderRadius"] : "6px", ["padding"] : "3px 8px" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#2563EB" })},job_rx_state_?.["employment"])))):(jsx(Fragment,{},)))),jsx(Fragment,{},(!((job_rx_state_?.["salary"]?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["background"] : "#F1F5F9", ["borderRadius"] : "6px", ["padding"] : "3px 8px" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#059669" })},"\ud83d\udcb0 ",job_rx_state_?.["salary"])))):(jsx(Fragment,{},)))),jsx(Fragment,{},(!((job_rx_state_?.["posted"]?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["background"] : "#F1F5F9", ["borderRadius"] : "6px", ["padding"] : "3px 8px" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "11px", ["fontWeight"] : "600", ["color"] : "#64748B" })},"\ud83d\uddd3 ",job_rx_state_?.["posted"])))):(jsx(Fragment,{},))))),jsx(Fragment,{},(!((job_rx_state_?.["description"]?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "12px", ["color"] : "#64748B", ["lineHeight"] : "1.6", ["noOfLines"] : 2 })},job_rx_state_?.["description"]))):(jsx(Fragment,{},)))),jsx(Fragment,{},(!((job_rx_state_?.["apply_url"]?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{target:(true ? "_blank" : ""),to:job_rx_state_?.["apply_url"]},jsx(RadixThemesButton,{css:({ ["background"] : "#2563EB", ["color"] : "#FFFFFF", ["borderRadius"] : "7px", ["padding"] : "6px 16px", ["fontSize"] : "12px", ["fontWeight"] : "600", ["cursor"] : "pointer", ["&:hover"] : ({ ["background"] : "#1D4ED8" }) })},"Apply \u2192"))))):(jsx(Fragment,{},)))))))))
    )
});
