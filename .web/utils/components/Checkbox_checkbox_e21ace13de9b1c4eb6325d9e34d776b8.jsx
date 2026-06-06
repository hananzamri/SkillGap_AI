
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Checkbox as RadixThemesCheckbox} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Checkbox_checkbox_e21ace13de9b1c4eb6325d9e34d776b8 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_change_652710bdffa0b741bf3257408ccc658a = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.toggle_skill", ({ ["skill"] : "Docker" }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesCheckbox,{onCheckedChange:on_change_652710bdffa0b741bf3257408ccc658a,size:"2"},)
    )
});
