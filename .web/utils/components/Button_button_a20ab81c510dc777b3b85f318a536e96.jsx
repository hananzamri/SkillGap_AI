
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Button as RadixThemesButton} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Button_button_a20ab81c510dc777b3b85f318a536e96 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_c14e6033542978fc5ec9f269e04846fb = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.reset_all", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesButton,{css:({ ["background"] : "transparent", ["color"] : "#64748B", ["border"] : "1.5px solid #E2E8F0", ["borderRadius"] : "8px", ["padding"] : "8px 20px", ["fontSize"] : "13px", ["cursor"] : "pointer", ["&:hover"] : ({ ["color"] : "#0F172A", ["borderColor"] : "#0F172A" }) }),onClick:on_click_c14e6033542978fc5ec9f269e04846fb},children)
    )
});
