export default function Body({children}) {
    return(
        <div className="h-screen mt-6 relative flex flex-col place-content-between">
            {children}
        </div>
    )
}