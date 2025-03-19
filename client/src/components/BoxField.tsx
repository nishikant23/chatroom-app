import { forwardRef, memo, useState } from "react"

interface filedProps {
    type : string,
    labelText:string, 
    placeholderText:string}

export type Ref = HTMLInputElement; 
 //use ForwardRef = when u r passing another useRef() to this 1-comp to This-comp
export const BoxField = memo(forwardRef<Ref, filedProps>((props, refProp) => {  //by this i can access this child comp. by its parent comp.
     const { type, labelText, placeholderText } = props; //obj destructuing
     const [ inputType, setInputType ] = useState(props.type);
     const [ eye, setEye ] = useState(false);
     const togglePassword = () => {
            setInputType(prevType => prevType == 'password' ? 'text' : 'password');
            setEye(curr => !curr)
     }
    return <div className="space-y-4">
            <label className="block text-2xl  font-bold text-gray-700 dark:text-gray-gray-100">
                {labelText}
            </label>
            {type === "password" ? <div className="flex justify-between items-center border border-gray-500 text-gray-500 peer focus-within:border-blue-600 focus-within:outline-none bg-white rounded-lg">
                <input type = {inputType}
                    ref={refProp}
                    placeholder={placeholderText}
                    className="bg-white flex-1 text-xl w-full rounded-xl py-2 h-16 px-2 focus:outline-none"
                />
                <button  className="pr-3 cursor-pointer bg-white" onClick={togglePassword}>
                { eye ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  }
                </button>

            </div> : <input type = {inputType}
                    ref={refProp}
                    placeholder={placeholderText}
                    className="text-xl w-full py-2 h-16 px-2 rounded-lg border border-gray-500 dark:border-gray-100 text-gray-500 dark:text-gray-gray-100  focus:border-blue-600  dark:focus:border-blue-500  focus:outline-none cursor-pointer peer"
            />}
            
    </div>
}))