
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Button as RadixThemesButton} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Button_button_46cc97b4dd880010297b88ea4c3a55b6 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_16164b2c57d92da3eb24156f7e985bb2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.download_pdf", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesButton,{color:"green",onClick:on_click_16164b2c57d92da3eb24156f7e985bb2,size:"3"},children)
    )
});
