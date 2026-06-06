
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue} from "$/utils/state"
import {RadioGroup as RadixThemesRadioGroup} from "@radix-ui/themes"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {jsx} from "@emotion/react"






export const Radiogrouproot_radiogroup__root_9c3e0171eb34ffd144d6bdd757ace372 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_change_f0f5196532b78e890f71ea1b7274de16 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.set_mode", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__skillgap_ai___state____state = useContext(StateContexts.reflex___state____state__skillgap_ai___state____state)



    return(
        jsx(RadixThemesRadioGroup.Root,{defaultValue:"",onValueChange:on_change_f0f5196532b78e890f71ea1b7274de16,size:"2",value:reflex___state____state__skillgap_ai___state____state.mode_rx_state_,variant:"classic"},children)
    )
});
