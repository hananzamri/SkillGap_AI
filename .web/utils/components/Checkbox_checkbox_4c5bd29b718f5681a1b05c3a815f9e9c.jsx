
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Checkbox as RadixThemesCheckbox} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Checkbox_checkbox_4c5bd29b718f5681a1b05c3a815f9e9c = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_change_6742ecc4ade2d60c5854e665caf4158d = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.toggle_skill", ({ ["skill"] : "SQL" }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesCheckbox,{onCheckedChange:on_change_6742ecc4ade2d60c5854e665caf4158d,size:"2"},)
    )
});
