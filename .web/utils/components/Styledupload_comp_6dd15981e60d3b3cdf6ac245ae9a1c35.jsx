
import {Fragment,memo,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,applyEventActions,isTrue,refs} from "$/utils/state"
import {} from "react-dropzone"
import {EventLoopContext} from "$/utils/context"
import {useDropzone} from "react-dropzone"
import {Flex as RadixThemesFlex,Text as RadixThemesText} from "@radix-ui/themes"
import {jsx} from "@emotion/react"






export const Styledupload_comp_6dd15981e60d3b3cdf6ac245ae9a1c35 = memo(({children}) => {
    const [addEvents, connectErrors] = useContext(EventLoopContext);
const on_drop_b458bced6a4c9d813afcfff2b3a3c852 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.skillgap_ai___state____state.handle_upload", ({ ["files"] : _ev_0, ["upload_param_name"] : "files", ["upload_id"] : "default", ["extra_headers"] : ({  }) }), ({  }), "uploadFiles"))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("_call_function", ({ ["function"] : (() => (refs['__toast']?.["error"]("", ({ ["title"] : "Files not Accepted", ["description"] : _ev_0.map(((osizayzf) => (osizayzf?.["file"]?.["path"]+": "+osizayzf?.["errors"].map(((wnkiegyk) => wnkiegyk?.["message"])).join(", ")))).join("\n\n"), ["closeButton"] : true, ["style"] : ({ ["whiteSpace"] : "pre-line" }) })))), ["callback"] : null }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const { getRootProps: xdvxrcsn, getInputProps: udaxihhe, isDragActive: bacghqta} = useDropzone(({ ["accept"] : ({ ["application/pdf"] : [".pdf"] }), ["onDrop"] : on_drop_b458bced6a4c9d813afcfff2b3a3c852, ["multiple"] : true, ["id"] : "default", ["onDropRejected"] : on_drop_rejected_2fcedbdc0771e7617b4270e2d1ac8cc9 }));



    return(
        jsx(Fragment,{},jsx("div",{className:"rx-Upload",css:({ ["border"] : "2px dashed #2563EB", ["borderRadius"] : "14px", ["padding"] : "40px 24px", ["background"] : "#EFF6FF", ["width"] : "100%", ["cursor"] : "pointer", ["&:hover"] : ({ ["background"] : "#DBEAFE" }), ["transition"] : "background 0.2s", ["textAlign"] : "center" }),...xdvxrcsn()},jsx("input",{type:"file",...udaxihhe()},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "36px" })},"\ud83d\udcc4"),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "600", ["color"] : "#0F172A", ["fontSize"] : "15px" })},"Drop your resume PDF here"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#64748B", ["fontSize"] : "13px" })},"or click to browse"))))
    )
});
