
function Button(props: any) {
    const text = props.text
    const setPage = props.setPage;
    return (
        <button onClick={() => setPage(props.component)}>
            {text}
        </button>
        )
}
export default Button;