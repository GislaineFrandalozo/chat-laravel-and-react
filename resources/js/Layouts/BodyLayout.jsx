export default function Body({children}) {
    return(
        <div className="h-screen mt-6 bg-white dark:bg-white relative flex flex-col place-content-between">
            {children}
        </div>
    )
}