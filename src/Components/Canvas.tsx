import Button from "./Buttons";
function Canvas(props: any) {
        return(
            <div className="bg-slate-500 w-screen">
             <Button setPage={props.setPage} component="About" text="About" />
            <Button setPage={props.setPage} component="Home" text="Home" />
             <Button setPage={props.setPage} component="Contact" text="Contact" />
           </div>
        )
}

export default Canvas; 