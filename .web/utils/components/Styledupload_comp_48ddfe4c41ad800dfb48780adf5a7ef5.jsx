
import {Fragment,memo,useCallback,useContext,useEffect,useRef} from "react"
import {ReflexEvent,applyEventActions,isTrue,refs} from "$/utils/state"
import {} from "react-dropzone"
import {EventLoopContext} from "$/utils/context"
import {useDropzone} from "react-dropzone"
import {Text as RadixThemesText} from "@radix-ui/themes"
import {jsx} from "@emotion/react"






export const Styledupload_comp_48ddfe4c41ad800dfb48780adf5a7ef5 = memo(({children}) => {
    const ref_upload1 = useRef(null); refs["ref_upload1"] = ref_upload1;
const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_drop_1e8dff0aaad8559a4edb34b08d1df371 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.handle_upload", ({ ["files"] : _ev_0, ["upload_param_name"] : "files", ["upload_id"] : "upload1", ["extra_headers"] : ({  }) }), ({  }), "uploadFiles"))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => (refs['__toast']?.["error"]("", ({ ["title"] : "Files not Accepted", ["description"] : _ev_0.map(((osizayzf) => (osizayzf?.["file"]?.["path"]+": "+osizayzf?.["errors"].map(((wnkiegyk) => wnkiegyk?.["message"])).join(", ")))).join("\n\n"), ["closeButton"] : true, ["style"] : ({ ["whiteSpace"] : "pre-line" }) })))), ["callback"] : null }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const { getRootProps: xdvxrcsn, getInputProps: udaxihhe, isDragActive: bacghqta} = useDropzone(({ ["accept"] : ({ ["application/pdf"] : [".pdf"] }), ["onDrop"] : on_drop_1e8dff0aaad8559a4edb34b08d1df371, ["multiple"] : true, ["id"] : "upload1", ["onDropRejected"] : on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 }));



    return(
        jsx(Fragment,{},jsx("div",{className:"rx-Upload",css:({ ["border"] : "1px dashed var(--accent-12)", ["padding"] : "5em", ["textAlign"] : "center" }),id:"upload1",ref:ref_upload1,...xdvxrcsn()},jsx("input",{type:"file",...udaxihhe()},),jsx(RadixThemesText,{as:"p"},"Drag & drop or click to upload")))
    )
});
