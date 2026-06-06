
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Checkbox as RadixThemesCheckbox} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Checkbox_checkbox_d606e2786d51c23ad52e9be4a2454f9d = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_change_cb6ba643c0067fa63ee462868a3ab1ff = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.toggle_skill", ({ ["skill"] : "Python" }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesCheckbox,{onCheckedChange:on_change_cb6ba643c0067fa63ee462868a3ab1ff,size:"2"},)
    )
});
