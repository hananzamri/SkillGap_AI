
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import DebounceInput from "react-debounce-input"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {TextArea as RadixThemesTextArea} from "@radix-ui/themes"
import {jsx} from "@emotion/react"






export const Debounceinput_debounceinput_d1426fe7848e221bb871c17af54110dc = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_change_2d22a3418afe33c214b6366a1e3e4d18 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.set_resume_text", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        jsx(DebounceInput,{css:({ ["width"] : "100%", ["height"] : "150px" }),debounceTimeout:300,element:RadixThemesTextArea,onChange:on_change_2d22a3418afe33c214b6366a1e3e4d18,placeholder:"Paste your resume text...",value:reflex___state____state__skillgap_ai___state____state.resume_text_rx_state_},)
    )
});
