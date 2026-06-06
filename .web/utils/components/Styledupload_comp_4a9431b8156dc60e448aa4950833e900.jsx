
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue,refs} from "$/utils/state"
import {} from "react-dropzone"
import {EventLoopContext} from "$/utils/context"
import {useDropzone} from "react-dropzone"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {jsx} from "@emotion/react"






export const Styledupload_comp_4a9431b8156dc60e448aa4950833e900 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_drop_b458bced6a4c9d813afcfff2b3a3c852 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.handle_upload", ({ ["files"] : _ev_0, ["upload_param_name"] : "files", ["upload_id"] : "default", ["extra_headers"] : ({  }) }), ({  }), "uploadFiles"))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => (refs['__toast']?.["error"]("", ({ ["title"] : "Files not Accepted", ["description"] : _ev_0.map(((osizayzf) => (osizayzf?.["file"]?.["path"]+": "+osizayzf?.["errors"].map(((wnkiegyk) => wnkiegyk?.["message"])).join(", ")))).join("\n\n"), ["closeButton"] : true, ["style"] : ({ ["whiteSpace"] : "pre-line" }) })))), ["callback"] : null }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const { getRootProps: xdvxrcsn, getInputProps: udaxihhe, isDragActive: bacghqta} = useDropzone(({ ["accept"] : ({ ["application/pdf"] : [".pdf"] }), ["onDrop"] : on_drop_b458bced6a4c9d813afcfff2b3a3c852, ["multiple"] : true, ["id"] : "default", ["onDropRejected"] : on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 }));



    return(
        jsx(Fragment,{},jsx("div",{className:"rx-Upload",css:({ ["width"] : "100%", ["border"] : "1px dashed var(--accent-12)", ["padding"] : "5em", ["textAlign"] : "center" }),...xdvxrcsn()},jsx("input",{type:"file",...udaxihhe()},),jsx(RadixThemesText,{as:"p"},"Upload Resume PDF")))
    )
});
