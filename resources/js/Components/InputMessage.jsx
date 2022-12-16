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
        <div className="bg-white mt-3 dark:bg-gray-800 overflow-hidden">
            <form className="flex p-3 items-stretch" onSubmit={submit}>
                <div className="text-gray-900 w-5/6 flex dark:text-gray-100">
                    <input
                        type="text"
                        className="w-full bg-bg-gray-700 dark:bg-gray-700 border-transparent"
                        name='message'
                        value={data.message}
                        onChange={e => setData('message', e.target.value)} />
                </div>
                <div className="self-center w-1/6 grid justify-items-center">
                    <PrimaryButton className="h-min w-min" processing={processing}>
                        ok
                    </PrimaryButton>
                </div>
            </form>
        </div>
    )
}