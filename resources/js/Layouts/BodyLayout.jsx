export default function Body({children}) {
    return(
        <div className="h-screen sm:h-full sm:mx-6 sm:mt-6 bg-white dark:bg-white place-content-between flex flex-col ">
            {children}
        </div>
    )
}