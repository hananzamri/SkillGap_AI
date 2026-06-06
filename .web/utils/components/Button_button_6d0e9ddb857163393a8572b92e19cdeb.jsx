
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Button as RadixThemesButton} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Button_button_6d0e9ddb857163393a8572b92e19cdeb = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_aa6c5a9d1d31cdcce0a80ba3dc6961be = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.refresh_jobs", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesButton,{css:({ ["background"] : "transparent", ["color"] : "#2563EB", ["border"] : "1.5px solid #2563EB", ["borderRadius"] : "7px", ["padding"] : "5px 14px", ["fontSize"] : "12px", ["fontWeight"] : "600", ["cursor"] : "pointer", ["&:hover"] : ({ ["background"] : "#EFF6FF" }) }),onClick:on_click_aa6c5a9d1d31cdcce0a80ba3dc6961be},children)
    )
});
