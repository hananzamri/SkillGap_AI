
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Checkbox as RadixThemesCheckbox} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Checkbox_checkbox_6ebbc5a46a9745120cda0a2e48be5ad8 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_change_e07b89804bf9fb5982e785c95ae6434d = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.toggle_skill", ({ ["skill"] : "React" }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesCheckbox,{onCheckedChange:on_change_e07b89804bf9fb5982e785c95ae6434d,size:"2"},)
    )
});
