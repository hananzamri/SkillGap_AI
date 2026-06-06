
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Button as RadixThemesButton} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Button_button_aa9f278f92805aee30bc544e9ca3afe7 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_eefcd9bb45bba199323c10c9a940a46e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.run_analysis", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesButton,{color:"blue",onClick:on_click_eefcd9bb45bba199323c10c9a940a46e,size:"3"},children)
    )
});
