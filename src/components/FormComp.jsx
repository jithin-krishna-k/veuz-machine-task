import { useState } from "react";
import CheckboxGroup from "./CheckBoxGroup"
import Dropdown from "./Dropdown"
import Input from "./Input"
import GitexCard from "./GitexCard";
import ProductSelectionModal from "./ProductSelectionModal";

const FormComp = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [open, setOpen] = useState(false);

    const options = [
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt1' },
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt2' },
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt3' },
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt4' },
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt5' },
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt6' },
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt7' },
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt8' },
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt9' },
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt9' },
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt9' },
        { label: 'Artificial Intelligence and Machine Learning', value: 'opt9' },

    ];

    return (
        <div className="h-[1163px] m-4 w-[1320px] flex rounded-lg border-[1px] bg-[#FAFAFA] border-solid border-[#579B29]">
            <div className="h-[777px] mt-4 w-[997px] mx-[18px] bg-white">
                <div className="flex items-center justify-between text-white  h-[98px] bg-[linear-gradient(90deg,#299D3F_0%,#123F22_100%)] rounded-tl-lg rounded-tr-lg px-[30px]">
                    <h1 className="font-alexandria font-bold  text-3xl">Registration Information 1</h1>
                    <div className=" bg-opacity-10 rounded-lg h-12 border border-white border-opacity-20 flex items-center px-4">
                        <h1 className="text-white font-light text-lg ">
                            PREMIUM TICKET - FREE Incl. 19% VAT
                        </h1>
                    </div>
                </div>
                <div className="border h-[1030px] bg-white px-[25px] rounded-bl-lg rounded-br-lg border-opacity-20">
                    <div className="mt-5 flex">
                        <div className="mr-7">
                            <Input label="First Name" />
                        </div>
                        <Input label="Last Name" />
                    </div>
                    <div className="mt-5 flex">
                        <div className="mr-7">
                            <Dropdown label="Country of Residence" options={[
                                { value: "us", label: "United States" },
                                { value: "ca", label: "Canada" },
                                { value: "uk", label: "United Kingdom" }
                            ]} />
                        </div>
                        <Dropdown label="Region" options={[
                            { value: "us", label: "Region" },
                            { value: "ca", label: "Canada" },
                            { value: "uk", label: "United Kingdom" }
                        ]} />
                    </div>
                    <div className="mt-5 flex">
                        <div className="mr-7">
                            <Input label="Email address" />
                        </div>
                        <Input label="Confirm Email address" />
                    </div>
                    <div className="mt-5 flex">
                        <div className="mr-7">
                            <Dropdown label="Nationality" options={[
                                { value: "us", label: "United States" },
                                { value: "ca", label: "Canada" },
                                { value: "uk", label: "United Kingdom" }
                            ]} />
                        </div>
                        <Dropdown label="Mobile number" options={[
                            { value: "us", label: "Region" },
                            { value: "ca", label: "Canada" },
                            { value: "uk", label: "United Kingdom" }
                        ]} />
                    </div>
                    <div className="mt-5 flex">
                        <div className="mr-7">
                            <Input label="Company name" />
                        </div>
                        <Input label="Job tittle" />
                    </div>
                    <div className="mt-5 flex">
                        <div className="mr-7">
                            <Dropdown label="Company type" options={[
                                { value: "us", label: "United States" },
                                { value: "ca", label: "Canada" },
                                { value: "uk", label: "United Kingdom" }
                            ]} />
                        </div>
                        <Dropdown label="Industry" options={[
                            { value: "us", label: "Region" },
                            { value: "ca", label: "Canada" },
                            { value: "uk", label: "United Kingdom" }
                        ]} />
                    </div>
                    <div className="mt-9 flex justify-between mr-5 items-center">
                        <h1 className="font-poppins font-normal text-sm">What products & services are you interested in? *</h1>
                        <button onClick={() => setOpen(true)} className="bg-[linear-gradient(90deg,_#AB0202_0%,_#240102_100%)] h-[35px] w-[252px] font-alexandria flex items-center justify-center text-white px-4 py-3 rounded font-medium">
                            Select Solutions/Products
                        </button>
                    </div>
                    {open && (
                        <ProductSelectionModal
                            onClose={() => setOpen(false)}
                            onApply={(selected) => {
                                console.log("Selected:", selected);
                                setOpen(false);
                            }}
                        />
                    )}
                    <div className="mt-3">
                        Select WorkShop <span className="text-gray-400">(Maximum 6 can select)</span>
                    </div>

                    <CheckboxGroup
                        options={options}
                        selected={selectedItems}
                        onChange={setSelectedItems}
                    />
                </div>
            </div>
            <GitexCard />
        </div>
    )
}
export default FormComp