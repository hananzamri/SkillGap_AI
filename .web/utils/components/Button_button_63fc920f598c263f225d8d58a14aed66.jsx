
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {Button as RadixThemesButton} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Button_button_63fc920f598c263f225d8d58a14aed66 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_click_782090b4faa1b73854a6d0b9619286a9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.get_chart", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx(RadixThemesButton,{color:"purple",onClick:on_click_782090b4faa1b73854a6d0b9619286a9,size:"3"},children)
    )
});
