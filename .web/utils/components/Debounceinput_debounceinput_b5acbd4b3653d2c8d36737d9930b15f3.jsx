
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isNotNullOrUndefined,isTrue} from "$/utils/state"
import DebounceInput from "react-debounce-input"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {TextField as RadixThemesTextField} from "@radix-ui/themes"
import {jsx} from "@emotion/react"






export const Debounceinput_debounceinput_b5acbd4b3653d2c8d36737d9930b15f3 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_change_28d90428da0530254caf5491c4facfcc = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.set_location", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        jsx(DebounceInput,{css:({ ["border"] : "1.5px solid #E2E8F0", ["borderRadius"] : "8px", ["padding"] : "10px 14px", ["fontSize"] : "14px", ["width"] : "100%", ["&:focus"] : ({ ["borderColor"] : "#2563EB", ["outline"] : "none", ["boxShadow"] : "0 0 0 3px #EFF6FF" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_28d90428da0530254caf5491c4facfcc,placeholder:"e.g. Kuala Lumpur, Singapore, Seoul",value:(isNotNullOrUndefined(reflex___state____state__skillgap_ai___state____state.location_rx_state_) ? reflex___state____state__skillgap_ai___state____state.location_rx_state_ : "")},)
    )
});
