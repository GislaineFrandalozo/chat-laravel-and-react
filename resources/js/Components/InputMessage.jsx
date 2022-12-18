import { useForm } from "@inertiajs/inertia-react";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";


export default function InputMessage(props) {
    const { data, setData, post, processing } = useForm({
        message: '',
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('setMessage'));
        setData({ message: "" });
    };

    return (
        <div className="bg-white sm:rounded-lg sm:my-3 sm:mx-4 dark:bg-gray-800 fixed bottom-0 left-0 right-0">
            <form className="flex p-3 items-stretch" onSubmit={submit}>
                <div className="text-gray-900 w-5/6 flex dark:text-gray-100">
                    <input
                        type="text"
                        className="w-full bg-slate-500/50 dark:bg-slate-900 border-transparent"
                        name='message'
                        value={data.message}
                        onChange={e => setData('message', e.target.value)} />
                </div>
                <div className="self-center px-1 w-1/6 grid justify-items-center">
                    <PrimaryButton className="h-min w-min text-neutral-900 dark:text-neutral-200 hover:bg-green-600 hover:dark:bg-green-600 bg-green-400 dark:bg-green-800" processing={processing}>
                        ok
                    </PrimaryButton>
                </div>
            </form>
        </div>
    )
}