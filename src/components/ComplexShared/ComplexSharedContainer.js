import React, {useEffect, useState} from "react";
import ComplexSharedView from "./ComplexSharedView";

export function ComplexSharedContainer() {
    const [var1, setVar1] = useState("Complex Shared");
    useEffect(() => {
        setVar1("Complex Shared Components");
        return () => {
            console.log("clean up");
        }
    }, []);
    return (
        <>
            <ComplexSharedView data={var1}/>
        </>
    )
}